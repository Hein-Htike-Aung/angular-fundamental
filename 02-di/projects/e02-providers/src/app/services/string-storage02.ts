import { StringStorageInter } from './string-storage-inter';

export class StringStorage2 implements StringStorageInter{
    readonly innerList: string[] = ['Storage 2'];

    add(data: string) {
        this.innerList.push(data);
    }

    getAll() {
        return [...this.innerList];
    }
}