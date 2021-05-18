<template>
    <main>
      <div class="main-dimd"></div>
      <div id="sections">
        <section class="visual">
          <div class="inner">
            <div class="text-area">
              <span class="sub-title">HELLO</span>
              <h1>
                <div> I <em class="text-">THINK <span class="text-dimd"></span></em></div>
                <div> I 
                  <em>
                    CREATE
                    <span class="text-dimd"></span>
                    <span class="tag tag-right">Web publisher</span>  
                  </em>
                </div>
                <div><span class="tag tag-left">I' can do it </span>I <em>PRACTICE <span class="text-dimd"></span> <i class="pentagon"><span></span><span></span></i> </em></div>
              </h1>
              <div class="spin-box">
                <hr/><hr/><hr/><hr/>
              </div>
            </div>
            <div class="scroll-area">
              <span class="line"></span>
              <p>VIEW PORTFOLIO</p>

            </div>
          </div>
        </section> 
        <section class="works">
            <div class="inner">
              <ul class="works-area">
                <li class="works-list" v-for="( item, index ) in worksList" :key="item.id">
                  <div class="works-box">
                    <figure>
                      <img :src="item.imgSrc">
                      <!-- <img src='@/assets/images/main/main-works-img_01.png'> -->
                    </figure>
                    <div class="text-area">
                      <h2>{{ item.websiteType }}</h2>
                      <h3>{{ item.siteName }}</h3>
                      <p>{{ item.description}}</p>
                      <ul class="skill-list" >
                        <li v-for="(skill, index ) in  item.skillList" :key="skill.index">{{ skill }}</li>
                      </ul>
                      <a href="javascript:;" @mouseenter="worksListMouseEnterEvent( $event )" @mouseleave="worksListMouseLeaveEvent">Read more</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </section>
        <section class="notice">
          <div class="inner">
            <div class="text-box">
              <h2>Notices</h2>
              <div class="notice-box">
                <ul class="notice-list">
                  <li v-for="(item, index ) in this.noticeList" :key="item.id"  >
                    <a :href="item.useSrc" target="_blank">
                        <em>{{ item.title }}</em>
                        <p>{{ item.description }}</p>
                    </a>
                  </li>
                </ul>
                <a href="javascript:;" class="btn-more" @click="noticeListClick" :class="{ on : this.dataFull }">더보기</a>
                <p class="read-text"> <em>리스트 : {{ this.noticeList.length  }}</em></p>
              </div>

            </div>
   

          </div>
        </section>
        <section class="about">
          <div class="inner">
            <div class="text-box">
              <h2>Are you curious about me?</h2>
              <h3>I will guide you to my introduction page.</h3>
              <a href="javascript:;">learn more</a>
            </div>
          </div>
        </section>

      </div>
    </main> 
</template>
 
<script>

import mixin from "./mixin/myMixin";
import {gsap, Expo, Power0, Power2, Sine } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import firebase from 'firebase'
import axios from 'axios';

window.requestAnimationFrame = window.requestAnimationFrame.bind( window );
gsap.core.globals( "ScrollTrigger", ScrollTrigger );

gsap.registerPlugin( ScrollTrigger );

