export interface ProductInter {
    cat: string;
    name: string;
}

const PRODUCTS:ProductInter[] = [
  { cat: 'Foods', name: 'Rice' },
  { cat: 'Foods', name: 'Noodle' },
  { cat: 'Drinks', name: 'Coca cola' },
  { cat: 'Drinks', name: 'Yogurt' },
  { cat: 'Snacks', name: 'Humberger' },
  { cat: 'Snacks', name: 'Potato Chips' },
];


export class ProductService {
    search(category: string) {
        return PRODUCTS.filter(product => product.cat === category);
    }

    get categories() {
        return [...new Set(PRODUCTS
            .map(product => product.cat)
            .sort())];
    }
}