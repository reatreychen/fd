<template>
  <section>
    <div>
      <h1 class="text-white text-3xl font-semibold text-center">
        Rate and Availability
      </h1>
      <div class="bg-white p-6 mt-3">
        <div class="flex items-center justify-between">
          <article>
            <h2 class="font-medium text-xl">Reservation</h2>
            <p class="text-[#a2a5ab] font-normal pt-2">
              Here are the categories you have created.
            </p>
          </article>
          <button
          @click="redirectToAddCategory"
            class="bg-[#164a9f] w-fit px-5 py-3 text-white border-2 hover:bg-white border-[#164a9f] hover:text-[#164a9f] transition-all duration-200"
          >
            Add Category
          </button>
        </div>

        <div
          v-for="(category, index) in categories"
          :key="index"
          class="border-2 border-[#e6e6e6] mt-6"
        >
          <div class="bg-[#e6e6e6] flex items-center h-16 px-6 justify-between">
            <p class="text-[#31353f] font-normal">{{ category.name }}</p>
            <div class="flex items-center gap-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-[#31353f]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-[#31353f]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <button @click="toggleCategory(index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-[#31353f]"
                  :class="{ 'transform rotate-180': category.showContent }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- show list data -->
          <div v-if="category.showContent" class="px-6">
            <div class="flex  pt-4 gap-52">
              <article class="grid gap-4 ">
                <p
                  v-for="(detail, detailIndex) in category.details"
                  :key="detailIndex"
                  class="text-[#7d8189] font-normal"
                >
                  {{ detail.label }}:
                  <span class="text-[#3e424c]">{{ detail.value }}</span>
                </p>
              </article>
              <article class="grid gap-4 ">
                <p
                  v-for="(detail, detailIndex) in category.details"
                  :key="detailIndex"
                  class="text-[#7d8189] font-normal"
                >
                  {{ detail.label }}:
                  <span class="text-[#3e424c]">{{ detail.value }}</span>
                </p>
              </article>
            </div>

            <article class="py-4">
              <p class="text-[#3e424c] font-semibold">Room</p>
              <p class="text-[#7d8189] text-sm">{{ category.room }}</p>
            </article>

            <article class="pb-4">
              <p class="text-[#3e424c] font-semibold">Inclusive Services</p>
              <p class="text-[#7d8189] text-sm pt-1">
                {{ category.services }}
              </p>
            </article>
            <article class="pb-4">
              <h1 class="text-[#164a9f] font-semibold">Total Summary</h1>
              <p class="text-[#164a9f] font-medium">
                Booking to date:
                <span class="font-semibold">{{ category.bookingToDate }}</span>
              </p>
              <p class="text-[#164a9f] font-medium">
                Revenue to date:
                <span class="font-semibold">{{ category.revenueToDate }}</span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Last minute (free breakfast)",
          showContent: true,
          details: [
            { label: "Automatic", value: "Basic rate minus -10%" },
            { label: "Cancellation Policy", value: "Non-refundable" },
            { label: "Minimum stay", value: "1 night" },
          ],
          room: "Bungalow with patio, Deluxe villa, Standard villa",
          services:
            "Lunch, Tennis equipment, Room service, Special diet menus (on request), Sauna, Massage, Shuttle service, Fishing, Horse riding, Breakfast - Asian",
          bookingToDate: "45",
          revenueToDate: "$US 1,235.00",
        },
        {
          name: "Standard Rate",
          showContent: false,
          details: [
            { label: "Automatic", value: "Basic rate minus -15%" },
            { label: "Cancellation Policy", value: "Refundable" },
            { label: "Minimum stay", value: "2 nights" },
          ],
          room: "Standard villa, Deluxe villa",
          services:
            "Breakfast - Continental, Room service, Free parking, Wi-Fi, Swimming pool",
          bookingToDate: "30",
          revenueToDate: "$US 950.00",
        },
        {
          name: "Room with breakfast",
          showContent: false,
          details: [
            { label: "Automatic", value: "Basic rate minus -15%" },
            { label: "Cancellation Policy", value: "Refundable" },
            { label: "Minimum stay", value: "2 nights" },
          ],
          room: "Standard villa, Deluxe villa",
          services:
            "Breakfast - Continental, Room service, Free parking, Wi-Fi, Swimming pool",
          bookingToDate: "30",
          revenueToDate: "$US 950.00",
        },
        {
          name: "Typical room rate",
          showContent: false,
          details: [
            { label: "Automatic", value: "Basic rate minus -15%" },
            { label: "Cancellation Policy", value: "Refundable" },
            { label: "Minimum stay", value: "2 nights" },
          ],
          room: "Standard villa, Deluxe villa",
          services:
            "Breakfast - Continental, Room service, Free parking, Wi-Fi, Swimming pool",
          bookingToDate: "30",
          revenueToDate: "$US 950.00",
        },
        {
          name: "International rate",
          showContent: false,
          details: [
            { label: "Automatic", value: "Basic rate minus -15%" },
            { label: "Cancellation Policy", value: "Refundable" },
            { label: "Minimum stay", value: "2 nights" },
          ],
          room: "Standard villa, Deluxe villa",
          services:
            "Breakfast - Continental, Room service, Free parking, Wi-Fi, Swimming pool",
          bookingToDate: "30",
          revenueToDate: "$US 950.00",
        },
        {
          name: "Weekend rate",
          showContent: false,
          details: [
            { label: "Automatic", value: "Basic rate minus -15%" },
            { label: "Cancellation Policy", value: "Refundable" },
            { label: "Minimum stay", value: "2 nights" },
          ],
          room: "Standard villa, Deluxe villa",
          services:
            "Breakfast - Continental, Room service, Free parking, Wi-Fi, Swimming pool",
          bookingToDate: "30",
          revenueToDate: "$US 950.00",
        },
      ],
    };
  },
  methods: {
    toggleCategory(index) {
      this.categories[index].showContent = !this.categories[index].showContent;
    },
    redirectToAddCategory() {
      this.$router.push({ name: "AddCategory" });
    },
  },
};
</script>