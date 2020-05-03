<template>
<div>
    <nav class="navbar navbar-expand navbar-dark bg-primary bgc-white">
            <div class="container">
                <a class="navbar-brand">
                    <img src="@/assets/images/logo.svg" alt="" class="img-fluid">
                </a>
                 <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                         {{ nome }}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  <div class="container py-5">
      <div class="row">
          <div id="chatUser" class="col-12">
            <div class="form-group mb-3 row" v-for="(falas, index) in perguntas.slice(0, perguntaId)" v-bind:key="index"> 
                <BalaoBot> {{ falas.pergunta }} </BalaoBot>
                <BalaoUser v-if="falas.resposta && index != indexValue"> {{ falas.resposta }} </BalaoUser>

                    <div class="container"  v-if="index == indexValue && falas.type == 'text'">
                        <input type="text" class="form-control container" v-model="falas.resposta" @keyup.enter="next" placeholder="Insira sua reposta" />
                    </div>
               <input type="text" class="form-control container" v-if="index == indexValue && falas.type == 'text'" v-model="falas.resposta" @keyup.enter="next" placeholder="Insira sua reposta" />
                <div class="buttons container"  v-if="index == indexValue && falas.type == 'button'">
                    <div class="form-group" v-for="(button, index) in falas.buttons" v-bind:key="index">
                        
                        <input name="" id="" class="btn btn-primary" type="button" v-model="button.name"  @click="falas.resposta += button.name; next()">
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import {next} from '../../functions/chat';
import BalaoBot from '../../components/BalaoBot';
import BalaoUser from '../../components/BalaoUser';
export default {
    components: {
            BalaoUser,
            BalaoBot
        },
        data() {
            return {
                indexValue: 0,
                perguntaId: 1,
                perguntas : [],
                nome: ''
            }
        },
        created: function() {
            this.$http.get('http://localhost:3333/view/chat', {params: {id: this.$route.params.id},})
                    .then(res => {
                        console.log(res.body);
                        this.nome = res.body.nome;
                        this.perguntas = JSON.parse(res.body.perguntas);
                        console.log(this.perguntas)
                    })
                    .catch((error) => console.log(error));
        },
           methods: {
               next
           }
    }
</script>

<style scoped>
.buttons{
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 100%;
}
.form-control {
    position: fixed;
    bottom: 20px;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
    border-radius: 4px;
    height: 56px;
    border: 0;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 24px;
}
</style>