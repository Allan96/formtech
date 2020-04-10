<template>
  <div class="container-fluid py-5">
      <div class="row">
          <div class="col-2 mb-5">
              <router-link to="/dashboard"> Voltar para o dashboard a</router-link>
          </div>
          <div class="col-4 mb-5">
              <button type="button" class="btn btn-primary" @click="addInput">Adicionar</button>
          </div>
              <div class="col-4 mb-5">
              <button type="button" class="btn btn-primary" @click="save">Salvar</button>

              <a v-bind:href="demo" v-if="id" class="btn btn-primary" target="_blank">Ver chat</a>
          </div>
           <div class="col-2 mb-5">
                <button type="button" class="btn btn-primary" @click="resetChat">Reload</button>
          </div>
          <div class="col-4">
               <div class="form-group">
                            <input type="text" class="form-control" aria-describedby="helpId" placeholder="" v-model="nome">
                        </div>
              <div class="form-group" v-for="(per, index) in perguntas" v-bind:key="index">
                  <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="deleteInput(index)">Apagar</button>
                    <input type="text" class="form-control mb-2" aria-describedby="helpId" placeholder="" v-model="per.pergunta">
                    <select class="form-control" v-model="per.type">
                        <option value="null">Selecione um tipo de input</option>
                        <option value="button">Botão</option>
                        <option value="text">Texto</option>
                    </select>
                    
                    <div v-if="per.type == 'button'" class="p-2">
                        <div class="form-group" v-for="(button, childrenIndex) in per.buttons" v-bind:key="childrenIndex">

                            <button type="button" class="btn btn-primary" @click="deleteButton(childrenIndex, index)">Apagar</button>
                            <input type="text" class="form-control" aria-describedby="helpId" placeholder="" v-model="button.name">
                        </div>
                        <button type="button" class="btn btn-secondary w-100" @click="addButton(index)">Adicionar Botões</button>
                    </div>


                  </div>
              </div>
          </div>
          <div class="offset-1 col-7">
            <div class="form-group mb-3" v-for="(falas, index) in perguntas.slice(0, perguntaId)" v-bind:key="index"> 
                <span class="p-2 d-block mb-1"  style="border: 1px solid black">
                      {{ falas.pergunta }}
                </span>

                <span class="p-2 d-block text-right" style="border: 1px solid red" v-if="falas.resposta && index != indexValue">{{  falas.resposta }}</span>

                <input type="text" class="form-control" v-if="index == indexValue && falas.type == 'text'" v-model="falas.resposta" @keyup.enter="nextInput" placeholder="Insira sua reposta" />
                <div  v-if="index == indexValue && falas.type == 'button'">
                    <div class="form-group" v-for="(button, index) in falas.buttons" v-bind:key="index">

                        <input name="" id="" class="btn btn-primary" type="button" v-model="button.name"  @click="falas.resposta += button.name; nextInput()">
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
    import mixins from '../../mixins/index.js';
    export default {
        mixins,
        data() {
            return {
                id: '',
                demo: '',
                nome: 'Meu formulário',
                indexValue: 0,
                perguntaId: 1,
                perguntas: [{
                    type: "text",
                    pergunta: "Oi, estou aqui para te ajudar! Para comeÃ§ar, qual Ã© o seu nome?",
                    resposta: "",
                    buttons: []
                }]
            }
        },
        methods: {
        }
    }
</script>

<style>

</style>