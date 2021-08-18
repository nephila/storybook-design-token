/// <reference types="react" />
import { Category } from '../types/category.types';
interface TokenTableProps {
    categories: Category[];
    readonly?: boolean;
    showValueColumn?: boolean;
}
export declare const TokenTable: ({ categories, readonly, showValueColumn }: TokenTableProps) => JSX.Element;
export {};
