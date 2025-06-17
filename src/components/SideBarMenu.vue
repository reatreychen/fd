<template>
  <aside
    class="z-40 w-[400px] h-screen transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="h-full py-4 overflow-y-auto">
      <ul class="space-y-4 font-medium">
        <!-- Dashboard -->
        <li>
          <RouterLink
          class="flex items-center p-2 gap-3 px-8"
           :to = "{name: 'Dashboard'}"
          :class ="{'text-[#164a9f]' :activeTab === 'Dashboard'},
          {'text-[#2a2f39] hover:bg-gray-50' :activeTab !== 'Dashboard'}"
            @click = "activeTab = 'Dashboard '"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <p class="ms-3 font-normal">Dashboard</p>
          </RouterLink>
        </li>

        <!-- Rate and Availability -->
        <li>
          <div
            @click="toggleSubMenu"
            class="flex items-center px-8 py-2.5 transition-colors duration-200 cursor-pointer"
            :class="{
              'bg-[#e6e6e6] text-[#2a2f39]': isRateActive,
              'text-[#2a2f39]': !isRateActive,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
              class="mr-3"
              :class="{
                'text-[#2a2f39]': !isRateActive,
              }"
            >
              <path
                d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"
              />
            </svg>
            <span>Rate and Availability</span>
          </div>

          <!-- Submenu -->
          <ul
            v-if="showSubMenu"
            class=" space-y-1 pl-8 bg-[#ededee]"
          >
            <li>
              <RouterLink
                :to="{ name: 'rate-category' }"
                class="flex items-center px-3 py-3 gap-4 transition-colors duration-200"
                :class="{
                  ' text-[#164a9f] font-medium':
                    activeTab === 'rate-category',
                  'text-gray-600 hover:text-[#164a9f] ':
                    activeTab !== 'rate-category',
                }"
                @click="activeTab = 'rate-category'"
              >
                <span
                  class="w-2 h-2 rounded-full mr-2"
                  :class="{
                    'bg-[#164a9f]': activeTab === 'rate-category',
                    ' bg-[#e6e6e6]': activeTab !== 'rate-category',
                  }"
                ></span>
                Rate category
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'add-category' }"
                class="flex items-center px-3 py-2 gap-4 transition-colors duration-200"
                :class="{
                  ' text-[#164a9f] font-medium':
                    activeTab === 'add-category',
                  'text-gray-600 hover:text-[#164a9f] ':
                    activeTab !== 'add-category',
                }"
                @click="activeTab = 'add-category'"
              >
                <span
                  class="w-2 h-2 rounded-full mr-2"
                  :class="{
                    'bg-[#164a9f]': activeTab === 'add-category',
                    'bg-[#e6e6e6]': activeTab !== 'add-category',
                  }"
                ></span>
                Add category
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'price-overview' }"
                class="flex items-center px-3 py-2 gap-4 transition-colors duration-200"
                :class="{
                  ' text-[#164a9f] font-medium':
                    activeTab === 'price-overview',
                  'text-gray-600 hover:text-[#164a9f] ':
                    activeTab !== 'price-overview',
                }"
                @click="activeTab = 'price-overview'"
              >
                <span
                  class="w-2 h-2 rounded-full mr-2"
                  :class="{
                    'bg-[#164a9f]': activeTab === 'price-overview',
                    'bg-[#e6e6e6]': activeTab !== 'price-overview',
                  }"
                ></span>
                Price overview
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'room-availabilities' }"
                class="flex items-center px-3 py-2 gap-4 transition-colors duration-200"
                :class="{
                  ' text-[#164a9f] font-medium':
                    activeTab === 'room-availabilities',
                  'text-gray-600 hover:text-[#164a9f] ':
                    activeTab !== 'room-availabilities',
                }"
                @click="activeTab = 'room-availabilities'"
              >
                <span
                  class="w-2 h-2 rounded-full mr-2"
                  :class="{
                    'bg-[#164a9f]': activeTab === 'room-availabilities',
                    'bg-[#e6e6e6]': activeTab !== 'room-availabilities',
                  }"
                ></span>
                Room Availabilities
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'cancellation-policy' }"
                class="flex items-center px-3 py-2 gap-4 transition-colors duration-200"
                :class="{
                  ' text-[#164a9f] font-medium':
                    activeTab === 'cancellation-policy',
                  'text-gray-600 hover:text-[#164a9f] ':
                    activeTab !== 'cancellation-policy',
                }"
                @click="activeTab = 'cancellation-policy'"
              >
                <span
                  class="w-2 h-2 rounded-full mr-2"
                  :class="{
                    'bg-[#164a9f]': activeTab === 'cancellation-policy',
                    'bg-[#e6e6e6]': activeTab !== 'cancellation-policy',
                  }"
                ></span>
                Cancellation policy
              </RouterLink>
            </li>
          </ul>
        </li>


        <li>
          <RouterLink
            :to="{ name: 'Promotion' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'Promotion' },
              { 'text-[#2a2f39]': activeTab !== 'Promotion' })
            "
            @click="activeTab = 'Promotion'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#2a2f39"
              class="text-[#2a2f39]"
            >
              <path
                d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"
              />
            </svg>

            <p class="ms-3 font-normal">Promotion</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'Guests' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'Guests' },
              { 'text-[#2a2f39]': activeTab !== 'Guests' })
            "
            @click="activeTab = 'Guests'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#2a2f39"
              class="text-[#2a2f39]"
            >
              <path
                d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"
              />
            </svg>

            <p class="ms-3 font-normal">Guests</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'PropertyDetail' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'PropertyDetail' },
              { 'text-[#2a2f39]': activeTab !== 'PropertyDetail' })
            "
            @click="activeTab = 'PropertyDetail'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"
              />
            </svg>

            <p class="ms-3 font-normal">Property Details</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'Rooms' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'Rooms' },
              { 'text-[#2a2f39]': activeTab !== 'Rooms' })
            "
            @click="activeTab = 'Rooms'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M120-120v-80h80v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h80v80H120Zm160-80h400v-560H280v560Zm120-240q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM280-760v560-560Z"
              />
            </svg>

            <p class="ms-3 font-normal">Rooms</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'RatingAndReview' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'RatingAndReview' },
              { 'text-[#2a2f39]': activeTab !== 'RatingAndReview' })
            "
            @click="activeTab = 'RatingAndReview'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="m373-314 107-64 107 65-29-121 95-82-124-11-49-115-49 115-124 10 95 82-29 121ZM213-93l71-304L48-601l311-26 121-286 121 286 311 26-236 204 71 304-267-161L213-93Zm267-374Z"
              />
            </svg>

            <p class="ms-3 font-normal">Rating and Review</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'SaleBooster' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'SaleBooster' },
              { 'text-[#2a2f39]': activeTab !== 'SaleBooster' })
            "
            @click="activeTab = 'SaleBooster'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M349.95-134.67h-164.1q-20.54 0-35.86-15.32t-15.32-35.86v-156.1q36.02-11.28 57.98-42.93 21.97-31.66 21.97-70.76 0-39.1-21.97-70.5-21.96-31.4-57.98-43.19v-157.44q0-20.53 15.32-35.86 15.32-15.32 35.86-15.32h158.51q14-37.49 44.14-60.79 30.14-23.31 67.68-23.31 37.54 0 67.7 23.43 30.17 23.42 44.17 60.67h158.72q20.53 0 35.86 15.32 15.32 15.33 15.32 35.86v158.72q37.49 14 60.31 44.7 22.82 30.7 22.82 68.24 0 37.55-22.94 67.23-22.94 29.67-60.19 43.67v158.36q0 20.54-15.32 35.86-15.33 15.32-35.86 15.32H561.33q-8.56-41.66-38.4-67.47-29.84-25.81-67.41-25.81-37.57 0-67.55 25.81-29.97 25.81-38.02 67.47Zm-164.1-51.18h127.02q16.57-38.71 53.1-66 36.53-27.28 89.69-27.28T546-251.85q37.18 27.29 54.41 66h126.36v-196.77h18.1q32.67-4.61 48.85-25.79t16.18-46.41q0-25.23-16.18-46.67-16.18-21.43-48.85-26.05h-18.1v-199.23h-198.1v-19.08q-4.62-32.66-25.8-48.84-21.18-16.18-46.66-16.18-25.49 0-46.67 16.18-21.18 16.18-25.8 48.84v19.08H185.85v124.21q37.07 26.08 58.51 64.47 21.43 38.39 21.43 82.6 0 44.55-21.48 82.78-21.49 38.22-58.46 62.66v124.2Zm270.61-268.97Z"
              />
            </svg>

            <p class="ms-3 font-normal">Sale Booster</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'IncomeAndCommission' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'IncomeAndCommission' },
              { 'text-[#2a2f39]': activeTab !== 'IncomeAndCommission' })
            "
            @click="activeTab = 'IncomeAndCommission'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M147.77-228.77v-315.69 21.31V-731.23-228.77Zm0-385.54h664.46v-92.31q0-9.23-7.69-16.92-7.69-7.69-16.92-7.69H172.38q-9.23 0-16.92 7.69-7.69 7.69-7.69 16.92v92.31ZM424.54-185H172.38q-27.78 0-48.08-20.3-20.3-20.3-20.3-48.08v-453.24q0-27.78 20.3-48.08 20.3-20.3 48.08-20.3h615.24q27.78 0 48.08 20.3 20.3 20.3 20.3 48.08v210.08q-34.38-21.84-72.35-33.88-37.96-12.04-78.27-12.04-34.36 0-66.03 7.23-31.66 7.23-60.73 22.46H147.77v259.39q0 9.23 7.69 16.92 7.69 7.69 16.92 7.69h247.48q.14 11.14 1.16 22.37 1.02 11.22 3.52 21.4Zm366.54 44.23 23.84-23.85-96-94.77v-136.15h-32.77v149.39l104.93 105.38Zm-84.11 86.69q-85.3 0-144.17-58.64-58.88-58.64-58.88-142.59 0-84.82 58.88-144.3 58.87-59.47 144.17-59.47 84.19 0 143.57 59.35 59.38 59.36 59.38 144.45 0 84.05-59.38 142.63-59.38 58.57-143.57 58.57Z"
              />
            </svg>

            <p class="ms-3 font-normal">Sale Booster</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'CotaferSupport' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'CotaferSupport' },
              { 'text-[#2a2f39]': activeTab !== 'CotaferSupport' })
            "
            @click="activeTab = 'CotaferSupport'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M332-142H226q-36.73 0-61.36-24.64Q140-191.27 140-228v-254q0-70.19 26.5-131.59Q193-675 239.5-721.5T348-794q62-26 132-26t132 26q62 26 108.5 72.5t73 107.91Q820-552.19 820-482v254q0 36.73-24.64 61.36Q770.72-142 734-142H628v-274h138v-66q0-118-83.5-201T480-766q-119 0-202.5 83T194-482v66h138v274Zm-54-220h-84v134q0 12 10 22t22 10h52v-166Zm404 0v166h52q12 0 22-10t10-22v-134h-84Zm-404 0h-84 84Zm404 0h84-84Z"
              />
            </svg>

            <p class="ms-3 font-normal">Cotafer Support</p>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'Account' }"
            :class="
              ({ 'text-[#164a9f]': activeTab === 'Account' },
              { 'text-[#2a2f39]': activeTab !== 'Account' })
            "
            @click="activeTab = 'Account'"
            class="flex items-center p-2 gap-3 text-[#2a2f39] px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M480-524q-54.55 0-92.27-37.72Q350-599.45 350-654q0-54.55 37.73-92.28Q425.45-784 480-784t92.28 37.72Q610-708.55 610-654q0 54.55-37.72 92.28Q534.55-524 480-524ZM182-171v-83q0-29 15.69-52.85Q213.38-330.71 240-344q59-29 119.41-43.5t120.5-14.5q60.09 0 120.59 14.5T720-344q26.63 13.29 42.31 37.15Q778-283 778-254v83H182Zm54-54h488v-29q0-14-7.5-24.5T695-296q-49-23-105.19-37.5Q533.63-348 480-348t-109.81 14Q314-320 265-296q-14 6-21.5 17t-7.5 25v29Zm244-353q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22Zm0-76Zm0 429Z"
              />
            </svg>
            <p class="ms-3 font-normal">Account</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeTab: this.$route.name,
      showSubMenu: false,
    };
  },
  computed: {
    isRateActive() {
      const rateRoutes = [
        "rate-category",
        "add-category",
        "price-overview",
        "room-availabilities",
        "cancellation-policy",
      ];
      return rateRoutes.includes(this.activeTab);
    },
  },
  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
  },
  watch: {
    "$route.name"(newName) {
      this.activeTab = newName;

      const rateRoutes = [
        "rate-category",
        "add-category",
        "price-overview",
        "room-availabilities",
        "cancellation-policy",
      ];

      if (rateRoutes.includes(newName)) {
        this.showSubMenu = true;
      }
    },
  },
};
</script>