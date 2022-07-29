<template>
  <div>
    <van-nav-bar
      title="账号注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field v-model="username" placeholder="请输入账号" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
      <van-field
        v-model="password1"
        type="password"
        placeholder="请再次输入密码"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          style="background: #1cb676; font-size: 18px"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { registerApi } from "@/api/index";
export default {
  name: "register-index",
  data() {
    return {
      username: "",
      password: "",
      password1: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.username.trim() == "") {
        return Dialog({ message: "账号不能为空" });
      } else if (this.password.trim() == "") {
        return Dialog({ message: "请输入密码" });
      }
      if (this.password.trim() != this.password1.trim()) {
        return Dialog({ message: "两次密码不一致" });
      }

      registerApi(this.username, this.password).then((res) => {
        console.log("2222222222222222222222222");
        console.log(res);
        if ( res.data.status ==400){
          return Dialog({ message: res.data.description });
        }
        // localStorage.setItem("token", JSON.stringify(res.data.body.toke));
        return Dialog({ message: res.data.description });
      });
      this.$router.push({
        path: "login",
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "my",
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
