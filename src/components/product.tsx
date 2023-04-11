import { Link } from 'react-router-dom'
import { IProduct } from "../models";
import './css/product.css'

type Props = {
    data: IProduct
}

const Product = ({ data }: Props) => {
    return <div className="container">
        <Link to={`product/${data.id}`} className="block h-[300px] w-full bg-white rounded-lg shadow-md p-6 relative">
            <img
                alt="Art"
                src={data.images?.[0].base_url}
                className="h-32 w-[150px] object-cover sm:h-[140px] lg:h-[140px]"
            />

            <h3 className="mt-4 mb-4 text-xs font-semibold text-gray-800 sm:text-sm">
                {data.name}
            </h3>
            <div className="flex absolute bottom-6">
                <h3 className="mt-4 text-xs font-semibold text-red-500 sm:text-xs mr-2">
                    {data.price}đ
                </h3>
                <p className="mt-4 text-xs font-semibold text-gray-800 sm:text-xs ml-2">
                    {data.original_price}đ
                </p>
            </div>
            <div className="flex absolute bottom-2">
                <img src="../../public/images/star.png" alt="" />
                <img src="../../public/images/star.png" alt="" />
                <img src="../../public/images/star.png" alt="" />
                <img src="../../public/images/star.png" alt="" />
                <img src="../../public/images/star.png" alt="" />
            </div>
        </Link>
    </div>

}

export default Product;