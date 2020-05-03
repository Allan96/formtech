<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-primary bgc-white">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img src="@/assets/images/logo.svg" alt="" class="img-fluid">
                </router-link>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="sair">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

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