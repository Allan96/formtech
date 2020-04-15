<template>
<div>
 <vs-navbar color="transparent" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
           <img src="../assets/logo.svg">
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
           <vs-dropdown vs-custom-content vs-trigger-click >
      <a class="a-icon" href.prevent>
        <vs-button color="white" class="registro" type="filled">registre-se</vs-button>
      </a>

      <vs-dropdown-menu class="loginx">
        <h3>registre-se agora</h3>
        <vs-input  icon="person" type="text" label-placeholder="insira seu nome"/>
         <vs-input  icon="email" type="text" label-placeholder="insira seu e-mail"/>
        <vs-input  icon="lock" type="password" label-placeholder="insira sua senha"/>
        <vs-input  icon="lock" type="password" label-placeholder="confirme sua senha"/>

        <vs-button width="100%" class="entrar" color="#0060FE">finalizar cadastro</vs-button>
      </vs-dropdown-menu>
    </vs-dropdown>
      </vs-navbar-item>
      <vs-navbar-item index="1">
       <vs-dropdown vs-custom-content vs-trigger-click >
      <a class="a-icon" href.prevent>
        <vs-button color="white" type="border">entrar</vs-button>
      </a>
      <vs-dropdown-menu class="loginx">
        <h3>acesse sua conta</h3>
         <form @submit.prevent="login">
         <vs-input  icon="person" type="text" label-placeholder="insira seu e-mail" v-model="email"/>

        <vs-input  icon="lock" type="password" label-placeholder="insira sua senha" v-model="senha"/>

        <button type="submit"  class="vs-button entrar">continuar</button>
         </form>
      </vs-dropdown-menu>
    </vs-dropdown>
      </vs-navbar-item>
    </vs-navbar>
</div>
  
</template>

<script>
import {login} from '../functions/session';
export default {
    data() {
            return {
                email: "",
                senha: ""
            }
        },
         methods: {
         login
         }
       
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 24px;
    line-height: 34px;
    margin: 0;
    font-weight: 300;
    text-transform: lowercase;
}
.vs-dropdown--menu{
    padding: 24px!important;
}
.vs-button{
    font-size: 14px;
    font-weight: 200;
    padding: 8px 24px;
}
.entrar{
        width: 100%;
        background: #1f74ff;
}

.registro{
    color: #0060FE;
    font-weight: 300;
}
.nabarx{
    position: absolute;
    padding: 16px 40px;
    box-shadow: none;
    .vs-navbar--item{ 
        a{
            font-size: 14px;
            color: white;
            font-weight: 200;
        }
    }
}


</style>