<template>
    <div id="">
      <ul class="nav">
        <li>
          <router-link :to="{ name: 'MovieView'}">
            电影
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'BookView'}">
            图书
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'StatusView'}">
            广播
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GroupView'}">
            小组
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>

