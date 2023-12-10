import {TableModalTitle} from "@/enums/table-modal";

export type ModalFields = {
    title: TableModalTitle;
    value: string | number | string[];
};

export type ModalPopupFields = {
    general: ModalFields[];
    meta: ModalFields[][];
    assets: ModalFields[][];
    version: ModalFields;
}