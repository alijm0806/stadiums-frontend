<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
      fieldType: "password"
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/stadiums");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    switchField() {
      this.fieldType === "password" ? "text" : "password";
    }
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
            <h2>LOGIN</h2>
            <Form v-on:submit.prevent="submit()">
              <ul>
                <li v-for="error in errors" v-bind:key="error" id="errors">{{ error }}</li>
              </ul>
              <div class="form-row">
                <div class="col-lg-7">
                  <input type="email" placeholder="Email" class="form-control m-4 p-6 mt-4"
                    v-model="newSessionParams.email">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <input type="password" placeholder="Password" class="form-control m-4 p-6" minlength="6"
                    v-model="newSessionParams.password">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button class="btn1 m-4 mb-5" type="submit" value="Submit">Login</button>
                </div>
              </div>
              <div class="text d-flex">
                <label><input type="checkbox">Remember me</label>
              </div>
              <div class="text d-flex mt-2">
                <p>Don't have an account? <a href="/signup">Register here</a></p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box
}

form {
  height: 45vh;
}

.authentication {
  background: rgb(219, 226, 226);
  height: calc(100vh - 100px);
  justify-content: center;
  display: flex;
  align-items: center;
}


.row {
  background: white;
  border-radius: 30px;
  background: linear-gradient(255deg, #e91e63, #03a9f4);
  z-index: 1;
  mix-blend-mode: darken;
  box-shadow: 10px 10px 10px 10px;
}

.img1 {
  border-radius: 30px;
  display: absolute;
  margin-top: 2.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 88%;
  object-fit: cover;
  max-width: 100%;

}

.btn1 {
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  color: white;
  border-radius: 4px;
  background-color: var(--dark-color);
  font-weight: bold;
}

.btn1:hover {
  background: rgb(0, 166, 255);
  border: 1px solid;
  color: black
}

h2 {
  display: flex;
  color: rgb(0, 166, 255);
  letter-spacing: 5px;
  border-bottom: #03a9f4 solid;
  border-width: 5px;

}

.text {
  font-weight: bold;
  color: rgb(20, 21, 22);
}
</style>