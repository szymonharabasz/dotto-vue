<script setup lang="ts">
    import { ref } from 'vue';
    import DottoList from '../components/DottoList.vue';
    import CreateDottoForm from '@/components/CreateDottoForm.vue';
    import type { Dotto }  from '@/models/Dotto';
    import type { DottoCreate } from '@/models/DottoCreate';
    
    const dottos = ref<Dotto[]>([
        {
            id: '1',
            title: 'First Dotto',
            description: 'This is the first dotto item.',
            createdAt: new Date(),
            rating: 5
        },
        {
            id: '2',
            title: 'Second Dotto',
            description: 'This is the second dotto item.',
            createdAt: new Date(),
            rating: 3
        }
    ]);

    function addDotto(newDotto: DottoCreate) {
        const newID = (Number.parseInt(dottos.value[dottos.value.length - 1]!.id) + 1).toString();
        const dotto: Dotto = {
            id: newID,
            title: newDotto.title,
            description: newDotto.description,
            createdAt: new Date(),
            rating: newDotto.rating
        };
        dottos.value.push(dotto);
    }
</script>

<template>
  <main>
    <CreateDottoForm @new-dotto="addDotto" />
    <DottoList :dottos="dottos" />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    align-items: flex-start;
    background-color: green;
  }
</style>