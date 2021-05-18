<template>
    <main >
      <div id="sections">
        <section class="visual">
          <div class="visual-wrap" @mouseenter="stopSwiper($event)" @mouseleave="playSwiper($event)" >
            <swiper ref="mySwiper" :options="visualOptions" class="visual-slider" >
                <swiper-slide  class="visual-item" 
                  v-for="(item, index ) in visualList" :key="index" 
                  v-bind:style="{ 'background-image': 'url(' + item.imgSrc + ')'  }
                " :class="{ black: item.activeClass }">
                <div class="text-box">
                  <h2><span>{{ item.title }}</span></h2>
                  <h3><span>{{ item.description }}</span></h3>
                  <a href="javascript:;" class="btn">자세히보기</a>
                </div>
                </swiper-slide>
            </swiper>
            <div class="slider_pagination"> 
                <span v-for="(item, index) in visualSlideButtons" :key="index" @click="slidePaginClick( $event, index )">
                    <i class="progress">
                        <span class="progress left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress right">
                            <span class="progress-bar"></span>
                        </span>
                    </i>
                    <button type="button">{{ item.pageNum }} </button>
                </span>
            
            </div>
          </div>
        </section>

        <section class="works">
          <div class="inner works-target">
            <em>I'm works</em>
            <p>
              다양한 프로젝트 경험을 했던
              <br />
              결과물을 소개합니다.
              </p>

            <div class="works-list-wrap">
              <div class="works-books">
                  <img src="//www.samhwa.com/files/board/live/1608177749150_people_image37.jpg" alt="" />
                  <strong>works books</strong>
                  <a href="//www.samhwa.com/files/board/live/1608177749150_삼화앤피플_37.pdf" class="view_pdf" target="_blank"><span>PDF</span>보기</a>
              </div>
              <ul class="works-list">
                <li v-for="(item, index) in worksList" :key="index.id" class="works-item" :class="{'item-left' : index % 2 === 0, 'item-right' : index % 2 !== 0}" >
                    <a v-bind:href="item.urlSrc" target="_self">
                        <div class="img-wrap">
                            <img v-bind:src="item.imgSrc"  />
                            <i class="works-cate">{{ item.category}}</i>
                        </div>
                        <em class="works-title">
                          {{ item.title }}
                        </em>
                        <div class="works-txt">{{ item.description }}</div>
                    </a>
                </li>
              </ul>
            </div>
         
          </div>
        </section>

        <section class="about">
          <div class="inner">
            <div class="about-text_box">
              <h2 class="about-title"><span>Introduce me</span></h2>
              <h3 class="about-txt"><span>오늘 제가 열심히 살 수 있는 건 취미 있는 인생이기 때문입니다.</span></h3>
            </div>
   
            <div class="about-content">
              <ul class="about-list">
                <li class="about-first"> 
                  <a href="javascript:;"  @mouseenter="stopImg($event)" @mouseleave="playImg($event)" >
                    <img v-bind:src="require('../assets/images/main/about_big_img0' + this.aboutBicIndex + `.jpg`)" />
                    <!-- <img v-blind:src="@/assets/images/main/about_big_img0" +" {{ this.aboutBicIndex }} "+".jpg" /> -->
                    <!-- {{ this.aboutBicIndex }} -->
                    <!-- <img src="//www.samhwa.com/files/color/1608644895818_color_inspir_concept.jpg" alt=""> -->
                  </a>
                </li>
                <li>
                  <ul class="item-list">
                    <li v-for="( item, index ) in aboutList" :key="index.id" >
                        <div class="about-info">
                          <figure class="img">
                            <img :src="require(`@/assets/images/main/${item.imgSrc}.jpg`)" />
                            <!-- <img v-bind:src="item.imgSrc"> -->
                          </figure>
                          <em>{{ item.title }}</em>
                          <i>{{ item.description }}</i>
                        </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="news">
          <div class="inner">
            <h2>News</h2>
            <ul class="news-list">
              <li>
                <a href="javascript:;" target="_blank">
                  <em>'안심닥터’ 출시 기념 안심생활 이벤트</em>
                  <p>2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료 2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" target="_blank">
                  <em>'안심닥터’ 출시 기념 안심생활 이벤트</em>
                  <p>2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" target="_blank">
                  <em>'안심닥터’ 출시 기념 안심생활 이벤트</em>
                  <p>2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                </a>
              </li>
                    <li>
                <a href="javascript:;" target="_blank">
                  <em>'안심닥터’ 출시 기념 안심생활 이벤트</em>
                  <p>2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" target="_blank">
                  <em>'안심닥터’ 출시 기념 안심생활 이벤트</em>
                  <p>2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                </a>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main> 
