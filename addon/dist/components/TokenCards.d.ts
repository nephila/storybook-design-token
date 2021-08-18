/// <reference types="react" />
import { Category } from '../types/category.types';
interface TokenCardsProps {
    categories: Category[];
    readonly?: boolean;
    showValueColumn?: boolean;
}
export declare const TokenCards: ({ categories, readonly, showValueColumn }: TokenCardsProps) => JSX.Element;
export {};
