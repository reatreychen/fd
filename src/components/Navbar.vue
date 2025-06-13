<template>
  <nav class="bg-[#164a9f] h-52">
    <div class="flex items-center justify-between px-10 pt-6">
      <img :src="Logo" alt="Cotafer" class="w-48" />
      <div class="flex items-center gap-4 border-b pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="size-7 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for anything..."
          class="bg-[#164a9f] text-[#9ab1d5] border-none outline-none font-semibold"
        />
      </div>
    </div>

    <!-- profile -->

    <div class="flex items-center gap-4 pt-10 px-10">
      <div class="h-20 w-20 rounded-full bg-[#164a9f]">
        <img
          :src="profile"
          alt="profile"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <div class=" flex items-center gap-4">
        <article>
          <p class="text-white font-semibold text-xl">Sieng Rothana</p>
          <p class="text-[#aabddc] font-medium">rothana169@gmail.com</p>
        </article>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 text-[#aabddc]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../assets/images/cotafer-logo.svg";
import profile from "../assets/images/p.jpg";
export default {
  data() {
    return {
      Logo,
      profile,
    };
  },
};
</script>
