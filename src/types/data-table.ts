export const DEFAULT_HEADERS: Readonly<string[]> = [
    'name',
    'lastversion',
    'author'
];

export type Headers = {
    title: string;
    value: string;
    align?: string;
    sortable?: boolean;
}