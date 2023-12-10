import {DEFAULT_HEADERS, Headers} from "@/types/data-table";
import {AssetsItem, LibraryMeta, PopupData} from "@/types/libraries";
import {TableModalTitle} from "@/enums/table-modal";
import {ModalFields} from "@/types/modal-fields";

const ASSETS_TITLES: ReadonlyArray<TableModalTitle> = [
    TableModalTitle.Files,
    TableModalTitle.MainFile,
    TableModalTitle.Version
];

const setValue = (title: TableModalTitle, value: number | string | string[]): ModalFields => {
    return { title, value };
}

const setAssetTitle = (key: string): TableModalTitle => {
    return ASSETS_TITLES.filter((value: TableModalTitle): boolean => {
        return value.toLowerCase() === key;
    })[0];
}

const setSplittedValue = (value: string | string[]): string => {
    return Array.isArray(value) ? value.join(', ') : value;
};

export const setAssets = (data: AssetsItem[]): ModalFields[][] => {
    let values: ModalFields[][] = [];

    data.forEach((item: AssetsItem, index: number): void => {
        values[index] = [];
        Object.keys(item).forEach((key: string): void => {
            const title: TableModalTitle = setAssetTitle(key);
            const value: string = setSplittedValue(item[key as keyof AssetsItem] as string);
            values[index].push(setValue(title, value));
        })
    });

    return values;
}

export const setVersion = (data: string[]): ModalFields => {
    const value: string = data ? data.join(', ') : '';
    return setValue(TableModalTitle.Version, value);
}

export const setMeta = (data: LibraryMeta): ModalFields[][] => {
    return [[
        setValue(TableModalTitle.Created, data.created),
        setValue(TableModalTitle.Revision, data.revision),
        setValue(TableModalTitle.Version, data.version)
    ]];
}

export const setGeneralModal = (popupData: PopupData): ModalFields[] => {
    return [
        setValue(TableModalTitle.Author, popupData.author),
        setValue(TableModalTitle.Loki, popupData.$loki),
        setValue(TableModalTitle.Description, popupData.description),
        setValue(TableModalTitle.Github, popupData.github),
        setValue(TableModalTitle.Homepage, popupData.homepage),
        setValue(TableModalTitle.LastVersion, popupData.lastversion),
        setValue(TableModalTitle.MainFile, popupData.mainfile),
        setValue(TableModalTitle.Name, popupData.name)
    ]
};

export const setTableHeaders = (value: string): Headers => {
    return {
        title: value.toUpperCase(),
        value: value,
        align: 'center'
    }
};

export const setDefaultHeaders = (): Headers[] => {
    const headers: Headers[] = [];
    DEFAULT_HEADERS.forEach((item: string) => {
        const itemHeader: Headers = setTableHeaders(item);
        headers.push(itemHeader);
    });
    return headers;
}