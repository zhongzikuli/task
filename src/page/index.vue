<template>
  <div id="main">
    <Header></Header>
    <div class="main-article">
      全选：<input type="checkbox" v-model="checkAll">
      总参与次数：{{sum}}
      <ul>
        <li v-for="i in list">
          <input type="checkbox" v-model="i.good">
          <time v-text="$util.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
          <span>回复人数：{{i.reply_count}}人</span>
          <span>浏览次数：{{i.visit_count}}次</span>
          <span>参与次数：{{i.visit_count*i.reply_count}}次</span>
          <span @click="deleteLi(i)">x</span>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/myHeader.vue'
  import Footer from '../components/myFooter.vue'

  export default {
    components: { Header, Footer },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    computed:{
      checkAll: {
        get(){
          return this.list.every(item =>item.good)
        },
        set(oldVal){
          this.list.forEach(item => item.good = oldVal)
        }
      },
      sum: {
        get() {
          return this.list.reduce((prev,next) =>{
            if(!next.good) return prev;
            return prev +next.visit_count * next.reply_count
          },0)
        }
      }
    },
    methods: {
      getData () {
        this.$api.get('topics', null, res => {
          this.list = res.data;
          /*this.changeOne();*/
        })
      },
      deleteLi (li) {
        this.list = this.list.filter(item => item !==li)
      }
      /*changeAll () {
        this.list.forEach(item => item.good = this.checkAll)
      },
      changeOne () {
        this.checkAll = this.list.every(item =>item.good)
      },
      sum () {
        return this.list.reduce((prev,next) =>{
          if(!next.good) return prev;
          return prev +next.visit_count * next.reply_count
        },0)
      }*/
    }
  }
</script>

<style lang="scss">
  .main-article{

  }
  .main-article ul li{
    list-style: none;
  }
  .main-article ul li span{
    margin-left: 10px;
  }

</style>

