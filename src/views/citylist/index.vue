<template>
  <div>
    <van-nav-bar
      title="城市列表"
      class="navbar"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- <van-index-bar> -->
    <!-- <van-index-anchor index="A" /> -->
    <van-index-bar :sticky="false">
      <van-index-anchor
        :index="label"
        v-for="(item, label) in cities"
        :key="label"
      ></van-index-anchor>
  
      <!-- <van-cell title="item.label" /> -->

      <!-- <van-cell
        :title="item.label"
        v-for="item in cities"
        :key="item.value"
      /> -->
    </van-index-bar>
    <button @click="getCity" value="我爱一条柴">我爱一条柴</button>
  </div>
</template>

<script>
import { getCityApi } from "@/api";
export default {
  name: "city-list",
  data() {
    return {
      cities: null,

      Pin: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  methods: {
    async getCity() {
      const { data } = await getCityApi();
      this.cities = data.body;
      console.log(this.cities);
      let cityName = {};

      this.Pin.forEach((item) => {
        cityName[item] = [];
        this.cities.forEach((el) => {
          let first = el.pinyin.substring(0, 1).toUpperCase();
          if (first == item) {
            cityName[item].push(el);
          }
        });
      });
      console.log(cityName);
      this.$nextTick(() => {
        this.cities = cityName;
      });
    },
  },
  created() {
    this.getCity();
  },
};
</script>

<style lang="less" scoped>
:deep(.navbar) {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #21b97a;
  .van-nav-bar__title,
  .van-icon-arrow-left {
    color: #ffffff;
  }
}
</style>
