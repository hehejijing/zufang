import request from "@/utils/request";

export const register = (username,password) => {
  return request({
    url: "/user/registered",
    method: "POST",
    data: {
      username,
      password
    }
  });

}

export const login = (username,password) => {
  return request({
    url: "/user/login",
    method: "POST",
    data: {
      username,
      password
    }
  });

}

export const getInfo = (token) => {
  return request({
    url: "/user",
    method: "GET",
    data: {
      token
    }
  });

}
