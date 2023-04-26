<script setup>
  const props = defineProps({
    year: {
      type: [String, Number],
      default: '--'
    },
    month: {
      type: [String, Number],
      default: '--'
    },
    day: {
      type: [String, Number],
      default: '--'
    }
  })
</script>

<template>
  <div class="lg:mr-32">
    <p class="font-bold leading-tight italic lg:text-[96px] md:text-[80px] sm:text-[64px] text-[56px] text-off-black">
      <span class="text-purple-main">{{ props.year }}</span>
      years
    </p>
    <p class="font-bold leading-tight italic lg:text-[96px] md:text-[80px] sm:text-[64px] text-[56px] text-off-black">
      <span class="text-purple-main">{{ props.month }}</span>
      months
    </p>
    <p class="font-bold leading-tight italic lg:text-[96px] md:text-[80px] sm:text-[64px] text-[56px] text-off-black">
      <span class="text-purple-main">{{ props.day }}</span>
      days
    </p>
  </div>
</template>