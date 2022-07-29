<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="imgsrc + item.imgSrc" :alt="item.id" />
      </van-swipe-item>
    </van-swipe>
    <van-icon name="guide-o" class="map-icon" />

    <!-- 搜索框 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      :label="address"
      left-icon="arrow-down"
    />
    <button class="areaBtn" @click="btn"></button>
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

    <div style="display: flex; justify-content: space-between">
      <div class="chuzu" @click="tosearch">
        <img src="../../assets/imgs/1.png" alt="" />
        <span>整租</span>
      </div>
      <div class="chuzu" @click="tosearch">
        <img src="../../assets/imgs/2.png" alt="" />
        <span>合租</span>
      </div>
      <div class="chuzu" @click="tosearch">
        <img src="../../assets/imgs/3.png" alt="" />
        <span>地图找房</span>
      </div>
      <div class="chuzu" @click="tosearch">
        <img src="../../assets/imgs/4.png" alt="" />
        <span>去出租</span>
      </div>
    </div>
    <div class="group">
      <div class="title">
        <span><b>租房小组</b></span> <span>更多</span>
      </div>
      <van-row>
        <van-col
          span="11"
          v-for="item in groupList"
          :key="item.id"
          class="group-item"
          ><img
            :src="imgsrc + item.imgSrc"
            alt=""
            style="width: 40px; height: 40px"
          />
          <p style="fontsize: 12px">
            {{ item.title }}<br />
            {{ item.desc }}
          </p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { groupApi, swiperApi } from "@/api/index";
import { areaList } from "@vant/area-data";

export default {
  name: "AA",
  data() {
    return {
      value: "",
      imgList: [],
      imgsrc: "http://liufusong.top:8080",
      areaList,
      isShow: false,
      address: "北京",
      groupList: [],
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
    tosearch() {
      this.$router.push({
        path: "/layout/search",
      });
    },
  },
  mounted() {
    swiperApi().then((res) => {
      // console.log(res);
      this.imgList = res.data.body;
    });
    groupApi().then((res) => {
      console.log(res);
      this.groupList = res.data.body;
    });
  },
};
</script>

<style lang="less" scoped>
.box {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 212px;
    text-align: center;
    height: 212px;
    /* background-color: #39a9ed; */
  }
  .my-swipe img {
    width: 100%;
    height: 100%;
  }
  .van-search {
    position: absolute;
    /* margin: 0 auto; */
    top: 20px;
    left: 25px;
    height: 34px;
  }
  .box {
    position: relative;
  }
  .map-icon {
    position: absolute;
    left: 345px;
    top: -180px;
  }
  .chuzu {
    text-align: center;
  }
  .chuzu span {
    display: block;
  }
  .chuzu img {
    width: 70px;
  }
  .group {
    background-color: #f6f5f6;
    height: 200px;
    margin: 20px 10px;
    padding-top: 10px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .group-item {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 10px;
    background-color: #fff;
    margin: 7px;
    align-items: center;
  }
  .areaBtn {
    background-color: black;
    position: absolute;
    width: 60px;
    height: 20px;
    left: 48px;
    top: 28px;
    opacity: 0;
  }
}
</style>
