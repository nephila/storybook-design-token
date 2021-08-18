/// <reference types="react" />
export interface DesignTokenDocBlockProps {
    categoryName: string;
    viewType?: 'card' | 'table';
    showValueColumn?: boolean;
}
export declare const DesignTokenDocBlock: ({ categoryName, viewType, showValueColumn, }: DesignTokenDocBlockProps) => JSX.Element | null;
