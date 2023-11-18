<template>
  <div class="table-wrapper">
    <table class="table">
      <tr>
        <th>name</th>
        <th>last version</th>
        <th>author</th>
      </tr>
      <tr class="table-row" v-for="library in libraries" :key="library">
        <td class="table-column">{{ library.name }}</td>
        <td class="table-column">{{ library.lastversion }}</td>
        <td class="table-column">{{ library.author }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import {Library} from "@/types/libraries";
import axios from "axios";
import {defineComponent} from "vue";

export default defineComponent({
  computed: {
    ...mapGetters(["getSearchValue"]),
  },
  data() {
    return {
      libraries: new Array<Library>(),
    }
  },
  watch: {
    getSearchValue: {
      deep: true,
      handler(text: string) {
        this.getLibraries(text);
      },
    },
  },
  methods: {
    async getLibraries(searchData: string): Promise<void> {
      try {
        const response: { data: Library[] } = await axios.get(`http://api.jsdelivr.com/v1/${searchData}/libraries`);
        this.libraries = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});
</script>

<style scoped lang="scss">
.table-wrapper {
  .table {
    margin: auto;

    &-row {
      &:first-child {
        &-column {
          &:first-child {
            border-radius: 8px 0 0 0;
          }

          &:last-child {
            border-radius: 0 8px 0 0;
          }
        }
      }
    }

    &-column {
      border: 1px solid #000;
      padding: 8px;
    }
  }
}
</style>