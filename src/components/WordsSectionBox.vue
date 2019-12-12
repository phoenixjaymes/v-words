<template>
  <div v-if="radioChoice === 'paragraphs'">
    <p
      v-for="paragraph in generatedWords"
      v-bind:key="paragraph.id"
    >{{paragraph.words}}</p>
  </div>
  <div v-else>
    {{generatedWords}}    
  </div>
</template>

<script>
export default {
  name: 'WordsSectionBox',
  props: [
    'radioChoice',
    'generatedWords',
  ],
  data() {
    return {
      // words: this['generated-words'],
    }
  },
  methods: {
    getWords() {
      let words;
      
      if (this.radioChoice === 'paragraphs') {
        words = this.generatedWords.map((paragraph, i) => <p key={i}>{paragraph}</p>);
      } else {
        words = '<p>{this.generatedWords}</p>';
      }
      return words;
    }
  }
}
</script>