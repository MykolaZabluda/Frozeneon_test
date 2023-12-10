<template>
  <v-card-text class="text">
    {{ title }}: {{ dataValue }}
  </v-card-text>
</template>

<script lang="ts">
import {PropType} from "vue";

export default {
  name: 'TextField',
  props: {
    dataValue: {
      type: [String, Array as PropType<string[]>, Number]
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.text {
  padding: 5px;
}
</style>