export default {
  name: 'Main',
  mixins: [mixin], 
  data () {
    let that = this;
    return {
      worksList:[
        { 
          id : 0, 
          imgSrc :`${require('@/assets/images/main/main-works-img_01.png')}`, 
          websiteType: 'Lifestyle Commerce & Community', 
          siteName: 'Guud.com',
          description: 'AVA Solution, 가구 및 생활소품 종합몰(편집숍) : 입점형, O2O 매장연계 및 콘텐츠 커머스 구현, ERP, POS, 제휴몰 등 내,외부 연동',
          skillList: [ 'HTML5', 'SCSS', 'VUE.JS' ]
        },
        { 
          id : 1, 
          imgSrc :`${require('@/assets/images/main/main-works-img_02.jpg')}`, 
          websiteType: 'Lifestyle Commerce & Community', 
          siteName: 'Bullsone.co.kr',
          description: '서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함. 서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.',
          skillList: [ 'HTML5', 'SCSS', 'VUE.JS' ]
        },
        { 
          id : 2, 
          imgSrc :`${require('@/assets/images/main/main-works-img_03.png')}`, 
          websiteType: 'Lifestyle Commerce & Community', 
          siteName: 'Guud.com',
          description: '서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함. 서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.',
          skillList: [ 'HTML5', 'SCSS', 'VUE.JS' ]
        },
        { 
          id : 3, 
          imgSrc :`${require('@/assets/images/main/main-works-img_03.png')}`, 
          websiteType: 'Lifestyle Commerce & Community', 
          siteName: 'Guud.com',
          description: '서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함. 서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.',
          skillList: [ 'HTML5', 'SCSS', 'VUE.JS' ]
        },
        { 
          id : 4, 
          imgSrc :`${require('@/assets/images/main/main-works-img_03.png')}`, 
          websiteType: 'Lifestyle Commerce & Community', 
          siteName: 'Guud.com',
          description: '서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함. 서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.서브텍스트 내용 두줄까지써야함.',
          skillList: [ 'HTML5', 'SCSS', 'VUE.JS' ]
        }, 
      ],
      noticeAll: {},
      noticeList:{},
      totNotice: 0,
      cntNotice:5,
      dataFull:false,
      noticeList: [],

    }
  },
  created(){
       let db = firebase.database();
       let _this = this; 
          db.ref("data")
          .once("value")
          .then( dataSnapshot =>{
            let data = [];

            for( let i = 0; i < this.cntNotice; i++ ){
              let childData = dataSnapshot.val();
              let childArr =  Object.entries(childData)
              data.push( childArr[i][1] );
            }

            this.noticeAll = dataSnapshot.val();
            this.noticeList = data;
            this.totNotice =  dataSnapshot.val().length;

          });
  },
  computed: {
  },
  mounted() {
    this.$nextTick(function() {
      this.worksScrollEvent();
      this.mainVisualEffect();
      this.mainVisualEvent();
    });
  },

  methods: {
    mainVisualEffect: function(){
      let visualTarget = document.querySelector( ".visual" );
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: visualTarget,
          scrub: true,
          // pin: true,
          // markers: true,
          start : "top top",
          end: 'bottom 50%',
        }
      });

      tl.to( visualTarget, {  duration:1, autoAlpha: 0 })
    },

    mainVisualEvent: function(){

      const textDimd =  document.querySelectorAll( ".text-dimd" );
      const tl = gsap.timeline();    
      let tagB =  document.querySelector( ".tag-right" );
      let tagG =  document.querySelector( ".tag-left" );


      Array.prototype.slice.call( textDimd ).forEach( function( ele, index ){
        tl.to( ele, 0.35, { width: 0, ease:Sine.easeInOut })
      }); 


      // textDimd.forEach( ( ele, index )=>{
      //   tl.to( ele, 0.35, { width: 0, ease:Sine.easeInOut })
      // });

      gsap.set( tagB, { opacity:0 });
      gsap.to( tagB,  0.75, { opacity:1, delay:0.75, onComplete: function(){
          gsap.fromTo( tagB, 0.5,{ top: '4.375' + 'rem', }, { top:'3.375' + 'rem', repeat: -1, yoyo: true,  ease: Power0.easeIn });
      }});

      gsap.set( tagG, { opacity:0 });
      gsap.to( tagG,  0.5, { opacity:1, delay:0.45, onComplete: function(){
          gsap.fromTo( tagG, 0.5,{ top: '3.125' + 'rem', }, { top:'2.125' + 'rem', repeat: -1, yoyo: true,  ease: Power0.easeIn });
      }});

    },

    worksScrollEvent: function(){
      let revealContainers = document.querySelectorAll(".works-list");


      Array.prototype.slice.call( revealContainers ).forEach( ( container ) =>{
        let imageBox = container.querySelector( 'figure' );
        let image = container.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
          }
        });

        tl.set(imageBox, { autoAlpha: 1 });
        tl.from(imageBox, 1.5, {
          xPercent: -100,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
        });
      }); 
      // revealContainers.forEach((container) => {
      //   let imageBox = container.querySelector( 'figure' );
      //   let image = container.querySelector("img");
      //   let tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: container,
      //     }
      //   });

      //   tl.set(imageBox, { autoAlpha: 1 });
      //   tl.from(imageBox, 1.5, {
      //     xPercent: -100,
      //     ease: Power2.out
      //   });
      //   tl.from(image, 1.5, {
      //     xPercent: 100,
      //     scale: 1.3,
      //     delay: -1.5,
      //     ease: Power2.out
      //   });
      // });

      
    },

    worksListMouseEnterEvent: function( e ){
      let figureImg =  e.path[2].childNodes[0].childNodes[0];
      gsap.to( figureImg, 0.75, { scale:1.05, transformOrigin:"50% 50%", ease:Power0.easeInOut });

    },

    worksListMouseLeaveEvent: function( e ){
      let figureImg =  e.path[2].childNodes[0].childNodes[0];
      gsap.to( figureImg, 0.75, { scale:1, transformOrigin:"50% 50%", ease:Power0.easeInOut });
    },

    noticeListClick: function(){
      if(this.cntNotice < this.totNotice){
          this.cntNotice += 2;
          let data = [];
          for(let i = 0; i < this.cntNotice; i++){
            data.push( this.noticeAll[i] ); 
            console.log( data );
          }
          this.noticeList = data; 
          this.dataFull = true 
         
      }else{
        this.dataFull = true 
        alert('List items are fully loaded!');
      }
    }
  }
}
</script> 

