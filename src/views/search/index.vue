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
        class="area-l"
      >
      </van-area>
    </van-popup>
    <div style="width: 100%; height: 50px">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        :label="address"
        left-icon="arrow-down"
        show-action
        ><template #label> <span @click="btn">北京</span></template>
        <template #action><van-icon name="location-o" /></template
      ></van-search>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" title="区域"
        ><template #default>
          <van-picker show-toolbar title="区域" :columns="columns" /></template
      ></van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { getCityChildrenApi ,getCityInfoApi} from "@/api";
export default {
  name: "AA",
  data() {
    return {
      columns: [
        {
          text: "区域",
          children: [],
        },
        {
          text: "地铁",
          children: [
            {
              text: "一号线",
            },
            {
              text: "二号线",
            },
            {
              text: "三号线",
            },
            {
              text: "四号线",
            },
            {
              text: "五号线",
            },
            {
              text: "六号线",
            },
            {
              text: "七号线",
            },
            {
              text: "八号线",
            },
          ],
        },
      ],
      value: "",
      address: "北京",
      isShow: false,
      areaList,
      code:'',

      value2: "a",
      value3: 0,

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
  async created() {
    const res = await getCityInfoApi(this.address)
    this.code = res.data.body.value
    this.code = this.code.replace('|','%')
    console.log(this.code);
    const res1 = await getCityChildrenApi();
    const cityList = res1.data.body;
    for (let i = 0; i < cityList.length - 1; i++) {
      const obj = { text: cityList[i].label };
      this.columns[0].children.push(obj);
    }

    console.log(this.columns[0].children);
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
.header {
  background-color: #21b97a;
}
.van-search {
  position: absolute;
  left: 51px;
  top: 8px;
  height: 34px;

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
