<template>
  <header class="main-header">
    <p class="main-header__name">Word Generator</p>
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
  background: url("../assets/bg-words-1366x250.gif") center/auto 100% repeat-x #000;
  background: #000;
  height: 140px;
  width: 100%;
}

@media (min-width: 768px) {
  .main-header {
    background: url("../assets/bg-words-1366x250.gif") center repeat-x #000;
    height: 250px;
  }
}

.main-header__name {
  color: #fff;
  font-size: 1.8em;
  font-weight: bold;
  margin: 15px 0 10px 0;
  text-align: center; }
  @media (min-width: 768px) {
    .main-header__name {
      margin-top: 75px;
      font-size: 2.2em; } }


.main-menu {
  list-style: none;
  text-align: center; }
  .main-menu__item {
    display: inline-block;
  }
  .main-menu__item a {
    color: #ff0;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    margin: 0 1px;
    padding: 7px;
    text-decoration: none; }
    .main-menu__item a.active {
      color: #fff;
    }
    .main-menu__item:hover a {
      color: #fff;
      cursor: pointer; }
    @media (min-width: 768px) {
      .main-menu__item {
        font-size: 1.2em; } }


</style>