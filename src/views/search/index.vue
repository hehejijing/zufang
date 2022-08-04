<template>
  <div class="header">
    <!-- 搜索框 -->
    <van-popup v-model="isShow" position="bottom"
      ><van-area
        title="标题"
        :area-list="areaList"
        value="110101"
        v-if="isShow"
        @cancel="cancel"
        @confirm="confirm"
        :columns-num="2"
        class="area-l"
      >
      </van-area>
    </van-popup>
    <div style="width: 100%; height: 50px">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        left-icon="arrow-down"
        show-action
        ><template #label>
          <span @click="btn">{{ address }}</span></template
        >
        <template #action><van-icon name="location-o" /></template
      ></van-search>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item title="区域"
        ><template #default>
          <van-picker show-toolbar title="标题" :columns="columns" value-key="label"/> </template
      ></van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { getCityInfoApi, getHouseSearchApi } from "@/api";
export default {
  name: "AA",
  data() {
    return {
      columns: [
        {
          label: "浙江",
          children: [
            
          ],
        },
        {
          label: "福建",
          children: [
            
          ],
        },
      ],
      value: "",
      address: "北京",
      isShow: false,
      areaList,
      code: "",

      value2: "a",
      value3: 0,
      value4: 0,

      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "租金", value: 0 },
        { text: "1000以下", value: 1 },
        { text: "1000-2000", value: 2 },
        { text: "2000-3000", value: 2 },
        { text: "3000-4000", value: 2 },
        { text: "4000-5000", value: 2 },
        { text: "5000-6000", value: 2 },
        { text: "6000-7000", value: 2 },
        { text: "7000以上", value: 2 },
      ],
      option4: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
  created() {
    //   const res = await getCityInfoApi(this.address)
    //   this.code = res.data.body.value
    //   console.log(res);
    //   const res1 = await getCityChildrenApi(this.code);
    //   const cityList = res1.data.body;
    //   for (let i = 0; i < cityList.length - 1; i++) {
    //     const obj = { text: cityList[i].label };
    //     this.columns[0].children.push(obj);
    //   }
    //   console.log(this.columns[0].children);
    //   const res2 = await getCityApi()
    //   console.log(res2);
    // console.log(areaList);
    // console.log(areaList.province_list);
    // console.log(areaList.province_list[110000]);
    this.getHouseSearch();
  },
  // computed: {
  //   address1() {
  //     return this.address = '北京'
  //   },
  // },
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
      this.address = `${res[1].name}`;
      this.$forceUpdate();
      console.log(this.address);
      this.isShow = false;
    },
    async getHouseSearch() {
      const res = await getCityInfoApi(this.address);
      this.code = res.data.body.value;
      const res1 = await getHouseSearchApi(this.code);
      console.log(res1);
      this.columns[0].children = res1.data.body.area.children
      for (let i = 0; i < res1.data.body.area.children.length; i++) {
        this.columns[0].children[i].children = res1.data.body.area.children[i].children
      }
      this.columns[1].children = res1.data.body.subway.children
      // this.columns[0].text = res1.data.body.area.label;
      // this.columns[0].children = [...res1.data.body.area.children];
      // res1.data.body.area.children.forEach((item, index) => {
      //   this.columns[0].children[index].text = item.label;
       
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #21b97a;
}
.van-search {
  position: absolute;
  left: 51px;
  top: 8px;
  height: 34px;
  width: 310px;

  .van-search__content {
    padding-left: 0;
  }
  .van-search__action {
    background-color: #21b97a;
    padding-left: 25px;
    color: #ffffff;
    font-size: 25px;
  }
}
</style>
