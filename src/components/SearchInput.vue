<template>
  <v-text-field
      v-model="searchText"
      class="w-50 mx-auto"
      label="Write your request..."
      clearable="true"
      @change="store.state.searchValue = searchText"
      @click:clear="store.state.searchValue = ''"
  ></v-text-field>
</template>

<script lang="ts">
import store from '@/store';

export default {
  computed: {
    store() {
      return store
    }
  },
  data() {
    return {
      searchText: String(''),
    }
  },
}
</script>

<style scoped lang="scss"></style>