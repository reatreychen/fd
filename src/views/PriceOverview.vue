<template>
  <section>
    <div class="bg-white p-6 mt-3">
      <article>
        <h2 class="font-semibold text-2xl text-[#2a2f39]">Rate Overview</h2>
        <p class="text-[#91949b] pt-4 pb-2">
          Control your availability and pricing here. If this is your first time
          using this, please read the disclaimer on the right.
        </p>
      </article>

      <div class="flex flex-col gap-4">
        <p class="text-[#91949b] pt-4">Color code description</p>
        <div class="flex items-center gap-10">
          <p class="text-[#41454e]">
            <span class="bg-[#efcc85] py-2 pl-4">Lo</span>w availability
          </p>
          <p class="text-[#41454e]">
            <span class="bg-[#f2f2f2] py-2 pl-4">Cl</span>ose /Sold out room
          </p>
          <p class="text-[#41454e]">
            <span class="bg-[#7fa5c7] py-2 pl-4">Pr</span>omotion with room
            limit
          </p>
          <p class="text-[#41454e]">
            <span class="bg-[#ffd9d9] py-2 pl-4">So</span>ld out promotion
          </p>
        </div>
      </div>

      <div class="flex items-center gap-10 mt-8">
        <button
          class="bg-[#164a9f] text-white font-medium px-5 py-2 rounded-full border border-[#164a9f]"
        >
          Deluxe villa
        </button>
        <button
          class="border border-[#e7e7e7] text-[#2b303a] px-5 py-2 rounded-full font-medium hover:bg-[#164a9f] hover:border-[#164a9f] hover:text-white transition-all"
        >
          Bungalow with patio
        </button>
        <button
          class="border border-[#e7e7e7] text-[#2b303a] px-5 py-2 rounded-full font-medium hover:bg-[#164a9f] hover:border-[#164a9f] hover:text-white transition-all"
        >
          Standard villa
        </button>
        <button
          class="border border-[#e7e7e7] text-[#2b303a] px-5 py-2 rounded-full hover:bg-[#164a9f] hover:border-[#164a9f] hover:text-white transition-all"
        >
          Twin Queen
        </button>
        <button
          class="border border-[#e7e7e7] text-[#2b303a] px-5 py-2 rounded-full hover:bg-[#164a9f] hover:border-[#164a9f] hover:text-white transition-all"
        >
          King Double
        </button>
        <button
          class="border border-[#e7e7e7] text-[#2b303a] px-5 py-2 rounded-full hover:bg-[#164a9f] hover:border-[#164a9f] hover:text-white transition-all"
        >
          Deluxe bungalow with garden view
        </button>
      </div>

        <div>
          <RateTable 
             
          />
        </div>
    </div>
  </section>
</template>


<script>
import RateTable from '../components/priceOverViewCard/RateTable.vue';
  export default {
     components : {
      RateTable,
     }
  }
</script>
