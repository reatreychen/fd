<template>
  <section>
    <div>
      <div>
        <p class="text-[#164a9f] font-medium">
          Create a basic deal for your rooms:
        </p>
        <div class="flex items-center gap-4 pt-3">
          <input type="radio" class="w-2.5" />
          <label class="text-[#164a9f] font-medium"
            >Quick and easy to set up</label
          >
        </div>

        <div class="flex items-center gap-4 pt-3">
          <input type="radio" class="w-2.5" />
          <label class="text-[#164a9f] font-medium"
            >Customize and apply promotion without constraint</label
          >
        </div>
      </div>

      <!-- Input discount value -->
      <div class="flex mt-8">
        <input
          type="text"
          placeholder="Discount value"
          class="text-[#b0b2b6] border border-[#ebebeb] p-4 w-full rounded outline-none focus:border-[#164a9f]"
        />
        <div class="flex items-center gap-14 bg-[#e6e6e6] w-fit px-3">
          <article class="flex flex-col gap-1">
            <p class="text-xs font-semibold text-[#93969c]">UNIT</p>
            <p class="text-[#31353f]">USD/night</p>
          </article>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-[#b4b6ba]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <!-- Minimum Stay -->
      <div class="border border-[#ebebeb] mt-8 p-4">
        <article>
          <h1 class="text-[#41454e] text-lg font-semibold">Minimum Stay</h1>
          <p class="text-[#95989f] pt-1 font-medium">
            Please specify the number of minimum staying night belo:
          </p>
        </article>

        <div class="flex items-center gap-10 mt-8">
          <div class="flex items-center gap-3">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal">Match your rate</label>
          </div>
          <div class="flex items-center gap-3">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal">Custom</label>
          </div>
          <input
            type="text"
            placeholder="Specific mini stay"
            class="bg-[#f5f6f7] border border-[#e7e7e7] p-4 rounded text-[#e8e8e8]"
          />
        </div>
      </div>

      <!-- Visibility -->
      <div class="border border-[#ebebeb] mt-8 p-4">
        <article>
          <h1 class="text-[#41454e] text-lg font-semibold">Visibility</h1>
          <p class="text-[#95989f] pt-1 font-medium">
            Please specific the person(s) illegible to see and apply for this
            promotion.
          </p>
        </article>

        <div class="flex items-center gap-10 mt-6 mb-6">
          <div class="flex items-center gap-3">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal">Everyone</label>
          </div>
          <div class="flex items-center gap-3">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal"
              >Members only
              <span class="text-sm text-[#95989f]"
                >(please specific membership)</span
              ></label
            >
          </div>
        </div>

        <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Check/Uncheck All
          </label>

        <div class="grid grid-cols-3 gap-4 mt-4">
          <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Registered
          </label>

           <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Silver
          </label>



           <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Bronze
          </label>


           <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Gold
          </label>


           <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Platinum
          </label>


           <label class="inline-flex items-center cursor-pointer text-[#41454e] gap-4">
            <input type="checkbox" v-model="isChecked" class="peer hidden" />
            <div
              class="w-4 h-4 border border-[#e6e6e6] bg-[#e6e6e6] rounded-sm flex items-center justify-center peer-checked:bg-[#164a9f]"
            >
              <div class="w-1 h-1 bg-[#e6e6e6] peer-checked:bg-[#e6e6e6]"></div>
            </div>
            Diamond
          </label>

        </div>
      </div>

      <!-- Bookable Date -->
       <div class=" border border-[#ebebeb] mt-8 p-4">
            <article>
          <h1 class="text-[#41454e] text-lg font-semibold">Bookable Date</h1>
          <p class="text-[#95989f] pt-1 font-medium">
            Please specific when this promotion can be seen no cotafer.com
          </p>
        </article>

        <div class="flex items-center gap-3 mt-6">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal">Define later</label>
          </div>
       </div>

       <!--  -->
       <div class=" border border-[#ebebeb] mt-8 p-4">
            <article>
          <h1 class="text-[#41454e] text-lg font-semibold">Cancellation policy</h1>
          <p class="text-[#95989f] pt-1 font-medium">
            Your promotion must be applied on the existing rate(s).
          </p>
        </article>

        <div class="flex items-center gap-3 mt-6">
            <input type="radio" class="w-4 h-4" />
            <label class="text-[#333841] font-normal">Define later</label>
          </div>
       </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
    };
  },
};
</script>
