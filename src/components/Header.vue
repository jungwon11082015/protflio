<template>

<header ref="header" :class="{ white  : isHeaderChange }"  >
  <div class="header-inner">
    <h1>
      <a href="/index">
        <img src="@/assets/images/header/logo.png" alt="heoprov">
      </a>
    </h1>
    <nav>
        <a class="hambergericon" href="javascript:;"  @click="gnbClickOpen" :class="{ open : isOpen }"></a>
    </nav>
  </div>
  <aside ref="aside">
    <div class="gnb-box">
      <ul class="gnb-list">
        <li>
          <a href="/index">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/Works">Work</a>
        </li>
        <li>
          <a href="/content">Contact</a>
        </li>
      </ul>

    </div>

  </aside>
</header>



</template>  
 
<script>
import EventBus from './utils/EventBus.js';
import {gsap, Expo, Power0, TimelineMax  } from "gsap";
import myMixin from '@/components/mixin/myMixin'

export default {
  mixins: [myMixin],
  name: 'Header',
  data () {
    return {
      isOpen: false,
      isOpenState : false,
      isHeaderChange : false 
    
    }
  },
  created(){
    EventBus.$on( 'headerBgChange', ( payload ) =>{
      this.isHeaderChange = true;
    });
  },
  computed:{
    
  },
  mounted() {
    this.$nextTick( function(){
    });
  },

  methods: {
    handleScroll ( e ) {
      const sT = window.scrollY;
      const header = this.$refs.header;
      if( sT > 0 ){
        header.classList.add( "fixed" );
      }else{
        header.classList.remove( "fixed" );
      }
    },

    gnbClickOpen(){
      this.isOpen = !this.isOpen;
      const aside = this.$refs.aside;
      const htmlBody = document.querySelector( "body" );
      let gnbList = document.querySelectorAll( ".gnb-list li" );
      
      if( this.isOpen ){
        gsap.killTweensOf( aside );
        gsap.killTweensOf( gnbList );
        htmlBody.style.overflow = "hidden";
        gsap.set( aside, { top: -100 + "%"});
        gsap.to( aside, 0.75, { top:0, ease:Expo.easeInOut, onComplete: function(){

          Array.prototype.slice.call( gnbList ).forEach( function( ele, index ){
            gsap.set( ele, { left: -30, opacity:0 })
            gsap.to( ele, 0.15, { left: 0, opacity:1, ease:Power0.easeInOut, delay: 0.1 * index  })
          }); 

          //ie 11 foreach Array.prototype 변환
          return;
          gnbList.forEach( function( ele, index ){
            gsap.set( ele, { left: -30, opacity:0 })
            gsap.to( ele, 0.35, { left: 0, opacity:1, ease:Expo.easeInOut, delay: 0.2 * index  })
          })


        }});
      }else{
        htmlBody.style.overflow = "auto";
        gsap.to( gnbList, 0.1, { opacity: 0, ease:Expo.easeInOut });
        gsap.to( aside, 0.75, { top:-100 + "%", ease:Expo.easeInOut });
      }

    }
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/_mixin.scss'; 
header { position: fixed; top:0; left:0; width: 100%; height: auto; z-index: 10;
  .header-inner{ position: relative; padding:rem( 30px 70px  ); z-index: 9;
    h1{ float: left; width: rem( 127px);
      a{ display: block; 
        img{ width: 100%; }
      }
    }
    nav{ float: right; width: rem( 40px ); height: rem( 40px );  box-sizing: border-box;
        position: relative; top: 0; left: 0;   z-index: 10;
      .hambergericon{
        height: rem(5px);
        width:rem(40px);
        position: absolute;
        top: rem(50%);
        left: rem(50%);
        border-radius: rem(50px);
        background-color: #151515;
        transform: translate(rem(-50%),rem(-50%)) rotate(0deg);
        transition: all ease 0.5s;
         &::before,&::after{
            content:"";
            position: absolute;
            height: inherit;
            border-radius: inherit;
            background-color: inherit;
            margin: auto;
            width: rem(50%);
            transition: all ease 0.5s;
          }
          &::before{
            top: rem(-10px);
            left: 0;
            transform-origin: left;
          }
          &::after{
            bottom:rem(-10px);
            right: 0;
            transform-origin: right;
          }
          &.open{
            transform:translate(-50%,-50%) rotate(135deg);
            &::before{
              top:0;
              transform: translateX(100%) rotate(-90deg);
            }
            &::after{
              bottom:0;
              transform: translateX(-100%) rotate(-90deg);
            }
          }
      }
    }
    &:after{ content: ''; display: block; clear: both; }
  }
  &.fixed{
    background: #fff;  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3); transition: all .2s;
  }

  aside{ position: fixed; top:-100%; left:0; width:100%; height: 100%; z-index: 8; background: #fff;  
    .gnb-box{ width: inherit; height: inherit; display: flex; align-items: center; justify-content: center;
      .gnb-list{
        li{ position: relative; opacity: 0; margin:rem( 20px 0 );
          a{ font-size:rem( 72px ); color: #151515; font-family: 'SpoqaHanSans'; font-weight: bold; }
        }

      }
    }
  }
  &.white{ background:#fff; }
}


</style>