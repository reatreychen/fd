<template>
  <section>
    <div class="bg-white p-6 mt-3">
      <article>
        <h2 class="font-semibold text-2xl text-[#2a2f39]">
          Create Promotion Category
        </h2>
        <p class="text-[#9fa2a8] pt-3 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          aspernatur blanditiis repellendus voluptatibus?
        </p>
      </article>

      <div class="flex flex-col items-end gap-2">
        <input
          type="text"
          class="w-full border-2 border-[#fbfbfb] p-4 outline-none focus:border-[#f5f6f7]"
          placeholder="Give your new promotion a name"
        />
        <p class="text-[#9c9fa5] text-sm font-medium">
          This is for you only, guest will not see this name.
        </p>
      </div>

      <div class="flex items-center mt-6">
        <h1 class="text-xl text-[#2e333d] w-[200px]">Promotion Detail</h1>
        <div class="border-b-2 border-[#f5f6f7] w-full"></div>
      </div>

      <div class=" grid grid-cols-[1fr,4fr] gap-10 mt-8 items-start">
        <div class="grid gap-4 ">
          <!-- left side -->
          <!-- BASIC DEAL -->
          <RouterLink
            :to="{ name: 'basic-deal' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'basic-deal'
                ? 'border-[#164a9f] text-[#164a9f]'
                : 'border-[#f8f8f9] hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'basic-deal'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="size-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m21.49,8.73l-1.91-1.1v-2.2c0-.55-.45-1-1-1h-2.2l-.41-.7h0s-.7-1.2-.7-1.2c-.13-.23-.35-.4-.61-.47-.25-.07-.53-.03-.76.1l-1.91,1.1-1.91-1.1c-.48-.28-1.09-.11-1.37.37l-.7,1.2h0s-.41.71-.41.71h-2.2c-.55,0-1,.45-1,1v2.2l-1.91,1.1c-.23.13-.4.35-.46.61-.07.26-.03.53.1.76l1.1,1.91-1.1,1.91c-.13.23-.17.5-.1.76.07.26.24.48.47.61l1.91,1.1v2.2c0,.55.45,1,1,1h2.2l1.1,1.91c.19.32.52.5.87.5.17,0,.34-.04.5-.13l1.91-1.1,1.91,1.1c.23.13.5.17.76.1.26-.07.47-.24.61-.47l1.1-1.91h2.2c.55,0,1-.45,1-1v-2.2l1.91-1.1c.48-.28.64-.89.37-1.37l-1.1-1.91,1.1-1.91c.28-.48.11-1.09-.37-1.37Zm-11.99-.73c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5.67-1.5,1.5-1.5Zm.3,8.6l-1.6-1.2,6-8,1.6,1.2-6,8Zm4.7-.6c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Z"
              ></path>
            </svg>
            <p
              :class="[
                activeTab === 'basic-deal'
                  ? 'text-[#164a9f]'
                  : 'text-[#7f838b]',
              ]"
            >
              BASIC DEAL
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'basic-deal'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>

          <!-- BOOK TODAY STAY TONIGHT -->
          <RouterLink
            :to="{ name: 'book-today-stay-tonight' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'book-today-stay-tonight'
                ? 'border-[#164a9f] text-[#164a9f] transition-all border-2'
                : 'border-[#f8f8f9]  hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'book-today-stay-tonight'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="size-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m21,12c0-4.88-4.12-9-9-9S3,7.12,3,12c0,2.58,1.16,4.95,2.98,6.61l-2.18,2.18,1.41,1.41,2.4-2.4c1.31.75,2.81,1.19,4.39,1.19s3.08-.44,4.39-1.19l2.4,2.4,1.41-1.41-2.18-2.18c1.81-1.66,2.98-4.02,2.98-6.61Zm-10,1v-6h2v4h4v2h-6Z"
              ></path>
              <path
                d="m8.31,2.74c-1.56-1.12-3.74-.98-5.14.42-1.4,1.4-1.53,3.58-.42,5.14,1.03-2.5,3.06-4.53,5.56-5.56Z"
              ></path>
              <path
                d="m15.69,2.74c2.5,1.03,4.53,3.06,5.56,5.56,1.12-1.56.98-3.74-.42-5.14-1.4-1.4-3.58-1.53-5.14-.42Z"
              ></path>
            </svg>
            <p
              :class="[
                activeTab === 'book-today-stay-tonight'
                  ? 'text-[#164a9f]'
                  : 'text-[#7f838b]',
              ]"
            >
              BOOK TODAY STAY TONIGHT
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'book-today-stay-tonight'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>

          <!-- LAST MINUTES -->
          <RouterLink
            :to="{ name: 'last-minutes' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'last-minutes'
                ? 'border-[#164a9f] text-[#164a9f] transition-all border-2'
                : 'border-[#f8f8f9]  hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'last-minutes'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="size-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m.87 10.5a1.016 1.016 0 0 1-1.13.47A1 1 0 0 1 11 12V6h2v2.27l1.13-1.96 1.73 1-3 5.2Z"
              ></path>
            </svg>
            <p
              :class="[
                activeTab === 'last-minutes'
                  ? 'text-[#164a9f]'
                  : 'text-[#7f838b]',
              ]"
            >
              LAST MINUTES
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'last-minutes'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>

          <!-- EARLY BOOKER -->
          <RouterLink
            :to="{ name: 'early-booker' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'early-booker'
                ? 'border-[#164a9f] text-[#164a9f] transition-all border-2'
                : 'border-[#f8f8f9]  hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'early-booker'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="size-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m16.75,8.5c-.2,0-.4.01-.6.04-1.23-1.6-3.1-2.54-5.15-2.54-3.11,0-5.79,2.25-6.38,5.25-1.56.56-2.62,2.04-2.62,3.75,0,2.21,1.79,4,4,4h10.75c2.89,0,5.25-2.36,5.25-5.25s-2.36-5.25-5.25-5.25Z"
              ></path>
              <path
                d="m21.61,6.05c-.13-.3-.28-.59-.46-.85-.18-.27-.39-.52-.61-.74-.23-.23-.48-.43-.74-.61-.27-.18-.55-.34-.85-.46-.3-.13-.62-.23-.94-.29-.66-.13-1.35-.13-2.01,0-.32.07-.64.17-.94.29-.3.12-.58.28-.85.46-.23.16-.45.34-.65.54,1.31.41,2.49,1.13,3.47,2.12,1.92.07,3.65.89,4.91,2.18.03-.23.07-.46.07-.69,0-.34-.03-.67-.1-1.01-.07-.32-.17-.64-.29-.94Z"
              ></path>
            </svg>
            <p
              :class="[
                activeTab === 'early-booker'
                  ? 'text-[#164a9f]'
                  : 'text-[#7f838b]',
              ]"
            >
              EARLY BOOKER
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'early-booker'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>

          <!-- DEAL OF THE DAY -->
          <RouterLink
            :to="{ name: 'deal-day' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'deal-day'
                ? 'border-[#164a9f] text-[#164a9f] transition-all border-2'
                : 'border-[#f8f8f9]  hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'deal-day'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="size-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m19,4h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM5,20v-12h14v-2,14s-14,0-14,0Z"
              ></path>
              <path d="M12 13H17V18H12z"></path>
            </svg>
            <p
              :class="[
                activeTab === 'deal-day' ? 'text-[#164a9f]' : 'text-[#7f838b]',
              ]"
            >
              DEAL OF THE DAY
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'deal-day'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>

          <!-- BOOK TODAY STAY THIS WEEK -->
          <RouterLink
            :to="{ name: 'book-today-stay-this-week' }"
            :class="[
              'relative cursor-pointer flex items-center gap-3 border-2 w-[300px] px-12 py-2 ',
              'transition-all duration-200',
              activeTab === 'book-today-stay-this-week'
                ? 'border-[#164a9f] text-[#164a9f] transition-all border-2'
                : 'border-[#f8f8f9]  hover:border-[#164a9f] hover:bg-white text-[#7f838b]',
            ]"
            @click="activeTab = 'book-today-stay-this-week'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="size-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m19,4h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1,0-2,.9-2,2v1h18v-1c0-1.1-.9-2-2-2Z"
              ></path>
              <path
                d="m3,20c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-12H3v12Zm12-8h2v2h-2v-2Zm0,4h2v2h-2v-2Zm-4-4h2v2h-2v-2Zm0,4h2v2h-2v-2Zm-4-4h2v2h-2v-2Zm0,4h2v2h-2v-2Z"
              ></path>
            </svg>
            <p
              :class="[
                activeTab === 'book-today-stay-this-week'
                  ? 'text-[#164a9f]'
                  : 'text-[#7f838b]',
              ]"
            >
              BOOK TODAY STAY THIS WEEK
            </p>
            <!-- Triangle pointer -->
            <div
              :class="[
                'absolute transform translate-y-1/4 w-0 h-0',
                'border-l-[20px] border-r-[20px] border-b-[20px] rotate-90',
                'border-l-transparent border-r-transparent transition-all duration-200',
                activeTab === 'book-today-stay-this-week'
                  ? 'border-b-[#164a9f] right-[-30px]'
                  : 'hidden',
              ]"
            ></div>
          </RouterLink>
        </div>
        <!-- right side -->
        <div>
          <RouterView />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: this.$route.name,
    };
  },
};
</script>
