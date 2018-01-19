<template>
  <div id="app">
    <h1 style="text-align: center">Off-Grid Calculator</h1>
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
  line-height: 1.7;
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

.small-text {
  color: #aaa;
  font-size: .73em;
  margin: 0;
  font-style: italic;
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

.create-button {
  width: 100%;
  padding: 35px;
  color:white;
  font-weight: bold;
  font-size: 1.3em;
  cursor: pointer;
  outline: none;
  border: none;
  background: linear-gradient(to right, #00c6ff, #0072ff );
  border-radius: 5px;
}

.create-button:hover {
  background: linear-gradient(to left, #00c6ff, #0072ff );
  transform: translateY(2px);
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
