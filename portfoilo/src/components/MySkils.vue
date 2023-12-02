<template>
    <div class="col-10" id="skil">
        <div class="content_header col-12">
            <h1>Skils</h1>
        </div>
        <div class="col-12 content">
            <canvas id="front"></canvas>
            <canvas id="back"></canvas>
        </div>

    </div>
</template>
  
<script>
import { Chart, registerables } from 'chart.js'; // import 추가

export default {
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            let front = document.getElementById('front').getContext('2d');
            let back = document.getElementById('back').getContext('2d');

            Chart.register(...registerables); // 차트 유형 등록

            new Chart(front, {
                type: 'bar',
                data: {
                    labels: ['HTML5', 'CSS3', 'bootStrap', 'SCSS', 'JavaScript', 'jQuery', 'Vue', 'React', 'TypeScript'],
                    datasets: [{
                        label: 'frontend skils',
                        backgroundColor: '#5cb6be',
                        borderColor: '#fff',
                        data: [90, 80, 70, 60, 70, 70, 65, 40, 35],
                        color: '#fff',
                    }]
                },
                options: {
                    scales: {
                        y: {
                            max: 100, // y축의 최대값을 100으로 설정
                        },
                    },
                },
            });
            new Chart(back, {
                type: 'bar',
                data: {
                    labels: ['node.js', 'php', 'spring boot', 'express', 'mysql'],
                    datasets: [{
                        label: 'backend skils',
                        backgroundColor: '#ff6384',
                        borderColor: '#ff6384',
                        data: [50, 45, 45, 50, 55]
                    }]
                },
                options: {
                    scales: {
                        y: {
                            max: 100, // y축의 최대값을 100으로 설정
                        },
                    },
                },
            });
        }
    },
}
</script>
  
<style>
.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#front,
#back {
    width: 80% !important;
    height: 300px !important;
    margin-top: 30px;
}
</style>
