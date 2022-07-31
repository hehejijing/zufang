<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field v-model="username" placeholder="请输入账号" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          style="background: #1cb676; font-size: 18px"
          >登录</van-button
        >
      </div>
    </van-form>
    <p class="register" @click="register">还没有账号，去注册~</p>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { loginApi } from "@/api/index";
export default {
  name: "login-index",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.username.trim() == "") {
        return Dialog({ message: "账号不能为空" });
      } else if (this.password.trim() == "") {
        return Dialog({ message: "请输入密码" });
      }
      loginApi(this.username, this.password).then((res) => {
        Dialog({ message: res.data.description });
        const token = res.data.body;
        // console.log(this);
        this.$store.commit("SET_TOKEN", token);
        this.$router.push({
          path: "my",
        });
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "my",
      });
    },
    register() {
      this.$router.push({
        path: "register",
      });
    },
  },
};
</script>

<style lang="less" scoped>
:deep(.van-nav-bar) {
  margin-bottom: 20px;
  background-color: #21b97a;
  .van-nav-bar__title,
  .van-nav-bar__text,
  .van-icon-arrow-left:before {
    color: #fff;
  }
}
.register {
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
}
</style>
