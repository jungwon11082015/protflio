<template>
    <div id="content">
      <div class="sections">

        <section class="intro">
          <div class="inner">
            <div class="text-box">
                <h2 class="title">Content <br /> Me.</h2>
                <h3 class="sub-title">저는 120%의<br /> 결과물을 위해 노력합니다.</h3>
                <p class="sub-text">
                  수동적으로 움직이는 사람이 아닌 결과물의 가치를 높이고,<br />
                  더불어 더 나은 발전을 위해 120%의 결과물을 만들어 내기 위한<br />
                  능동적인 움직임을 계속 할 것입니다. 
                </p>
                <a href="javascript:;" class="btn-scroll" @click="scrollMove">SCROLL DOWN</a>
            </div>
       
            <div class="move-box">
               <video muted loop playsinline autoplay >
                  <source type="video/mp4" src="@/assets/images/content/coding.mp4"/>
                  <!-- <source type="video/mp4" src="https://player.vimeo.com/external/430278968.hd.mp4?s=39a892ba60eee32a87c8ca2ba8a3901a52cbef6a&amp;profile_id=175"/> -->
                <!-- @/assets/images/content/coding.mp4 -->
              </video>
            </div>
          </div>
        </section>

        <section class="question">
          <div class="inner">
            
            <div class="text-box">
              <h2>문의</h2>
              <p>저와 함께<br><strong>놀라운. 성장</strong><br>함께하실 <br><strong>준비 되셨나요?</strong></p>
              <span class="question-text-img"></span>
            </div>
            <div class="cont-box">
               <p class="title">프로젝트에 대한 문의나 의뢰가 있나요?<br><strong>저에게 몇가지만 알려주세요.</strong></p>
            </div>
            <form id="form" >
              <fieldset>
                  <legend>문의 정보 입력</legend>
                  <div class="form-box">
                      <h3 class="title">어떤 서비스를 준비하고 있나요?<em class="sub-text">(필수 택 1 *)</em></h3>
                      <div class="row">
                          <input type="hidden" name="typeCd">
                          <strong class="row-title">디지털 플랫폼 솔루션</strong>
                          <div class="radio-box">
                             
                              <label class="lab"  ref="radioFocus">
                                <input type="radio" id="platform1" name="solutions" class="input-radio" value="promotion" v-model="solution" >
                                <span>프로모션 사이트</span>
                              </label>
                              <label class="lab">
                                <input type="radio" id="platform2" name="solutions" class="input-radio" value="website" v-model="solution" >
                                <span>웹사이트</span>
                              </label>
                          
                              <label class="lab">
                                <input type="radio" id="platform3" name="solutions" class="input-radio" value="responsive"  v-model="solution" >
                                <span>반응형 사이트</span>
                              </label>
                              <p class="error" :class="{ on : iserror }" >필수 1개를 선택해주세요.</p>

                          </div>
                      </div>
                      <h4 class="title">예산과 일정은 어떻게 되나요?</h4>
                      <div class="row">
                          <div class="col">
                              <div class="sel-box" @click="priceOptions = !priceOptions">
                                  <span class="sel-title">{{priceItem ? priceItem.name : '예산을 선택하세요.'}}</span>
                                  <span class="sel-arrow-down" v-if="!priceOptions"></span>
                                  <span class="sel-arrow-up" v-if="priceOptions"></span>
                                  <!-- <a href="javascript:;" class="btn-sel">예산을 선택하세요.</a> -->
                                  <div class="ly-select" v-if="priceOptions">
                                      <ul class="select-list">
                                          <li v-for="option in priceOptionList" :key="option.id" @click="priceOption(option)">
                                            <label> <input type="checkbox" :value="option">{{ option.name }}</label>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>

                          <div class="col">  
                              <div class="sel-box" @click="calendarOptions = !calendarOptions">
                                  <span class="sel-title">{{calendarItem ? calendarItem.name : '일정을 선택하세요.'}}</span>
                                  <span class="sel-arrow-down" v-if="!calendarOptions"></span>
                                  <span class="sel-arrow-up" v-if="calendarOptions"></span>
                                  <div class="ly-select" v-if="calendarOptions">
                                      <ul class="select-list">
                                          <li v-for="option in calendarOptionList" :key="option.id" @click="calendarOption(option)">
                                            <label> <input type="checkbox" :value="option">{{ option.name }}</label>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <h4 class="title">의뢰하시는 분의 정보를 알려주세요.</h4>
                      <div class="row input-area">
                          <div class="col"> 
                              <div class="input-box" >
                                <label for="company" class="lab">기업명 *<span class="blind">필수입력</span></label>
                                <input type="text" id="company" v-model="company"  class="inp" name="company" maxlength="50">
                              </div>
                          </div>
                          <div class="col"> 
                            <div class="input-box" >
                              <label for="name" class="lab">이름 *<span class="blind">필수입력</span></label>
                              <input type="text" id="name" v-model="name"  class="inp" name="name" maxlength="10">
                            </div>
                           </div>
                          <div class="col"> 
                            <div class="input-box" >
                              <label for="tel" class="lab">전화번호 *<span class="blind">필수입력</span></label>
                              <input type="text" id="tel" v-model="tel"  class="inp" name="tel" maxlength="10">
                            </div>
                           </div>
                          <div class="col"> 
                            <div class="input-box" >
                              <label for="mail" class="lab">이메일 *<span class="blind">필수입력</span></label>
                              <input type="text" id="mail" v-model="mail"  class="inp" name="mail" maxlength="10">
                            </div>
                           </div>


                          <!-- <div class="col"  v-for="item in informationList" :key="item.id" > 
                              <div class="input-box" ref="inputBox"  @click="itemActive(item.id)" :class="item.class" >
                                  <label :for="item.inputLabel" class="lab">{{ item.inputText }} *<span class="blind">필수입력</span></label>
                                  <input type="text" :id="item.inputId" :v-model="item.inputModel" v-on:input="typeing"  class="inp" :name="item.inputName" maxlength="50">
                              </div>
                          </div> -->
                      </div>

                      <h4 class="title">어떻게 도와드리면 될까요?<em class="txt">(*)</em><span class="blind">필수입력</span></h4>
                      <div class="textarea-box">
                          <textarea cols="30" rows="10" placeholder="어떻게 도와드리면 될까요?" title="의뢰 내용" name="contents" maxlength="400" class="length-chk" v-on:keyup="liveCountDown" v-model="msgText"></textarea>
                          <span class="guide"><span class="text-length">{{ this.msgText.length }}</span>/400자 MAX</span>
                      </div>
                      <div class="file-box">
                          <button @click="addFiles()">파일업로드</button>

                          <label for="ex_file" class="lab">
                            파일 업로드
                             <input type="file" id="ex_file" class="inp" name="uploadFile" multiple  ref="files" v-on:change="handleFileUpload()">
                          </label><span class="txt-guide">(EACH. 20MB / TOTAL. 100MB)</span>


                          <div class="file-attached" >
                            <div class="file-item" v-for="(file, key ) in files" :key="file.key">
                              <span>{{ file.name }}</span>
                              <button type="button" class="btn-file-del" @click="removeFile( key )">
                                <span class="blind">삭제</span>
                              </button>
                            </div>
                          </div>



                          <!-- <div class="file-attached">
                            <div class="file-item">
                              <span>miasdasd.zip</span>
                              <button type="button" class="btn-file-del">
                                <span class="blind">삭제</span>
                              </button>
                            </div>
                          </div> -->
                      </div>
                      <div class="row-chk">
                          <div class="chk-box">
                              <input id="chk" type="checkbox" class="inp" name="personal" value="Y">
                              <label for="chk" class="lab"><a href="javascript:;" @click="inforPopupclick" >개인정보보호정책</a>에 동의합니다. *<span class="blind">필수</span></label>
                          </div>
                      </div>
                      <button type="button" class="btn-submit" @click="writeUserData">프로젝트 의뢰</button>
                  </div>
              </fieldset>
            </form>
          </div>

        </section>

        <section class="profile">
          <div class="inner">
            <h2>
			        더욱 자세한 이야기는<br />
              <em>자기소개서</em>를 통해 <br />
              살펴봐주세요. :) 
            </h2>
            <button class="btn-down">DownLoad
              <span class="icon-right"></span>
              <span class="icon-right after"></span>
            </button>
          </div>
        </section>
      </div>
      <aside id="popup-layer">
        <div class="popup-inner">
          <div class="popup-content">
            <a href="javascript:;" class="btn-popup_close" @click="btnPopupClose">X</a>
            <em class="title">개인정보 보호정책</em>
            <p>허정원(이하 '당사'라고 한다)에서 운영하는 개인포트폴리오는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
