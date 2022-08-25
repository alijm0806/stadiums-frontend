<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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
  background-color: rgb(173, 110, 138);
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