<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Converter</router-link> |
      <router-link to="/rates">Rates</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  margin: auto;
  width: 350px;
  height: 600px;
  height: ;
  padding: 10px 20px 10px 20px;
  background-color: #e2e4e5;
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  flex: 1;
}

#nav a.router-link-exact-active {
  color: #ff9811;
}
</style>
