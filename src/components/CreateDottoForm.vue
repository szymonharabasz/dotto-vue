<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { DottoCreate } from '@/models/DottoCreate';

const newDotto = ref<DottoCreate>({
  title: '',
  description: '',
  rating: 0
});

const emit = defineEmits(['new-dotto']);

function onSubmit() {
    // Emit the new dotto data to the parent component
    emit('new-dotto', newDotto.value);
}

const labelStyle = reactive({
  'block': true,
  'text-gray-500': true,
  'font-bold': true,
  'md:text-right': true,
  'mb-1': true,
  'md:mb-0': true,
  'pr-4': true
});


const inputStyle = reactive({
  'bg-gray-200': true,
  'appearance-none': true,
  'border-2': true,
  'border-gray-200': true,
  'rounded': true,
  'w-full': true,
  'py-2': true,
  'px-4': true,
  'text-gray-700': true,
  'leading-tight': true,
  'focus:outline-none': true,
  'focus:bg-white': true,
  'focus:border-purple-500': true
});

const buttonStyle = reactive({
  'bg-purple-500': true,
  'hover:bg-purple-700': true,
  'text-white': true,
  'font-bold': true,
  'py-2': true,
  'px-4': true,
  'rounded': true
});

const formGroupStyle = reactive({
  'md:flex': true,
  'md:items-center': true,
  'mb-6': true
});

const labelContainerStyle = reactive({
  'md:w-1/3': true,
  'text-right': true,
  'mb-1': true,
  'md:mb-0': true,
  'pr-4': true
});

const inputContainerStyle = reactive({
  'md:w-2/3': true
});

</script>

<template>
  <form :class="['w-full', 'max-w-sm']">
    <h2>Create a New Dotto</h2>
    <div :class="formGroupStyle">
      <div :class="labelContainerStyle">
        <label for="title" :class="labelStyle">Title:</label>
      </div>
      <div :class="inputContainerStyle">
        <input type="text" id="title" name="title" v-model="newDotto.title" :class="[inputStyle, 'text-red-500']"/>
      </div>
    </div>
    <div :class="formGroupStyle">
      <div :class="labelContainerStyle">
        <label for="description" :class="labelStyle">Description:</label>
      </div>
      <div :class="inputContainerStyle">
        <textarea id="description" name="description" v-model="newDotto.description" :class="inputStyle"></textarea>
      </div>
    </div>
    <div :class="formGroupStyle">
      <div :class="labelContainerStyle">
        <label for="rating" :class="labelStyle">Rating:</label>
      </div>
      <div :class="inputContainerStyle">
        <input type="number" id="rating" name="rating" min="1" max="5" v-model="newDotto.rating" :class="inputStyle"/>
      </div>
    </div>
    <button type="submit" @click.prevent="onSubmit" :class="buttonStyle">Create Dotto</button>
  </form>
</template>
