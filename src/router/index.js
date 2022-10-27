import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
const Token = () => import("@/views/Token.vue");
const Brand = () => import("@/views/Brand.vue");
const Partner = () => import("@/views/Partner.vue");
const Staking = () => import("@/views/Staking.vue");
const Roadmap = () => import("@/views/Roadmap.vue");
const Update = () => import("@/views/Update.vue");
const Test = () => import("@/views/Test.vue");
const TokenPurchase = () => import("@/views/TokenPurchase.vue");
const PrivacyPolicy = () => import("@/views/PrivacyPolicy.vue");
const ContractAdmin = () => import("@/views/ContractAdmin.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/token",
    name: "Token",
    component: Token,
  },
  {
    path: "/staking",
    name: "Staking",
    component: Staking,
  },
  {
    path: "/brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
  {
    path: "/Roadmap",
    name: "Roadmap",
    component: Roadmap,
  },
  {
    path: "/partner",
    name: "Partner",
    component: Partner,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/TokenPurchase",
    name: "TokenPurchase",
    component: TokenPurchase,
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/ContractAdmin",
    name: "ContractAdmin",
    component: ContractAdmin,
  },
];

var router = createRouter({
  history: createWebHistory(),
  routes,
});

router.routes = routes;

export default router;