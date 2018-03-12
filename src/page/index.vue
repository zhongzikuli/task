<template>
  <div id="main">
    <Header></Header>
    <div class="main-con">
      <div class="left">
        <!--<span> 全选：<input type="checkbox" v-model="checkAll">-->
        <!--总参与次数：{{sum}}</span>-->
        <main-nav></main-nav>
        <ul class="main-list">
          <li v-for="item in list" class="main-item">
            <input type="checkbox" v-model="item.good">
            <img :src="item.author.avatar_url" :alt="item.author.loginname" :title="item.author.loginname">
            <span class="reply-num">
              <span class="reply-count" title="回复人数">{{item.reply_count}}</span>
              <span class="visit-count" title="查看人数">/{{item.visit_count}}</span>
            </span>
            <router-link :to="'/content/' + item.id" class="main-link">
              {{ item.title }}
            </router-link>
            <span class="main-info">
              <time v-text="$util.goodTime(item.create_at)"></time>
              <span>参与次数：{{item.visit_count*item.reply_count}}次</span>
              <span @click="deleteLi(item)">x</span>
            </span>

          </li>
        </ul>
      </div>
      <div class="right"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/myHeader.vue'
  import mainNav from '../components/mainNav.vue'
  import Footer from '../components/myFooter.vue'

  export default {
    components: {Header, Footer, mainNav},
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getData()
    },
    computed: {
      checkAll: {
        get() {
          return this.list.every(item => item.good)
        },
        set(oldVal) {
          this.list.forEach(item => item.good = oldVal)
        }
      },
      sum: {
        get() {
          return this.list.reduce((prev, next) => {
            if (!next.good) return prev;
            return prev + next.visit_count * next.reply_count
          }, 0)
        }
      }
    },
    methods: {
      getData() {
        this.$api.get('topics', null, res => {
          console.log(res)
          this.list = res.data;
          // this.changeOne();
        })
      },
      deleteLi(li) {
        this.list = this.list.filter(item => item !== li)
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
  $min-px: 5px;
  .main-con {
    display: flex;
    margin: 15px 200px;
    .left {
      background: #fff;
      border-radius: $min-px;
      .main-list {
        .main-item {
          list-style: none;
          height: 40px;
          line-height: 40px;
          display: flex;
          input {
            margin-top: 14px;
          }
          img {
            width: 38px;
            height: 38px;
            margin: 0 $min-px;
            border-radius: $min-px;
          }
          .reply-num {
            font-size: 12px;
            margin-right: $min-px;
            .reply-count {
              color: #9e78c0;
            }
            .visit-count {
              color: #bbb;
            }
          }
          .main-link {
            text-decoration: none;
            color: #80bd01;
          }
          .main-info {
            text-align: right;
            font-size: 12px;
            color: #bbb;
          }
        }
      }
    }
    .right {
      background: #fff;
      border-radius: $min-px;
    }
  }

</style>

