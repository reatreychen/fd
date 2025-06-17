<template>
  <section>
    <div
      v-for="(policy, index) in policies"
      :key="index"
      class="border rounded border-[#ededed] mt-6"
    >
      <div class="bg-[#e6e6e6] flex items-center h-16 px-6 justify-between">
        <p class="text-[#31353f] font-normal">{{ policy.title }}</p>
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
          <button
            type="button"
            @click="toggleContent(index)"
            class="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#31353f]"
              :class="{ 'rotate-180': policy.showContent }"
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

      <div v-if="policy.showContent">
        <article class="px-6 mt-4">
          <p class="text-[#164a9f] font-normal pb-3">{{ policy.description }}</p>
          <p class="text-[#31353f] font-normal pb-3">
            If the guest does not show up, they will be charged
            <span class="text-[#ff4848] font-semibold">{{ policy.noShowFee }}</span>
            of the total fee.
          </p>
          <p class="text-[#96999f] font-normal pb-4">{{ policy.prepayment }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      policies: [
        {
          title: "Free, guest will be charged",
          description: "The guest can cancel free of charge at any time",
          noShowFee: "70%",
          prepayment: "In this case, no prepayment is required.",
          showContent: false,
        },
        {
          title: "Free, guest will be charged",
          description: "The guest can cancel free of charged of the total fee.",
          noShowFee: "70%",
          prepayment: "In this case, no prepayment is required.",
          showContent: false,
        },
        {
          title: "Non-refundable, guest will be charged",
          description: "The guest will be charged of the total price if they cancel their booking.",
          noShowFee: "50%",
          prepayment: "If the guest does no show up, they will be charged of the total fee",
          showContent: false,
        },
        {
          title: "Last-minute cancellation",
          description: "The guest can cancel free of charge up to 1 day before check-in.",
          noShowFee: "80%",
          prepayment: "Prepayment is required for last-minute bookings.",
          showContent: false,
        },
        {
          title: "Early bird policy",
          description: "The guest can cancel free of charge up to 14 days before check-in.",
          noShowFee: "30%",
          prepayment: "Prepayment is required for early bird bookings.",
          showContent: false,
        },
        {
          title: "Standard cancellation policy",
          description: "The guest can cancel free of charge up to 3 days before check-in.",
          noShowFee: "60%",
          prepayment: "No prepayment is required for this policy.",
          showContent: false,
        },
      ],
    };
  },
  methods: {
    toggleContent(index) {
      this.policies[index].showContent = !this.policies[index].showContent;
    },
  },
};
</script>