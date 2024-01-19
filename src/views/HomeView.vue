<template>
  <div id="home">
    <div class="vertical-center height-vh-95">
      <div class="col-12">
        <div class="title animate__fadeInDown animate__animated">
          <span class="first">WELCOME TO </span>
          <span class="second">SORTING HAT</span>
        </div>
        <InitForm class="separate-height-2 animate__fadeInUp animate__animated"/>
      </div>
    </div>
  </div>
</template>

<script>
import InitForm from '@/components/InitForm.vue'

export default {
  name: 'HomeView',
  components: {
    InitForm
  }
}
</script>
