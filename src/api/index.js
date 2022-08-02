import requests from "./ajax";
import mockRequest from "./mockAjax";

//三级菜单
export const reqGetCategoryList = () => mockRequest.get("/category");

//获取banner（home首页轮播图接口）
export const reqGetBannerList = () => mockRequest.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequest.get("/floor");

//搜索模块数据
export const reqGetSearchInfo = (params) =>
  mockRequest({
    url: "/searchList",
    method: "post",
    data: params,
  });

// 获取产品详情信息的接口
export const reqGoodInfo = (skuId) =>
  mockRequest({
    url: `/goodInfo`,
    method: "get",
  });

// 获取购物车列表数据接口
export const reqCartList = () =>
  mockRequest({
    url: "/cart/cartList",
    method: "get",
  });
