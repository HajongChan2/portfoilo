<template>
    <div class="content_header col-12" id="skill">
        <h1>Skills</h1>
    </div>
    <div class="col-10">
        <div class="col-12 MySkills" v-for="skill in skills" :key="skill.name">
            <h5 class="col-2 skillName">{{ skill.name }}</h5>
            <div class="skillContent">
                <div class="skill" :style="{ width: skill.width }" @mouseover="showTooltip(skill)" @mouseleave="hideTooltip">
                    <span>{{ skill.width }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            skills: [
                { name: 'HTML', width: '90%' },
                { name: 'CSS', width: '80%' },
                { name: 'SCSS', width: '60%' },
                { name: 'BootStrap', width: '70%' },
                { name: 'JS', width: '75%' },
                { name: 'Jquery', width: '75%' },
                { name: 'Vue', width: '70%' },
                { name: 'React', width: '55%' },
                { name: 'node js', width: '50%' },
                { name: 'PHP', width: '65%' },
                { name: 'mysql', width: '55%' },
            ],
            showTooltipFlag: false,
            hoveredSkill: null,
        };
    },
    methods: {
        showTooltip(skill) {
            this.showTooltipFlag = true;
            this.hoveredSkill = skill;
        },
        hideTooltip() {
            this.showTooltipFlag = false;
            this.hoveredSkill = null;
        },
    },
};
</script>
  
<style>
.MySkills {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 35px;
}

.skillName {
    color: #fff;
    margin: 0;
    font-size: 1.0em;
}

.skillContent,
.skill {
    height: 25px;
    border-radius: 5px;
    position: relative;
}

.skillContent {
    width: 100%;
    background-color: #fff;
}

.skill {
    border-radius: 0 15px 15px 0;
    background-color: #63CC63;
    opacity: 0.8;
    margin-left: 0;
    position: relative;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;
}
.skill > span {
    position : absolute;
    right : 20px;
    color : #fff;
    font-weight: bold;
}
.tooltipText {
    white-space: nowrap;
    color: #333;
    font-size: 0.7em;
}

@media (max-width: 480px) {
  .skillName{
    font-size: 0.8em;
  }
}

</style>