</template>
 
<script>

import mixin from "./mixin/myMixin";
import {gsap, Expo, Power0, Sine } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Main',
  mixins: [mixin], 
  data () {
    let that = this;
    return {
      visualList: [
        { 
          id:0,
          imgSrc :`${require('@/assets/images/main/visual_img_01.jpg')}`, 
          title: "타이틀1",
          description:"서브타이틀1",
          pageLink:"",
          activeClass: true
        },
        { 
          id:1,
          imgSrc : `${require('@/assets/images/main/visual_img_02.jpg')}`,
          title: "타이틀2",
          description:"서브타이틀2",
          pageLink:"",
          activeClass: true
        },
        { 
          id:2,
          imgSrc : `${require('@/assets/images/main/visual_img_03.jpg')}`, 
          title: "타이틀3",
          description:"서브타이틀3",
          pageLink:"",
          activeClass: false
        },
      ],
      visualSlideButtons:[
        { id: 0, pageNum: "1페이지"},
        { id: 1, pageNum: "2페이지"},
        { id: 2, pageNum: "3페이지"},
      ],

      visualOptions: { 
        effect: 'fade',
        // loop:true,
        autoplay:{
          delay:5000,
          disableOnInteraction: false
        },
        on:{
          init: function(){
            let sliderPagnations = document.querySelectorAll( ".slider_pagination > span" );
            sliderPagnations[0].classList.add( "active" );
            that.visualAnimate();
          
          },
          slideChangeTransitionStart: function(){
            let title = document.querySelector( ".text-box h2 span" );
            let subTitle = document.querySelector( ".text-box h3 span" );
           
          },
          transitionEnd: function() {

            that.visualAnimate();

            let sliderPagnations = document.querySelectorAll( ".slider_pagination > span" );
            that.currentIdx = this.activeIndex;
            sliderPagnations.forEach( ( ele, index  )=>{
              ele.classList.remove( "active" );
            })
            sliderPagnations[ that.currentIdx ].classList.add( "active" );

        
          }
        },  
      },

      worksList:[
        { 
          id: 0, 
          urlSrc:"https://samhwa.com/culture/storyView/439?limit=9",
          imgSrc: "https://www.samhwa.com/files/hotissue/1613528909719_0209_인스타_이달의색_보라.png",
          category:"Brand News",
          title: "2월의 색 #노란달꽃색 #귀한자수정색",
          description:"다가오는 봄을 시샘하며, 추위가 심술을 부리는 2월의 대표 색은 환한 보름달의 달무리를 닮은 #노란달꽃색과 볼수록 품위가 느껴지는 #귀한자수정색입니다." 
        },
        { 
          id: 1, 
          urlSrc:"https://youtu.be/1ZAbli2mD9c",
          imgSrc: "https://www.samhwa.com/files/hotissue/1613470364749_210210____________.png",
          category:"Brand News",
          title: "투톤라이브 ep2. 스텔라장-빌런😈",
          description:"2월의 주인공 스텔라 장, 유쾌하고도 발랄한 노란 달꽃 뒤에, 고혹적인 빌런이 숨어있는 삼화페인트 2월 컬러🎨" 
        },
        { 
          id: 2, 
          urlSrc:"https://samhwa.com/product/guide/indiv/104",
          imgSrc: "https://www.samhwa.com/files/hotissue/1611729291123_1썸필.png",
          category:"Painting Guide",
          title: "EP.01 페인트 오픈하기",
          description:" 페인트 오픈방법부터 V컷 페인팅이라는 꿀팁까지!  셀프페인팅의 첫 발걸음 시작해볼까요?" 
        },
        { 
          id: 3, 
          urlSrc:"https://www.instagram.com/p/CKhjB6egFCT/",
          imgSrc: "https://www.samhwa.com/files/hotissue/1611715198102_KakaoTalk_20210126_154946673.jpg",
          category:"Brand News",
          title: "안심닥터 안심생활 EVENT",
          description:"실내 바이러스를 99.9% 제거하는 안심닥터로 안심생활 만드세요. 아이패드, 공기청정기 증정 이벤트 진행 중!" 
        },
        { 
          id: 4, 
          urlSrc:"https://dev.samhwa.com/culture/storyView/432?limit=9",
          imgSrc: "https://www.samhwa.com/files/hotissue/1610684204105_긴밤하늘색_원본.png",
          category:"Samwha Story",
          title: "1월의 색 #긴밤하늘색 #설백색",
          description:"75주년 기념, 순우리말 색이름 프로젝트" 
        },
        { 
          id: 5, 
          urlSrc:"https://www.samhwa.com/culture/newsView/328?limit=9",
          imgSrc: "https://www.samhwa.com/files/hotissue/1609721288227_1.jpg",
          category:"Brand News",
          title: "항바이러스 페인트 ‘안심닥터’ 출시",
          description:"항바이러스 원료 함유, 바이러스 99.9% 사멸…1월5일 대리점 출시 CGV 강남, 인천시청, 해썹인증 공장, 어린이 이용시설 등 적용 완료" 
        },
        { 
          id: 6, 
          urlSrc:"https://www.samhwa.com/product/search/3051831",
          imgSrc: "https://www.samhwa.com/files/hotissue/1608821389890_img-issue-03.jpg",
          category:"Brand News",
          title: "생활방수, 이지클리닝 기능을 더한 올 뉴 아이럭스",
          description:"실내 벽면/벽지용, 방문/가구용, 실내외 겸영 고채도 하이크로마 3종" 
        },
        { 
          id: 7, 
          urlSrc:"https://www.samhwa.com/product/guide/indiv/101",
          imgSrc: "https://www.samhwa.com/files/hotissue/1608821418392_img-issue-06.jpg",
          category:"Pet & Life",
          title: "반려동물인증 받은 펫 러브 컬러와 펫테리어 추천",
          description:"모든 집사들의 가장 큰 고민. 반려견과 반려묘가 머물기 좋은<br>최상의 공간 만드는 방법" 
        }
      ],
      aboutBicIndex :1,
      aboutList:[
        {
          id:0,
          imgSrc: 'main_about_img_01',
          title: 'Watching a movie',
          description : 'SH S 5040-B (0153D)'
        },
        {
          id:1,
          imgSrc: 'main_about_img_02',
          title: 'Food discovery',
          description : 'SH S 5040-B (0153D)'
        },
        {
          id:2,
          imgSrc: 'main_about_img_03',
          title: 'Traveling',
          description : 'SH S 5040-B (0153D)'
        },
        { 
          id:3,
          imgSrc: 'main_about_img_02',
          title: 'Shopping',
          description : 'SH S 5040-B (0153D)'
        }
      ],
      countIndex:null,
      countLen: 5
    }
  },
  created(){
   
  },
  computed: {
    swiper( ){
      return this.$refs.mySwiper.swiper
    },
  },
  mounted() {
    this.$nextTick(function() {
      this.visualSizeCheck();
      this.scrollAnimation();
      this.coutImgUp();
    });
  },

  methods: {
    visualAnimate(){
      let title = document.querySelectorAll( ".text-box h2 span" );
      let subTitle = document.querySelectorAll( ".text-box h3 span" );
      gsap.set( title, { opacity:0, top: 30} )
      gsap.to( title, 0.75, { opacity:1, top: 0, ease:Expo.easeInOut });
      gsap.set( subTitle, { opacity:0, top: 30} )
      gsap.to( subTitle, 0.75, { opacity:1, top: 0, ease:Expo.easeInOut, delay:0.15 });

    },
    visualSizeCheck(){
      let visualTarget = document.querySelector( ".visual" ); 
      let visualHeight =  window.innerHeight + "px";
      visualTarget.style.height = visualHeight;
    },
    slidePaginClick( event, index ){
       this.swiper.slideTo( index );
        let sliderPagnations = document.querySelectorAll( ".slider_pagination > span" );
            sliderPagnations.forEach( ( ele, index  )=>{
              ele.classList.remove( "active" );
            })
        sliderPagnations[ that.currentIdx ].classList.add( "active" );
    },
    handleScroll(){
      let sT =  (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      let worksTarget = document.querySelector( ".works-target" );
      let worksHeight = document.querySelector( ".works" ).clientHeight;
      let visualHeight = document.querySelector( ".visual" ).clientHeight; 
      let bookStiky = document.querySelector( ".works-books" );
      if( sT > ( visualHeight + worksTarget.offsetTop )){ 
        if( sT >=  ( worksHeight + Math.floor( bookStiky.clientHeight / 3)) ) return;
        bookStiky.style.top = (window.pageYOffset - visualHeight ) + "px"
      }
    },
    animateList( elem, direction ){
      direction = direction | 1;
      let x = 0,
          y = direction * 100;
      if( elem.classList.contains( "item-left" )){
        x = -100; y = 0;
      }else if( elem.classList.contains( "item-right")){
        x = 100;  y = 0;
      } 
      gsap.fromTo( elem, { x: x, y: y, autoAlpha:0 },{
        duration: 1.25,
        x:0,
        y:0,
        autoAlpha:1,
        ease:"expo",
        overwrite: "auto"
      })
    },
    hide( elem ){
      gsap.set( elem, { autoAlpha:0 });
    },
    scrollAnimation(){
      let that = this;
      let aboutHeight = document.querySelector( ".about" ).clientHeight + "px";
      gsap.utils.toArray( ".works-item" ).forEach( function( elem ){
        that.hide( elem );
        ScrollTrigger.create({
          trigger:elem,
          onEnter: function(){
            that.animateList( elem )
          },
          onEnterBack: function(){
            that.animateList( elem, -1 )
          },
          onLeave: function(){
            that.hide( elem )
          }
        })
      });

      //about
      gsap.to(".about", {
        scrollTrigger: {
          trigger: ".about-text_box",
          scrub: true,
          start: "top center",
          end:  aboutHeight,
          toggleClass: "active",
          ease: "power2",
          // markers: true
        }
      });
      //about background
      gsap.to(".about", {
        backgroundPosition: "100% 30%",
        scrollTrigger: {
          trigger: ".about",
          scrub: 0.5,
          start: "top center",
          end:  aboutHeight,
          ease: "power2"
        },
      });

      const boxes = gsap.utils.toArray('.about-list >li');

      boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha:0, y: 150}, { autoAlpha:1,  y: 0, delay: i * 0.6 });
        ScrollTrigger.create({
          trigger: box,
          animation: anim,
          scrub: 0.5,
          start: "top center",
          end:  "center",
          ease: "Expo",
        });
      });
    },
    stopSwiper( event ){
      console.log( "stop" );
      // this.$refs.mySwiper.swiper.autoplay.stop()
    },
    playSwiper( event ){
      console.log( "start" );
      // this.$refs.mySwiper.swiper.autoplay.start()
    },
    coutImgUp(){
      this.countIndex = setInterval(() => {
        if( this.aboutBicIndex >= this.countLen ){ this.aboutBicIndex = 1 }; 
        this.aboutBicIndex = this.aboutBicIndex + 1
      }, 2000);
    },
    playImg( event ){
      this.countIndex = setInterval(() => {
        if( this.aboutBicIndex >= this.countLen ){ this.aboutBicIndex = 1 }; 
        this.aboutBicIndex = this.aboutBicIndex + 1
      }, 2000);
    },
    stopImg( event ){
      clearInterval( this.countIndex );
    }
  }
}
</script> 

