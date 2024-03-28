type ProductType = "BOND" | "CDS" | "SWAP"

export interface BaseProduct {
    id: string
    name: string
    type: ProductType
}

export type BondProduct = BaseProduct & { type: "BOND" }

export type CdsProduct = BaseProduct & { type: "CDS" }

export type SwapProduct = BaseProduct & { type: "SWAP" }

interface ProductField {
    name: string
    label: string
    value: string
    type: number | string | Date
}

interface DynamicProductProps {
    fields: ProductField[]
}

export type Product = BaseProduct & DynamicProductProps & (BondProduct | CdsProduct | SwapProduct)
