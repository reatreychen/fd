<template>
  <section>
    <article class="border-l-4 border-dotted border-l-[#e6e6e6] px-3 mb-4">
      <div class=" flex items-center gap-1">
        <span class="mr-2">{{ item.flag }}</span>
        <p class="text-[#474b54] font-normal">{{ item.name }}</p>
      </div>
      <div class=" flex items-center justify-between py-1">
        <p class="text-[#164a9f] font-normal">BID: {{ item.bid }}</p>
        <p class="text-[#474b54] font-normal">{{ item.room }}</p>
      </div>
      <p class="text-[#474b54] font-normal">{{ item.check }}</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "ReservationCard",
  props: {
    item: Object,
  },
};
</script>
