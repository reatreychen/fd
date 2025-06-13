<template>
  <section>
    <div class="flex items-center mt-6">
      <h1 class="text-xl font-medium w-[100px]">{{ title }}</h1>
      <div class="border-b-2 border-[#f5f6f7] w-full"></div>
    </div>
    <div v-if="items.length" class="grid md:grid-cols-3 gap-4 mt-4">
      <ReservationCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
    <div v-else class=" flex items-center flex-col ">
      <div class=" w-[400px] h-[400px]">
        <img :src="nodata" alt="nodata">
      </div>
      <p class="text-gray-400 text-sm">No {{ title.toLowerCase() }} today</p>
    </div>
  </section>
</template>

<script>
import ReservationCard from "./ReservationCard.vue";
import nodata from "../../assets/images/nodata.jpg"
export default {
  name: "ReservationSection",
  components: { ReservationCard },
  props: {
    title: String,
    items: Array,
  },
  data () {
    return {
      nodata,
    }
  }
};
</script>
