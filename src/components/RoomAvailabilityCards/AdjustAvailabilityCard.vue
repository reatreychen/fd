<template>
  <section>
    <div>
      <article class="mt-6">
        <p class="text-[#2a2f39] mb-4">
          How would you like to manage your room availabilities?
        </p>

        <div class="flex items-center gap-10">
          <div class="flex items-center gap-4">
            <input
              id="red-radio"
              type="radio"
              value="adjustavailabilities"
              v-model="selectOption"
              class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full checked:bg-[#164a9f]"
            />
            <p class="text-[#2a2f39] font-normal">Adjust availabilities</p>
          </div>

          <div class="flex items-center gap-4">
            <input
              id="red-radio"
              type="radio"
              value="openCloseRoom"
              v-model="selectOption"
              class="w-4 h-4 text-[#164a9f] bg-[#e6e6e6] appearance-none rounded-full checked:bg-[#164a9f]"
            />
            <p class="text-[#2a2f39] font-normal">Open/close rooms</p>
          </div>
        </div>
      </article>
    </div>
    <div class="border-2 border-[#e7e7e7] p-6 mt-8">
      <!-- Adjust availabilities selected -->
      <div v-if="selectOption === 'adjustavailabilities'">
        <article class="flex flex-col gap-2">
          <h1 class="text-lg text-[#2a2f39]">Adjust availabilities</h1>
          <p class="text-[#a7a9af]">
            Here you can adjust the number of rooms to sell by the room that was
            created
          </p>
        </article>

        <!-- Apply availability of room/each -->
        <div class="flex items-center gap-5 mt-8">
          <p class="text-[#2a2f39]">Apply availability of</p>
          <div class="flex">
            <input
              type="text"
              v-model="applyRooms"
              class="border py-3 px-3 w-24 outline-none focus:border-[#164a9f]"
            />
            <label class="bg-[#e6e6e6] py-3 px-3 text-[#2a2f39]"
              >room(s)/each</label
            >
          </div>
          <p class="text-[#2a2f39]">to these room type below</p>
          <button
            @click="applyToRooms"
            class="text-white bg-[#164a9f] px-6 rounded py-3 border-[#164a9f] hover:text-[#164a9f] hover:bg-white border font-semibold transition-all duration-200"
          >
            APPLY
          </button>
        </div>

        <!-- Apply room -->
        <div class="bg-[#f5f6f7] p-6 mt-8 grid gap-4">
          <div
            v-for="(room, index) in rooms"
            :key="index"
            class="flex items-center justify-between"
          >
            <div class="flex flex-col gap-1">
              <p class="text-[#2a2f39]">{{ room.name }}</p>
              <p class="text-[#626771] text-sm">
                {{ room.total }} room(s) in total
              </p>
            </div>

            <div class="flex">
              <input
                type="text"
                v-model="room.available"
                class="px-3 p-2 border border-[#e6e6e6] outline-none focus:border-[#164a9f] w-[400px]"
              />
              <label class="bg-[#e6e6e6] py-3 px-3 text-[#2a2f39]"
                >room(s)</label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Open/Close room -->
      <div v-if="selectOption === 'openCloseRoom'">
        <article class="flex flex-col gap-1">
          <h1 class="text-lg text-[#363a44] font-medium">Open/close rooms</h1>
          <p class="text-[#898d94]">
            Select rate(s) and room(s) that you want to open or close.
          </p>
        </article>

        <div class="grid grid-cols-[4fr,2fr] gap-10 items-start">
          <div class=" grid gap-1">
            <div
              class="bg-[#f5f6f7] mt-6"
              v-for="(room, index) in rooms"
              :key="index"
            >
              <div class="bg-[#e6e6e6] p-4 flex items-center justify-between">
                <h1 class="text-lg text-[#2a2f39] font-normal">
                  {{ room.name }}
                </h1>
                <button @click="toggleShowContent(index)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-[#82868e]"
                    :class="{ 'rotate-180': room.showContent }"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>

              <div v-if="room.showContent" class="px-6 py-6">
                <div class="grid gap-4">
                  <div
                    v-for="(rate, index) in room.rates"
                    :key="index"
                    class="flex items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      v-model="rate.selected"
                      class="w-5 h-5 appearance-none bg-[#e6e6e6]"
                    />
                    <label class="text-[#393d47]">{{ rate.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#164a9f] p-6 mt-6">
            <p class="text-white font-semibold">
              Do you want to open or close rate(s) room(s)?
            </p>
            <div class="flex items-center gap-4 mt-5">
              <button
                class="bg-white text-[#164a9f] px-8 hover:text-white border-2 transition-all border-white hover:bg-[#164a9f] rounded py-3"
              >
                Open
              </button>
              <button
                class="bg-[#164a9f] text-white px-8 py-3 border-2 border-white rounded hover:text-[#164a9f] transition-all duration-200 hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectOption: "adjustavailabilities",
      applyRooms: 0,
      rooms: [
        {
          name: "Deluxe villa",
          total: 5,
          available: 0,
          showContent: true,
          rates: [
            { name: "Last minute (free breakfast)", selected: false },
            { name: "Standard Rate", selected: false },
            { name: "International rate", selected: false },
            { name: "Room with breakfast", selected: false },
            { name: "Typical room rate", selected: false },
            { name: "Weekend rate", selected: false },
          ],
        },
        {
          name: "Bungalow with patio",
          total: 5,
          available: 0,
          showContent: false,
          rates: [
            { name: "Standard Rate", selected: false },
            { name: "Weekend rate", selected: false },
          ],
        },
        {
          name: "Villa with beach front",
          total: 5,
          available: 0,
          showContent: false,
          rates: [
            { name: "International rate", selected: false },
            { name: "Room with breakfast", selected: false },
          ],
        },
      ],
    };
  },
  methods: {
    toggleShowContent(index) {
      this.rooms[index].showContent = !this.rooms[index].showContent;
    },
    applyToRooms() {
      this.rooms.forEach((room) => {
        room.available = this.applyRooms;
      });
    },
  },
};
</script>
