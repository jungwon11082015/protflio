<template>

<header class="header"  >
<div class="fixed-wrap" :class="{'up': scrolled, 'change': isurlIn }">
	<div class="header-inner">
		<h1 class="logo">
		<a href="/" class="logo-img">
		  <span class="sr-only">protflio</span>
		</a>
		</h1>
		<nav>
      <ul class="nav-list">
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/Works">Works</a>
        </li>
        <li>
            <a href="/Content">Content</a>
        </li>
      </ul>
		</nav>
    <button type="button" class="gnb_menu" @click="gnbAllClick" :class="{ open : isOpen }"><i></i><span class="blind">전체메뉴열기</span></button>
    <aside class="gnb-detail" ref="gnbBox">
      <ul class="gnb-detail_list">
        <li>
          <a href="/about"><span class="gnb_item" data-letters="about">about</span></a>
        </li> 
        <li>
          <a href="/works"><span class="gnb_item" data-letters="works" >Works</span></a>
        </li>
        <li>
          <a href="/content"><span class="gnb_item" data-letters="content">Content</span></a>
        </li>
      </ul>

    </aside>

	</div>
</div>
</header>



</template>  
 
<script>
import {gsap, Expo, Power0, TimelineMax  } from "gsap";
import myMixin from '@/components/mixin/myMixin'

