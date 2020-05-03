<template>
<div id="header" class="d-flex flex-column">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-5">
                   <img src="../../assets/images/logo.svg" class="img-fluid">
               </div>
        </div>
    </div>
   <header class="align-self-center">
       <div class="container">
           <div class="row d-flex">
               <div class="col-12 col-md-6 align-self-center">
                   <h1 class="c-roxo">
                       <span class="extra">Transforme seu formulário</span>  em uma conversa.
                   </h1>
                   <h5>
                       Viemos para transformarmos formulários super complexos e com diversos passos em uma simples conversa com nosso bot.
                   </h5>
               </div>
                <div class="col-12 offset-md-1 col-md-5 align-self-center">
                 <div id="login">
                     <h3 class="c-roxo mb-3 upper">fazer login</h3>
                     <form @submit.prevent="login">
                     <div class="form-group">
                       <label for="">E-MAIL</label>
                       <input type="text" class="form-control" name="" id="" aria-describedby="helpId" v-model="email">
                     </div>
                      <div class="form-group">
                       <label for="">SENHA</label>
                       <input type="password" class="form-control" name="" id="" aria-describedby="helpId" v-model="senha">
                     </div>
                     <label class="text-right mb-3 d-block">
                          <a href="#" class="c-azul medium">Esqueceu a senha?</a>
                     </label>
                     <button type="submit" class="btn btn-primary w-100 medium">entrar</button>
                     </form>
                 </div>
               </div>
           </div>
       </div>
   </header>
   <footer class="py-3">
       <div class="container">
           <div class="row">
               <div class="col-12 col-sm-6">
                  <p class="m-0"> <b>formtech</b> © 2020 - Todos os direitos reservados </p>
             </div>
             <div class="col-12 col-sm-6 text-right">
                  <p class="m-0"> Todos os direitos reservados. </p>
             </div>
           </div>
       </div>
   </footer>
</div>
  
</template>

<script>
import { login } from '@/functions/session';
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
