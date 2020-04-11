<template>
  <div>
<div class="form-group" v-for="(per, index) in respostas" v-bind:key="index">
  
  <div class="form-group" v-for="(perN, index) in JSON.parse(per.resposta)" v-bind:key="index">
  {{ perN.pergunta }}  : {{ perN.resposta }}
</div>
</div>

  </div>
</template>

<script>
// import Cookies from 'js-cookie';
export default {
    data(){
        return {

            respostas: []

        }
    },
    created: function() {
            this.$http.get('http://localhost:3333/resposta' ,
    {
      params: {chat_id: this.$route.params.chat_id},
    //   headers: { 'x-access-token': Cookies.get('token') }
      })
                .then(res => {
                  this.respostas =  res.body.respostas;
                  console.log(this.respostas);
                })
                .catch((error) => {
                 console.log(error);
                });
        }

}
</script>

<style>

</style>