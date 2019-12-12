<template>
  <section>
    <h1>{{getHeading()}}</h1>
    
    <WordsSectionForm v-on:generate-words="generateWords"></WordsSectionForm>

    <WordsSectionBox
      v-bind:radio-choice="radioChoice"
      v-bind:generated-words="generatedWords"
    ></WordsSectionBox>

    <p class="error">{{errorMsg}}</p>
  </section>
</template>

<script>
import { store } from '../store';

import WordsSectionForm from './WordsSectionForm';
import WordsSectionBox from './WordsSectionBox';

export default {
  name: 'WordsSection',
  components: {
    WordsSectionForm,
    WordsSectionBox,
  },
  data() {
    return {
      storeState: store.state,
      radioChoice: '',
      generatedWords: '',
      errorMsg: '',
    }
  },
  methods: {
    getHeading() {
      const wordsType = this.storeState.wordsType;

      if (wordsType === 'doctor') {
        return 'Doctor Who Words';
      } else {
        return wordsType.charAt(0).toUpperCase() + wordsType.substring(1) + ' Words';
      }
    },
    getWordsArray(data) {
      const cleanData = data.replace(/,|\.|\?|!/g, '');
      const output = cleanData.split(' ');
      return output;
    },
    getSentencesArray(words) {
      let newWords = words;
      let posEndSlice;
      const sentences = [];

      // Loop while there are words
      while (newWords.length !== 0) {
        const indexes = [];
        indexes.push(newWords.indexOf('.'));
        indexes.push(newWords.indexOf('!'));
        indexes.push(newWords.indexOf('?'));
        indexes.sort((a, b) => a - b);

        // Loop through indexes and get the lowest number
        for (let j = 0; j < indexes.length; j += 1) {
          if (indexes[j] !== -1) {
            posEndSlice = indexes[j];
            break;
          } else {
            posEndSlice = indexes[j];
          }
        }

        // Break while loop if there is no (.!?)
        if (posEndSlice === -1) {
          break;
        }

        // Add sentence to sentences array
        sentences.push(newWords.slice(0, posEndSlice + 1));

        // Create new newWords string minus the sentence that was just removed.
        newWords = newWords.substr(posEndSlice + 1).trim();
      }

      return sentences;
    },
    shuffle(array) {
      const newArray = array;
      let m = newArray.length;
      let t;
      let i;

      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * (m -= 1));

        // And swap it with the current element.
        t = newArray[m];
        newArray[m] = newArray[i];
        newArray[i] = t;
      }

      return newArray;
    },
    generateWords(formObject) {
      this.radioChoice = formObject.radioChoice;

      if (formObject.radioChoice === 'words') {
        this.makeWordsList(formObject.qty);
      } else if (formObject.radioChoice === 'sentences') {
        this.makeSentencesList(formObject.qty);
      } else if (formObject.radioChoice === 'paragraphs') {
        this.makeParagraphsList(formObject.qty);
      }
    },
    makeWordsList(quantity) {
      const maxWords = 400;
      const wordsType = this.storeState.wordsType;
      const data = this.storeState[wordsType + 'Words'];
      let output = '';
      let outputMsg = '';
      let arrWords = this.getWordsArray(data.words);
      let shuffledWords;

      if (quantity > maxWords) {
        outputMsg = 'Your tried to go over the limit, shame on you';
      }

      // Check if quantity is larger than number of words, double if needed.
      if (arrWords.length < quantity) {
        arrWords = this.increaseArrayLength(arrWords, maxWords);
      }

      shuffledWords = this.shuffle(arrWords);

      for (let i = 0; i < quantity; i += 1) {
        if (i === maxWords) {
          break;
        }
        output += `${shuffledWords[i]} `;
      }

      this.generatedWords = output;
      this.errorMsg = outputMsg;
    },
    makeSentencesList(quantity) {
      const maxSentences = 100;
      const wordsType = this.storeState.wordsType;
      const data = this.storeState[wordsType + 'Words'];
      let output = '';
      let outputMsg = '';
      let arrSentences = this.getSentencesArray(data.words);
      let shuffledSentences;

      if (quantity > maxSentences) {
        outputMsg = 'Your tried to go over the limit, shame on you';
      }

      // Check is qty is larger than number of words, double if needed.
      if (arrSentences.length < quantity) {
        arrSentences = this.increaseArrayLength(arrSentences, maxSentences);
      }

      shuffledSentences = this.shuffle(arrSentences);

      // Loop and add sentence to the string
      for (let i = 0; i < quantity; i += 1) {
        if (i === maxSentences) {
          break;
        }

        output += `${shuffledSentences[i]} `;
      }

      this.generatedWords = output;
      this.errorMsg = outputMsg;
    },
    makeParagraphsList(quantity) {
      const maxParagraphs = 15;
      const wordsType = this.storeState.wordsType;
      const data = this.storeState[wordsType + 'Words'];
      let output = [];
      let outputMsg = '';
      const arrSentences = this.getSentencesArray(data.words);

      if (quantity > maxParagraphs) {
        outputMsg = 'Your tried to go over the limit, shame on you';
      }

      // Loop and make paragraphs
      for (let i = 0; i < quantity; i += 1) {
        let strParagraph = '';
        const shuffledSentences = this.shuffle(arrSentences);

        if (i === maxParagraphs) {
          break;
        }

        for (let j = 0; j < 6; j += 1) {
          strParagraph += shuffledSentences[j];
        }

        output.push({ id: i, words: strParagraph });
      }

      this.generatedWords = output;
      this.errorMsg = outputMsg;
    },
    increaseArrayLength(arrWords, qty) {
      let newArray = arrWords;
      // Double amount of words
      newArray = newArray.concat(newArray);

      while (newArray.length < qty) {
        // Increase words again if needed
        newArray = this.increaseArrayLength(newArray, qty);
      }

      return newArray;
    },
  }
}
</script>