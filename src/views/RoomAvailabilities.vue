<template>
  <section>
    <div class="bg-white p-6 mt-3">
      <article>
        <h2 class="font-semibold text-2xl text-[#2a2f39]">
          Room Availabilities
        </h2>
        <p class="text-[#164a9f] pt-6 pb-2">
          Select the dates you want to alter your rooms to sell.
        </p>
        <p class="text-[#164a9f] pb-4">
          How would you like to pick your dates?
        </p>
      </article>
      <!-- Date section -->
      <div>
        <!-- Calendar Card -->
        <Calendar />

        <div>
          <AdjustAvailabilityCard />
        </div>

        <button
          class="mt-6 text-lg text-white bg-[#164a9f] w-full py-3 border-[#164a9f] border-2 transition-all hover:text-[#164a9f] hover:bg-white"
        >
          Update
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AdjustAvailabilityCard from "../components/RoomAvailabilityCards/AdjustAvailabilityCard.vue";
import Calendar from "../components/RoomAvailabilityCards/Calendar.vue";
export default {
  components: {
    Calendar,
    AdjustAvailabilityCard,
  },
  data() {},
};
</script>
