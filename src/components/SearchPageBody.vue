<script setup lang="ts">
import { ref } from 'vue';
import SearchResultSearch from '@/components/SearchResultSearch.vue';
import type { GomiFee } from '@/types/GomiFee';
import csvUrl from '@/data/fuchu-gomi.csv';
import useGomiFeeCsv from '@/composables/useGomiFeeCsv';
const { importFromUrl } = useGomiFeeCsv();

const gomiFees = ref<GomiFee[]>([]);

importFromUrl(csvUrl, (_gomiFees: GomiFee[]) => {
  gomiFees.value = _gomiFees;
});
</script>

<template>
  <SearchResultSearch v-if="gomiFees.length > 0" :gomi-fees="gomiFees" />
</template>
