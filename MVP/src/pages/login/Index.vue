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
import router from '../../router/index.js';
import Cookies from 'js-cookie';
export default {
   data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            login() {
                this.$http.post('http://localhost:3333/login', {
                        email: this.email,
                        password: this.senha,
                    })
                    .then(function(res) {
                        const { id } = res.body;
                        if (id) {
                            Cookies.set('id', id);
                            // this.$store.state.id = id;
                            router.push('/dashboard');
                        }
                    })
                    .catch((error) => console.log(error))
            }
        }
}
</script>

<style>

</style>