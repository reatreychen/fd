<template>
  <section>
    <div class="bg-white p-6 mt-3">
      <article>
        <h2 class="font-semibold text-2xl text-[#2a2f39]">
          Cancellation Policy
        </h2>
        <p class="text-[#164a9f] pt-6 pb-2">
          Here yuo can create and edit your cancellation policies.
        </p>
        <p class="text-[#164a9f] pb-4">
          Please note that you need cancellation policy to create rate
          categories and promotions.
        </p>
        <p class="text-[#2a2f39] font-normal">
          If you deleted a cancallation policy that is already attached to a
          rate categorues/promotions, it will affect the searchability of the
          room(s). If you choose to delete a cancellation policy, you must edit
          the corresponding rate categories/promotions.
        </p>
      </article>

      <!-- form add and eidt policy -->
      <form class="border rounded border-[#ededed] mt-6 p-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl text-[#164a9f] font-semibold">
            Add/Edit New Policy
          </h1>
          <button
            type="button"
            @click="toggleContent"
            class="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#c9cbce]"
              :class="{ 'rotate-180': showContent }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div v-if="showContent">
          <input
            type="text"
            placeholder="What is the name of your policy?"
            class="border-2 border-[#f4f4f4] w-full px-3 py-3 mt-6 outline-none focus:border-[#164a9f]"
          />

          <!-- cancellation option -->
          <article class="mt-6 flex flex-col gap-1">
            <h1 class="text-[#353a43] font-medium text-lg">
              Cancellation Option
            </h1>
            <p class="text-[#626771] font-normal">
              Please select accordingly from cancellation options below. This
              will determine the no-show and prepayment options.
            </p>
          </article>

          <div>
            <p class="text-[#353a43] pt-6 pb-3">
              Is there a period when the guest can cancel free of charge?
            </p>
            <div class="flex gap-10 items-center">
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  value="non-refundable"
                  v-model="form.cancellationOption"
                  class="w-4 h-4 appearance-none rounded-full bg-[#e6e6e6] checked:bg-[#164a9f] border"
                />
                <label class="text-[#2a2f39] font-normal">Non-refundable</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  value="flexible"
                  v-model="form.cancellationOption"
                  class="w-4 h-4 appearance-none rounded-full bg-[#e6e6e6] checked:bg-[#164a9f] border"
                />
                <label class="text-[#2a2f39] font-normal">Flexible</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  value="free"
                  v-model="form.cancellationOption"
                  class="w-4 h-4 appearance-none rounded-full bg-[#e6e6e6] checked:bg-[#164a9f] border"
                />
                <label class="text-[#2a2f39] font-normal">Free</label>
              </div>
            </div>

            <!-- Flexible input -->
            <div v-if="form.cancellationOption === 'flexible'">
              <div class="bg-[#fafafb] p-4 mt-6">
                <p>How much is the guest charged for the cancellation?</p>
                <div class="pt-6 flex items-center gap-20">
                  <div class="flex items-center gap-3">
                    <input
                      type="text"
                      class="px-3 py-3 outline-none focus:border-[#164a9f] border-[#e6e6e6] border"
                    />
                    <label class="text-[#2a2f39]">% of the total fee</label>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="flex overflow-hidden">
                      <div class="border-[#e6e6e6] border">
                        <input
                          type="text"
                          placeholder="0"
                          class="w-32 text-sm focus:outline-none border-none py-3 px-3 bg-white text-black"
                        />
                      </div>
                      <div
                        class="relative grid bg-[#e6e6e6] border-2 border-[#e6e6e6] px-4"
                      >
                        <select
                          class="text-sm px-2 border-l appearance-none pr-6 py-3 focus:outline-none bg-[#e6e6e6] border-none text-[#444851]"
                        >
                          <option>day</option>
                        </select>
                        <div
                          class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5 text-[#888c94]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p class="text-[#2a2f39]">Befor arrival time</p>
                  </div>
                </div>
              </div>

              <!-- No-show option -->
              <div class="border-2 border-[#fafafa] p-4 mt-6">
                <h1 class="text-[#353a43] font-semibold pb-4">
                  No-show option
                </h1>
                <p class="text-[#353a43] font-normal">
                  How much is the guest charged for a no show?
                </p>

                <div class="flex items-center gap-4 pb-6 pt-4">
                  <input
                    id="red-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                  />
                  <label class="text-[#2a2f39] font-normal"
                    >Same as cancellation fee</label
                  >
                </div>

                <div class="flex items-center gap-10">
                  <div class="flex items-center gap-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                    />
                    <label class="text-[#2a2f39] font-normal"
                      >Guest will be charged</label
                    >
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      type="text"
                      class="px-3 py-2 outline-none focus:border-[#164a9f] border-[#e6e6e6] border"
                    />
                    <label class="text-[#2a2f39]">% of the total fee</label>
                  </div>
                </div>
              </div>

              <!-- Prepayment Option -->
              <div class="border-2 border-[#fafafa] p-4 mt-6">
                <h1 class="text-[#353a43] font-semibold pb-6">
                  Prepayment Option
                </h1>
                <p class="text-[#353a43]">Do you require prepayment</p>
                <div class="flex items-center gap-10 mt-4">
                  <div class="flex items-center gap-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                    />
                    <label class="text-[#2a2f39] font-normal">Yes</label>
                  </div>

                  <div class="flex items-center gap-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value=""
                      name="colored-radio"
                      class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                    />
                    <label class="text-[#2a2f39] font-normal">No</label>
                  </div>
                </div>

                <div class="bg-[#fafafb] p-4 mt-6">
                  <article class="text-[#353a43]">
                    <p>When do you want to charge the prepayment?</p>
                    <div class="flex items-center gap-10 mt-4">
                      <div class="flex items-center gap-4">
                        <input
                          id="red-radio"
                          type="radio"
                          value=""
                          name="colored-radio"
                          class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                        />
                        <label class="text-[#2a2f39] font-normal"
                          >After the reservation is made</label
                        >
                      </div>

                      <div class="flex items-center gap-4">
                        <input
                          id="red-radio"
                          type="radio"
                          value=""
                          name="colored-radio"
                          class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
                        />
                        <label class="text-[#2a2f39] font-normal"
                          >After the cancellation fee begins</label
                        >
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div class="border-[#fafafa] border-2 p-4 mt-6">
                <h1 class="text-[#2a2f39] font-semibold pb-4">
                  Policy Summary
                </h1>
                <article>
                  <p class="text-[#164a9f]">
                    The guest can cancel free of charge until
                    <span class="text-[#ff4848] font-semibold">0 day(s)</span>
                    before check-in time. The guest will be charged
                    <span class="text-[#ff4848] font-semibold">50%</span> of the
                    total price if they cancel after that.
                  </p>
                  <p class="text-[#2a2f39] py-4">
                    If the guest does not show up they will be charged
                    <span class="text-[#ff4848] font-semibold">100%</span> of
                    the total fee
                  </p>
                  <p class="text-[#626771] font-normal">
                    Cancellation charge or no-show fee will be collected via a
                    prepayment. After the reservation is made
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div class="mt-8 flex">
            <button
              @click="redirectToRateCategory"
              :class="{'bg-[#e6e6e6] text-lg text-[#464a53] w-[200px] py-3 border-2 border-[#e6e6e6] hover:bg-white transition-all' : form.cancellationOption === 'flexible'}"
              class=" bg-[#e6e6e6] text-lg text-[#8d9199] w-[200px] py-3 border-2 border-[#e6e6e6]"
            >
              Clear
            </button>
            <button
              :class="{'bg-[#164A9F] text-white font-semibold py-3 w-full border-2 border-[#164A9F] hover:bg-white hover:text-[#164A9F] transition-all duration-200' : form.cancellationOption === 'flexible'}"
              class=" bg-[#164a9f] text-lg text-white py-3 border-2 border-[#164a9f] w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <!-- list data cancellation -->
      <CancellationCard />
    </div>
  </section>
</template>

<script>
import CancellationCard from "../components/CancellationCards/CancellationCard.vue";

export default {
  components: {
    CancellationCard,
  },
  data() {
    return {
      showContent: true,
      form: {
        policyName: "",
        cancellationOption: "",
        chargeAmount: "",
        daysBefore: "",
      },
      errors: {},
    };
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    },
    clearForm() {
      alert("Form cleared!");
    },
  },
};
</script>
