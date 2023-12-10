<template>
  <v-dialog
      @click:outside="closeDialog"
      v-model="isActive"
      width="50%"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">More information</span>
      </v-card-title>
      <div v-for="item in modalFields.general" :key="item.title">
        <TextField
            :title="item.title"
            :data-value="item.value"
        />
      </div>
      <div v-if="rowData.assets">
        <TextFieldFromArray
            :title="title.Assets"
            :fields="modalFields.assets"
        />
      </div>
      <div v-if="rowData.meta">
        <TextFieldFromArray
            :title="title.Meta"
            :fields="modalFields.meta"
        />
      </div>
      <div v-if="rowData.version">
        <v-card-text>
          {{ title.Version }}
        </v-card-text>
        <TextField
            :title="modalFields.version.title"
            :data-value="modalFields.version.value"
        />
      </div>
      <v-card-actions>
        <v-btn color="primary" @click="closeDialog"
        >Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import {PopupData} from "@/types/libraries";
import store from "@/store";
import TextField from "@/components/fields/TextField.vue";
import {setAssets, setGeneralModal, setMeta, setVersion} from "@/helpers/table-helpers";
import {ModalPopupFields} from "@/types/modal-fields";
import {TableModalTitle} from "@/enums/table-modal";
import TextFieldFromArray from "@/components/fields/TextFieldFromArray.vue";

export default defineComponent({
  components: {TextFieldFromArray, TextField},
  computed: {
    ...mapGetters(["getPopupRowData"]),
  },
  data() {
    return {
      isActive: false,
      title: TableModalTitle,
      rowData: {} as PopupData,
      modalFields: {} as ModalPopupFields,
    };
  },
  watch: {
    getPopupRowData: {
      deep: true,
      handler(popupData: PopupData) {
        this.isActive = popupData.isActivePopup;
        this.rowData = Object.assign({}, popupData);
        this.modalFields = this.setModalFields(popupData);
      },
    },
  },
  methods: {
    setModalFields(popupData: PopupData): ModalPopupFields {
      return {
        general: setGeneralModal(popupData),
        meta: setMeta(popupData.meta),
        assets: setAssets(popupData.assets),
        version: setVersion(popupData.version)
      };
    },
    closeDialog(): void {
      store.state.popupRowData.isActivePopup = false;
    },
  }
});
</script>
