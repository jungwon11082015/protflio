<template>
    <div id="about" ref="visualTarget">
        <div class="sections">

          <section class="belief">
            <div class="text-box">
              <h2>
                수많은 경험과 축적된 노하우로<br />
                <em>고객의 가치가 사용자</em>에게 닿을 수 있게<br />
                끊임없이 노력하는 허정원입니다.
              </h2>
              <h3 class="sub-title">Digital Platform Building</h3>
              <p class="sub-text">
               Web & Mobile Web Platform
              </p>
              <span class="belief-tag">나만의 신념</span>
              <div class="belief-float">
                <em>실패를 두려워하지 말라</em>
                <p class="belife-float-text">도전한 뒤의 실패보다, 아무것도 하지 않는 것을 두려워하라.</p>
              </div>
            </div>
            <div class="belife-visual" >
              <div class="belife-visual-clip">
                <div class="belife-visual-img" ></div>
              </div>
            </div>
          </section>

          <section class="value">
            <div class="inner">
              <div class="text-box">
                작업을 할때<br />
                아래의 네 가지 가치를<br />
                가장 중요시합니다
              </div>
              <span class="values-tag">중요가치</span>
              <ol class="values-list">
                <li>
                  <span class="values-count">하나</span>
                  <strong>
                    언제나 본질과 <span>why</span>에 집중합니다.
                  </strong>
                  <p class="values-explain">
                    항상 가장 중요한 것이 무엇인지<br>
                    먼저 생각하고 끊임없이 ‘왜’라는 질문을 던집니다.
                  </p>
                </li>
                <li>
                  <span class="values-count">둘</span>
                  <strong>
                    코드의 간결성과 유지보수를<br />
                    쉽게 할수 있는 코드
                  </strong>
                  <p class="values-explain">
                    단순히 좋은 코드를 만들자가 아니라, 이 코드를<br>
                    다른사람이 사용할수 있도록 쉽고 간단하게 코드를 작성합니다.
                  </p>
                </li>
                <li>
                  <span class="values-count">셋</span>
                  <strong>
                    주도적인 사람이 되자!
                  </strong>
                  <p class="values-explain">
                    아이디어 방향 제시 및 <span>UI</span> 구축시 알고 있는 지식을,<br>
                    공유 하며, 한층 더 업그레이드되는 사이트를 만들고자합니다.
                  </p>
                </li>
                <li>
                  <span class="values-count">넷</span>
                  <strong>
                    나보다 다른사람의 생각이 <br>
                    옳을 수 있다는 사실을 인정합니다.
                  </strong>
                  <p class="values-explain">
                    내가 틀리고 다른사람의 옳을 수 있다는 사실을 인정하면,<br>
                    어제보다 더 나은 제 자신이 된다고 생각합니다.
                  </p>
                </li>

              </ol>
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
     this.gsap = gsap;
  },
  mounted() { 
     this.scrollAnimation();
  },

  methods: {
    scrollAnimation(){
      let beliefTarget = document.querySelector( ".belief" );
      let beliefTextBox = document.querySelector( ".belief .text-box" );
      let belieImg = document.querySelector( ".belife-visual-img" );

      let keywordTarget = document.querySelector( ".keyword" );
      let keywordItems = document.querySelectorAll( ".keyword-atcion" );
      let keywordImg = document.querySelector( ".keyword-image" );
      
      // const tl = new timeline;

      //스크롤 트리거 사용방법
      // markers ==> 위치값 표시
      // scrub ==> 지정된 영역에 들어가거나 나갈때 애니메이션 작업

      //about 비주얼 영역
      gsap.to( belieImg, 0.3, { top:-300, ease: Power0.easeInOut,
        scrollTrigger:{
          trigger: beliefTarget,
          start: "top top",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      
      }),

      gsap.to( beliefTextBox, { yPercent: 80, opacity:0, ease: Sine.easeInOut,
        scrollTrigger:{
          trigger: beliefTarget,
          start: "top top",
          end: "top+=80% center",
          scrub: true,
        }
      }),

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
      
      // gsap.to( keywordItems, { css:{ width: 100+"%" }) 
      //   scrollTrigger: {
      //     trigger: keywordTarget,
      //     start: "top top+=30%",
      //     end: "bottom bottom-=30%",
      //     scrub: true,
      //   }
      // })
      // .to( keywordItems, { width: 100+"%",  ease:Power0.easeInOut  })


      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: aboutTarget,
      //     start: "top top",
      //     end: "bottom bottom",
      //     pin: true,
      //     scrub: true,
      //     markers: true,
      //   }
      // })

      // .fromTo(this.section1Title,{ y: 0 },{  y: 500, opacity: 0, stagger: 0.2 })
      // .fromTo(this.section1Bg,{ top: 469 },{  top: -250  })


      // .from( this.section1Bg, {
      //   top: -250,
      //   stagger: 0.2
      // }, "-=0.5");


      // .to( this.section1Title, 0.75, { y : 100, opacity: 0, ease:Power0.easeInOut })
      //  gsap.timeline({
      //   scrollTrigger: {
      //     trigger: aboutTarget,
      //     start: "top top",
      //     end: "bottom bottom",
      //     pin: true,
      //     scrub: true,
      //   }
      // })
      // .to( this.section1Bg, { top: -250,  ease:Power0.easeInOut  })

      // let keywordItems = document.querySelectorAll( ".keyword-atcion" );

      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: keywordTarget,
      //     start: "top top",
      //     end: "bottom bottom",
      //     markers: true,
      //     scrub: true,
      //   }
      // })
      // .to( keywordItems, { width: 100+"%",  ease:Power0.easeInOut  })
      // keywordItems.forEach( function( ele, index ){
      //   gsap.to( ele, 0.35, { width: 100+"%",  ease:Expo.easeInOut, delay: index * 0.35 });
      // },)
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/_mixin.scss'; 
  #about{  position: relative; 
    .sections{ padding-top:rem(280px);
      .belief{ 
        .text-box{ position: absolute; top: rem(280px); left:50%; margin-left:rem(-597px); width: rem(1194px);
          h2{ font-size:rem(40px);  letter-spacing: -1.5px; line-height: 1.2; font-weight: 700;
            em{ display: inline-block; font-weight: 700; color: #015eb2; }
          }
          .sub-title{ position: relative; margin-top: rem(30px); padding-top: rem(40px); font-size: rem(24px);  line-height: 1.4; letter-spacing: -.25px; font-family: 'Old Standard TT'; font-weight: bold;
            &:after{ content: ''; display: block; position: absolute; top:0; left:0; width: rem(30px); height: rem(30px); background:url( ../assets/images/about/about_icon_sub-text.svg ) 0 0 no-repeat; background-size: rem(30px) auto; }
          }
          .sub-text{ margin-top: rem(10px); font-size:rem(16px); font-family: 'Old Standard TT'; }
          .belief-tag{ 
            position: absolute; top: rem(464px); left: 0; font-size: rem(16px); letter-spacing: -.5px;  
            transform: rotate( -90deg) translate(0,-50%);
            transform-origin: 50% 100%;  color: #000;
          }
          .belief-float{ position: absolute; top:rem(350px); left:50%; right: auto; min-width: rem(196px); color: #151515;
            em{ display: block; font-size:rem(24px); margin-bottom: rem(22px); letter-spacing: rem(1px); font-weight: 700;}
            .belife-float-text{ font-size: rem(14px); line-height: 1.71; letter-spacing: -.2px;}
          }
        }
        .belife-visual{ position: relative; top: 0; left: 0; width: 100%;  height: rem(800px); z-index: -1;
          .belife-visual-clip{  position: absolute; top: 0; left: 0;  width: 100%;  height: 100%;  clip: rect(0,auto,auto,0);
            .belife-visual-img{ 
              position: fixed; top:rem(469px); left:0; width: 100%; height: 100%; background: #fff;
              background-image:url( ../assets/images/about/img_about__belief.jpg );  background-repeat: no-repeat;  background-size:100% auto;  z-index: 1;
            }
          } 
        }
      }

      .value{ position: relative;
        .inner{ position: relative; width: rem(1194px); margin:0 auto; padding:0;
          .text-box{ padding: rem(160px 0 260px); font-size: rem(48px); line-height: 1.38; letter-spacing: -1.5px; font-weight: 700;}
          .values-tag{ position: absolute; left: rem(-30px); font-size: rem(14px);  letter-spacing: -0.2px; transform: rotate(-90deg) translate(-25%, 0);
            transform-origin: 50% 0; top: rem(430px); color: #000; transform: rotate(-90deg) translate(-25%, 25%)
          }
          .values-list{ display: flex; justify-content: space-between; flex-wrap: wrap; color: #292f3c;
            li{ position: relative; flex: none;  width: 50%;  margin-bottom: rem(100px); padding-left: rem(72px); box-sizing: border-box;
              .values-count{ display: block; position: absolute; top: 0; left: 0; font-size: rem(24px); line-height: normal; letter-spacing: rem(1px); font-weight: bold; }
              strong{ display: block; font-size: rem(24px);  line-height: normal; letter-spacing: rem(1px); font-weight: 500; min-height: rem(72px); }
              .values-explain{ display: block; margin-top: rem(20px); font-size: rem(14px); line-height: 1.5; letter-spacing: rem(-0.62px);
                span{ font-family: 'Old Standard TT'; font-weight: 500;}
              }
            }
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
</style>