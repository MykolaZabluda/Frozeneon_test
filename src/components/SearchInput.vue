<template>
  <div class="input-wrapper">
    <input v-model="searchText" @change="emitSearchValue(searchText)" placeholder="write...">
  </div>
</template>

<script lang="ts">
import store from '@/store';

export default {
  data() {
    return {
      searchText: String(),
    }
  },
  methods: {
    emitSearchValue(value: string): void {
      store.state.searchValue = value;
    }
  },
}
</script>

<style scoped lang="scss"></style>