<script setup lang="ts">
import type { Dotto } from '@/models/Dotto';
import DottoListItem from './DottoListItem.vue';

defineProps<{
    dottos: Dotto[];
}>();

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