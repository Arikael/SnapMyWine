import { Product } from '../taste-framework/product';

export class Wine extends Product {
    abv: number;
    vintage: number;
    // check ob nötig
    apellation: string;
}