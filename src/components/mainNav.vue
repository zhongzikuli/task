<template>
  <div id="main-nav" class="main-nav">
    <ul class="nav">
      <li v-for="item in nav" :dataStyle="item.style" :class="{active:item.isActive}" @click="changeTab(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [{
          label: "全部",
          style: 'all',
          isActive: true
        }, {
          label: "精华",
          style: 'perfect',
          isActive: false
        }, {
          label: "其他",
          style: 'other',
          isActive: false
        }, {
          label: "问答",
          style: 'question',
          isActive: false
        }]
      }
    },
    methods: {
      changeTab(i) {

      }
    }
  }
</script>

<style lang="scss">
  .main-nav {
    background: #f6f6f6;
    padding: 10px 40px;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      li {
        width: 50px;
        text-align: center;
        border-radius: 5px;
        color: #80bd01;
        line-height: 22px;
        height: 22px;
        &.active {
          background: #80bd01;
          color: #fff;
        }
      }
    }
  }
</style>

