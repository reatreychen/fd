<template>
    <section>
        <div class="mt-8">
        <div class="flex text-[#3b4049]">
          <div class="border w-[375px]">
            <p class="flex items-center justify-center h-full">Date</p>
          </div>
          <div class="flex flex-col w-full">
            <div class="flex">
              <p class="border w-full h-full py-4 text-center">October</p>
              <p class="border w-full h-full py-4 text-center">November</p>
            </div>

            <div class="">
              <div class="flex relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 absolute my-3 left-0 bg-[#e6e6e6]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 absolute right-0 my-3 bg-[#e6e6e6]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <article class="flex w-full">
                <p class="border text-center py-3 w-full">Sun, 28</p>
                <p class="border text-center py-3 w-full">Mon, 29</p>
                <p class="border text-center py-3 bg-[#f5f6f7] w-full">
                  Tue, 30
                </p>
                <p class="border text-center py-3 w-full">Wed, 31</p>
                <p class="border text-center py-3 w-full">Thu, 1</p>
                <p class="border text-center py-3 w-full">Fri, 2</p>
                <p class="border text-center py-3 w-full">Sat, 3</p>
              </article>
            </div>
          </div>
        </div>

        <div class="flex text-[#3b4049] mt-2">
          <div class="border w-[375px]">
            <p class="flex items-center justify-center h-full">Room to sell</p>
          </div>
          <div class="flex flex-col w-full">
            <div class="">
              <article class="flex w-full">
                <p class="border text-center py-3 w-full">5</p>
                <p class="border text-center py-3 w-full">5</p>
                <p class="border text-center py-3 bg-[#f5f6f7] w-full">
                  Tue, 30
                </p>
                <p class="border text-center py-3 w-full bg-[#efcc85]">5</p>
                <p class="border text-center py-3 w-full">5</p>
                <p class="border text-center py-3 w-full">5</p>
                <p class="border text-center py-3 w-full">5</p>
              </article>
            </div>
          </div>
        </div>

        <div class="text-[#3b4049] mt-2 flex">
          <div class="border flex items-center justify-center bg-[#f5f6f7] w-[50px]">
            <p class=" -rotate-90">Rate</p>
          </div>

          <div class=" w-full">
            <!-- Standard Rate -->
          <div class=" flex  w-full">
            <div class="border w-[300px] flex justify-center pl-4 flex-col">
              <p class=" font-semibold pt-10">Standard Rate</p>
              <div class="flex items-center gap-2 pt-12" >
                <input type="radio" class="w-2" />
                <label class="">Promotion 10% Off</label>
              </div>
              <div class="flex items-center gap-2 pt-6 pb-4">
                <input type="radio" class="w-2" />
                <label class="">Promotion 20% Off</label>
              </div>
            </div>

            <div class=" w-full">
              <div class=" flex">
              <div class="bg-[#f5f6f7] border w-full flex flex-col items-center justify-center py-2">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>
            </div>

            <div class=" flex w-full ">
              <p class=" border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
            </div>

            <div class=" flex w-full ">
              <p class="border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
            </div>
            </div>

          </div>

          <!-- Standard Rate2 -->
           <div class=" flex  w-full mt-3">
            <div class="border w-[300px] flex justify-center pl-4 flex-col">
              <p class=" font-semibold pt-10">Standard Rate2</p>
              <div class="flex items-center gap-2 pt-12" >
                <input type="radio" class="w-2" />
                <label class="">Promotion 10% Off</label>
              </div>
              <div class="flex items-center gap-2 pt-6 pb-4">
                <input type="radio" class="w-2" />
                <label class="">Promotion 20% Off</label>
              </div>
            </div>

            <div class=" w-full">
              <div class=" flex">
              <div class=" border w-full flex flex-col items-center justify-center py-2">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex-col flex items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
                
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>
            </div>

            <div class=" flex w-full ">
              <p class=" border border-[#efeff0] text-center py-5 w-full bg-[#7fa5c7]">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full ">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full">90</p >
              <p class=" border border-[#efeff0] text-center py-5 w-full bg-[#7fa5c7]">90</p >
            </div>

            <div class=" flex w-full ">
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full bg-[#ffd9d9]">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full bg-[#f5f6f7]">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full bg-[#7fa5c7]">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
              <p class="border border-[#efeff0] text-center py-5 w-full">80</p >
            </div>
            </div>

          </div>


          <!-- Standard Rate10 -->
           <div class=" flex  w-full mt-3">
            <div class="border w-[300px] flex justify-center pl-4 flex-col">
              <p class=" font-semibold">Standard Rate10</p>
            </div>

            <div class=" w-full">
              <div class=" flex">
              <div class=" border w-full flex flex-col items-center justify-center py-2">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center bg-[#f5f6f7]">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>

              <div class=" border w-full flex flex-col items-center justify-center">
                <p>100</p>
                <button>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#164a9f] dark:peer-checked:bg-[#164a9f]"
                    ></div>
                  </label>
                </button>
              </div>
            </div>

            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
</template>