<style lang="scss" >
  @import '@/assets/scss/_mixin.scss'; 
  $noteBook : 1239px;
  $mobile : 749px;


  main{
    .main-dimd{ position: fixed; top:0; left:0; width: 100%; height: 100%; background:url( ../assets/images/main/main-visual.png ) 0 0 no-repeat; background-size:cover; z-index: 1;}
    #sections{ position: relative; padding-top: rem( 80px ); z-index: 2;
      .visual{ 
        .inner{ @include inner;
        .text-area{  position: relative; display: flex; padding: rem(110px) 0 0 rem(180px); flex-direction: column; justify-content: center; align-items: left;
           @media screen and (max-width: $noteBook) {
             padding: rem(55px) rem(140px) 0 rem(140px);
            //mobile
            @media screen and( max-width: $mobile ){
            }
          }

          .sub-title{ position: relative; display: inline-block; font-size: rem(16px); padding-right:30px;
            &:after{ content: ''; display: block; position: absolute; top:0; left:rem( 55px ); width: rem(19px); height: rem(19px);  background:url( ../assets/images/main/main-hello.png ) 0 0 no-repeat; background-size:rem( 19px ) auto; }
          } 
          h1{ font-size:rem(162px); font-family: 'Old Standard TT';
              >div{ position: relative; display: block; font-weight: 400;
                .tag{
                    position: absolute; top:rem(50px); left:rem(-50px); right:auto; z-index: 10; opacity: 0;
                    display: inline-block;
                    padding: 14px 25px;
                    font-size: 14px;
                    text-transform: uppercase;
                    background:#5bff7a;
                    color: #151515;
                    transition: 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
                    transform: rotate(15deg);
                    font-weight: bold;
                }
                >em{ position: relative;  font-weight: 900;
                  .text-dimd{ position: absolute; top:rem(40px); left:0; width: 100%; height: rem( 150px ); background:#5bff7a; }
                  .tag{
                     position: absolute; top:rem(70px); right:rem(-30px); left:auto; z-index: 10;
                      display: inline-block;
                      padding: 14px 25px;
                      font-size: 14px;
                      text-transform: uppercase;
                      background: rgba(0, 0, 0, 0.7);
                      color: #5bff7a;
                      transition: 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
                      transform: rotate(-25deg);
                       font-weight: bold;
                  }
                  .pentagon{ width: 20px; height: 12px; background: #5bff7a; position: absolute; bottom: 22px;
                    >span{
                      position: absolute;
                      left: 0;
                      width: 0;
                      height: 0;
                      border-left: 10px solid transparent;
                      border-right: 10px solid transparent;
                      &:first-child{ top: -6px;  border-bottom: 6px solid #5bff7a;}
                      &:last-child{  bottom: -6px; border-top: 6px solid #5bff7a; }
                    }
                  }
                }
                &:nth-child(2){ padding-left:rem( 80px ); }
              }

              @media screen and (max-width: $noteBook) {
                 font-size: rem( 160px );
                //mobile
                @media screen and( max-width: $mobile ){
                }
              }  

            }
        
          }   
          .spin-box{
            position:absolute;top:rem( 150px );right:rem( 100px );
              width:100px;
              height:100px;
              hr{border:0;margin:0;width:rem(40px);height:rem(40px);position:absolute;border-radius:rem(50px);animation:spin 2s ease infinite;
                  &:first-child{background:#19A68C;animation-delay:-3.5s}
                  &:nth-child(2){background:#F63D3A;animation-delay:-3s}
                  &:nth-child(3){background:#FDA543;animation-delay:-2.5s}
                  &:last-child{background:#193B48}
              }
         
              @keyframes spin{
                0%,100%{transform:translate(0)}
                25%{transform:translate(160%)}
                50%{transform:translate(160%, 160%)}
                75%{transform:translate(0, 160%)}
              }
          }

          .scroll-area{ padding:rem( 120px 0 ); text-align: center; font-size:rem(18px); font-family: 'Old Standard TT';
            .line{ display: block; 
              width: rem(2px); height: rem(50px); margin:0 auto;
              background: linear-gradient(to bottom, black 50%, rgba(255, 255, 255, 0) 50%);
              background-position: 0 rem(-50px);
              background-size: 100% 200%;
              animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
            }
            $line-height: rem(50px);
            $line-height-abs: rem(-50px);
            @keyframes scrolldown {
              0%{
                background-position: 0 $line-height-abs;
              }
              75% {
                background-position: 0 0;
              }
              100%{
                background-position: 0 $line-height;
              }
            }
            p{ padding:rem( 10px 0 0 0); }
          }
        }  
       
        
      }
      .works{ 
        .inner{   @include inner;
          .works-area{
            >li{ margin-top: rem(50px);
              .works-box{
                .text-area{ width: rem( 620px ); padding:rem( 60px 0 0 40px ); box-sizing: border-box;
                  h2{ font-size:rem( 20px ); font-family: 'Spoqa Han Sans Neo'; font-weight: 500; } 
                  h3{ margin-top:rem(20px);  font-size:rem( 48px ); font-family: 'Old Standard TT'; font-weight: 800; }
                  p{ margin-top: rem( 20px ); height: rem( 46px ); font-size:rem(20px); white-space: nowrap; overflow: hidden;   line-height: 1.2;  text-overflow: ellipsis;
                    white-space: normal; line-height: 1.2;  text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
                  } 
                  .skill-list{ margin-top: rem( 20px );
                    li{ float: left; margin-left:rem(10px); font-size:rem( 18px );
                      &:first-child{ margin-left:0; }
                    }
                    &:after{ content: ''; display: block; clear: both; }
                  }
                  a{ margin-top: rem( 18px );
                      padding: rem(10px) rem(25px);
                      font-weight: 500;
                      background: transparent;
                      transition: all 0.3s ease;
                      position: relative;
                      display: inline-block;
                      border: 2px solid #000;
                      color: #000;
                      z-index: 1;
                      &:after{
                        position: absolute;
                        content: "";
                        width: 0;
                        height: 100%;
                        top: 0;
                        right: 0;
                        z-index: -1;
                        background: #000;
                        transition: all 0.3s ease;
                      }
                    &:hover{  color: #fff; 
                      &:after{ left: 0; width: 100%;}
                    }
                  }
                }
                figure{
                  // visibility: hidden;
                  position: relative;
                  width: 100%;
                  height: rem(408px);
                  max-width: rem(620px);
                  overflow: hidden;
                  img{ height: 100%; width: 100%; object-fit: cover; transform-origin: left;} 
                }
                .text-area,
                figure{ float: left;}
                &:after{ content: ''; display: block; clear: both; }
              }
              &:first-child{ margin-top: 0;}
            }
          }
        }
      }
      .notice{
        .inner{   @include inner;
          .text-box{ padding:rem(150px 0 0 );
            h2{ font-size: rem( 40px ); font-family: 'Old Standard TT'; font-weight: 700; text-transform: uppercase;}
            .notice-box{
              .read-text{ margin:rem( 10px 0 ); font-size:rem( 18px );  text-align: right;}
            }
            .notice-list{ padding:rem( 30px 0 0 0 );
              li{ margin:rem( 30px 0 0 0 ); padding-bottom: rem( 20px ); border-bottom: 1px solid #e5e5e5 ;
                a{ display:block; color: #151515;
                  em{ display: block; margin:rem( 20px 0 ); font-size:rem( 24px ); font-family: 'Spoqa Han Sans Neo';  }
                  p{  display: block; width: 100%; font-size:rem( 16px ); font-family: 'Spoqa Han Sans Neo'; text-overflow: ellipsis; overflow: hidden;  white-space: nowrap; height: 26px; }
                }
                &:first-child{ margin-top:0; }
              }  
            }
            .btn-more{ 
              display: block; width: rem( 150px ); height: rem( 30px ); line-height: rem(1.9); text-align: center;
              margin: rem( 50px) auto; font-size:rem( 20px); padding-bottom: rem( 10px );
              font-weight: 500;
              background: transparent;
              -webkit-transition: all 0.3s ease;
              transition: all 0.3s ease;
              position: relative;
             
              border: 2px solid #000;
              color: #000;
              z-index: 1;
              &:after{
                position: absolute;
                content: "";
                width: 0;
                height: 100%;
                top: 0;
                right: 0;
                z-index: -1;
                background: #000;
                -webkit-transition: all 0.3s ease;
                transition: all 0.3s ease;
              }
              &:hover{ color: #fff;
                   &:after{ left: 0; width: 100%;}
              }
              &.on{ display: none; }
            }
          }
        }
      }

      .about{
        .inner{   @include inner;
          .text-box{ padding:rem(300px 0 );
            h2{ font-size: rem(40px ); font-family: 'Old Standard TT'; font-weight: 700; text-transform: uppercase;}
            h3{ margin-top: rem( 20px ); font-size: rem(40px );  font-family: 'Old Standard TT'; font-weight: 700; text-transform: uppercase;}
            a{ position: relative; display: inline-block; margin-top: rem( 20px); font-size:rem( 20px); padding-bottom: rem( 10px ); color: #151515;
              &:after{ content: ''; display: block; position: absolute; bottom:0; left:0; width: 100%; height: rem(2px); background: #151515; }
            }
          }
        }
      }
    }
  }

</style>
