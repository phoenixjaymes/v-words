<template>
  <header class="main-header">
    <p class="main-header__name">Vue.js Word Generator</p>
    <nav class="main-nav">
      <ul class="main-menu">
        <li
          v-for="section in sections"
          v-bind:key="section.id"
          v-on:click="handleNavClick(section.section, section.id)"
          class="main-menu__item"
        ><a>{{section.name}}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { store } from '../store';

export default {
  name: 'TheHeader',
  data() {
    return {
      sections: [
        { id: 'home', name: 'Home', section: 'home' },
        { id: 'meat', name: 'Meat', section: 'words' },
        { id: 'doctor', name: 'Doctor Who', section: 'words' },
        { id: 'german', name: 'German', section: 'words' },
        { id: 'dutch', name: 'Dutch', section: 'words' },
      ],
    };
  },
  methods: {
    handleNavClick: function(section, wordsType) {
      const sectionObj = { section, wordsType };
      store.changeSection(sectionObj);
    },
  },
}
</script>

<style>

.main-header {
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: url("../assets/bg_words-1366x150.gif") center/auto repeat-x #000;
  height: 100px;
  width: 100%;
}

@media (min-width: 768px) {
  .main-header {
    height: 150px;
  }
}

.main-header__name {
  color: #fff;
  font-size: 1.4em;
  font-weight: bold;
  margin: 5px 0 5px 0;
  text-align: center; }

  @media (min-width: 768px) {
    .main-header__name {
      font-size: 2.2em;
    }
  }

.main-menu {
  list-style: none;
  text-align: center; }

  .main-menu__item {
    display: inline-block;
  }

  .main-menu__item a {
    color: #ff0;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1px;
    padding: 6px 5px;
    text-decoration: none; }

    .main-menu__item a.active {
      color: #fff;
    }
    .main-menu__item:hover a {
      color: #fff;
      cursor: pointer; }

    @media (min-width: 768px) {
      .main-menu__item a {
        font-size: 1.2rem;
      }
    }


</style>