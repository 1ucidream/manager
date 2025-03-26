<template>

  <div class="xw-right-card">

    <el-card
        shadow="never"
        body-style="height: 400px; border: 0px"
        v-show="activeMenu === '1'">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>

  </div>



</template>

<script>
export default {
  name: "card01"
}
</script>

<style scoped>
@import "@/assets/css/front.css";
</style>