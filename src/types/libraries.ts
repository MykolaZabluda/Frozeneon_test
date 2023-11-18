export type AssetsItem = {
    files: string[];
    mainfile: string;
    version: string;
}

export type LibraryMeta = {
    created: number;
    revision: number;
    version: number;
};

export type Library = {
    $loki: number;
    assets: AssetsItem[];
    author: string;
    description: string;
    github: string;
    homepage: string;
    lastversion: string;
    mainfile: string;
    meta: LibraryMeta;
    name: string;
    version: string[];
};
