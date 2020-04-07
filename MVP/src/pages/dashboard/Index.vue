<template>
  <div class="container"> 
    <div class="row">
      <div class="col-12 pt-5">
      <router-link  to="/chat" class="btn btn-primary" >Criar chat</router-link >
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
export default {
  data() {
            return {
                perguntasAll: [],
                user_id: Cookies.get('id')
            }
        },
         created: function() {
            this.$http.get('http://localhost:3333/list', {params: {user_id: Cookies.get('id')}})
                .then(res => {
                    this.perguntasAll = res.body;
                })
                .catch((error) => console.log(error));
        }
}
</script>

<style scoped>
a{
  float: right;
  margin: 0 15px;
}
</style>