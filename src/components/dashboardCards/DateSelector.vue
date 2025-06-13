<template>
  <div class="flex justify-between max-w-md space-x-2 gap-10 mt-6">
    <div
        v-for="(day, index) in dates"
        :key="index"
        class="flex-1 relative "
    >
      <!-- Tooltip Box -->
      <div
          @click="$emit('update:modelValue', index)"
          :class="[
          'relative inline-block w-full cursor-pointer',
          ' px-4 py-3 text-center min-w-[300px]  transition-all duration-200',
          modelValue === index
            ? 'bg-white border-2 border-[#164a9f] transform scale-105'
            : 'bg-white border-2 border-[#e6e6e6] hover:border-[#164a9f] hover:bg-white'
        ]"
      >
        <h3 :class="[
          'text-base mb-1 font-medium',
          modelValue === index ? 'text-[#164a9f]' : 'text-[#2a2f39]'
        ]">
          {{ day.label }}
         </h3>
        <p :class="[
          'text-xs',
          modelValue === index ? 'text-[#164a9f]' : 'text-[#c5c6c9]'
        ]">
          {{ day.date }}
        </p>

        <!-- Triangle pointer -->
        <div
            :class="[
            'absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0',
            'border-l-[10px] border-r-[10px] border-t-[10px]',
            'border-l-transparent border-r-transparent transition-all duration-200',
            modelValue === index ? 'border-t-[#164a9f]' : 'hidden'
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TooltipDateSelector',
  props: {
    dates: {
      type: Array,
      required: true,
      default: () => [
        {label: 'Today', date: 'Fri, 29 July'},
        {label: 'Tomorrow', date: 'Sat, 30 July'},
        {label: 'Sunday', date: 'Sun, 31 July'}
      ]
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue']
}
</script>