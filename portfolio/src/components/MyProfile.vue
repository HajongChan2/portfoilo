<template>
    <div class="container col-10" id="profile">
      <div class="content col-12" id="profileContent">
        <div class="content_header col-12">
          <h1>Profile</h1>
        </div>
        <div class="col-12">
          <div class="left_img">
            <img src="../assets/myphoto.png" alt="">
          </div>
        </div>
        <div class="my_info col-12">
          <div class="info col-5" v-for="(profile, index) in profiles" :key="index">
            <img :src="profile.img" alt="">
            <div class="col-10 content_font">
              <h3 class="profileTitle">{{ profile.title }}</h3>
              <p class="profileValue">{{ profile.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profiles: [
          {
            img: require('../assets/name.png'),
            title: '이름',
            value: '하종찬',
          },
          {
            img: require('../assets/birthday.png'),
            title: '생년월일',
            value: '1999-03-05',
          },
          {
            img: require('../assets/addr.png'),
            title: '주소',
            value: '경기도 광주시',
          },
          {
            img: require('../assets/pen.png'),
            title: '학력',
            value: `신구대학교(IT소프트웨어학과)`,
          },
          {
            img: require('../assets/phone.png'),
            title: '전화번호',
            value: '010-5043-3050',
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  #profile{
    padding-top: 40px;
  }
  #profileContent{
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    padding : 10px;
  }
  .container {
    height: 100%;
  }
  
  .content_header {
    margin-bottom:30px;
    text-align: center;
  }
  
  .content_header > h1 {
    text-align: center;
    font-size: 2.8em;
    display: inline-block;
    border-bottom: 3px solid #fff;
    padding:20px;
    color : #fff;
  }
  .left_img{
    text-align: center;
  }
  .left_img > img {
    width: 250px;
    height: 250px;
  }
  
  .my_info {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    justify-content: space-between;
  }
  
  .info {
    display: flex;
    align-items: center;
    margin : 30px 0;
  }
  
  .info > img {
    width: 50px;
    height: 50px;
  }
  
  .content_font {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 .profileTitle,  .profileValue{
  color : #fff;
  font-weight: 500;
  
 }
.profileTitle{
  font-size: 1.2em;
}
.profileValue{
  font-size: 1.0em;
}
 @media (max-width: 820px) {
  .info > img {
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 480px) {
  .info > img {
    width: 30px;
    height: 30px;
  }
  .info{
    margin : 10px 10px;
  }
}
  </style>
  