당사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
<p>○ 본 방침은 2021년 3월 17일부터 시행됩니다.</p>
제1조 총칙
１. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.
２. 당사는 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.
３. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
４. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.
５. 당사 회원의 개인정보보호는 당사 개인정보처리방침에 의해 이루어지고 확인 가능합니다.
          </div>
        </div>
        <div class="popup-dimd"></div>
      </aside>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Content',
  data () {
    return {
      activeIndex: 1,
      company: "",
      name: "",
      tel : "",
      mail: "",
      solution: "",
      priceItem: null,
      calendarItem: null,
      msgText: '',
      priceOptions:false,
      calendarOptions:false,
      limitmaxCount: 400,
      totalRemainCount: 400,
      files: [],
      priceOptionList:[
        { id: 0, name: '100만원 미만' },
        { id: 1, name: '500만원 미만' },
        { id: 2, name: '1000만원 미만' },
        { id: 3, name: '5000만원 미만' },
        { id: 4, name: '5000만원~ 1억' },
        { id: 5, name: '미만' }
      ],
      calendarOptionList:[
        { id: 0, name: '1개월 ~ 2개월' },
        { id: 1, name: '3개월 ~ 4개월' },
        { id: 2, name: '5개월 이상' },
        { id: 3, name: '미정' },
      ],
      iserror:false
    }
  },
 
  mounted() {
 
  //  let db = firebase.firestore();
  //     db.collection("user").get().then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //             // doc.data() is never undefined for query doc snapshots
  //             console.log( doc.data() );
  //             console.log(doc.id, " => ", doc.data());
  //         });
  //     });

      
    // let db = firebase.firestore().collection( "user" ).doc( "5FYm26Se9IUbMsLBkrMB" ).set(data); 
  // let testDb = firebase.firestore().collection("heo").doc( "newlist" );
  // console.log( testDb );

  }, 

  methods:{
    
    // //인풋
    // itemActive( id ){
    //     //if (this.activeIndex === id) return //no need to go further
    //     this.informationList.find(item => item.id === this.activeIndex).class = '' //remove the active class from old active li
    //     this.informationList.find(item => item.id === id).class = 'active' //set active class to new li
    //     this.activeIndex = id //store the new active li id
    //     // this.
    // },

    //금액관리
    priceOption: function( option ){
      this.priceItem = option;
    },
    
    //일정관리 
    calendarOption: function( option ){
      this.calendarItem = option;
    },
    //textarea 글자수 체크
    liveCountDown: function() {

      this.totalRemainCount = this.limitmaxCount - this.msgText.length;
      this.generateErr = this.totalRemainCount < 0;

      console.log( this.msgText );

    },

    addFiles: function(){
      this.$refs.files.click();
    },
    //파일 업로드
    handleFileUpload: function(){
       let uploadedFiles = this.$refs.files.files;
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
    },
    removeFile: function( key ){
      this.files.splice( key, 1 );
    },

    writeUserData(  ) {
      //서비스 this.solution
      //예산 설정 this.priceItem.name
      //일정 설정 this.calendarItem.name
      //회사명 this.company
      //이름 : this.company
      //전화번호 : this.tel,
      //이메일 : this.email

      firebase.firestore().collection("users")
      .doc("userId")
      .set({
        name: this.company,
        url: this.tel
      })
      .then(function() {
        console.log("saved!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        // todo: Show error popup
      });


      return; 
      var tutorialsRef = firebase.firestore().collection("/users");
      tutorialsRef.get().then(function(snapshot) {
        console.log( "1", snapshot )
        let tutorials = [];
        snapshot.forEach(function(childSnapshot) {
          console.log( "2", childSnapshot );
          var id = childSnapshot.id;
          return;
          var data = childSnapshot.val();
          console.log( id, data );
          tutorials.push({ id: id, title: data.title, description: data.description});
        });
        console.log( firebase );
      
      })
    
    },

    submitEvent( userEmail, username ){ 
      return;
      //서비스 this.solution
      //예산 설정 this.priceItem.name
      //일정 설정 this.calendarItem.name
      //회사명 this.company
      //이름 : this.company
      //전화번호 : this.tel,
      //이메일 : this.email

    

      // db.collection( "user" ).doc( "5FYm26Se9IUbMsLBkrMB" )({
        // usertel : this.tel
      // })
      // console.log( db.collection( "uesr" ).doc( "5FYm26Se9IUbMsLBkrMB" ).set() );

      return;
      if( !this.solution  ){
        alert( "디지털 플랫폼 솔루션 선택해주세요." );
        const el = this.$refs.radioFocus.children[0];
        el.focus();
        console.log( this.priceItem.name );
        this.iserror = true;
      }else{
         this.iserror = false;
      }
      
      
      // firebase.firestore().collection("message")
      // firebase.auth().createUserWithEmailAndPassword( this.company, this.name, this.tel, this.mail  )
      // .doc(title)
      // .set({
      //   title: this.company,
      //   // contents: this.contents
      // })
      // .then((user) => {
      //   console.log(user)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
        return; 
        let formData = new FormData();
        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
        /*
          Make the request to the POST /select-files URL
        */
        axios.post( '/select-files',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    scrollMove(){
      let scrollTaget = document.querySelector( ".question" ).offsetTop;
      window.scrollTo( 0, scrollTaget );
    },

    inforPopupclick(){
      let popupLayer = document.getElementById( "popup-layer" );
      popupLayer.style.display = "block";
    },
    btnPopupClose(){
      let popupLayer = document.getElementById( "popup-layer" );
        popupLayer.style.display = "none";
    }
  }
}
</script>

<style lang="scss">
    #content{ 

      .intro{  overflow: hidden; position: relative;  background: #f9f9f9; border-bottom: 1px solid #eee;  height:880px;
        .inner{ padding-top: 150px; width: 1194px; margin:0 auto;
          .text-box{ float: left; width: 40%;
            .title{ display: inline-block; margin-bottom:40px; font-size: 100px;line-height: 116px;  font-weight: bold;  }
            .sub-title{ margin-bottom: 40px; font-size: 24px; line-height: 1.25em; font-weight: 700; letter-spacing: -1.5px; }
            .sub-text{  font-size: 15px; line-height: 1.47em; font-weight: 300; color: #000; letter-spacing: -.9px; }
            .btn-scroll{ display: inline-block; margin-top: 50px; font-size: 12px; font-weight: 900; color: #000;
              &:before{ content: ''; display: inline-block;  margin: -1px 6px 1px 0;  vertical-align: middle;   width: 24px;  height: 24px; background:url( ../assets/images/content/normal.png ); background-size: 327px 284px; background-position: -28px -260px; }
            }
          } 
          .move-box{ float: left; margin-top: 20px;  position: relative; width: 60%; padding-bottom: 42.5%; overflow: hidden;
            video{  position: absolute; top:0; left:0; width: auto; height: 100%;
             }
          }
          &:after{ content: ''; display: block; clear: both; }
        }
      }

      .question{ 
        .inner{  padding-top: 200px; width: 1194px; margin:0 auto;
          .text-box{ position: relative; padding-bottom: 115px; border-bottom: 1px solid #e0e0e0;
            h2{ float: left; margin:10px 98px 0 0 ; font-size:28px; line-height: 1.07em; font-weight: 700; }
            p{ overflow: hidden; font-size:50px; line-height: 1.24em; font-weight: 100; color: #000; letter-spacing: -4px;
              strong{ font-weight: 700; }
            }
            .question-text-img{ position: absolute; right: 63px; bottom: 100px; height: 270px;
                  width: 374px; background: url( ../assets/images/content/bg_contact.png ) 0 100% no-repeat;
            }
          }
          .cont-box{ padding-top: 86px;
            .title{ margin-bottom: 27px; font-size: 36px; line-height: 1.39em; font-weight: 300; letter-spacing: -2px;
              strong{ font-weight: 700; }
            }
          }
          #form{
            .form-box{ padding: 30px 175px 70px; margin: 65px 0 210px; background: #fafafa; letter-spacing: -0.7px;
              .title{ margin: 70px 0 34px; font-size: 24px; font-weight: 500;  letter-spacing: -1px;
                .sub-text{ margin-left: 4px; font-size: 16px; font-weight: 500; vertical-align: 2px }
              }
              .row{ padding:14px 30px 0;
                .row-title{ display: block; margin-bottom: 16px; font-size:17px; font-weight: 500; color: #222;}
                .radio-box{ margin:0 0 24px -10px; font-size:0;
                  .input-radio{ position: absolute; z-index: -10; }
                    label{ display: inline-block; width: 20%; vertical-align: top; font-size: 0;   margin: 8px 0 0 10px;
                      span{ position: relative; display: block;  width: auto; font-size: 17px; line-height: 39px;
                      font-weight: 700; color: #666; text-align: center;  border: 1px solid #ddd;  background: #fff;  cursor: pointer; }
                      input{
                        &:checked+span{ color: #fff; background: #000; }
                      }
                    }
                  .input-radio:checked+.label{ background: #000; color: #fff;}
                  p{ display: none; margin: 10px 0 0 10px; font-size:14px; color: #559977;
                    &.on{ display: block; }
                  }
                }
                .col{ position: relative; float: left; width: 46%; font-size: 0;
                  .sel-box{ position: relative; width: initial;  border-bottom: 1px solid #ccc;
                    .sel-title{ display: block; font-size:18px; margin-bottom: 10px; cursor: pointer; }
                    .sel-arrow-down{ 
                        display: inline-block;
                        position: absolute; top: 50%;
                        right: 23px;
                        margin-top: -4px;
                        background-size: 327px 284px;
                        background-image: url( ../assets/images/content/normal.png);
                        width: 12px;
                        height: 8px;
                        background-position: -192px -212px;
                     }
                    .sel-arrow-up{
                      display: inline-block;
                      position: absolute;
                      top: 50%;
                      right: 23px;
                      margin-top: -4px;
                      background-size: 327px 284px;
                      background-image: url( ../assets/images/content/normal.png);
                      width: 12px;
                      height: 8px;
                      background-position: -208px -212px;
                    
                    } 
                    
                    // .btn-sel{ display: block; line-height: 49px; font-size: 17px; color: #222; font-weight: 500;
                    //   &:after{
                    //     content: '';
                    //     position: absolute;
                    //     top: 50%;
                    //     right: 23px;
                    //     margin-top: -4px;
                    //     background-size: 327px 284px;
                    //     background-image: url( ../assets/images/content/normal.png);
                    //     width: 12px;
                    //     height: 8px;
                    //     background-position: -192px -212px;
                    //   }
                    // }
                    .ly-select{
                      position: absolute; top:30px; left:0; 
                      max-height: 220px;
                      border: 1px solid #dddddd;
                      border-top: none;
                      overflow: hidden;
                      position: absolute;
                      z-index: 1500;
                      width: 100%;
                      margin: 0;
                      padding: 0;
                        .select-list{
                          li{
                            display: table; width: 100%;
                            height: 35px; font-size:20px;
                            padding: 0 0 0 10px;
                            background-color: #f5f5fa;
                            border-bottom: 1px solid #dddddd; box-sizing: border-box;
                            label{ display: table-cell; vertical-align: middle;     cursor: pointer;}
                            &:hover{ background: #151515;
                              label{ color: #fff;}
                            }
                          }  
                        }
                    }
                  }
                  &:after{ content: ''; display: block; clear: both; }
                  &:nth-child(even){ float: right; }
                }
                &.input-area{
                  .col{ margin-bottom: 20px;
                    .input-box{ position: relative; padding-bottom: 13px;  border-bottom: 1px solid #ccc; 
                      label{ position: absolute; top: 0;  left: 0;  font-size: 17px;  color: #222; font-weight: 600; letter-spacing: -1px; }
                      input{ width: 100%; max-width: 270px; height: 27px; font-size:17px; color: #222; border:0; background:0 0; }
                      &.active{
                        label{ left: auto;  right: 10px; color: #999; }
                      }
                    }
                    &:after{ content: ''; display: block; clear: both; } 
                  }
                  &:after{ content: ''; display: block; clear: both;}
                }
                &:after{ content: ''; display: block; clear: both;}
              }
              .textarea-box{  position: relative;  padding: 24px 29px 30px;  border: 1px solid #ddd; background: #fff; 
                textarea{ width: 100%; height: 200px;  font-size: 17px;  color: #000;  border: 0;  outline: 0;  resize: none; font-family: "NotoSansKR",  sans-serif; }
                .guide{ position: absolute;  right: 29px;  bottom: 17px;  font-size: 14px;  color: #999;  letter-spacing: -.4px; }
              }
              .file-box{ position: relative; overflow: hidden; margin-top: 30px;  letter-spacing: normal;
                .inp{ position: absolute; top:-20px; font-size:0;}
                .lab{ font-size:17px;  margin-left: 1px; line-height: 1.76em; font-weight: 700;  letter-spacing: -1px; border-bottom: 1px solid #222; cursor: pointer;}
                .txt-guide{ margin-left:4px; font-size:14px; color: #666;}
                .file-attached{ margin-top:30px; font-size:0;
                  .file-item{  position: relative; width: 360px; padding: 15px 80px 15px 20px; margin-bottom: 12px;  background: #f1f1f1; 
                    span{ font-size: 17px; line-height: 28px; font-weight: 500;  display: -webkit-box;  overflow: hidden; -webkit-line-clamp: 1;  text-overflow: ellipsis;}
                    .btn-file-del{ overflow: hidden; position: absolute;  top: 50%;  right: 0;  width: 58px;  height: 58px;  margin-top: -29px;
                      &:after{ display: inline-block;  content: '';  background-size: 327px 284px;  background-image: url( ../assets/images/content/normal.png );
                        background-position: -178px -212px; width: 10px;  height: 10px;}
                    }
                  }
                } 
              }
              .row-chk{ padding-top: 40px; margin:70px 0 80px; border-top: 1px solid #ccc;
                .chk-box{
                  input{ position: absolute; z-index: -10;
                    &:checked+.lab{
                      &:before{  border-color: #000; background-position: -298px -173px; }
                    }
                  }
                  .lab{ line-height: 25px; font-weight: 300; cursor: pointer; font-size:17px; color: #222;
                    &:before{ float: left;  background-size: 327px 284px;  background-image: url( ../assets/images/content/normal.png );  width: 25px;  height: 25px; margin-right: 8px;  border: 1px solid #ddd;  content: '';  background-position: -268px -204px;}
                    a{ font-weight: 500; font-size:17px; color: #222; font-weight: bold;}
                  }
                }
              }
              .btn-submit{ width: 240px; height: 60px; font-size: 17px; font-weight: 700; color: #fff; text-align: center;  background: #000; }
            }
          }
        }
      }

      .profile{
        .inner{ width: 1194px; margin:0 auto;  padding-bottom: 100px; text-align: right;
          h2{ margin-bottom: 40px; font-size: 60px; line-height: 1.3em; font-weight: 100; color: #000; letter-spacing: -2.7px;  text-align: left;
            em{ font-weight: 800; }
          }
          .btn-down{ 
              display:inline-block;
            	letter-spacing: 1px;
              background: none;
              color: white;
              position: relative;
              outline: none;
              border: none;
              height: 50px;
              width: 190px;
              font-size: 14px;
              z-index: 2;
              transition: .01s .23s ease-out all;
              background: #000;
              overflow: hidden;
              &:before{ content: ""; position: absolute; left: 0;  top: 0; height: 100%;  width: 55%;  background: #202020; z-index: -1; transition: 0.3s ease-in all; }
              &:after{ content: ""; position: absolute; left: -5%; top: 5%;  height: 90%; width: 5%; background: #e0e0e0;  z-index: -1; transition: 0.4s 0.02s ease-in all;}
              &:hover{
                cursor: pointer;
                color: transparent;
                	&:before {
                    left: 100%;
                    width: 25%;
                  }
                  &:after {
                    left: 100%;
                    width: 70%;
                  }
                  .icon-right{
                    &.after{
                      &:after{ left: -80px; color: white; transition: .2s .2s ease all; }
                      &:before{ left: -108px;	top: 14px; opacity: 0.2; color: #fff;  }
                    }
                  }
              }
            .icon-right{ position: absolute; top:0; right:8px;
              &:after{ content: "→"; font-size: 24px; display: inline-block;  position: relative;  top: 26px;  transform: translate3D(0, -50%, 0);}
              &.after{
                &:before{ content: "DownLoad"; position: absolute; left: -230px; top: 14px; opacity: 0; transition: 0.2s ease-in all;  }
                &:after{ 	left: -250px; color: black;	transition: .15s .25s ease left, .5s .05s ease color; }
              }
            }
          }
        }

      }

      #popup-layer{ display: none; position: fixed; top:0; left:0; width: 100%; height: 100%;
        .popup-inner{ display: flex; width: 100%; height: 100%;   align-items: center;   justify-content: center;
          .popup-content{ position: relative; width: 650px; height: 650px; background: #fff; z-index: 801;
          .btn-popup_close{ position: absolute; top:10px; right:30px; font-size:36px; color: #151515; }
            .title{ display: block; margin:40px 0 20px;  font-size:26px; text-align: center;}
            p{ font-size:14px; margin:0 18px; line-height: 1.5;}
          }
        }
        .popup-dimd{ position: absolute; top:0; left:0; width: 100%; height: 100%; background: #151515; opacity: 0.6; z-index: 800;}
      }
    }
</style>