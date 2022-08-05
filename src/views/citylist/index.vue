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
    <div class="mainbox">
      <div v-for="(item, label) in cities" :key="label">
        <van-index-bar :sticky="false" >
          <van-index-anchor :index="label"
            ><b>{{ label }}</b></van-index-anchor
          >

          <van-cell
            :title="el.label"
            v-for="(el, index) in cities[label]"
            :key="index"
          />
 
          <!-- <van-cell
        :title="item.label"
        v-for="item in cities"
        :key="item.value"
      /> -->
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { getCityApi, getHotCityApi } from "@/api";
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
      // console.log(this.cities);
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
      // console.log(cityName);
      this.$nextTick(() => {
        this.cities = cityName;
        console.log(this.cities);
        
      });

    },
    async getHotCity() {
      const { data } = await getHotCityApi();
      console.log(data);
      const res = data.body;
      return res;
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
.mainbox {
  overflow: auto;
  // overflow: hidden;
  height: 622px;
}
</style>
