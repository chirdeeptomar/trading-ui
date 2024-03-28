import { BaseProduct, CdsProduct } from "../models";
import { BaseDataTemplate } from "./BaseDataTemplate";
import { BaseActionTemplate } from "./BaseActionTemplate";

type Props = { data: CdsProduct };

export const DataTypeTemplateCds = ({ data }: Props) => {
    return (
        <div className="card" style={{ background: '#b0c86f' }}>
            <BaseDataTemplate product={data as BaseProduct} />
            <div>I am custom section of a CDS</div>
            <div className="parent-container">
                <BaseActionTemplate product={data as BaseProduct} />
            </div>
        </div>
    )

};
