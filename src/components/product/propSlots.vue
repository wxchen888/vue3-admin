<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const items = reactive(['Feed a cat', 'Buy milk'])
</script>
<style scoped lang="scss"></style>
