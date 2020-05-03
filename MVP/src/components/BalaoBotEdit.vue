<template>
         <div class="col-12 balao d-flex align-items-start">
             <img src="../assets/images/avatar.svg" alt="" align="left">
             <span>
                <slot></slot>
            </span>
        </div>
</template>

<script>
export default {
    data() {
            return {
            }
        },
         methods: {
         }
       
}
</script>

<style scoped>
.balao span{
        margin-left: 16px;
}
</style>
