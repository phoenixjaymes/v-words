<template>
  <form class="main-form" v-on:submit.prevent="handleGenerateClick()">
    <label htmlFor="txtQty">
      <input
        id="txtQty"
        class="main-form__qty"
        type="text"
        v-model="quantity"
        placeholder="5"
      />
      {{maxMessage}}
    </label>
    <br />

    <label class="main-form__label" htmlFor="radWords">
      <input
        id="radWords"
        type="radio"
        name="wordType"
        value="words"
        v-model="radioChoice"
      />
      &nbsp;Words
    </label>

    <label class="main-form__label" htmlFor="radParagraphs">
      <input
        id="radParagraphs"
        type="radio"
        name="wordType"
        value="sentences"
        v-model="radioChoice"
      />
      &nbsp;Sentences
    </label>

    <label class="main-form__label" htmlFor="radSentences">
      <input
        id="radSentences"
        type="radio"
        name="wordType"
        value="paragraphs"
        v-model="radioChoice"
      />
      &nbsp;Paragraphs
    </label>

    <button class="main-form__btn" type="submit">Generate Words</button>
  </form>
</template>

<script>
export default {
  name: 'WordsSectionForm',
  data() {
    return {
      quantity: '5',
      msgTypeMax: 'Max words are 400',
      radioChoice: 'words',
    }
  },
  methods: {
    handleGenerateClick() {
      const formObject = {
        radioChoice: this.radioChoice,
        qty: this.quantity,
      };

      this.$emit('generate-words', formObject);
    }
  },
  computed: {
    maxMessage() {
      let message;

      if (this.radioChoice === 'words') {
        message = 'Max words are 400';
      } else if (this.radioChoice === 'sentences') {
        message = 'Max sentences are 100';
      } else if (this.radioChoice === 'paragraphs') {
        message = 'Max paragraphs are 15';
      }

      return message;
    },
  },
}
</script>

<style>
.main-form {
  margin-bottom: 20px; }
  .main-form__qty {
    border: 1px solid;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 2px 3px;
    width: 30px; }
  .main-form__label {
    padding: 0 3px; }
  .main-form__btn {
    border: 1px solid;
    border-radius: 5px;
    display: block;
    margin-top: 10px;
    padding: 4px 7px; }
</style>