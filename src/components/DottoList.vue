<script setup lang="ts">
    import { ref } from 'vue';
    import type { Dotto }  from '@/models/Dotto';
    import DottoListItem from './DottoListItem.vue';

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
</script>

<template>
    <div class="dotto-list">
        <DottoListItem 
            v-for="dotto in dottos" 
            :key="dotto.id" 
            :dotto="dotto" 
        />
    </div>
</template>