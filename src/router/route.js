import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import RateCategory from "../views/RateCategory.vue";
import AddCategory from "../views/AddCategory.vue";
import PriceOverview from "../views/PriceOverview.vue";
import RoomAvailabilities from "../views/RoomAvailabilities.vue";
import Cancellation from "../views/Cancellation.vue";
import RateAndAvailabilityLayout from "../layouts/RateAndAvailabilityLayout.vue";
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
        path: "rate-availability",
        name: "rate-availability",
        redirect: { name: "rate-category" },
        component: RateAndAvailabilityLayout,
        children: [
          {
            path: "add-category",
            name: "add-category",
            component: AddCategory,
          },
          {
            path: "rate-category",
            name: "rate-category",
            component: RateCategory,
          },
          {
            path: "price-overview",
            name: "price-overview",
            component: PriceOverview,
          },
          {
            path: "room-availabilities",
            name: "room-availabilities",
            component: RoomAvailabilities,
          },
          {
            path: "cancellation-policy",
            name: "cancellation-policy",
            component: Cancellation,
          },
        ],
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
