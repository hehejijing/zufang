<template>
  <div class="box">
    <div class="bg">
      <img src="../../assets/imgs/bg.png" alt="" />
    </div>
    <div class="header">
      <div class="login">
        <div class="avatar">
          <img :src="imgUrl" alt="" />
        </div>
        <p>{{ nickname }}</p>
        <van-button type="primary" to="login" size="small" v-if="isShow"
          >去登陆</van-button
        >
        <div v-else>
          <van-button type="primary" @click="logout" size="small"
            >退出</van-button
          >
          <p class="edit">编辑个人资料<van-icon name="play" /></p>
        </div>
      </div>
    </div>
    <div class="main">
      <ul>
        <li @click="toFavorites">
          <van-icon name="star-o" size="20px" />
          <p>我的收藏</p>
        </li>
        <li @click="toRent">
          <van-icon name="wap-home-o" size="20px" />
          <p>我的出租</p>
        </li>
        <li>
          <van-icon name="clock-o" size="20px" />
          <p>看房记录</p>
        </li>
        <li>
          <van-icon name="debit-pay" size="20px" />
          <p>成为房主</p>
        </li>
        <li>
          <van-icon name="contact" size="20px" />
          <p>个人资料</p>
        </li>
        <li>
          <van-icon name="service-o" size="20px" />
          <p>联系我们</p>
        </li>
      </ul>
    </div>
    <div class="join">
      <img src="../../assets/imgs/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getInfoApi } from "@/api";
export default {
  name: "AA",
  data() {
    return {
      imgUrl: "http://liufusong.top:8080/img/profile/avatar.png",
      nickname: "游客",
      isShow: true,
    };
  },
  methods: {
    logout() {
      this.$store.commit("SET_TOKEN", {});

      location.reload();
    },
    getInfo() {
      const token = this.$store.state.tokenObj.token;
      if (token) {
        this.isShow = false;
        getInfoApi(token).then((res) => {
          console.log(res);
          this.imgUrl = `http://liufusong.top:8080${res.data.body.avatar}`;
          this.nickname = res.data.body.nickname;
        });
      } else {
        (this.imgUrl = "http://liufusong.top:8080/img/profile/avatar.png"),
          (this.nickname = "游客"),
          (this.isShow = true);
      }
    },
    toFavorites() {
      this.$router.push({
        path: "/favorites",
      });
    },
    toRent() {
      this.$router.push({
        path: "/rent",
      });
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .bg {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .header {
    height: 300px;
    width: 100%;
    position: absolute;
    top: 0;
    .login {
      position: absolute;
      bottom: 0;
      width: 80%;
      height: 165px;
      background-color: #fff;
      margin-left: 37px;
      box-shadow: 0 0 10px 3px #ddd;
      text-align: center;
      .edit {
        margin-top: 10px;
      }
      .avatar {
        width: 70px;
        height: 70px;
        // background-color: lime;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
        }
      }
      p {
        margin-top: 50px;
        font-size: 13px;
      }
      .van-button {
        width: 70px;
        border-radius: 5px;
        background-color: #21b97a;
      }
    }
  }
  .main {
    ul {
      margin-top: 114px;
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        display: block;
        width: 33.333%;
        height: 95px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
  .join {
    width: 90%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
