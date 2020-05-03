<template>
<div>

   <Navbar/>
   <header>
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 offset-md-1 col-md-4 align-self-center order-md-1 order-2 mt-5 mt-md-0">
                   <legend>
                       formtech
                   </legend>
                   <h1>
                       <b> transforme seu formulário</b> em uma conversa.
                   </h1>
                   <p>
                       viemos para transformarmos formulários super complexos e com diversos passos em uma simples conversa com nosso bot.
                   </p>
                   <vs-button color="primary" type="filled">conheça a plataforma</vs-button>
               </div>
               <div class="col-12 col-md-6 offset-md-1 order-md-2 order-1  mt-5 mt-md-0">
                   <img src="../../assets/images/header.svg" alt="" class="img-fluid">
               </div>
           </div>
       </div>
   </header>
   <section id="expanda">
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 col-md-4 align-self-center offset-md-1">
                   <img src="../../assets/images/sucesso.svg" alt="" class="img-fluid">
               </div>
               <div class="col-12 col-md-4 offset-md-1 align-self-center mt-5 mt-sm-0">
                     <h2>
                       <b>expanda seu negócio</b>, potencialize suas vendas.
                   </h2>
                   <p>
                       faça seu cliente ter a sensação de estar conversando com um amigo próximo,
                       é 3 vezes mais provável que os clientes chegue até o fim do seu formulário quando a experiência é mais humanizada e envolvente.
                   </p>
                   <vs-button color="primary" type="filled">conheça a plataforma</vs-button>
               </div>
           </div>
           
       </div>
 </section>
 <img src="../../assets/images/wave-1.svg" alt="" class="w-100 img-fluid" style="margin-top: -2px">
 <section id="bot">
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 col-md-4 offset-md-1 align-self-center">
                     <h2>
                       o fututo é <br> <b>conversacional</b>.
                   </h2>
                   <p>
                      esta é uma ferramenta que vem mudando a maneira como as empresas se relacionam com seus clientes, transformamos formulários complexos usando o melhor que a tecnologia tem a oferecer.
                   </p>
                   <vs-button color="primary" type="filled">conheça a plataforma</vs-button>
               </div>
               <div class="col-12 col-md-4  offset-md-1">
                   <img src="../../assets/bot.svg" alt="" class="img-fluid">
               </div>
           </div>
           
       </div>
 </section>
 <section id="newsletter">
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 col-md-4 offset-md-1 align-self-center">
                   <h4>
                      entre para nossa lista e receba <b>conteúdos exclusivos</b> e com prioridade
                   </h4>
               </div>
               <div class="col-12 col-md-4  offset-md-1 align-self-center d-flex align-items-start">
                     <vs-input color="#fff" class="w-100 mr-3 my-0" icon="email" label-placeholder="insira seu email"/>
                     <vs-button>enviar</vs-button>
               </div>
           </div> 
           
       </div>
 </section>
 <footer class="py-4">
     <div class="container-fluid">
         <div class="row">
             <div class="col-12 col-sm-5 offset-sm-1">
                  <p class="m-0"> <b>formtech</b> © 2020 - Todos os direitos reservados </p>
             </div>
             <div class="col-12 col-sm-4 text-right">
                  <p class="m-0"> Todos os direitos reservados. </p>
             </div>
         </div>
     </div>
 </footer>
</div>
  
</template>

<script>
import Navbar from '../../components/NavbarLogin'
export default {
    components: {
    Navbar
  },
   data() {
            return {
            }
        },
         methods: {
         }
}
</script>

<style lang="scss" scoped>
.vs-button{
        padding: 10px 40px;
        margin-top: 24px;
        background: #0060FE;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
    }
header{
    background-color: white;
    background-image: url('../../assets/images/blob.svg');
    // background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
    .row{
        min-height: 100vh;
    }
    legend{
        font-weight: 200;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        margin: 0;
    }
    h1{
        font-size: 32px;
        line-height: 40px;
        color: #0060fede;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
    }
}
#expanda{
    .row{
        background: #458bfe;
        padding: 100px 0;
    }
    h2{
           font-size: 32px;
        line-height: 42px;
        color: white;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        color: white;
    }
    .vs-button{
        background: white!important;
         color:#458bfe;
         font-weight: 300;
    }
    
}

#bot{
    .row{
        padding: 0 0 100px 0px;
    }
    h2{
        font-size: 32px;
        line-height: 42px;
        color: #0060fede;
    }
    p{
       font-weight: 300;
        font-size: 18px;
        line-height: 24px;
    }
}

#newsletter{
        padding: 50px 0 26px 0;
        background: #458bfe;
    h4{
        font-size: 18px;
        line-height: 28px;
        color: white;
        font-weight: 300;
        margin-bottom: 24px;
    }
    .vs-button{
        padding: 8px 32px;
        margin-top: 0px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
        overflow: inherit;
        margin-bottom: 24px;
    }
}
footer{
    p{
        font-size: 14px;
    }
}

@media only screen and (max-width: 768px) {
    header{
        padding: 50px 0;
        background-color: white;
        background-image: url('../../assets/images/blob-2.svg');
        background-position: right -50px;
        background-repeat: no-repeat;
         h1{
           font-size: 32px;
            line-height: 42px;
    }
    h2{
        font-size: 18px;
        line-height: 28px;
    }
    }
    #bot, #duvida{
    .row{
        padding: 100px 0px;
    }
     h2{
           font-size: 32px;
            line-height: 42px;
    }
    h3{
        font-size: 18px;
        line-height: 28px;
    }
    }

}

</style>