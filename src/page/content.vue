<template>
  <div>
    <Header></Header>
    <h2 v-text="data.title"></h2>
    <p>作者：{{data.author.loginname}}　　发表于：{{$util.goodTime(data.create_at)}}</p>
    <hr>
    <article v-html="data.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in data.replies">
        <p>评论者：{{i.author.loginname}}　　评论于：{{$util.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
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
        id: this.$route.params.id,
        data: {}
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('topic/' + this.id, null, res => {
          this.data = res.data
        })
      }
    }
  }
</script>

