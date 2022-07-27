import request from "@/utils/request";

export const swiper = () => { 
  return request({
    url :"/home/swiper"
  })
}


export const group = () => { 
  return request({
    url :"/home/groups"
  })
}