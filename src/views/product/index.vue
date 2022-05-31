<template>
  <div class="product-list" shadow="always" body-style="{padding:'20px'}">
    <el-card style="width: 100%; height: 100%; margin: 20px 30px">
      <template #header>
        <div class="card-header">
          <div><h2>商品列表</h2></div>
          <el-button class="button" type="primary" size="small">添加商品</el-button>
        </div>
      </template>
      <!-- 第一种写法 -->
      <!-- <todoList>
        <template #default="slotProps">
          <span class="green">{{ slotProps.item }}</span>
        </template>
      </todoList> -->
      <!-- 第二种写法 可以使用 # 代替v-slot 同时提供了对slotProps的解构-->
      <todoList #default="{ item }">
        <span class="green">{{ item }}</span>
      </todoList>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
//演示作用域插槽的使用
import todoList from '@/components/product/propSlots.vue'
//slotProps是子组件插槽上注册的所有变量集合的对象
</script>
<style scoped lang="scss">
.product-list {
  width: 95%;
  height: 90%;
  .button {
    margin-top: 10px;
  }
  .green {
    color: skyblue;
  }
}
</style>
