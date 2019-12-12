<template>
  <footer class="main-footer">
    <small>&copy; {{currentYear}} PhoenixJaymes</small>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return { currentYear: new Date().getFullYear() }
  },
}
</script>

<style>
.main-footer {
  background: #000;
  color: #fff;
  padding: 10px 0;
  text-align: center; }
</style>