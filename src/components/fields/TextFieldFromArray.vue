<template>
  <div v-for="asset in fields">
    <v-card-text class="title">
      {{ title }}:
    </v-card-text>
    <div v-for="item in asset">
      <TextField
          :title="item.title"
          :data-value="item.value"
          class="list"
      />
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import TextField from "@/components/fields/TextField.vue";
import {ModalFields} from "@/types/modal-fields";
import {TableModalTitle} from "@/enums/table-modal";

export default defineComponent({
  name: 'TextFieldFromArray',
  components: {TextField},
  props: {
    fields: {
      type: Array as PropType<ModalFields[][]>
    },
    title: {
      type: String as PropType<TableModalTitle>
    }
  }
})
</script>

<style scoped lang="scss">
.title {
  padding: 15px 0 10px 5px;
}

.list {
  padding: 0 0 10px 10px;
}
</style>