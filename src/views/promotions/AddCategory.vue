<template>
  <section>
    <div class="bg-white p-6 mt-3">
      <article>
          <h2 class=" font-semibold text-2xl text-[#2a2f39]">Add Category</h2>
          <p class="text-[#a2a5ab] font-normal pt-2">
            Create, edit or delete any rate categories on this page. You can
            also add any policies you created in your
            <span class="underline">policies page</span> to any rate you want.
          </p>
        </article>
      <form>
        <div class="mt-8 flex items-center gap-6">
          <article class="border w-[500px] border-[#ededee] px-4 py-2">
            <label class="text-sm text-[#626771]">RATE NAME</label>
            <input
              type="text"
              placeholder="Enter rate name"
              class="w-full outline-none text-[#2a2f39]"
            />
          </article>
          <p class="text-[#c4c6ca] text-sm">
            This name is just for your reference. It won't be displayed to
            customers browsing Cotafer.
          </p>
        </div>

        <div class="border-2 border-[#ededed] mt-6 p-4">
          <article>
            <h2 class="text-[#2a2f39]">Define your rate</h2>
            <p class="text-[#c4c6ca] text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quaerat suscipit in ipsa pariatur eius a consequatur voluptates.
            </p>
          </article>

          <div class="flex items-center gap-4 mt-6">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="USA"
              class="w-4 h-4 border-gray-300 focus:ring-2 dark:focus:ring-[#164a9f] dark:focus:bg-[#164a9f] dark:bg-gray-700 dark:border-gray-600"
              checked
            />
            <label
              for="country-option-1"
              class="block ms-2 font-medium text-gray-900 dark:text-gray-300"
            >
              Manually (by defining the rates myself every day)
            </label>
          </div>
          <div class="flex items-center gap-3 mt-4">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="Germany"
              class="w-4 h-4 border-gray-300 focus:ring-2 dark:focus:ring-[#164a9f] dark:focus:bg-[#164a9f] dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="country-option-2"
              class="block ms-2 font-medium text-gray-900 dark:text-gray-300"
            >
              Automatically (by basing this rate on an existing rate category)
            </label>
          </div>

          <div class="flex gap-4 items-center mt-6">
            <!-- existing rate -->
            <div class="flex flex-col border w-[400px] px-4">
              <label class="text-xs text-[#767a83] pt-2 font-semibold"
                >EXISTING RATE</label
              >
              <div class="flex">
                <select
                  class="w-full bg-white outline-none py-1 text-gray-700 appearance-none"
                >
                  <option value="">Standard Rate</option>
                  <option>Custom Rate</option>
                </select>
                <div class="px-4 flex">
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

            <!-- operator -->
            <div class="flex flex-col border w-[150px] px-4">
              <label class="text-xs text-[#767a83] pt-2 font-semibold"
                >OPERATOR</label
              >
              <div class="flex">
                <select
                  class="w-full bg-white outline-none py-1 text-gray-700 appearance-none"
                >
                  <option>Add (+)</option>
                  <option>Subtract (-)</option>
                  <option>Multiply (*)</option>
                  <option>Divide (/)</option>
                </select>
                <div class="px-4 flex">
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

            <!-- Value -->
            <div class="flex flex-col w-fit">
              <div class="flex overflow-hidden">
                <div class="grid border px-3">
                  <label class="text-xs text-gray-500 pt-2 font-semibold"
                    >VALUE</label
                  >
                  <input
                    type="text"
                    class="w-20 text-sm focus:outline-none border-none"
                  />
                </div>
                <div class="relative grid border bg-[#e6e6e6] px-4">
                  <label class="text-sm text-[#94979d]">UNIT</label>
                  <select
                    class="text-sm px-2 border-l appearance-none pr-6 py-2 focus:outline-none bg-[#e6e6e6] text-[#444851]"
                  >
                    <option>%</option>
                    <option>USD</option>
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
            </div>
          </div>

          <div class="grid grid-cols-2 gap-10 mt-8">
            <input
              type="text"
              placeholder="Maximun oppcupancy"
              class="border py-4 px-3 w-full outline-none border-[#E6E6E6]"
            />
            <div class="flex">
              <input
                type="text"
                placeholder="Minimum stay"
                class="border py-4 px-3 w-full outline-none border-[#E6E6E6]"
              />
              <article
                class="bg-[#e6e6e6] px-4 flex flex-col items-center justify-center"
              >
                <p class="text-xs text-[#626771]">UNIT</p>
                <p>nights</p>
              </article>
            </div>
            <!-- Guest Type -->
            <div class="flex flex-col border w-full px-4">
              <label class="text-xs text-[#767a83] pt-2 font-semibold"
                >GUEST TYPE</label
              >
              <div class="flex">
                <select
                  class="w-full bg-white outline-none py-1 text-gray-700 appearance-none"
                >
                  <option value="Please select">Please select</option>
                </select>
                <div class="px-4 flex">
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

            <!-- Cancellation Option -->
            <div class="flex flex-col border w-full px-4">
              <label class="text-xs text-[#767a83] pt-2 font-semibold"
                >CANCELLATION POLICY</label
              >
              <div class="flex">
                <select
                  class="w-full bg-white outline-none py-1 text-gray-700 appearance-none"
                >
                  <option value="Please select">Non-refundable</option>
                </select>
                <div class="px-4 flex">
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
          </div>
        </div>

        <div class="border-2 border-[#ededed] mt-6 p-4">
          <article>
            <h1 class="text-[#2b2c2e] text-lg pb-2">
              Optional inclusive services
            </h1>
            <p class="text-[#c1c3c7]">
              You may include servives in to your price package in other to
              attracts the guests
            </p>
          </article>

          <table class="mt-8">
            <thead class="">
              <tr class="text-left">
                <th class="text-[#164a9f] p-2">Service</th>
                <th class="text-[#164a9f] px-20 p-2">Price</th>
                <th class="text-[#164a9f] p-2">Unit</th>
              </tr>
            </thead>
            <tbody class="border-b-2">
              <tr>
                <td class="text-[#373c45] p-2">
                  Specail diet menus (on request)
                </td>
                <td class="px-20 text-[#373c45] p-2">33</td>
                <td class="text-[#373c45] p-2">$US/day</td>
                <td class="flex items-center gap-2 pl-10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 text-[#96d9f2]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 text-[#ff5454]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex items-center mt-8 gap-10">
            <!-- Shuttle services -->
            <div class="border-2 w-[300px] px-4 border-[#fbfbfb]">
              <div class="flex items-center justify-between">
                <select
                  class="bg-white outline-none py-2 text-gray-700 appearance-none"
                >
                  <option>Shuttle service</option>
                </select>
                <div class="">
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

            <div class="flex items-center gap-10">
              <div class="flex items-center gap-1">
                <input
                  id="free"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 dark:focus:ring-[#164a9f] dark:focus:bg-[#164a9f] dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  for="free"
                  class="block ms-2 font-medium text-[#2d2e2e] dark:text-gray-300"
                >
                  Free
                </label>
              </div>

              <div class="flex items-center gap-1">
                <input
                  id="paid"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 dark:focus:ring-[#164a9f] dark:focus:bg-[#164a9f] dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  for="paid"
                  class="block ms-2 font-medium text-[#2d2e2e] dark:text-gray-300"
                >
                  Paid
                </label>
              </div>
            </div>

            <!-- Value -->
            <div class="flex flex-col w-fit">
              <div class="flex overflow-hidden">
                <div class="border-[#fbfbfb] border-2 px-3">
                  <input
                    type="text"
                    placeholder="Rate value"
                    class="w-32 text-sm focus:outline-none border-none py-3"
                  />
                </div>
                <div
                  class="relative grid bg-[#fbfbfb] border-2 border-[#fbfbfb] px-4"
                >
                  <select
                    class="text-sm px-2 border-l appearance-none pr-6 py-3 focus:outline-none bg-[#fbfbfb] border-none text-[#444851]"
                  >
                    <option>$US</option>
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
            </div>
          </div>

          <div class="mt-8 flex items-center gap-4">
            <button
              class="bg-[#164a9f] text-white font-medium text-lg px-4 py-2 border-2 border-[#164a9f] hover:bg-white rounded hover:text-[#164a9f] transition-all duration-200"
            >
              Add
            </button>
            <button
              class="bg-[#e6e6e6] rounded text-lg text-[#2a2f39] px-4 py-2 border-2 border-[#e6e6e6] hover:bg-white hover:border-[#e6e6e6] transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </div>

        <div class="border-2 border-[#ededed] mt-6 p-4">
          <h1 class="text-[#2a2f39]">Apply this rate to rooms</h1>
          <div class="flex items-center gap-10 mt-6">
            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Deluxe villa</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Bungalow with patio</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Standard villa</p>
            </div>
          </div>
        </div>

        <div class="border-2 border-[#ededed] mt-6 p-4">
          <h1 class="text-[#2a2f39]">Rate display time</h1>
          <div class="flex items-center gap-10 mt-6">
            <div class="flex items-center gap-4">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full"
              />
              <p class="text-[#2a2f39] font-normal">Anytime</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
              />
              <p class="text-[#2a2f39] font-normal">Early booker</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
              />
              <p class="text-[#2a2f39] font-normal">Last ninute</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full focus:ring-[#164a9f] dark:focus:ring-red-600"
              />
              <p class="text-[#2a2f39] font-normal">Specific day</p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 w-[800px] mt-6 items-center  ">
            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Check/Uncheck All</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Tuesday</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Wednesday</p>
            </div>

             <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Monday</p>
            </div>

             <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Friday</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Saturday</p>
            </div>

            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                class="w-4 h-4 appearance-none border-none bg-[#e6e6e6] checked:bg-[#164a9f] checked:border-[#164a9f]"
              />
              <p class="text-[#2a2f39] font-normal">Sunday</p>
            </div>

          </div>
        </div>

        <div class=" mt-8 flex">
          <button @click="redirectToRateCategory" class=" bg-[#e6e6e6] text-lg px-10 text-[#464a53] w-[200px] py-3 border-2 border-[#e6e6e6] hover:bg-white transition-all">Back to list</button>
          <button class=" bg-[#164A9F] text-white font-semibold py-3 w-full border-2 border-[#164A9F] hover:bg-white hover:text-[#164A9F] transition-all duration-200">Add rate category</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
  
    methods : {
      redirectToRateCategory() {
      this.$router.push({ name: "rate-category" });
    },
    }
  }
</script>
