<template>
  <div>
      <NavbarDashboard/>
  <div class="container-fluid mt-5"> 
      <div class="row">
          <div class="col-4">
              <div class="w-100 d-flex justify-content-end">
                   <a :href="`../../chat/${id}`" v-if="id" target="_blank">
                  <vs-button color="danger" type="gradient" icon="visibility" class="mr-2">Ver chat</vs-button> 
                   </a>
              <vs-button color="primary" type="gradient" icon="add" class="mr-2"  @click="addInput">Adicionar fala </vs-button> 

            <vs-button color="success" type="gradient" icon="save"  @click="save">Salvar</vs-button> 
              </div>

              <vs-collapse class="mt-3">
     <vs-collapse-item>
       <div slot="header">
          Nome do formulário
       </div>
       <vs-input class="inputx"  name="nome" placeholder="Placeholder" v-model="nome"/>
     </vs-collapse-item>
     <vs-collapse-item v-for="(per, index) in perguntas" v-bind:key="index">
       <div slot="header">
            {{ index + 1 }}º fala
            <i class="material-icons" @click="deleteInput(index)">close</i>
            
       </div>
       <vs-input class="inputx" :name="index" placeholder="Placeholder" v-model="per.pergunta"/>
       <vs-select  v-model="per.type" >
            <vs-select-item  value="button" text="Botão"/>
            <vs-select-item  value="text" text="Texto"/>
        </vs-select>
                    
                    <div v-if="per.type == 'button'" class="p-2">
                        <div class="form-group" v-for="(button, childrenIndex) in per.buttons" v-bind:key="childrenIndex">
                             <div class="form-row d-flex align-items-center">
    <div class="col-11">
        <vs-input class="inputx" :name="childrenIndex" placeholder="Placeholder" v-model="button.name"/>
    </div>
     <div class="col-1">
<i class="material-icons" @click="deleteButton(childrenIndex, index)">close</i>
    </div>
    </div>

                        </div>
                        <vs-button color="primary" type="gradient" icon="add"  @click="addButton(index)" style="float: right;">Adicionar Botões</vs-button> 
                    </div>
     </vs-collapse-item>
    </vs-collapse>
          </div>
          <div class="offset-1 col-7">
            <div class="form-group mb-3" v-for="(falas, index) in perguntas" v-bind:key="index"> 
                <div class="p-2 mb-1 row">
                      <BalaoBot> {{ falas.pergunta }} </BalaoBot>
                </div>
            </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
// import router from '../../router/index.js';
import BalaoBot from '../../components/BalaoBot';
import NavbarDashboard from '../../components/NavbarDashboard';
import {addInput, addButton, deleteInput, deleteButton, save} from '../../functions/inputs';
export default {
    components: {
            NavbarDashboard,
            BalaoBot
        },
        data() {
        return {
            id: '',
            nome: 'Meu formulário',
            indexValue: 0,
            perguntaId: 1,
            perguntas: []
        }
    },
   methods: {
        addInput,
        addButton,
        deleteInput,
        deleteButton,
        save,
    },
    created: function() {
        this.$http.get('http://localhost:3333/chat', {
                params: {
                    id: this.$route.params.id
                },
                headers: {
                    'x-access-token': Cookies.get('token')
                }
            })
            .then(res => {
                this.id = res.body.id;
                this.nome = res.body.nome;
                // console.log(res.body)
                this.perguntas = JSON.parse(res.body.perguntas);
                console.log(this.perguntas)
            })
            .catch((error) => {
              console.log(error)
            });
    }
    }
</script>

<style  lang="scss" scoped>
    .vs-con-input-label,
    .con-select {
        width: 100%;
        margin: 4px 0;
    }
    header{
        .material-icons {
            font-size: 24px;
            margin: 0 16px 0 16px;
        }
    }
    .vs-collapse-item--header {
        div {
            display: flex;
            align-items: center;
        }
    }
    .vs-con-input{
        margin-bottom: 4px!important;
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
.form-group:last-child {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
}

</style>