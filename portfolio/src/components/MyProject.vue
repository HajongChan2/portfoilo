<template>
    <div class="content_header col-12" id="project">
        <h1>Project</h1>
    </div>
    <div class="cards-container col-10">
        <div v-for="(card, index) in cards" :key="index" class="cards" @click="flipCard(card)"
            :class="{ 'is-flipped': card.isFlipped }" @mouseover="hoverCard(true, card)" @mouseout="hoverCard(false, card)">
            <div class="face face-front">
                <img :src="card.frontImage" alt="">
            </div>
            <div class="face face-back">  
                <div class="col-10 back-container">
                    <div class="Links">
                        <a class="gitLink" v-bind:href="card.git" target='_blank'>github</a>
                        <a class="demoLink" v-if="card.demo != ''" v-bind:href="card.demo">demo</a>
                    </div>
                    <h4 class="backHeader">{{ card.backHeader }}</h4>
                    <p class="backContent">{{ card.backContent }}</p>
                    <div class="Period">
                        <h4 class="backSubTitle">Period</h4>
                        <p class="backContent">{{ card.backPeriod }}</p>
                    </div>
                    <div class="Tech">
                        <h4 class="backSubTitle">Tech</h4>
                        <p class="backContent">{{ card.backTech }}</p>
                    </div>
                    <div class="Work">
                        <h4 class="backSubTitle">Work</h4>
                        <p class="backContent">{{ card.Work }}</p>
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
            cards: [
                { frontImage : require("@/assets/snack.png") ,git : "https://github.com/Singan/shop-project", demo : '', backHeader: "snack-shop",backContent:'여러가지 스낵을 보다 저렴하게 구매할 수 있는 웹 페이지입니다.' , backPeriod : '2022-09-26 ~ 2022-12-17',backTech : 'HTML, css, Jquery, Ajax, swiper', Work : 'Ajax 비동기 통신, 회원가입 RegExp 정규표현식, swiper 이용해서 슬라이드 구성', isFlipped: false },
                { frontImage : require('@/assets/abandog.png') ,git : "https://github.com/HajongChan2/abandoned_dog_site",demo : '', backHeader: "abandog",backContent:'최근 늘어난 유기견 문제를 효율적으로 해결하기 위해 만들어진 웹 페이지입니다.' , backPeriod : '2023-03-15 ~ 2023-06-15',backTech : 'HTML, css, Jquery, Ajax, swiper, Kakao API', Work : 'Ajax 비동기 통신, Kakao API 이용하여 주소 찾기, 회원가입 RegExp 정규표현식, swiper 이용해서 슬라이드 구성', isFlipped: false },
                { frontImage : require('@/assets/radiation.png') ,git : "https://github.com/HajongChan2/radiation",demo : 'https://port-0-radiation-32updzt2alpie8v5q.sel5.cloudtype.app/', backHeader: "radiation",backContent:'최근 일본의 방사능 이슈를 위해 직관적으로 수치를 볼 수 있게 만든 웹 페이지입니다.' , backPeriod : '2023-09-19 ~ 2022-11-29',backTech : 'HTML, css, vue, axios, scss, node js, boot strap, express, mysql, socket io, dotenv', Work : 'express를 이용한 서버구축, mysql 사용, socket을 이용한 클라이언트와 통신, dotenv를 이용한 환경변수 관리, bootstrap을 이용한 css', isFlipped: false },
                { frontImage : require('@/assets/portfoilo.png') ,git : "",demo : '', backHeader: "portfolio",backContent:'저를 소개하고 기술 및 프로젝트를 보여주기 위해 만든 웹 페이지입니다.' , backPeriod : '2023-11-30 ~ 2022-12-04',backTech : 'HTML, css, vue, node js, boot strap, expess, chart js', Work : 'express를 이용한 서버구축, chart js를 이용한 그래프 그리기', isFlipped: false },
            ],
        };
    },
    methods: {
        flipCard(clickedCard) {
            clickedCard.isFlipped = !clickedCard.isFlipped;
        },
        hoverCard(isHovered, card) {
            card.isHovered = isHovered;
        },
        
    },
};
</script>
  
<style>
.cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: flex-start;
    padding-top: 50px;
}

.cards {
    width: 100%;
    height: 300px;
    position: relative;
    perspective: 600px;
    cursor: pointer;
}

.cards .face {
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: 1s;
    position: absolute;
    backface-visibility: hidden;
    background-color: #fff;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 10px;
}

.face-front-hovered::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.5;
    top: 0;
}
.face-front > img{
    width: 100%;
    height: 100%;
}
.cards .face-front {
    transform: rotateY(0deg);
}

.cards.is-flipped .face-front {
    transform: rotateY(-180deg);
}

.cards .face-back {
    transform: rotateY(180deg);
}

.cards.is-flipped .face-back {
    transform: rotateY(0deg);
}

.cards .face-front::before {
    content: "Click me";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0;
    top: 0;
    color: white; 
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
}

.cards:hover .face-front::before,
.cards.is-hovered .face-front::before {
    opacity: 0.5;
}

.backHeader{
    font-size: 1.3em;
    font-weight: 700;
    font-family: Nanum Gothic,sans-serif;
}
.back-container{
    position: relative;
}
.Links{
    position : absolute;
    top : 0;
    right : 0;
}
.demoLink,
.gitLink{
    font-size: 0.8em;
    border-radius: 10px;
    padding: 3px 5px;
    background-color: #dbd9d9;
}
.gitLink{
    
    margin-right: 5px;
}


.demoLink:hover,
.gitLink:hover{
    transition: .2s;
    background-color: #c3c3c3;
}
.backSubTitle{
    font-size: 1.0em;
    font-weight: 600;
}
.backContent{
    font-size: 0.7em;
    line-height: 1.4;
    word-break: keep-all;
    font-family: Nanum Gothic,sans-serif;
}
</style>
  