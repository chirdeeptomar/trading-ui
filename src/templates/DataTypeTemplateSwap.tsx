import { BaseProduct, SwapProduct } from '../models'
import { BaseActionTemplate } from './BaseActionTemplate'
import { BaseDataTemplate } from './BaseDataTemplate'

type Props = { data: SwapProduct }

function custom() {
    alert("Custom Action Invoked")
}

export const DataTypeTemplateSwap = ({ data }: Props) => {
    return (
        <div className="card" style={{ background: '#c2b2f0' }}>
            <BaseDataTemplate product={data as BaseProduct} />
            <div>I am custom section of a SWAP</div>

            <div className="parent-container">
                <div className="button-container">
                    <BaseActionTemplate product={data as BaseProduct} />
                    <button className='button' onClick={() => custom()}>Custom</button>
                </div>
            </div>

        </div>
    )
}
