<script>
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
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-lg-3 active" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3" aria-current="page" href="/stadiums">Stadiums</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="#">About</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/login">Login</a>
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

}

body {
  font-family: "Roboto", sans-serif;
  height: 160vh
}

.navbar {
  background-color: var(--dark-color);
}

.navbar .navbar-nav .nav-link {
  color: white;
}

.navbar .navbar-nav .nav-link.active {
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
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: center;
  border: 1px solid rgba(50, 50, 50);
  width: 400px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px;
  background-color: rgb(171, 203, 124);
  top: 0;
  left: 0;
  float: unset;
}

.Logo {
  display: inline-block;
  position: center;
  width: 100px;
  height: 70px
}


h1 {
  color: red
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