<template>
  <ul>
    <li>
      <router-link to="/">🏠 Home</router-link>
    </li>
    <li>
      <router-link to="/off-grid-investment">💰 Off-Grid Investment</router-link>
    </li>
    <li>
      <router-link to="/build-solar-system">🛠️ Build</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
ul {
  font-family: 'sans-serif';
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffff00;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
}

li {
  float: left;
}

li a {
  display: block;
  color: #333;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ffdd00;
}
</style>
