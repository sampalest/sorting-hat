<template>
  <div class="init-form">
    <form @submit.prevent="onSubmit" novalidate="true">
      <div class="init-container-input separate-height-2" :class="[errors.length ? 'init-error' : '', animation ? 'animation' : '']">
        <input v-model="name" class="init-input" type="email" placeholder="What's your name?" minlength="1"/>
        <button type="submit">
          <img alt="arrow_logo" class="button-logo" src="../assets/icons/arrow_forward.svg">
        </button>
      </div>
      <div class="error-container">
        <div v-for="error, i in errors" :key="i" class="form-error">{{ error }}</div>
      </div>
    </form>
  </div> 
</template>

<script>
export default {
  name: 'InitForm',
  data() {
    return {
      name: '',
      errors: [],
      animation: false
    }
  },
  watch: {
    name() {
      this.errors = []
      this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
  },
  methods: {
    onSubmit() {
      this.errors = []
      
      // Check if name is not empty
      if (this.name == '') {
        this.errors.push('Name required.')
        this.animation = true
        
        // Animation duration
        setTimeout(() => {
          this.animation = false
        }, 1000)
        
        return
      }
      
      this.$router.push(`/chat/${this.name}`)
    }
  }
}
</script>
