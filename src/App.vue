<template>
  <div id="app">
    <h1 style="text-align: center">Off-Grid</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  height: 100%;
  background: white;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.finder {
  padding: 55px;
  max-width: 65em;
  margin: 0 auto;
}

.form-box {
  background-color: white;
  border-radius: 9px;
  width: 700px;
  min-height: 800px;
  padding: 25px;
  box-sizing: border-box;
  margin: 0 auto;
}

.left {
  text-align: left;
}

.label-form {
  font-size: 1em;
  margin-bottom: 15px;
  display: block;
}

.big-input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ddd;
  height: 48px;
  margin-bottom: 10px;
  outline: none;
}
.big-input:focus {
  border: 4px solid #00ffb9;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #777;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #777;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #777;
}
:-moz-placeholder { /* Firefox 18- */
  color: #777;
}

input[type='number'] {
    -moz-appearance:textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
@media (max-width: 940px){
  .finder {
    width: 100%;
    max-width: none;
    padding: 10px;
  }

  .form-box {
    width: 100%;
    padding: 15px;
  }
}
</style>
