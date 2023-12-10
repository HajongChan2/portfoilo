<template>
  <nav class="col-10 navbar navbar-expand-lg bg-body-tertiary" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="handleClick()">chan's portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navber-nav">

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="handleClick(0)" :class="{ active: headerIndex == 1 }">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="handleClick(1)" :class="{ active: headerIndex == 2 }">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="handleClick(2)" :class="{ active: headerIndex == 3 }">Project</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  props: {
    headerIndex: Number,
  },
  methods: {
    handleClick(index) {
      this.$emit('some-event', index);
    },
  },
};
</script>
  
<style>
#navbar{
  background-color: transparent !important;
  max-width: 1920px;
}
#navber-nav{
  margin-right: 0 !important;
}

@media (max-width: 820px) {
  #navber-nav{
    background-color:#fff;
    opacity: 0.8;
  }
}
</style>
  