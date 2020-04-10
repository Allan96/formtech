<template>
<div class="container">

    <div class="row">
        <div class="col-5">
            <form @submit.prevent="login()">
            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text"
                class="form-control" v-model="email" id="" aria-describedby="helpId" placeholder="">
            </div>
              <div class="form-group">
              <label for="">Senha</label>
              <input type="text"
                class="form-control" v-model="senha" id="" aria-describedby="helpId" placeholder="">
            </div>
            <button type="submit" class="btn btn-primary">Entrar</button>
            </form>
        </div>
    </div>

</div>
  
</template>

<script>
import mixins from '../../mixins/index.js';
export default {
        mixins,
   data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            
        }
}
</script>

<style>

</style>