<template>
         <div class="col-12 offset-sm-4 col-sm-8 balao d-flex align-items-start justify-content-end">
             <span>
                <slot></slot>
            </span>
            <img src="../assets/images/user.svg" alt="" align="right">
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
        margin-right: 16px;
}
</style>
