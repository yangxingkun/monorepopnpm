<template>
  <div>
    <s-button @click="onClick" type="primary">button</s-button>
    <s-input v-model="value">
      <template #prepend>Http://</template>
    </s-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SButton, SInput } from '@serescnn/seres-ui'
const value = ref('')
const onClick = () => {
  console.log('click')
}
</script>
