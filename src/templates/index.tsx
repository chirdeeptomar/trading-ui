import { BondProduct, CdsProduct, Product, SwapProduct } from "../models";
import { DataTypeTemplateBond } from "./DataTypeTemplateBond";
import { DataTypeTemplateCds } from "./DataTypeTemplateCds";
import { DataTypeTemplateSwap } from "./DataTypeTemplateSwap";

// Define visitor functions outside of the component
export const visitors = {
    BOND: (data: Product) => <DataTypeTemplateBond data={data as BondProduct} />,
    CDS: (data: Product) => <DataTypeTemplateCds data={data as CdsProduct} />,
    SWAP: (data: Product) => <DataTypeTemplateSwap data={data as SwapProduct} />,
};