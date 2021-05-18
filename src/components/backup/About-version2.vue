<template>
    <div id="about">
        <div class="sections">

          <section class="visual">
            <div class="visual-inner">
              <div class="title-area">
                <p class="visual-subtxt">I'am about</p>
                  <h2 class="title">
                      <div class="word">
                          <span class="word-text">Creative think</span>
                          <span class="tags left">BRANDING</span>
                          <span class="tags right">INNOVATION</span>
                      </div>
                      <span class="word-text">Creative agency</span>
                  </h2>
                  <p class="txt">사람을 끌어당기는 사용성, 비즈니스에 힘이 되는 디자인 창조적 디지털 패러다임 솔루션을 현실화합니다.</p>
                  <p class="txt">제이브릭스는 빠른 속도로 변화하고 있는 디지털 생태계를 분석하여, 현시대에 핵심이 되는 디지털 <br>
                      페러다임을  제시합니다.  도출된 목표는 비즈니스 성장 및 사용자의 편의성을 고려한 융합적 접근을 거친<br>
                      후에 우리 회사만의 전략적 리더십과 실행력으로 케팅 솔루션으로 통합 역량을 제시합니다.
                  </p>
              </div>
            </div>
          </section>

          <section class="keyword">

            <div class="inner">
              <div class="text-box">
                저를 형용사로<br>
                표현하면 이렇습니다
              </div>
              <span class="keyword-tag">컨셉 형용사</span>
              <ul class="keyword-list">
                <li>
                  <strong>
                    <span>솔직하고</span>
                    <span class="keyword-atcion" >솔직하고</span>
                  </strong>
                </li>
                <li>
                  <span>철저한</span>
                </li>
                <li>
                  <span>유머스럽고</span>
                </li>
                 <li>
                  <span>협동적</span>
                </li>
                <li>
                  <strong>
                    <span>전달력</span>
                    <span class="keyword-atcion" >전달력</span>
                  </strong>
                </li>
                <li>
                  <span>재치</span>
                </li>
                <li>
                  <span>허세없는</span>
                </li>
                <li>
                    <strong>
                      <span>합리적인</span>
                      <span class="keyword-atcion" >합리적인</span>
                    </strong>
                </li>
                <li>
                  <span>두괄식으로 말하는</span>
                </li>
                
              </ul>
             
            </div>
            <div class="keyword-visual">
              <div class="keyword-clip">
                <div class="keyword-image"></div>
              </div>
            </div>

          </section>
         
        </div>
    </div>
</template>

<script>
import {gsap, Expo, Power0, Sine } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
 
export default {
  name: 'About',
  data () {
    return {
      
    }
  },
  
  created(){
  },
  mounted() { 
    this.$nextTick(function() {
      this.scrollAnimation();
    });
  },

  methods: {

  scrollAnimation(){
      let keywordTarget = document.querySelector( ".keyword" );
      let keywordItems = document.querySelectorAll( ".keyword-atcion" );
      let keywordImg = document.querySelector( ".keyword-image" );
      
      // const tl = new timeline;

      //스크롤 트리거 사용방법
      // markers ==> 위치값 표시
      // scrub ==> 지정된 영역에 들어가거나 나갈때 애니메이션 작업

      //about 비주얼 영역

      gsap.to( keywordImg, { backgroundPositionY: -10, ease: Sine.easeInOut,
        scrollTrigger:{
          trigger: keywordTarget,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }),
  
      gsap.to( keywordItems, { css:{ width: 100+"%" }, ease: Power0.easeInOut,
        scrollTrigger: {
          trigger: keywordTarget,
          start: "top top%",
          end: "bottom bottom",
          scrub: true,
        }
       })
      
    
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/_mixin.scss'; 
  #about{
    .sections{
      .visual{ padding:rem( 180px 0  );
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;

        .visual-inner{ width: rem(1240px); margin:0 auto;
          .title-area{
            .visual-subtxt{ margin:0 0 rem( 15px ) 0;  font-size:rem( 30px ); font-family: 'SpoqaHanSans'; font-weight: bold; letter-spacing: rem( -2px ); }
              h2{ position: relative; margin-bottom: rem( 100px );
                .word-text{ position: relative; font-size:rem( 118px );  font-family: 'SpoqaHanSans'; font-weight: bold; z-index: 2; }
                .tags{ 
                      display: inline-block;
                      position: absolute;
                      padding: 14px 25px;
                      font-size: 14px;
                      text-transform: uppercase;
                      background: rgba(0, 0, 0, 0.7);
                      color: #5bff7a;
                      transition: 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
                      transform: rotate(15deg);
                      font-weight: bold;
                      z-index: 1;
                  &.left{ 
                    top:rem( 10px ); left:rem( -60px ); right: auto;  background:#5bff7a;  color: #151515; 
                    transition: 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
                    transform: rotate(-20deg); z-index: 3;
                   }
                  &.right{ top:rem( 100px ); right: rem(500px); left:auto;} 
                }
              }
              .txt{ font-size: 25px; font-weight: 500; letter-spacing: -1px; line-height: 48px;  word-break: keep-all; color: #333; }
          }
        }
      }
      .keyword{ position: relative; height: rem(1080px); overflow: hidden; z-index: 10;
        .inner{ width: rem(1194px); margin:0 auto; display: flex; position: relative; z-index: 3; height: 100%; flex-direction: column; justify-content: space-between; z-index: 1000;
          .text-box{ margin-top: rem(160px); font-size: rem(48px); line-height: 1.38; letter-spacing: rem(-1.5px); font-weight: 700; color: #fff; }
          .keyword-tag{ flex: none; position: absolute; left: 0; font-size: rem(16px);
            font-weight: 700; letter-spacing: rem(-.5px); transform: rotate(-90deg) translate(0,-50%);
            transform-origin: 50% 100%; top: rem(405px); color: #fff;
          }
          .keyword-list{ align-self: flex-end; font-weight: 400; margin-right: rem(72px); margin-bottom: rem(310px);
              font-size: rem(36px); line-height: rem(1.6); letter-spacing: rem(-1.5px); max-width: rem(503px);
            li{ float: left; margin:rem(0 5px); color: #fff;
              strong{  position: relative; display: block; box-sizing: border-box; line-height: rem(44px); overflow: hidden;
                span{   display: inline-block; overflow: hidden; color: #fff; line-height: rem(44px);
                  &.keyword-atcion{ display: block; position: absolute; border-radius: rem(2px); 
                    top: 0; left: 0; width: 0;  max-width: 100%; line-height: rem(44px);  background: #fff; color: #2a2f3b;
                  }
                }
              }
              span{ display: inline-block; overflow: hidden; color: #fff; line-height: rem(44px);  }
            }
          }
        }
        .keyword-visual{ overflow: hidden; position: absolute; top: 0; left: 0; width: 100%; height: 100%;  z-index: 0;
          .keyword-clip{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; clip: rect(0,auto,auto,0);
            .keyword-image{
                  position: fixed; top: 0; left: 0; width: 100%; height: 100%;  background-image: url( ../assets/images/about/img_about-keyword.jpg);
                  background-repeat: no-repeat; background-position: center center; background-size: cover;
            }
          }
        }
    }
  }
}

// font-size: 118px;
//     font-weight: 500;
//     letter-spacing: -5px;
//     text-transform: uppercase;
//     line-height: 132px;
// }

</style>