export default {
  mixins: [myMixin],
  name: 'Header',
  data () {
    return {
      limitPosition: 1,
      scrolled: false,
      lastPosition: 0,
      isOpen:false,
      gnbBox: null,
      isurlIn: false
    }
  },
  created(){
    this.gsap = gsap;
    this.headerParamCheck();
  },
  computed:{
    
  },
  methods: {
      handleScroll (event) {
        if(this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
        } 
        if(this.lastPosition > window.scrollY) {
          this.scrolled = false;
        }
        this.lastPosition = window.scrollY;
    },
    gnbAllClick(){
      let gnbBox = this.$refs.gnbBox;
      let gnbListItem = document.querySelectorAll( ".gnb_item" );
      let gnbListArr = [].slice.call( gnbListItem );
      let t1 = new TimelineMax();

      //참고 사이트 https://codepen.io/tah_med/pen/LbwjaY
      this.isOpen = !this.isOpen;
      if( this.isOpen ){
        gsap.killTweensOf( gnbBox );
        t1.fromTo(gnbBox, .3, {right:-100+"%"}, { right:0, onComplete:subGnbShow })
        function subGnbShow(){
            gnbListArr.forEach( function( ele, index ){
              gsap.killTweensOf( ele );
              gsap.set( ele,{ opacity:0, right:-gnbListArr[2].clientWidth });
              t1.to( ele, 0.35, { opacity:1, right:0, ease:Expo.easeInOut, delay: index * 0.015 });
            })
        }
      }else{
          t1.fromTo( gnbListArr, .3, { right:0 }, { right: -100+"%",  onComplete:subGnbHide })
          function subGnbHide(){
              gsap.to( gnbBox, .3,{ right:-100+"%", ease:Expo.easeInOut  });
          }
      }
    },
    headerParamCheck(){
      const pageUrl = window.location.href;

      let pageSplitUrl   = pageUrl.split("/");    
      let urlLength     = pageSplitUrl.length;
      let urlCheck         = pageSplitUrl[urlLength-1];   

      switch( urlCheck ){
        case "about" :
          this.isurlIn = true;
          break;
        case "Content":
          this.isurlIn = true;
          break;
      }
    }
  },
  destroyed(){
    this.headerParamCheck();
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/_mixin.scss'; 
.header { 
  position: relative; top: 0; left: 0; width: 100%; opacity: 1;
  -webkit-transition: all .4s; transition: all .4s; z-index: 700;

  .fixed-wrap{ position: fixed; top: 0; left: 0; width: 100%; height:rem(100px);  background-color: transparent;
    border-bottom: rem(1px) solid transparent; transition: all 0.4s; z-index: 701;
    &.up{
        will-change: transform;
        transition: transform 200ms linear; 
        transform: translateY(-100%);
    }
    .header-inner { position: relative; display: flex; justify-content: center; margin: rem(50px) auto 0; max-width: rem(1500px);
      .logo { position: absolute; top: 50%; left: rem(15px); transform: translateY(-50%); width: rem(177px); height: rem(70px); z-index: 701;
        .logo-img {  display: block; width: 100%; height: 100%; background: url(../assets/images/header/logo.png) 0 0 no-repeat;
        }
      }
      
      nav { display: flex; justify-content: center; width: 100%;
        .nav-list { display: flex; transform: translateX(0); 
          li{ position: relative; display: flex; padding: 0 2vw; 
              > a { position: relative; display: flex; align-items: center; justify-content: center;
                font-size: rem(18px); font-weight: 500; letter-spacing: 0.04em;   font-family: "Spoqa Han Sans Neo"; 
                color: #fff;  transition: color .4s; -webkit-transition: color .4s;
              }
          }
        }
      }

    .gnb_menu{ width:rem(36px);height:rem(36px);font-size:0;position: absolute; z-index:710; right:rem(70px); top:50%; transform: translateY(-50%); cursor: pointer;
        i{ position:absolute; left:rem(4px); display:block; width:rem(28px);height:rem(2px);  background: #fff;
          &:before,
          &:after{ content: ''; position:absolute; left:rem(4px); display:block; width:rem(28px); height:rem(2px);  background: #fff;  }
          &:before{ left:0; top:rem(-8px); -webkit-transition-property:top,transform;transition-property:top,transform;}
          &:after{  left:0; top:auto; bottom:rem(-9px); -webkit-transition-property:bottom,transform; transition-property:bottom,transform; }
        }
        &.open{
          i{ background: none;
            &:before{ top: 0; background: #151515; -webkit-transform: rotate( 45deg); transition-delay: 0s, 0.3s; transform: rotate(45deg); transition-delay: 0s, 0.3s;  }
            &:after{ bottom: 0; background: #151515; -webkit-transform: rotate(-45deg); transition-delay: 0s, 0.3s; transform: rotate(-45deg); transition-delay: 0s, 0.3s;  }
          }
        }
      }

      .gnb-detail{ position: fixed; display: table; top:0; right:-100%; width: 100%; height:100%;  background: #fff; z-index: 700;
        .gnb-detail_list{ display: table-cell;  vertical-align: middle; 
          li{ position: relative;  display: block;   text-align: center; color: #000; z-index: 10;
            a{ position: relative; font-size: rem(70px);  line-height: 1; display: inline-block; overflow: hidden; color: #242424;
              span{ display: block; position: relative; right:rem(-340px);  width: 100%;  padding: rem(10px); font-family: "Spoqa Han Sans Neo";  font-weight: bold; text-transform:uppercase; box-sizing: border-box;
                &:before{
                  content: attr(data-letters);
                  position: absolute;
                  color: #fff;      
                  left: 0;
                  overflow: hidden;
                  white-space: nowrap;
                  width: 0%;
                  -webkit-transition: width 0.5s;
                  transition: width 0.5s;
                  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
                  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
                }
              }
              &:after{ 
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                top: rem(7px);
                right: 0;
                z-index: -1;
                background: #242424;
                -webkit-transform: translate3d(101%,0,0);
                transform: translate3d(101%,0,0);
                -webkit-transition: -webkit-transform 0.5s;
                transition: transform 0.5s;
                -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
                transition-timing-function: cubic-bezier(0.7,0,0.3,1);
              }
              &:hover{ color: #242424;
              span{
                &:before{ width: 100%; }
              }
                &:after{ -webkit-transform: translate3d(0,0,0);	transform: translate3d(0,0,0); }
              }
            }
          }
        }
      }
    }
    &.change{ background-color: #fff;
      .header-inner{
        nav { 
          .nav-list { 
            li{
                > a { color: #151515; 
                }
            }
          } 
        }
        .gnb_menu{ 
        i{  background: #151515;
          &:before,
          &:after{ background: #151515;  }
        }
        &.open{
          i{ background: none;
            &:before{ top: 0; background: #151515; -webkit-transform: rotate( 45deg); transition-delay: 0s, 0.3s; transform: rotate(45deg); transition-delay: 0s, 0.3s;  }
            &:after{ bottom: 0; background: #151515; -webkit-transform: rotate(-45deg); transition-delay: 0s, 0.3s; transform: rotate(-45deg); transition-delay: 0s, 0.3s;  }
          }
        }
      }
      }
    }
  }
  &.fixed {
    .header-inner {
      height: rem(70px);
    }
  }
}

@media screen and (max-width: 961px) {
  .header{
    .fixed-wrap{ height:rem(60px);
      .header-inner{ margin:rem( 25px auto 0); max-width:100%; 
        .logo{ top:rem(5px); left:rem( 10px ); transform: none; width: rem( 100px ); height: rem(45px);
          .logo-img{ background-size:rem( 100px ) auto; }
        }
        nav{ display: none; }
        .gnb_menu{ right:rem( 10px ); top:rem( 2px ); transform:none; }
        .gnb-detail{
          .gnb-detail_list{
            li{
              a{ font-size:rem( 36px );
                span{ right:rem( -200px ) }
              }
            }
          }
        }
      }
    }
  } 

}


</style>