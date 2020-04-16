<template>
<div>
 <vs-navbar class="nabarx">
      <div slot="title">
        <vs-navbar-title>
           <img src="../assets/logo-white.svg">
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <vs-button color="white" type="border" @click="sair"> Sair </vs-button>
      </vs-navbar-item>
      
    </vs-navbar>
</div>
  
</template>

<script>
import { sair } from '../functions/session';
export default {
    data() {
            return {
            }
        },
         methods: {
         sair
         }
       
}
</script>

<style lang="scss" scoped>
.vs-button{
    font-size: 14px;
    font-weight: 400;
    padding: 8px 24px;
    &:hover{
      color:#1f74ff!important;
    }
}
.nabarx{
    padding: 16px 40px;
    box-shadow: none;
    background: #0060fede!important;
    .vs-navbar--item{ 
        a{
            font-size: 14px;
            color: white;
            font-weight: 200;
        }
    }
}


</style>