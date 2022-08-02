<template>
  <div>
    <van-nav-bar title="我的出租" left-arrow @click-left="onClickLeft" />
    <div class="box" v-for="(item, index) in list" :key="index">
      <div class="left"><img :src="`${imgSrc}${item.houseImg}`" alt="" /></div>
      <div class="right">
        <h3>{{ item.title }}</h3>
        <div class="detail">{{ item.desc }}</div>
        <span class="tag" v-for="(el, index) in item.tags" :key="index">
          {{ el }}
        </span>
        <div class="price">
          <span>{{ item.price }}</span
          >元/月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRentApi } from "@/api";
export default {
  name: "My-Rent",
  data() {
    return {
      list: [],
      imgSrc: "http://liufusong.top:8080",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/layout/my",
      });
    },
    getRent() {
      getRentApi().then((res) => {
        this.list = res.data.body;
        console.log(this.list.length);
      });
    },
    loading() {
      this.$toast.loading({
        message: "加载中",
        forbidClick: true,
      });
    },
  },
  mounted() {
    this.getRent()
    this.loading()
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  position: sticky;
  top: 0;
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;

    .van-nav-bar__arrow,
    .van-nav-bar__title {
      color: #fff;
    }
  }
}

.box {
  height: 120px;
  width: 100%;
  display: flex;
  padding: 18px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  .left {
    margin-right: 10px;
    img {
      width: 106px;
      height: 80px;
    }
  }
  .right {
    font-size: 12px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    line-height: 21px;

    h3 {
      font-size: 15px;
      color: #394043;
      margin: 0;
    }
    .detail {
      color: #afb2b3;
    }
    .tag {
      color: #39becf;
      background-color: #e1f5f8;
      margin-right: 5px;
      padding: 4px 5px;
    }
    .price {
      color: #fa5741;
      span {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
