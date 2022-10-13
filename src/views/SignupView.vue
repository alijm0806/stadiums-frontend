<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="authentication">
    <section class="Form my-4 mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <img src="../assets/WCLogo.webp" class="img1" alt="">
          </div>
          <div class="col-lg-7 px-5 pt-5">
            <h2>SIGN UP</h2>
            <Form v-on:submit.prevent="submit()">
              <ul>
                <li v-for="error in errors" v-bind:key="error" id="errors">{{ error }}</li>
              </ul>
              <div class="form-row">
                <div class="col-lg-7">
                  <span></span>
                  <input type="text" placeholder="Name" class="form-control m-4 p-6" v-model="newUserParams.name">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <span></span>
                  <input type="email" placeholder="Email" v-model="newUserParams.email" class="form-control m-4 p-6">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <span></span>
                  <input type="password" placeholder="Password" v-model="newUserParams.password"
                    class="form-control m-4 p-6">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <span></span>
                  <input type="password" placeholder="Password confirmation"
                    v-model="newUserParams.password_confirmation" class="form-control m-4 p-6">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button type="submit" value="Submit" class="btn1 m-4 mb-5">Sign Up</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>