<template>
      

<footer id="footer" style="display:none">
  <div class="footer-inner">
      <p> COPYRIGHT 2021. Heojungwon ALLRIGHTS RESERVED.</p>
  </div>
    
</footer>
</template>  
 
<script>

 
export default {
  name: 'Header', 
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixin.scss'; 
 footer {
  position: relative;
  width: 100%;
  padding: rem(42px 0 38px);
  background-color: #333;
  box-sizing: border-box;
  p{
    color: #b9b9b9;
    font-size: rem(15px);
    text-align: center;
    font-family: "Old Standard TT";
  }
 }


@media screen and (max-width: 961px) {
 footer { padding: rem(21px 15px 19px); }
}



</style>
