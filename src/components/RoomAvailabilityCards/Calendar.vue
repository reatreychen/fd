<template>
  <section>
    <div class="flex items-center gap-10">
      <div class="flex items-center gap-4">
        <input
          type="radio"
          value="dateRange"
          v-model="selectedOption"
          class="w-4 h-4 appearance-none rounded-full bg-[#e6e6e6] checked:bg-[#164a9f] border"
        />
        <label class="text-[#2a2f39] font-normal">Date range</label>
      </div>

      <div class="flex items-center gap-4">
        <input
          type="radio"
          value="specificDate"
          v-model="selectedOption"
          class="w-4 h-4 appearance-none rounded-full bg-[#e6e6e6] checked:bg-[#164a9f] border"
        />
        <label class="text-[#2a2f39] font-normal">Specific date(s)</label>
      </div>
    </div>
    <div class="border-2 border-[#e7e7e7] p-6 mt-8">
      <!-- Specific Date -->
      <div v-if="selectedOption === 'specificDate'">
        <h1 class="text-lg font-medium">Specific Date(s)</h1>
        <div class="border border-[#e7e7e7] mt-6 p-4 ">
          <p class="text-xs text-[#777c82] font-semibold">FILTER DATE(S)</p>

          <div class=" flex items-center gap-4 mt-4">
            <div class=" bg-[#f5f6f7] flex w-fit px-3 py-2 rounded-full gap-3">
            <p class=" text-sm text-[#2a2f39]">01/10/2018</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class=" bg-[#f5f6f7] flex w-fit px-3 py-2 rounded-full gap-3">
            <p class=" text-sm text-[#2a2f39]">03/10/2018</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class=" bg-[#f5f6f7] flex w-fit px-3 py-2 rounded-full gap-3">
            <p class=" text-sm text-[#2a2f39]">05/10/2018</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>

      <!-- Date Range -->
      <div v-if="selectedOption === 'dateRange'">
        <h1 class="font-medium pb-4">Date Range</h1>
        <div class="flex gap-6 mb-4 mt-2">
          <div class="border px-4 pt-2">
            <label class="block text-sm text-[#626771] pb-1">FROM</label>
            <input
              type="date"
              v-model="dateFrom"
              @change="generateCalendar"
              class="appearance-none w-60 outline-none focus:border-[#164a9f] text-[#2a2f39]"
            />
          </div>
          <div class="border px-4 pt-2">
            <label class="block text-sm text-[#626771] pb-1">TO</label>
            <input
              type="date"
              v-model="dateTo"
              @change="generateCalendar"
              class="appearance-none w-60 outline-none focus:border-[#164a9f] text-[#2a2f39]"
            />
          </div>
        </div>

        <!-- checkin day -->
        <div class="grid grid-cols-3 w-[800px] gap-4 mt-8 items-center">
          <label
            v-for="day in weekdays"
            :key="day.name"
            class="flex items-center gap-4 text-[#2a2f39]"
          >
            <input
              type="checkbox"
              class="w-4 h-4"
              v-model="day.checked"
              @change="generateCalendar"
            />
            {{ day.name }}
          </label>
        </div>
      </div>

      <!-- Calendar -->
      <div class="mt-8">
        <h1 class="text-lg text-[#2a2f39] pb-6">Calendar</h1>
        <!-- month -->
        <div class="flex">
          <div
            class="border border-[#e7e7e7] w-[100px] flex flex-col justify-between items-center py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <p
              class="text-lg text-[#2a2f39] -rotate-90 font-se w-40 font-semibold"
            >
              OCTOBER 2018
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="grid grid-cols-7 text-center text-sm w-full">
            <div
              class="border border-[#e7e7e7] h-16 flex items-center justify-center"
              v-for="d in daysShort"
              :key="d"
            >
              <h2 class="text-[#2a2f39] font-medium text-lg">{{ d }}</h2>
            </div>
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="border border-[#e7e7e7] h-16 flex items-center justify-center transition"
            >
              <p
                :class="[
                  day.isCurrentMonth
                    ? highlightedDays.includes(day.dateString)
                      ? 'bg-green-500 text-white font-bold text-lg flex items-center justify-center rounded-full h-12 w-12'
                      : 'bg-white text-lg text-[#2a2f39]'
                    : 'text-[#2a2f39]',
                ]"
              >
                {{ day.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
  isWithinInterval,
  parseISO,
} from "date-fns";

export default {
  data() {
    return {
      dateType: "range",
      dateFrom: "2018-10-01",
      dateTo: "2018-10-05",

      weekdays: [
        { name: "Monday", checked: true },
        { name: "Tuesday", checked: false },
        { name: "Wednesday", checked: true },
        { name: "Thursday", checked: false },
        { name: "Friday", checked: true },
        { name: "Saturday", checked: true },
        { name: "Sunday", checked: true },
      ],
      daysShort: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      calendarDays: [],
      highlightedDays: [],
      manageType: "adjust",
      applyValue: 5,
      rooms: [
        { name: "Bungalow with patio", total: 5, count: 0 },
        { name: "Villa with beach front", total: 5, count: 0 },
        { name: "Deluxe bungalow with garden view", total: 5, count: 0 },
        { name: "Bungalow with garden view", total: 5, count: 0 },
      ],
      selectedOption: "dateRange",
    };
  },
  methods: {
    generateCalendar() {
      const year = 2018;
      const month = 9;
      const start = startOfMonth(new Date(year, month));
      const end = endOfMonth(new Date(year, month));
      const allDays = eachDayOfInterval({ start, end });

      const firstDayOffset = (getDay(start) + 6) % 7;
      const blanks = Array(firstDayOffset).fill({
        date: "",
        isCurrentMonth: false,
      });

      this.calendarDays = [
        ...blanks,
        ...allDays.map((d) => {
          return {
            date: d.getDate(),
            dateObj: d,
            dateString: format(d, "yyyy-MM-dd"),
            weekday: d.getDay(),
            isCurrentMonth: true,
          };
        }),
      ];

      this.highlightedDays = this.calendarDays
        .filter((day) => {
          if (!day.isCurrentMonth) return false;
          const weekdayIndex = (day.weekday + 6) % 7;
          const isWeekdayChecked = this.weekdays[weekdayIndex]?.checked;

          const from = parseISO(this.dateFrom);
          const to = parseISO(this.dateTo);
          const isInRange = isWithinInterval(day.dateObj, {
            start: from,
            end: to,
          });

          return isWeekdayChecked && isInRange;
        })
        .map((day) => day.dateString);
    },
    applyToAll() {
      this.rooms.forEach((room) => (room.count = this.applyValue));
    },
  },
  mounted() {
    this.generateCalendar();
  },
};
</script>

<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>
