<template>
    <div class="col-10 haeder-content">
      <div class="col-3 logo">
        <h1><a href="#" @click.prevent="handleClick()">chan's portfolio</a> </h1>
      </div>
      <div class="col-3 haeder-btn">
        <li><a href="#" @click.prevent="handleClick(0)" :class="{ active: headerIndex == 1 }">Profile</a></li>
        <li><a href="#" @click.prevent="handleClick(1)" :class="{ active: headerIndex == 2 }">Skills</a></li>
        <li><a href="#" @click.prevent="handleClick(2)" :class="{ active: headerIndex == 3 }">Project</a></li>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        headerIndex : Number,
    },
    methods: {
      handleClick(index) {
        this.$emit('some-event', index);
      },
    },
  };
  </script>
  
  <style>
  a {
    color: #333 !important;
  }
  
  .haeder-content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .logo {
    margin-left: 0;
  }
  
  .logo > h1 {
    font-size: 1.5em;
    height: 100%;
  }
  
  .haeder-btn {
  display: flex;
  margin-right: 0;
}

.haeder-btn a {
  position: relative;
  transition: border-color 0.3s cubic-bezier(0.35, 0.36, 1, 1.03);
  border-bottom: 2px solid transparent;
  margin-right: 10px;
}

.haeder-btn a.active {
  border-color: #333;
}
  </style>
  