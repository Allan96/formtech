<template>
  <div class="container py-5">
      <div class="row">
          <div class="col-12">
            <div class="form-group mb-3 row" v-for="(falas, index) in perguntas.slice(0, perguntaId)" v-bind:key="index"> 
                <div class="p-2 col-7  d-flex align-self-start"  style="border: 1px solid black">
                      {{ falas.pergunta }}
                </div>
                <div class="p-2 d-block text-right col-7 offset-5 my-3" style="border: 1px solid red" v-if="falas.resposta && index != indexValue">{{  falas.resposta }}</div>

               <input type="text" class="form-control" v-if="index == indexValue && falas.type == 'text'" v-model="falas.resposta" @keyup.enter="next" placeholder="Insira sua reposta" />
                <div  v-if="index == indexValue && falas.type == 'button'">
                    <div class="form-group" v-for="(button, index) in falas.buttons" v-bind:key="index">

                        <input name="" id="" class="btn btn-primary" type="button" v-model="button.name"  @click="falas.resposta += button.name; next()">
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {next} from '../../functions/chat';
export default {
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
                    })
                    .catch((error) => console.log(error));
        },
           methods: {
               next
           }
    }
</script>

<style scoped>
.form-control {
    position: fixed;
    bottom: 20px;
}
</style>