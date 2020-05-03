<template>
    <div>
        <NavbarDashboard/>
        <div class="container mt-5">
            <div class="row">
                <div class="col-6">
                    <div class="w-100 mb-3 d-flex justify-content-end">
                        <a :href="`../../chat/${id}`" v-if="id" target="_blank">
                            <button type="button" class="btn btn-primary">Ver chat</button>
                        </a>
                        <button type="button" class="btn btn-primary" @click="addInput">Adicionar fala</button>
                        <button type="button" class="btn btn-primary" @click="save">Salvar</button>
                    </div>
                    <div class="form-group">
                        <label for="">Nome do formulário</label>
                        <input type="text" class="form-control" v-model="nome">
                    </div>

                    <div class="accordion" id="accordionExample">
                        <div class="card" v-for="(per, index) in perguntas" v-bind:key="index">
                            <div class="card-header" :id="`heading` + index"  data-toggle="collapse" :data-target="`#collapse` + index" aria-expanded="true" :aria-controls="`collapse` + index">
                                    {{ index + 1 }}º fala
                                     <button type="button" class="btn btn-secondary" @click="deleteInput(index)"><i class="fa fa-times-circle"></i></button>
                            </div>

                            <div :id="`collapse` + index" class="collapse" :aria-labelledby="`heading` + index" data-parent="#accordionExample">
                                <div class="card-body">

                                    <div class="form-group">
                                      <label for="">Insira a pergunta</label>
                                      <input type="text" class="form-control" v-model="per.pergunta">
                                    </div>
                                    <div class="form-group">
                                      <label for="">Selecione o tipo do campo de resposta</label>
                                      <select class="form-control"  v-model="per.type">
                                        <option value="button">Botão</option>
                                        <option value="text">Texto</option>
                                      </select>
                                    </div>

                                    <div v-if="per.type == 'button'" class="p-2">
                                        <div class="form-group" v-for="(button, childrenIndex) in per.buttons" v-bind:key="childrenIndex">
                                            <div class="form-row d-flex align-items-center">
                                                <div class="col-11">
<div class="form-group">
  <label for="">Insira o texto do botão</label>
  <input type="text"
    class="form-control" v-model="button.name">
</div>

                                                </div>
                                                <div class="col-1">
                                                    <button type="button" class="btn btn-secondary mt-3" @click="deleteButton(childrenIndex, index)"><i class="fa fa-times-circle"></i></button>
                                                </div>
                                            </div>

                                        </div>

                                        <button type="button" class="btn btn-primary w-100"  @click="addButton(index)">Adicionar Botões</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  id="chat" class="offset-1 col-5">
                    <div class="form-group mb-3" v-for="(falas, index) in perguntas" v-bind:key="index">
                        <div class="mb-1 row">
                            <BalaoBotEdit> {{ falas.pergunta }} </BalaoBotEdit>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BalaoBotEdit from '../../components/BalaoBotEdit';
    import {
        addInput,
        addButton,
        deleteInput,
        deleteButton,
        save
    } from '../../functions/inputs';
    import {
        next,
        resetChat
    } from '../../functions/chat';
    import NavbarDashboard from '../../components/NavbarDashboard'
    export default {
        components: {
            NavbarDashboard,
            BalaoBotEdit
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
                    pergunta: "Insira aqui a fala do seu bot",
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