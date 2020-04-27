<template>
<div>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    
                </div>
            </div>
        </div>

    </header>
  <div class="container py-5">
      <div class="row">
          <div class="col-12">
            <div class="form-group mb-3 row" v-for="(falas, index) in perguntas.slice(0, perguntaId)" v-bind:key="index"> 
                <BalaoBot> {{ falas.pergunta }} </BalaoBot>
                <BalaoUser v-if="falas.resposta && index != indexValue"> {{ falas.resposta }} </BalaoUser>

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
            }
        },
        created: function() {
            this.$http.get('http://localhost:3333/view/chat', {params: {id: this.$route.params.id},})
                    .then(res => {
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
header {
    padding: 30px 0;
    font-size: 16px;
    line-height: 34px;
    color: white;
    background: #640064 !important;
    background-image: linear-gradient(30deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.5)) !important;
    text-align: center;
}
.col-12{
    position: relative;
}
.buttons{
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 100%;
}
.btn-primary{
    background: #246cf5;
    border-radius: 4px;
    font-size: 20px;
    line-height: 28px;
    padding: 12px 32px;
    border: 0;
    margin-right: 15px;
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
  @-webkit-keyframes slideInUp {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInUp {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
.form-group:last-child .balao  {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
}
</style>