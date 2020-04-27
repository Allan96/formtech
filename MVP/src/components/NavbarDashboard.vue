<template>
<div>
 <vs-navbar class="nabarx">
      <div slot="title">
        <vs-navbar-title>
             <router-link to="/dashboard">
           <img src="../assets/logo-white.svg">
             </router-link>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
       <vs-dropdown>
      <a class="a-icon" href="#">
        <img src="../assets/profile.svg" height="40">
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-item divider @click="sair">
          Sair
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

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
button:focus {
    outline: 1px dotted;
    outline: none;
}
.con-vs-dropdown--menu{
      width: 160px;
}
.nabarx{
    padding: 8px 40px;
    box-shadow: none;
    background: #640064!important;
    background-image: linear-gradient(30deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), .5))!important;
    .vs-navbar--item{ 
        a{
            font-size: 14px;
            color: white;
            font-weight: 200;
        }
    }
}


</style>