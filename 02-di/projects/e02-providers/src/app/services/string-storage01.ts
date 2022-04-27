import { StringStorageInter } from './string-storage-inter';

export class StringStorage1 implements StringStorageInter{
    readonly innerList: string[] = ['Storage 1'];

    add(data: string) {
        this.innerList.push(data);
    }

    getAll() {
        return [...this.innerList];
    }
}