<template>
  <div>
    <!-- 搜索框 -->
    <div style="background-color: #4fc08d; width: 100%; height: 50px">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        :label="address"
        left-icon="arrow-down"
      />
      <van-popup v-model="isShow" position="bottom"
        ><van-area
          title="标题"
          :area-list="areaList"
          value="110101"
          v-if="isShow"
          @cancel="cancel"
          @confirm="confirm"
          class="area-l"
      /></van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "AA",
  data() {
    return {
      address: "北京",
    };
  },
};
</script>

<style>
.van-search {
  left: 51px;
  top: 8px;
}
</style>
