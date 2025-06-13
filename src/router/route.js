import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import RateCategory from "../views/RateCategory.vue";
import AddCategory from "../views/AddCategory.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    redirect: { name: "Dashboard" },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "rate-category",
        name: "rate-category",
        component: RateCategory,
      },
      {
        path: "add/category",
        name: "AddCategory",
        component: AddCategory,
      },
      {
        path: "promotion",
        name: "Promotion",
      },
      {
        path: "guests",
        name: "Guests",
      },
      {
        path: "property/detail",
        name: "PropertyDetail",
      },
      {
        path: "rooms",
        name: "Rooms",
      },
      {
        path: "rating/review",
        name: "RatingAndReview",
      },
      {
        path: "sale/booster",
        name: "SaleBooster",
      },
      {
        path: "income/commission",
        name: "IncomeAndCommission",
      },
      {
        path: "cotafer/support",
        name: "CotaferSupport",
      },
      {
        path: "account",
        name: "Account",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
