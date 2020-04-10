<template>
  <div class="container"> 
    <div class="row">
      <div class="col-12 pt-5">
      <router-link  to="/chat" class="btn btn-primary" >Criar chat</router-link>
      <button type="button" class="btn btn-primary" @click="sair"> Sair</button>
      </div>
      <div class="col-12 py-4">
    <div v-for="(perguntas, index) in perguntasAll" v-bind:key="index" class="mb-3">
      {{ perguntas.nome }}
      <a target="_blank" v-bind:href="`/chat/${ perguntas.id }`">
        <button type="button" class="btn btn-primary" >Ver chat</button>
      </a>
      <router-link v-bind:to="`/chat/edit/${ perguntas.id }`">
        <button type="button" class="btn btn-primary" >Editar chat</button>
      </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import router from '../../router/index.js';
import mixins from '../../mixins/index.js';
export default {
        mixins,
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

<style scoped>
a{
  float: right;
  margin: 0 15px;
}
</style>