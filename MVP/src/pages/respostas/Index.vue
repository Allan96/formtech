<template>
  <div>
    <NavbarDashboard/>
    <div class="container mt-5">
<div class="row">
  <div class="col-12 mb-5">
       <h2>Respostas do formulário {{ this.idChat }}</h2>
  </div>
  <div class="col-12">
<table class="table">
  <tbody>

<tr class="form-group" v-for="(per, index) in respostas" v-bind:key="index">
  <th scope="row">{{ index }} </th>
  <td class="form-group" v-for="(perN, index) in JSON.parse(per.resposta)" v-bind:key="index">
    {{ perN.resposta }}
</td>
</tr>

 </tbody>
</table>
</div>
</div>
</div>

  </div>
</template>

<script>
import Cookies from 'js-cookie';
import NavbarDashboard from '../../components/NavbarDashboard';
export default {
    components: {
            NavbarDashboard,
        },
    data(){
        return {
            idChat: this.$route.params.chat_id,
            respostas: []

        }
    },
    created: function() {
            this.$http.get('http://localhost:3333/resposta' ,
    {
      params: {chat_id: this.$route.params.chat_id},
      headers: { 'x-access-token': Cookies.get('token') }
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

<style scoped>
h2{
  font-weight: 300;
  font-size: 24px;
  line-height: 42px;
}
</style>