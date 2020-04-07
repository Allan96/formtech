<template>
  <div class="container-fluid py-5">
      <div class="row">
          <div class="col-2 mb-5">
              <router-link to="/dashboard"> Voltar para o dashboard</router-link>
          </div>
          <div class="col-4 mb-5">
              <button type="button" class="btn btn-primary" @click="addInput">Adicionar</button>
          </div>
              <div class="col-4 mb-5">
              <button type="button" class="btn btn-primary" @click="save">Salvar</button>
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
    import Cookies from 'js-cookie';
    export default {
        data() {
            return {
                id: '',
                demo: '',
                nome: 'Meu formulário',
                indexValue: 0,
                perguntaId: 1,
                perguntas: []
            }
        },
        methods: {
            addInput: function() {
                this.perguntas.push({
                    type: "null",
                    pergunta: "",
                    resposta: "",
                    buttons: []
                });
            },
            addButton: function(val) {
                if (this.perguntas[val].buttons.length < 3) {
                    this.perguntas[val].buttons.push({
                        name: 'Botão'
                    });
                } else {
                    console.log('Muito botão');
                }

            },
             deleteInput: function (index) {
                this.perguntas.splice(index, 1);
            },
            deleteButton: function (children, index) {
                console.log(this.perguntas[index].buttons.splice(children, 1));
            },
            next: function() {
                this.perguntaId++;
                this.indexValue++;
                console.log(this.perguntas);
            },
            resetChat: function () {
                this.indexValue = 0;
                this.perguntaId = 1;
                let i = 0;
                while (i < this.perguntas.length){
                     this.perguntas[i].resposta = "";
                     i++;
                }
                console.log(this.perguntas);

            },
            save: function() {
                this.$http.post('http://localhost:3333/chat', {
                        perguntas: this.perguntas
                    }, { params: {id: this.id, nome: this.nome, user_id: Cookies.get('id') }})
                    .then(res => {
                        if(res.body.id){
                            this.demo = `./chat/${ res.body.id }`,
                            this.id = res.body.id;
                        }
                    })
                    .catch((error) => console.log(error))
            }
        },
        created: function() {
             this.$http.get('http://localhost:3333/chat', {params: {id: this.$route.params.id}})
                    .then(res => {
                        this.id =  res.body.id;
                        this.nome = res.body.nome;
                        this.perguntas = JSON.parse(res.body.perguntas);
                    })
                    .catch((error) => console.log(error));
        }
    }
</script>

<style>

</style>