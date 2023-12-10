<template>
  <v-alert v-if="isErrorAlert" type="error">
    {{ errorMessage }}
  </v-alert>
  <v-data-table
      v-if="libraries.length"
      :headers="headers"
      :items="libraries"
      :items-per-page="10"
      @click:row="handleClick"
  >
  </v-data-table>
  <div v-else>No data available</div>
</template>

<script lang="ts">
import {mapGetters} from "vuex";
import {Library, PopupData} from "@/types/libraries";
import {Headers} from "@/types/data-table";
import axios from "axios";
import store from '@/store';
import {defineComponent} from "vue";
import {setDefaultHeaders} from "@/helpers/table-helpers";

export default defineComponent({
  computed: {
    ...mapGetters(["getSearchValue"]),
  },
  data() {
    return {
      headers: new Array<Headers>(),
      libraries: new Array<Library>(),
      isErrorAlert: false,
      errorMessage: String(''),
    }
  },
  watch: {
    getSearchValue: {
      deep: true,
      handler(text: string) {
        !text ? this.libraries = [] : this.getLibraries(text);
      },
    },
  },
  methods: {
    async getLibraries(searchData: string): Promise<void> {
      await axios.get(`http://api.jsdelivr.com/v1/${searchData}/libraries`)
          .then((response: { data: Library[] }) =>{
            this.headers = setDefaultHeaders();
            this.libraries = response.data;
          }).catch((error) => this.showErrorMessage(error.response.data.message));
    },
    handleClick(event: PointerEvent, row: any): void {
      const popup: PopupData = {
        ...this.libraries[row.item.$loki - 1],
        ...{ isActivePopup: true }
      }
      store.state.popupRowData = Object.assign({}, popup);
    },
    showErrorMessage(error: string): void {
      this.isErrorAlert = true;
      this.errorMessage = error;

      setTimeout(() => this.isErrorAlert = false, 2000);
    }
  },
});
</script>

<style scoped lang="scss">
</style>