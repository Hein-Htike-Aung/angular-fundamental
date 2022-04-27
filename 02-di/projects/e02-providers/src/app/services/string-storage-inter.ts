export interface StringStorageInter {
    readonly innerList: string[];

    add: (value: string) => void;
    getAll: () => string[];
}