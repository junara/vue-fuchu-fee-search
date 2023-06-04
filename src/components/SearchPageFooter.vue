<template>
  <footer class="footer">
    <div>
      ソースコード:
      <a href="https://github.com/junara/vue-fuchu-fee-search">GitHub</a>
    </div>
    <div>
      <span>東京都府中市が</span>
      <a
        href="https://www.city.fuchu.tokyo.jp/kurashi/gomirisaikuru/dashikata/sodaigomi/sodaigomidasikata.html"
        >提供しているデータ</a
      >
      <span>を改変して使用しています。</span>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3em;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  padding: 1em;
  text-align: center;
}
</style>
