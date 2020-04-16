<template>
<div>
  <NavbarDashboard/>
  <div class="container"> 
    <div class="row">
      <div class="col-8 pt-5 mb-5 d-flex justify-content-start">
        <h1>Meus chats</h1>
      </div>
      <div class="col-4 pt-5 mb-5 d-flex justify-content-end">
        <router-link  to="/chat" >
              <vs-button color="primary" type="gradient" icon="add" icon-after>Criar chat</vs-button> 
        </router-link>
      </div>
    <div v-for="(perguntas, index) in perguntasAll" v-bind:key="index" class="col-4 mb-3">
        <CardChat :perguntas="perguntas" />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import router from '../../router/index.js';
import NavbarDashboard from '../../components/NavbarDashboard'
import CardChat from '../../components/CardChat'
export default {
    components: {
    NavbarDashboard,
    CardChat
  },
  data() {
            return {
                perguntasAll: [],
                user_id: Cookies.get('id')
            }
        },
        methods: {
        },
         created: function() {
            this.$http.get('http://localhost:3333/list', 
    {
      params: {user_id: Cookies.get('id')},
      headers: { 'x-access-token': Cookies.get('token') }
      })
                .then(res => {
                  console.log(res.body);
                    this.perguntasAll = res.body;
                })
                .catch((error) => {
                  const auth = error.body.auth
                  if(!auth){
                      router.push('/');
                  }
                });
        }
}
</script>

<style scoped  lang="scss">
h1{
  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
}
.vs-button{
    font-size: 14px;
    font-weight: 400;
    padding: 8px 24px;
    &:hover{
      color:white!important;
    }
}
</style>
