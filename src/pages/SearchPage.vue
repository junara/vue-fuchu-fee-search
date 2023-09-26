<script setup lang="ts">
import SearchPageTitle from '@/components/SearchPageTitle.vue';
import SearchPageBody from '@/components/SearchPageBody.vue';
import SearchPageFooter from '@/components/SearchPageFooter.vue';
import { evidentlyConfig } from '@/config/aws';
import { EvidentlyClient, EvaluateFeatureCommand } from '@aws-sdk/client-evidently';
import { evidentlyExampleFeatureInput } from '@/feature/evidently'; // ES Modules import

const client = new EvidentlyClient(evidentlyConfig);

// 本来はユーザーIDなどを使う
const entityId = new Date().toISOString();

const command = new EvaluateFeatureCommand(evidentlyExampleFeatureInput(entityId));
const response = client.send(command);
response
  .then((data) => {
    console.log(data.variation);
  })
  .catch((error) => {
    console.error(error);
  });
</script>
<template>
  <div>
    <SearchPageTitle />
    <SearchPageBody />
    <SearchPageFooter />
  </div>
</template>
