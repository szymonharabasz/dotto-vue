<script setup lang="ts">
    import type { Dotto }  from '@/models/Dotto';

    const props = defineProps<{
        dotto: Dotto;
    }>();
</script>

<template>
    <div :key="props.dotto.id" class="dotto-item">
        <h2 class="text-xl font-bold">{{ props.dotto.title }}</h2>
        <p>{{ props.dotto.description }}</p>
        <small>Created at: {{ props.dotto.createdAt.toLocaleDateString() }}</small>
        <br />
        <small>Rating: {{ props.dotto.rating }}/5</small>
    </div>
</template>