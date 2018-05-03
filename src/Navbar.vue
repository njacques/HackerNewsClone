<template>
  <div class="menu">
    <div class="logo">Y</div>
    <h1>Vue News</h1>
    <ul>
      <li><router-link to="/newest">new</router-link> | </li>
      <li><router-link to="/newcomments">comments</router-link> | </li>
      <li><router-link to="/show">show</router-link> | </li>
      <li><router-link to="/ask">ask</router-link> | </li>
      <li><router-link to="/jobs">jobs</router-link> | </li>
      <li><router-link to="/submit">submit</router-link></li>
    </ul>
  </div>
</template>

<style>
.menu {
  background-color: #ff6600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.menu h1 {
  display: inline-block;
  font-size: 10pt;
  margin: 0;
}
.menu ul {
  list-style-type: none;
  display: inline-block;
  margin: 0;
  font-size: 10pt;
}
.menu li {
  display: inline;
}
.logo {
  border: 1px solid white;
  color: white;
  margin: 2px;
  font-weight: bold;
  font-size: 11pt;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  display: inline-block;
}
</style>