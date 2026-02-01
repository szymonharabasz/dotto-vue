<script setup lang="ts">
import { ref } from 'vue';
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
</script>

<template>
  <form class="create-dotto-form">
    <h2>Create a New Dotto</h2>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" v-model="newDotto.title" />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description" name="description" v-model="newDotto.description"></textarea>
    </div>
    <div class="form-group">
      <label for="rating">Rating:</label>
      <input type="number" id="rating" name="rating" min="1" max="5" v-model="newDotto.rating" />
    </div>
    <button type="submit" @click.prevent="onSubmit">Create Dotto</button>
  </form>
</template>