<template>
  <div class="chat-window">
    <transition-group tag="div" @enter="onEnter" appear>
      <div class="bubble col-md-6 col-12">
        <div class="bubble-content animate__bounceInDown animate__animated">
          <b>Hat:</b> Hi, {{ $route.params.name }}! I'm Hat, your personal assistant.
          I'm here to help you choose the right house for you. Let's get started!
        </div>
      </div>
      <template v-if="start">
        <template v-for="(item, i) in questions" :key="i">
          <div class="row">
            <div class="bubble col-md-6 col-12">
              <!-- Question -->
              <div class="bubble-content animate__fadeInLeft">
                <b>Hat:</b> {{ item['title'] }}
              </div>
              <!-- Answers -->
              <div v-if="questions[i].hasOwnProperty('answers')" class="bubble-answers mb-3 animate__fadeInUp animate__animated hide">
                <div v-for="(answer, i) in item['answers']" :key="i" class="bd-highlight col-xl-4">
                  <button @click="addToAnswers(answer)" class="btn m-2">{{ answer["title"] }}</button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="questions[i].hasOwnProperty('selected')" class="row">
            <!-- Selected -->
            <div class="bubble-answers justify-content-end">
              <div class="bubble-content green animate__fadeInLeft animate__fadeInRight animate__animated">
                <b>{{ $route.params.name }}</b>: {{ item['selected'] }}
              </div>
            </div>
          </div>
        </template>
      </template>
    </transition-group>
  </div>
</template>

<script>
const data = require('@/assets/data/questions.json')

export default {
  name: 'ChatView',
  data() {
    return {
      questions: [],
      answers: [],
      data: [],
      index: 0,
      start: false,
      scores: {
        "g": 0,
        "h": 0,
        "r": 0,
        "s": 0
      }
    }
  },
  created() {
    // Deep copy of data
    // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
    this.data = JSON.parse(JSON.stringify(data));
    this.questions.push(this.data[0]);
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.start = true;
      }, 1500);
    });
  },
  methods: {
    onEnter(el, done) {
      this.$nextTick(() => {
        let animationDuration = 1000;
        let content = el.querySelector(".bubble-content");
        let answers = el.querySelector(".bubble-answers");

        if (content != null) {
          el.querySelector(".bubble-content").classList.add('animate__animated');
        }
        if (answers != null) {
            setTimeout(() => {
              answers.classList.remove('hide');
              this.scrollDown();
              done();
            }, animationDuration);
          }
      });
    },
    addToAnswers(answer) {
      if (this.index == this.data.length - 1) {
        this.$router.replace(`/result/${this.getResult()}`);
        return
      }

      this.questions[this.index]['selected'] = answer['title'];
      delete this.questions[this.index]['answers'];

      this.index++;
      this.questions.push(this.data[this.index]);

      this.calculatePoints(answer);
    },
    scrollDown() {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 1000);
    },
    calculatePoints(answer) {
      for (let key in this.scores) {
        this.scores[key] += answer['scores'][key];
      }
    },
    getResult() {
      let maxKeys = [];
      let maxValue = 0;

      for (let key in this.scores) {
        if (this.scores[key] > maxValue) {
          maxValue = this.scores[key];
          maxKeys = [key];
        }
      }

      return maxKeys;
    }
  }
}
</script>