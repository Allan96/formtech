<template>
<div class="card">
   <div class="card-body">
     <i class="fa fa-comment"></i>
    <h5 class="card-title mb-0">{{ perguntas.nome }}</h5>
    <p class="card-text">Esse chat tem 5 repostas</p>
     <router-link v-bind:to="`/respostas/${ perguntas.id }`" class="card-link">Ver respostas</router-link>
    <router-link v-bind:to="`/chat/edit/${ perguntas.id }`" class="card-link">Editar chat</router-link>
    <a v-bind:href="`/chat/${ perguntas.id }`" target="_blank" class="card-link">Ver chat</a>
  </div>
</div>
 <!-- <vs-card class="cardx">
        <div>
              <h4 class="d-flex align-content-center">
                 {{ perguntas.nome }}
              </h4>
        </div>

        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <a target="_blank" v-bind:href="`/chat/${ perguntas.id }`">
                <vs-button type="gradient" color="danger" icon="visibility" icon-after> </vs-button>
            </a>
            <router-link v-bind:to="`/chat/edit/${ perguntas.id }`">
                <vs-button type="gradient" color="primary"  icon="create" icon-after></vs-button>
            </router-link>
            <router-link v-bind:to="`/respostas/${ perguntas.id }`">
                <vs-button type="gradient" color="success" icon="message" icon-after> </vs-button>
            </router-link>
          </vs-row>
        </div>
      </vs-card> -->
</template>

<script>
export default {
    props: ['perguntas'],
    data() {
            return {
            }
        },
         methods: {
         }
       
}
</script>

<style  lang="scss" scoped>
    h4{
        font-weight: 300;
        padding: 15px;
        font-size: 18px;
        line-height: 28px;
        img{
            width: 32px;
            margin-right: 16px;
        }
    }
.vs-button{
    font-size: 12px;
    font-weight: 400;
    padding: 8px 24px;
    margin: 0 2px;
}
</style>