<script setup>
import { computed, ref, watch } from 'vue';


const props = defineProps({
  labelText: {
    type: String,
    required: true,
    validator(value) {
      return ['day', 'month', 'year'].includes(value)
    }
  },
  modelValue: {
    type: [Number, null],
    required: true,
  }
})

const errorShow = ref(false)


watch(() => props.modelValue, (value) => {
  const dayReg = /^[1-9]$|^[12]\d$|^3[01]$/;
  const monthReg = /^[1-9]$|^1[012]$/

  if (props.labelText === 'day') {
    errorShow.value = !dayReg.test(value) 
  } else if (props.labelText === 'month') {
     errorShow.value = !monthReg.test(value)

  } else if (props.labelText === 'year') {
      errorShow.value = value > new Date().getFullYear() || value < 1900
  }
})

const placeholderValue = computed(() => {
  return props.labelText === 'day' ? "DD" : props.labelText === 'month' ? "MM" : "YYYY"
})

const errorColor = (variable) => {
  return errorShow.value && `!${variable}-light-red`
}

</script>

<template>
  <label class="flex flex-col gap-2 items-start">
    <span class="uppercase text-xs md:text-md font-semibold text-smokey-grey tracking-widest" :class="errorColor('text')">{{props.labelText}}</span>
    <input 
      type="number"
      :value="props.modelValue"
      @input="$emit('update:modelValue', Number($event.target.value))"
      :placeholder='placeholderValue'
      required
      class="text-off-black font-bold border-[0.5px] text-xl md:text-3xl border-light-grey rounded-md p-3 placeholder:font-bold placeholder:text-xl sm:placeholder:text-3xl sm:max-w-[150px] max-w-[80px] focus:outline-none focus:border-blue-900"
      :class="errorColor('border')"
      />
    <span v-if="errorShow" class="text-light-red sm:text-sm text-xs">Value is invalid</span>
  </label>
</template>

