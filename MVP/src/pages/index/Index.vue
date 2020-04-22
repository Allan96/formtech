<template>
<div>

   <Navbar/>
   <header>
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 align-self-center order-md-1 order-2 mt-5 mt-md-0 text-center">
                   <h1>
                       <b> transforme seu formulário</b> 
                       <!-- <br> em uma conversa. -->
                   </h1>
                   <p>
                       viemos para transformarmos formulários super complexos e com diversos <br> passos em uma simples conversa com nosso bot.
                   </p>
                   <vs-button color="primary" type="gradient" class="mt-5">conheça a plataforma</vs-button>
               </div>
               <!-- <div class="col-12 col-md-6 offset-md-1 order-md-2 order-1  mt-5 mt-md-0">
                   <img src="../../assets/header.svg" alt="" class="img-fluid">
               </div> -->
           <img src="../../assets/arrow.svg" alt="" class="img-fluid">
           </div>
       </div>
   </header>
   <section id="expanda">
       <div class="container-fluid">
           <div class="row d-flex align-content-center">
               <div class="col-12 col-md-4 align-self-center offset-md-1">
                   <img src="../../assets/sucesso.svg" alt="" class="img-fluid">
               </div>
               <div class="col-12 col-md-4 offset-md-1 align-self-center mt-5 mt-sm-0">
                     <h2>
                       <b>expanda seu negócio</b>, potencialize suas vendas.
                   </h2>
                   <p>
                       faça seu cliente ter a sensação de estar conversando com um amigo próximo,
                       é 3 vezes mais provável que os clientes chegue até o fim do seu formulário quando a experiência é mais humanizada e envolvente.
                   </p>
                   <vs-button color="primary" type="filled" class="mt-3">conheça a plataforma</vs-button>
               </div>
           </div>
           
       </div>
 </section>
 <img src="../../assets/wave-1.svg" alt="" class="w-100 img-fluid" style="margin-top: -2px">
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
                   <vs-button color="primary" type="gradient" class="mt-3">conheça a plataforma</vs-button>
               </div>
               <div class="col-12 col-md-4  offset-md-1">
                   <img src="../../assets/header.svg" alt="" class="img-fluid">
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
@keyframes animateimg {
    0% {
        bottom: 50px;
    }
    50% {
        bottom: 60px;
    }
    100% {
        bottom: 50px;
    }
}
header{
    background-color: white;
    background-image: url('../../assets/blob.svg');
    background-position: top right;
    background-repeat: no-repeat;
    .row{
        min-height: 100vh;
        img{
            position: absolute;
            bottom: 50px;
            left: 50%;
             animation: animateimg 1s infinite;
        }
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
        font-size: 56px;
        line-height: 66px;
        color: #0060fe;
    }
    p{
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
    }
}
#expanda{
    .row{
        background: #640064!important;
    background-image: linear-gradient(30deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), .5))!important;
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
         color:#0060fe;
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
footer{
    p{
        font-size: 14px;
    }
}

@media only screen and (max-width: 768px) {
    header{
        padding: 50px 0;
        background-color: white;
        background-image: url('../../assets/blob-2.svg');
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