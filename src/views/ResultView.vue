<template>
  <div id="result">
    <div class="vertical-center height-vh-95">
      <div class="col-12">
        <div class="title animate__fadeInDown animate__animated">
          <span class="first">Perfect! Your house is </span>
          <span class="second">{{ getHouse() }}</span>
        </div>
        <div class="subtitle animate__fadeInUp animate__animated">
          <RouterLink :to="{ name: 'home' }" class="btn">Try again</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultView',
  data() {
    return {
      house: {
        "g": "Griffindor",
        "h": "Hufflepuff",
        "r": "Ravenclaw",
        "s": "Slytherin"
      }
    }
  },
  methods: {
    getHouse() {
      if (typeof this.house[this.$route.params.house] === 'undefined') {
        this.$router.push({ name: 'home' });
      }

      return this.house[this.$route.params.house];
    }
  }
}
</script>
