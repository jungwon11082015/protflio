// myMixin.js
let myMixin = {
    created(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
     },
     methods: {
        handleScroll ( e ) {},
        handleResize ( e ) {}
     },
     mounted() {
      this.handleScroll();
      this.handleResize();
     },
     destroyed(){
       window.removeEventListener('scroll', this.handleScroll);
       window.removeEventListener('scroll', this.handleResize);
     }
};
export default myMixin;