<template>
  <main class="main-content">
    <section class="main-content__wrap">
      <component v-bind:is="pageName()"></component>
    </section>
  </main>
</template>

<script>
import { store } from '../store';
import HomeSection from './HomeSection';
import WordsSection from './WordsSection';

export default {
  name: 'PageMain',
  data() {
    return {
      storeState: store.state,
    }
  },
  components: {
    HomeSection,
    WordsSection,
  },
  methods: {
    pageName () {
      return this.storeState.section.charAt(0).toUpperCase() + this.storeState.section.slice(1) + 'Section';
    }
  },
}
</script>

<style>
.main-content {
  background: #fff;
  flex: 1;
  padding-top: 160px; }
  @media (min-width: 768px) {
    .main-content {
      padding-top: 270px; } }

.main-content__wrap {
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  max-width: 576px; }
  @media (min-width: 768px) {
    .main-content__wrap {
      max-width: 700px; } }
</style>