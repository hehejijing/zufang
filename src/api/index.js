import { swiper, group } from "./home";
import { register, login, getInfo, getFavorites, getRent } from "./user";
import { getCity, getCityChildren, getCityInfo, getHouseSearch,getHotCity } from "./area";

export const swiperApi = swiper;
export const groupApi = group;

export const registerApi = register;
export const loginApi = login;
export const getInfoApi = getInfo;
export const getFavoritesApi = getFavorites;
export const getRentApi = getRent;
export const getCityApi = getCity;
export const getCityChildrenApi = getCityChildren;
export const getCityInfoApi = getCityInfo;
export const getHouseSearchApi = getHouseSearch;
export const getHotCityApi = getHotCity;
