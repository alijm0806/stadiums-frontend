<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt
    }
  },
}
</script>

<template>

  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="Logo" src="./assets/WCLogo.webp" alt="">
      </a>
      <li v-if="isLoggedIn" class="nav-item">
        <a class="Logo p-2 " aria-current="page" href="#"><span class="fi fi-um "></span></a>
      </li>
      <li v-if="isLoggedIn" class="nav-item">
        <a class="Logo p-2 " aria-current="page" href="#"><span class="fi fi-ca"></span></a>
      </li>
      <li v-if="isLoggedIn" class="nav-item">
        <a class="Logo p-2 " aria-current="page" href="#"><span class="fi fi-mx"></span></a>
      </li>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-lg-3 active" aria-current="page" href="/home">Home</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3" aria-current="page" href="/stadiums">Stadiums</a>
          </li>

          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/">Login</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/logout">Logout</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <router-view />

</template>

<style>
:root {
  --dark-color: #19283f;
  --green-color: #33d1cc;
}


#app {
  font-family: 'Times New Roman',
    Times,
    serif;
  text-align: center;
  color: var(--dark-color);
  height: calc(100vh - 100px);
}

body {
  font-family: 'Times New Roman',
    Times,
    serif;
  height: 100vh
}

.navbar {
  background-color: var(--dark-color);
}

.navbar .navbar-nav .nav-link {
  color: white;
  font-size: 20px;
  letter-spacing: 0.1em;
}

.navbar .nav-item .nav-link.active {
  color: var(--green-color);
}

.navbar .nav-item .nav-link-exact-active:active {
  color: var(--green-color);
}

.navbar .navbar-nav .nav-link:focus {
  color: var(--green-color);
}

.navbar .navbar-nav .nav-link:hover {
  color: var(--green-color);
}

.navbar .navbar-toggler {
  color: white;
  font-size: 25px;
  border-color: white;
}

.navbar .navbar-toggler:focus {
  box-shadow: none;
}

.navbar .navbar-toggler[aria-expanded="true"] {
  border-color: var(--green-color);
}

#info {
  padding-top: 30px;
  display: absolute;
  font-size: 1.5rem;
  position: start;
  border: 1px solid rgba(50, 50, 50);
  width: 450px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px;
  background-color: rgb(171, 203, 124);
  top: 0;
  left: 0;
  float: none;
}

@media screen and (max-width: 600px) {
  #info {
    width: 350px;
  }
}

.Logo {
  display: inline-block;
  position: center;
  width: 100px;
  height: 70px
}

.Logo span {
  display: inline-block;
  position: center;
  width: 100px;
  height: 50px
}


h1 {
  color: red
}


.show-stadiums {
  height: 122vh
}

#stadium-image {
  align-items: start;
  text-align: end;
}

#create-b {
  background-color: rgb(65, 167, 193);

}

#show-b {
  background-color: rgb(198, 170, 216);
}

#update-b {
  background-color: rgb(34, 255, 0);
}

#delete-b {
  background-color: red
}

#stadium-info {
  align-items: start;
  text-align: start;
}

.card {
  width: 100vh;

}

.img-responsive {
  display: flex;
  width: 90%;
  max-width: 90%;
  object-fit: cover;
  height: 100%;
  max-height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px
}

iframe {
  position: center;
  width: 750px;
  max-width: 100%;
  height: 500px;

}
</style>