import { BaseProduct } from "../models";

type Props = {
    product: BaseProduct;
};

export const BaseDataTemplate = ({ product }: Props) => {
    return (
        <div>
            <div className="card-title">{product.type}</div>
            <div className="card-content">{product.name}</div>
        </div>
    );
};
