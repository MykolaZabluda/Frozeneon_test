<template>
  <div class="home pt-16">
    <div class="home-head">
      <SearchInput />
    </div>
    <div class="home-body">
      <ModalInfo />
      <TableComponent />
    </div>
  </div>
</template>

<script lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import TableComponent from "@/components/TableComponent.vue";
import ModalInfo from "@/components/ModalInfo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ModalInfo,
    TableComponent,
    SearchInput,
  },
});
</script>