<style lang="scss" >
  @import '@/assets/scss/_mixin.scss'; 
  main{
    #sections{
      .visual{ position: relative; margin:auto; background-size:100%; overflow: hidden ;
        .visual-wrap{ position: relative; width: 100%; height: 100%;
          .visual-slider{ position: relative; width: inherit; height: inherit;
            .visual-item{ background-size:cover; background-repeat: no-repeat;
              .text-box{ position: relative; padding: rem(400px 270px 0 270px);
                h2{ font-size:rem( 70px ); color: #fff; overflow: hidden;
                  span{ position: relative;  font-family: "Spoqa Han Sans Neo"; }
                }
                h3{ margin-top: rem(80px); font-size:rem( 35px ); color: #fff;
                  span{ position: relative; }
                }
              }
              &.black{
                .text-box{
                  h2,
                  h3{ color: #151515;}
                }
              }
            }
          }
          .slider_pagination{ position: absolute; width: 100%;  padding-left: rem(270px);  bottom: rem(150px); z-index: 10;
            span{ font-size: 0;  width: rem(40px);  height: rem(40px);  position: relative;  display: inline-block;  margin-left: rem(12px);  cursor: pointer; z-index: 20;
              .progress{ width: rem(40px); height: rem(40px); line-height: rem(44px); background: none; margin: 0 auto; box-shadow: none;  position: absolute; 
                &.left{ left:0; 
                  .progress-bar{ left: 100%; border-top-right-radius: rem(40px); border-bottom-right-radius: rem(40px); border-left: 0; -webkit-transform-origin: center left; transform-origin: center left; }
                }
                &.right{ right:0;
                  .progress-bar{ left: -100%; border-top-left-radius: rem(40px); border-bottom-left-radius: rem(40px); border-right: 0; }
                }
                .progress-bar{ width: 100%;  height: 100%; background: none;  border-width: 1px;  border-style: solid; position: absolute; top: 0; border-color: #fff; box-sizing: border-box; }
                >span{ width: rem(50%); height: 100%; overflow: hidden; position: absolute; top: 0;  z-index: 1 }
              }
              &:first-child{ margin:0;}
              button{ display: inline-block; font-size:0; background: none;  width: 40px;  height: 40px;  box-sizing: border-box;  border: 0; position: relative;  cursor: pointer;
                &:before{ content: '';  display: block;  position: absolute;  top: 50%;  margin-top: -4px;  left: 50%; margin-left: -4px;  width: 8px; height: 8px; background: #fff;  opacity: .4;
                    -webkit-transform: rotate( 45deg ); transform: rotate( 45deg );}
              }
              &.active{
                .progress{
                  &.left{
                    .progress-bar{  -webkit-animation: loading-2 2.5s linear forwards 2.5s; animation: loading-2 2.5s linear forwards 2.5s; }
                  }
                  &.right{
                    .progress-bar{  -webkit-transform-origin: center right; transform-origin: center right; -webkit-animation: loading-1 2.5s linear forwards; animation: loading-1 2.5s linear forwards;}
                  }
                }
              }
              @keyframes loading-1 {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(180deg);transform: rotate(180deg);}}
              @keyframes loading-2 {0% {-webkit-transform: rotate(0deg); transform: rotate(0deg);}100% {-webkit-transform: rotate(180deg);transform: rotate(180deg);}}
            }
          }
        }
      }

      .works{ position: relative; padding:rem( 140px 0 30px 0 ); background: #fff;
        .inner{ position: relative; width: rem(1180px); margin:0 auto; box-sizing: border-box;
          em{ display: block; font-size: rem(80px);   font-family: "Old Standard TT";    line-height: 1.2; font-weight: bold; }
          p{ padding:  rem(40px 0 0 200px); font-size: rem(20px); line-height: 1.5; letter-spacing: -0.7px;   margin-bottom: rem(66px);    font-family: "Spoqa Han Sans Neo"; }
             .works-list-wrap{ position: relative;
              .works-books{ position: absolute;  left: 0;  top: 0;  margin-top: 106px;  z-index: 2;
                >img{  display: block; width: rem(180px);  height: rem(232px);  overflow: hidden;  }
                strong{ display: block; margin-top: ren(20px); margin-bottom: rem(10px); font-size: rem(20px); font-weight: bold; line-height: 1.5;}
                a{ display: block; font-size: rem(16px); line-height: 1.5;   color: #000;
                  &:after{ 
                    content: '';
                    position: relative;
                    top: 5px;
                    font-size: 12px;
                    display: inline-block;
                    text-align: center;
                    width: 16px;
                    height: 16px;
                    line-height: 16px;
                    color: #fff;
                    background-color: #000;
                    background-image: url( ../assets/images/main/icon-arrow-icon-north-east.svg);
                    margin-left: 5px;
                    border-radius: 50%;
                    vertical-align: top;
                  }
                }
                &.fixed{ position: fixed; top:rem( 247px ); left:rem( 362px ) }
                &.stiky{ top:auto; bottom:rem( 100px );  }
              }
              .works-list{  position: relative; width: rem(1400px); padding-left:rem( 180px );  box-sizing: border-box;
                li{ display: inline-flex;   padding-left: rem(120px); vertical-align: top; width: 480px; padding-left:100px; margin-bottom: 140px;
                  a{ display: block;
                    .img-wrap{  display: block; position: relative; 
                      img{ width: 100%; }
                      .works-cate{  position: relative; display: inline-block;  font-size: rem(20px); font-family: 'Old Standard TT' ; left: -40px; letter-spacing: normal;  color: #888;  bottom: 0; line-height: 1.5;
                        -webkit-transform: rotate( 270deg ); -webkit-transform-origin: 0% 0%; transform: rotate( 270deg ); transform-origin: 0% 0%;
                        }
                    }
                    .works-title{ display: block; font-size: rem(22px);   color: #000; margin: rem(0px 0 20px);}
                    .works-txt{  display: block; font-size: rem(16px); line-height: 1.5; letter-spacing: rem(-0.5px); font-style: normal; color: #000;}
                  } 
                  &:nth-child(even){ margin-top:rem(-140px);}
                }
              }
             }
        }
      }

      .about{ width: 100%;  height: rem(2032px);  background-attachment: fixed;  background-image: url( ../assets/images/main/img-color-inspiration.png);
              position: relative; background-position: center;  background-size: cover; background-repeat: no-repeat;
        .inner{ position: relative; width: rem(1180px); margin: auto; box-sizing: border-box;
          .about-text_box{  
            .about-title{ padding-top: rem( 200px ); margin-bottom: rem( 50px );
              --duration: 400ms;
              --delay: calc(var(--duration) /2);
              --ease: cubic-bezier(0.25, 1, 0.5, 1);
              color: #fff;  text-align: left;   font-size: rem(144px); letter-spacing: rem(-5px);  font-family: 'Old Standard TT'; font-weight: bold; overflow: hidden;
              span{ position: relative; display: inline-block;  transform: translateY(110%);  transition: transform var(--duration) var(--ease);
                &:after{
                  content: "";
                  position: absolute;
                  top: rem( 140px );
                  left: 0;
                  background-color: white;
                  width: 100%;
                  height: rem(4px);
                  transform: scaleX(0);
                  transition: transform var(--duration) var(--delay) var(--ease);
                }
              }
          }
          .about-txt{ padding:rem( 0 0 168px 0 ); font-size: rem(20px); line-height: 1.8; letter-spacing: -1px; font-weight: normal;  color: #fff;}
            &.active{
               .about-title{
                  span{ transform: translateY(0);  transition-delay: var(--delay);
                    &:after{   transform: scaleX(1);  transition-delay: 0s; }
                  }
               }
            }
          }

          .about-content{ position: relative;  box-sizing: border-box; 
            .about-list{
              > li{ float: left; padding:rem( 174px 0 0 0 );  width: rem( 700px ); 
                a{ display: block;
                  img{ width: 100%; } 
                } 
                .item-list{ 
                  li{  position: relative;  float: left;  padding-left: rem( 60px);  padding-bottom: rem(60px);  box-sizing: border-box;
                    .about-info{ position: relative; box-sizing: border-box; width: rem(290px); padding: rem(4px); background: #fff;
                      .img{  display: block; width: 100%;  height: rem(272px); overflow: hidden; background: #151515;
                        img{ width: inherit; height: inherit;   object-fit: contain; }
                      }
                      em{ display: block; box-sizing: border-box; padding: rem(12px 12px 0 12px);  font-size: rem(20px); line-height: 1.5;  color: #111; }
                      i{  display: block;  line-height: 1.43; color: #111; letter-spacing: 0.5px;  font-size: rem(14px);  padding: rem(4px 12px 20px 12px); box-sizing: border-box;}
                    }
                    &:nth-child(odd){ top:rem( 100px ); }
                  } 
                  &:after{ content: ''; display: block; clear: both; }
                }
                &.about-first{ width: rem( 480px ); padding:0;  }
                &:after{ content: ''; display: block; clear: both; }
              }
            }
          }
        }
      }

      .news{ width: 100%; padding:rem( 140px 0 170px 0 );
        .inner{ position: relative; width: rem(1180px); margin:0 auto; box-sizing: border-box; 
          h2{ font-size: rem(80px);  line-height: 1.2; color: #000;  font-family: 'Old Standard TT';  font-weight: bold; }
          .news-list{
            li{  padding: rem(30px 0);  border-bottom: 1px #e5e5e5 solid;  
              a{ display: block; 
                em{ display: block;  font-size: rem(24px);  font-weight: 500;  line-height: 1.5;  letter-spacing: -0.6px; color: #000;  margin:rem( 0 0 20px 0); transition: color 1s; }
                p{ letter-spacing: -0.5px; font-size: rem(16px); line-height: 1.5; color: #555;  text-overflow: ellipsis; font-weight: 400; overflow: hidden; display: inline-block; width: 100%; white-space: nowrap;  height: rem(26px); }
                &:hover{
                  em{ color: rgb(133, 49, 49); }
                }
              }
            }
          }
        }
      }
    }
  }
 @media screen and (max-width: 961px) {
    main{
      #sections{
        .visual{ 
          .visual-wrap{
            .visual-slider{
              .visual-item{ background-position: center center;
                .text-box{  padding: rem(260px 30px 0 );
                  h2{ font-size:rem( 40px );}
                  h3{ margin-top: rem(40px); font-size:rem( 18px); }
                }
              }
            }
             .slider_pagination{ padding-left:0; text-align: center; bottom: rem( 100px ); }
          }

         }
        .works{ padding:rem( 70px 0 15px 0 ); 
          .inner{ width: 100%; padding:rem( 0 18px );
          em{ font-size: rem( 60px );}
            p{ padding:rem( 20px 0 0 0 ); margin-bottom: rem(20px);
              br{ display: none;  }
            }
            .works-list-wrap{
              .works-books{ display: none; }
              .works-list{ width: 100%; padding-left:0;
                li{ padding:0;  width: 100%; margin-bottom: rem( 30px );
                  a{
                    .img-wrap{
                      .works-cate{ margin:rem( 5px 0); transform: none; left:0; font-size:rem( 22px ); }
                    }
                    .works-title{ font-size:rem(18px); }
                  }
                  &:nth-child(even){ margin-top:0; }
                }
              }
            }
          }
        }
        .about{ height: rem(2400px);
          .inner{ width: 100%; padding:rem( 0 15px);
            .about-text_box{
              .about-title{ padding-top: rem( 60px ); margin-bottom: rem(25px);  font-size: rem(40px);  letter-spacing: rem(-2px);  
                span{
                  &:after{ top:rem( 40px )}
                 }
              }
              .about-txt{ padding:rem( 0 0 40px 0); font-size:rem( 18px ); }
            }
            .about-content{ 
              .about-list{
                >li{ float: none; padding:rem( 30px 0 0 0); width: 100%;
                    &.about-first{ width: 100%; }
                    .item-list{
                      li{ float: none; padding:rem( 0 0 20px 0 );
                        .about-info{ width: 100%; }
                        &:nth-child(odd){ top:0; }
                      }
                    }
                }
              }
            }
          }

        }
        .news{ padding:rem( 50px 0 60px 0);
          .inner{ width:100%; padding:rem( 0 15px);
            h2{ font-size: rem(40px); }
            .news-list{
              li{  padding:rem(15px 0 );
                a{
                  em{ font-size:rem( 18px ); margin:rem( 0 0 10px 0 ); }
                }
              }
            }
          }
        }

      }
    }

}
</style>
