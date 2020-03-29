<template>
  <div class="container-fluid py-5">
      <div class="row">
          <div class="col-12 mb-5">
              <button type="button" class="btn btn-primary" @click="addInput">Adicionar</button>
          </div>
          <div class="col-4">
              <div class="form-group" v-for="(per, index) in perguntas" v-bind:key="index">
                  <div class="form-group">
                    <input type="text" class="form-control mb-2" aria-describedby="helpId" placeholder="" v-model="per.pergunta">
                    <select class="form-control" v-model="per.type">
                        <option value="null">Selecione um tipo de input</option>
                        <option value="button">Botão</option>
                        <option value="text">Texto</option>
                    </select>
                    
                    <div v-if="per.type == 'button'" class="p-2">
                        <div class="form-group" v-for="(button, index) in per.buttons" v-bind:key="index">
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
    export default {
        data() {
            return {
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
            addInput: function() {
                this.perguntas.push({
                    type: "null",
                    pergunta: "",
                    resposta: ""
                });
                console.log(this.perguntas);
            },
            addButton: function(val) {
                if (this.perguntas[val].buttons.length < 3) {
                    this.perguntas[val].buttons.push({
                        name: 'Botão'
                    });
                    console.log(this.perguntas);
                } else {
                    console.log('Muito botão');
                }

            },
            next: function() {
                this.perguntaId++;
                this.indexValue++;
                console.log(this.perguntas);

            }
        }
    }
</script>

<style>

</style>