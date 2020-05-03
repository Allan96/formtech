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
        display: block;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0,0,0,0.08);
        border-radius: 4px;
        padding: 13px 24px;
        padding-right: 69px;
        margin-right: 16px;
        position: relative;
        word-wrap: break-word;
        border-bottom: 2px solid #0000001f;
}
</style>
