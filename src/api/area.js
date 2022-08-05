import request from "@/utils/request";

//获取城市列表
export const getCity = () => {
  return request({
    url: '/area/city',
    params: {
      level :1
    }
  })
}


//获取北京城市相关信息
export const getCityInfo = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}

export const getCityChildren = (code) => {
  return request({
    url: '/area',
    params: {
      id:code
    }
  })
}

//获取房屋查询条件
export const getHouseSearch = (code) => {
  return request({
    url: '/houses/condition',
    params: {
      id:code
    }
  })
}

//获取热门城市
export const getHotCity = () => {
  return request({
    url: '/area/hot',

  })
}
