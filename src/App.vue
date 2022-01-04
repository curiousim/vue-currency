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
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --background-grey: rgb(226, 228, 229);
  --dark-grey-blue: rgb(44, 62, 80);
  --grey-blue: rgb(91, 115, 139);
  --primary-orange: rgb(255, 152, 17);
  --light-orange: rgb(248, 177, 83);
}
#app {
  margin: auto;
  width: 350px;
  height: 600px;
  height: ;
  padding: 10px 20px 10px 20px;
  background-color: var(--background-grey);
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--grey-blue);
}

#nav a {
  font-weight: bold;
  color: var(--dark-grey-blue);
  flex: 1;
}

#nav a.router-link-exact-active {
  color: var(--primary-orange);
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
