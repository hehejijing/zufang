<template>
  <div>
    <!-- 搜索框 -->
    <button class="areaBtn" @click="btn"></button>
    <van-popup v-model="isShow"  position="bottom"
      ><van-area
        title="标题"
        :area-list="areaList"
        value="110101"
        v-if="isShow"
        @cancel="cancel"
        @confirm="confirm"
        class="area-l"
    /></van-popup>
    <div style="background-color: #4fc08d; width: 100%; height: 50px">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        :label="address"
        left-icon="arrow-down"
        left="aaa"
        
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
import { areaList } from "@vant/area-data";
export default {
  name: "AA",
  data() {
    return {
            value: "",
      address: "北京",
      isShow: false,
      areaList,
    };
  },
  methods: {
    btn() {
      this.isShow = true;
    },
    cancel() {
      this.isShow = false;
    },
    confirm(res, index) {
      console.log(res);
      console.log(index);
      this.address = `${res[2].name}`;
      console.log(this.address);
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>


.van-search {
    position: absolute;
  left: 51px;
  top: 8px;
    height: 34px;
  .van-search__content {
  padding-left: 0;
}
}
.areaBtn {
  background-color:black;
  position: absolute;
  width: 60px;
  height: 20px;
  left: 60px;
  top: 14px;
  opacity: 1;
  z-index: 999;
}

</style>
