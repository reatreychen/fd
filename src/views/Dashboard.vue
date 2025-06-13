<template>
  <section class="">
    <h1 class="text-white text-3xl font-semibold text-center">Dashboard</h1>

    <!-- reservation card -->
    <div class="bg-white p-6 mt-3">
      <h2 class=" font-medium text-xl">Reservation</h2>
      <DateSelector :dates="dates" v-model="selectedDate" />

      <!-- booking list -->
      

      <div>
         <ReservationSection title="Booking" :items="filteredData.booking" />
        <ReservationSection title="Check-in" :items="filteredData.checkin" />
        <ReservationSection title="Check-out" :items="filteredData.checkout" />
      </div>
    </div>

    <div class=" grid md:grid-cols-3 grid-cols-1 ">
      <!-- rate and availability card -->
       <RateAndAvailability/>
       <!-- promotion card-->
        <Promotion/>
        <!-- scheduled holidays card -->
         <ScheduledHolidays/>
    </div>


    <div class=" grid grid-cols-[1fr,4fr] gap-6 mt-6">
      <UnreadMessage/>
      <RecentReviews/>
    </div>
  </section>
</template>

<script>
import DateSelector from "../components/dashboardCards/DateSelector.vue";
import Promotion from "../components/dashboardCards/Promotion.vue";
import RateAndAvailability from "../components/dashboardCards/RateAndAvailability.vue";
import RecentReviews from "../components/dashboardCards/RecentReviews.vue";
import ReservationSection from "../components/dashboardCards/ReservationSection.vue";
import ScheduledHolidays from "../components/dashboardCards/ScheduledHolidays.vue";
import UnreadMessage from "../components/dashboardCards/UnreadMessage.vue";
export default {
  name: "ReservationDashboard",
  components: {
    DateSelector,
    ReservationSection,
    RateAndAvailability,
    Promotion,
    ScheduledHolidays,
    UnreadMessage,
    RecentReviews,
  },
  data() {
    return {
      selectedDate: 1,
      dates: [
        { label: "Yesterday", date: "Thu, 28 July 2018", key: "2018-07-28" },
        { label: "Today", date: "Fri, 29 July 2018", key: "2018-07-29" },
        { label: "Tomorrow", date: "Sat, 30 July 2018", key: "2018-07-30" },
      ],
      reservationsByDate: {
        "2018-07-28": { booking: [], checkin: [], checkout: [] },
        "2018-07-29": {
          booking: [
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
            {
              name: "Dith Rath",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in time: 1:30 AM",
              flag: "🇰🇭",
            },
            {
              name: "Dith Rath",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in time: 1:30 AM",
              flag: "🇰🇭",
            },
          ],
          checkin: [
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "1:30Am",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
          ],
          checkout: [
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in/out: 28 Jul - 30 Jul",
              flag: "🇰🇭",
            },
          ],
        },
        "2018-07-30": {
          booking: [
            {
              name: "Dith Rath",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in time: 1:30 AM",
              flag: "🇰🇭",
            },
          ],
          checkin: [
            {
              name: "Dith Rath",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-in time: 1:30 AM",
              flag: "🇰🇭",
            },
          ],
          checkout: [
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-out time: 11:00 AM",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-out time: 11:00 AM",
              flag: "🇰🇭",
            },
            {
              name: "Saluk Rangsei",
              bid: "920",
              room: "1 room(s), 4 guest(s)",
              check: "Check-out time: 11:00 AM",
              flag: "🇰🇭",
            },
          ],
        },
      },
    };
  },
  computed: {
    filteredData() {
      const key = this.dates[this.selectedDate].key;
      return (
        this.reservationsByDate[key] || {
          booking: [],
          checkin: [],
          checkout: [],
        }
      );
    },
  },
};
</script>
