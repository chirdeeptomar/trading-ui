import { buy, sell } from "../actions";
import { BaseProduct } from "../models";

type Props = {
    product: BaseProduct;
};

export const BaseActionTemplate = ({ product }: Props) => {
    return (
        <div className="button-container">
            <button className="button buy" onClick={() => buy(product.id)}>
                Buy
            </button>
            <button className="button sell" onClick={() => sell(product.id)}>
                Sell
            </button>
        </div>
    );
};
