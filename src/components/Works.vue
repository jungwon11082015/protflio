<template>
    <div id="works">
      <div class="sections" >
        <section id="section1">
          <div class="inner">
            <h2>매력적인 경험을 전달하는 다양한 포트폴리오를 알아보세요.</h2>
          </div>
        </section>
        <section id="section2">
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
                    <a href="javascript:;" >Read more</a>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        
        </section>
      </div>
    </div>
</template>

<script>
import {gsap, Expo, Power0, Power2, Sine } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'Works',
  data () {
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
          ]
      
        }
  },
 
  mounted() {
    this.worksScrollEvent();

  },

  methods:{
    worksScrollEvent: function(){
      let revealContainers = document.querySelectorAll(".works-list");

      revealContainers.forEach((container) => {
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

    },

  }
 
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_mixin.scss'; 
  #works{ padding-top: rem(100px); background: #151515;
    #section1{ padding:rem( 80px 0 0 0 ); 
      .inner{  width: rem( 1240px ); margin:0 auto; 
        h2{ margin-bottom: rem( 40px ); font-size:rem(24px); color: #fff;}
      }
    }
    #section2{  width: rem( 1240px ); margin:0 auto; 
      .works-area{ margin:rem( 0 -40px 0 -40px );
        >li{  width: 50%; float: left; text-align: left;  padding:rem( 0 40px ); box-sizing: border-box;
          .works-box{
            .text-area{ width: 100%; padding:rem( 30px 0 0 0 );   box-sizing: border-box; color: #fff;
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
              display: inline-block;
              position: relative;
              width: 100%;
              height: rem(408px);
              max-width: rem(620px);
              overflow: hidden;
              img{ height: 100%; width: 100%; object-fit: cover; transform-origin: left;} 
            }
            .text-area,
            &:after{ content: ''; display: block; clear: both; }
          }
        }
        &:after{ content: ''; display: block; clear: both; }
      }
    }
  }
</style>