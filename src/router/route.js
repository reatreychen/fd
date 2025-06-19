import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import RateCategory from "../views/RateCategory.vue";
import AddCategory from "../views/promotions/AddCategory.vue";
import PriceOverview from "../views/PriceOverview.vue";
import RoomAvailabilities from "../views/RoomAvailabilities.vue";
import Cancellation from "../views/Cancellation.vue";
import RateAndAvailabilityLayout from "../layouts/RateAndAvailabilityLayout.vue";
import PromotionLayout from "../layouts/PromotionLayout.vue"
import CreatePromotionCategory from "../views/promotions/CreatePromotionCategory.vue";
import PromotionCategories from "../views/promotions/PromotionCategories.vue";
import ApplyPromotion from "../views/promotions/ApplyPromotion.vue";
import PromotionList from "../views/promotions/PromotionList.vue";
import BasicDeal from "../views/promotions/BasicDeal.vue";
import BookTodayStayTonight from "../views/promotions/BookTodayStayTonight.vue";
import LastMinutes from "../views/promotions/LastMinutes.vue";
import EarlyBooker from "../views/promotions/EarlyBooker.vue";
import DealOfDay from "../views/promotions/DealOfDay.vue";
import BookTodayStayThisWeek from "../views/promotions/BookTodayStayThisWeek.vue";
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
        name: "promotion",
        redirect: { name: "create-promotion-categ0ry" },
        component: PromotionLayout,
        children: [
          {
            path: "create-category",
            name: "create-category",
            component: CreatePromotionCategory,
            redirect : { name : "basic-deal"},
            children :  [
              {
                path : "basic-deal",
                name : "basic-deal",
                component : BasicDeal
              },
              {
                path : "book-today-stay-tonight",
                name : "book-today-stay-tonight",
                component : BookTodayStayTonight,
              },
              {
                path : "last-minutes",
                name : "last-minutes",
                component : LastMinutes,
              }, 
              {
                path : "early-booker",
                name : "early-booker",
                component : EarlyBooker
              },
               {
                path : "deal-day",
                name : "deal-day",
                component : DealOfDay
               },
               {
                path : "book-today-stay-this-week",
                name : "book-today-stay-this-week",
                component : BookTodayStayThisWeek
               }
            ]
          },
          {
            path: "category",
            name: "category",
            component: PromotionCategories,
          },
          {
            path: "apply",
            name: "apply",
            component: ApplyPromotion,
          },
          {
            path: "list",
            name: "list",
            component: PromotionList,
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
