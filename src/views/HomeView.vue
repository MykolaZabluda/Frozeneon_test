<template>
  <div class="home">
    <div class="home-head">
      <p class="title">Write your question</p>
      <SearchInput />
    </div>
    <div class="home-body">
      <TableComponent />
    </div>
  </div>
</template>

<script lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import TableComponent from "@/components/TableComponent.vue";

export default {
  components: {
    TableComponent,
    SearchInput,
  },
}
</script>

<!--<style scoped lang="scss">-->
<!--.home {-->
<!--  &-body {-->
<!--    .table {-->
<!--      &-row {-->
<!--        &:first-child {-->
<!--          &-column {-->
<!--            &:first-child {-->
<!--              border-radius: 8px 0 0 0;-->
<!--            }-->

<!--            &:last-child {-->
<!--              border-radius: 0 8px 0 0;-->
<!--            }-->
<!--          }-->
<!--        }-->

<!--        &-column {-->
<!--          border: 1px solid #000;-->
<!--          padding: 8px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->