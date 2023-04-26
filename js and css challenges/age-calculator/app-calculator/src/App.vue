<script setup>
import { reactive, ref } from 'vue';
import Arrow from '/icon-arrow.svg'

import InputComp from './components/InputComp.vue';
import AgeComponent from './components/AgeComponent.vue';

import ageCalculator from './calculator';

const bday = reactive({
  day: null,
  month: null,
  year: null
})

const calculatedBday = ref(null)


const onSubmit = () => {
  const age = ageCalculator(bday)
  calculatedBday.value = age
}

</script>

<template>
  <div class="w-screen min-h-screen bg-off-white flex justify-center items-center">
    <div class="bg-white md:p-10 p-5 rounded-t-2xl rounded-bl-2xl  lg:rounded-br-[300px] md:rounded-br-[200px] sm:rounded-br-[150px] rounded-br-[100px] max-w-[90%] md:mt-0 mt-5">
      <form @submit.prevent="onSubmit">
        <div class="flex gap-6">
          <InputComp labelText="day" v-model="bday.day" />
          <InputComp labelText="month" v-model="bday.month" />
          <InputComp labelText="year" v-model="bday.year" />
        </div>
        <div class="flex gap-1 items-center sm:mb-0 sm:mt-4  my-16 relative">
          <hr class="w-full mr-2"/>
          <button class="bg-off-black p-4 rounded-full hover:bg-purple-main focus:bg-purple-main duration-200 sm:static absolute left-[50%] translate-x-[-50%] sm:translate-x-0">
            <img :src="Arrow" alt="arrow down">
          </button>
        </div>
      </form>
      <AgeComponent :year="calculatedBday?.year" :month="calculatedBday?.month" :day="calculatedBday?.day" />
    </div>
  </div>
</template>
