<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about"> About </router-link> |
    <router-link to="/stadiums"> All stadiums </router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #060607;
}

#info {
  display: inline-flex;
  justify-content: initial;
  align-items: center;
  font-size: 1.5rem;
  position: center;
  border: 1px solid rgba(50, 50, 50);
  width: 500px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px;
  background-color: rgb(171, 203, 124);
}

h1 {
  color: red
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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
</style>