import Mock from "mockjs";

import banner from "./banner.json";
import floor from "./floor.json";
import category from "@/mock/category";
import searchList from "@/mock/searchList";
import goodInfo from "@/mock/goodInfo";
import carList from "@/mock/carList";

Mock.mock("/mock/banner", {
  code: 200,
  data: banner,
});
Mock.mock("/mock/floor", {
  code: 200,
  data: floor,
});
Mock.mock("/mock/category", {
  code: 200,
  data: category,
});
Mock.mock("/mock/searchList", "post", (options) => {
  return Mock.mock({
    code: 200,
    data: searchList,
  });
});
Mock.mock(`/mock/goodInfo`, "get", () => {
  return Mock.mock({
    code: 200,
    data: goodInfo.data,
  });
});
Mock.mock("/mock/cart/cartList", "get", () => {
  return Mock.mock({
    code: 200,
    data: carList.data,
  });
});
