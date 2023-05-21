<script setup lang="ts">
import type { GomiFee } from '@/types/GomiFee';
import { ref } from 'vue';
import { useFuse } from '@vueuse/integrations/useFuse';
interface Props {
  gomiFees: GomiFee[];
}

const props = defineProps<Props>();

const searchText = ref('');
const { results } = useFuse(searchText, props.gomiFees, {
  fuseOptions: {
    keys: ['name', 'furigana'],
  },
  resultLimit: 10,
  matchAllWhenSearchEmpty: false,
});

const onInputSearchText = (e: any) => {
  searchText.value = e.target.value;
};
</script>
<template>
  <div>
    <div>
      <input type="text" placeholder="検索" @input="onInputSearchText" />
    </div>
    <div class="card">
      <div v-for="result in results" :key="result.item.key" class="card-item">
        <label>{{ result.item.name }}</label>
        <div>
          {{ result.item.furigana }}
        </div>
        <div>
          {{ result.item.fee }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.card {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
}

.card-item {
  display: flex;
  column-gap: 1em;
  flex-wrap: wrap;
}
</style>
