import { BaseProduct, BondProduct } from "../models";
import { BaseDataTemplate } from "./BaseDataTemplate";
import { BaseActionTemplate } from "./BaseActionTemplate";

type Props = {
    data: BondProduct
};

export const DataTypeTemplateBond = ({ data }: Props) => {
    return (
        <div className="card" style={{ background: '#a5ceec' }}>
            <BaseDataTemplate product={data as BaseProduct} />
            <div>I am custom section of a Bond</div>
            <div className="parent-container">
                <BaseActionTemplate product={data as BaseProduct} />
            </div>
        </div>
    )
};
