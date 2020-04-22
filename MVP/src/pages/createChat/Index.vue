<template>
  <div>
      <NavbarDashboard/>
  <div class="container-fluid mt-5"> 
      <div class="row">
          <!-- <div class="col-2 mb-5">
              <router-link to="/dashboard"> Voltar para o dashboard</router-link>
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
          </div> -->
          <div class="col-4">
              <div class="w-100 d-flex justify-content-end">
              <vs-button color="primary" type="gradient" icon="add" icon-after  @click="addInput">Adicionar pergunta</vs-button> 
              </div>

              <vs-collapse class="mt-3">
     <vs-collapse-item>
       <div slot="header">
          <b>Nome do formulário</b>
       </div>
       <vs-input class="inputx" placeholder="Placeholder" v-model="nome"/>
     </vs-collapse-item>
     <vs-collapse-item v-for="(per, index) in perguntas" v-bind:key="index">
       <div slot="header">
            <b>Pergunta {{ index }}</b>
            <i class="material-icons" @click="deleteInput(index)">close</i>
            
       </div>
       <vs-input class="inputx" placeholder="Placeholder" v-model="per.pergunta"/>
       <vs-select  v-model="per.type" >
            <vs-select-item  value="button" text="Botão"/>
            <vs-select-item  value="text" text="Texto"/>
        </vs-select>
                    
                    <div v-if="per.type == 'button'" class="p-2">
                        <div class="form-group" v-for="(button, childrenIndex) in per.buttons" v-bind:key="childrenIndex">

                            <button type="button" class="btn btn-primary" @click="deleteButton(childrenIndex, index)">Apagar</button>
                            <input type="text" class="form-control" aria-describedby="helpId" placeholder="" v-model="button.name">
                        </div>
                        <button type="button" class="btn btn-secondary w-100" @click="addButton(index)">Adicionar Botões</button>
                    </div>
     </vs-collapse-item>
    </vs-collapse>
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
  </div>
</template>

<script>
    import {addInput, addButton, deleteInput, deleteButton, save} from '../../functions/inputs';
    import {next, resetChat} from '../../functions/chat';
    import NavbarDashboard from '../../components/NavbarDashboard'
    export default {
    components: {
    NavbarDashboard
  },
        data() {
            return {
                id: '',
                demo: '',
                nome: 'Meu formulário',
                indexValue: 0,
                perguntaId: 1,
                perguntas: [{
                    type: "text",
                    pergunta: "Primeira pergunta",
                    resposta: "",
                    buttons: []
                }]
            }
        },
        methods: {
            addInput,
            addButton,
            deleteInput,
            deleteButton,
            save,
            next, 
            resetChat
        }
    }
</script>

<style scoped lang="scss">
.vs-con-input-label, .con-select {
    width: 100%;
    margin: 4px 0;
}
.material-icons{
    font-size: 20px;
    margin: 0 16px 0 16px;
    color: rgba(255, 0, 0, .8);
}
.vs-collapse-item--header{
    div{
        display: flex;
        align-items: center;
    }
}
</style>