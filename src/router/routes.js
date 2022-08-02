const Search = () => import("@/pages/Search");
const Home = () => import("@/pages/Home");
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/addCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
  {
    path: "/",
    component: () => import("@/pages/Home"),
  },
  {
    path: "/home",
    component: Home,
    meta: {
      show: true,
    },
  },
  {
    path: "/search/:keyword?",
    name: "search",
    component: Search,
    meta: {
      show: true,
    },
    props: (route) => ({
      keyword: route.params.keyword,
      keyword2: route.query.keyword2,
    }),
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
  },
  {
    path: "/detail/:skuId",
    name: "detail",
    component: Detail,
  },
  {
    path: "/addCartSuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: true },
  },
];
