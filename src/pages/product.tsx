import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './css/productDetail.css'
import { IProduct } from "../models"
import { getById } from "../api/products"

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState<IProduct>({} as IProduct)

    const fetchProductById = async (id: any) => {
        try {
            const { data } = await getById(id)
            setProduct(data)

        } catch (err) {

        }
    }
    useEffect(() => {
        if (id) {
            fetchProductById(id)
        }
    }, [ProductDetail])
    return <div>
        <hr className="mt-10" />
        <h2 className="pl-10 fs-2">{product.name}</h2>
        <hr className="mt-10" />
        <div className="grid grid-cols-2">
            <div className='image w-full h-[600px] pl-10'>
                <img className="rounded w-full h-[600px]" src={product.images?.[0].base_url} alt="" />
            </div>
            <div className='detail mt-20 pr-20'>
                <div className="">
                    <span className="pr-3 mt-20 text-lg font-bold text-gray-900 fs-4 fst-normal text-danger ">{product.price}đ </span>
                    <span className="mt-20 text-lg font-bold text-gray-900 fw-light">{product.original_price}đ </span>
                </div>
                <p className="mt-10"> Mô tả ngắn: {product.description__small}</p>
            </div>
            <div className="d-flex justify-content-around ">
                <div className="showImage grid grid-cols-5 gap-3">
                    <div className="star__icon img__icon " >
                        <img width={30} height={43} className="rounded mx-auto d-block " src="../../public/images/Rectangle (1).png" alt="" />
                        <p className="star__icon--text">Tính năng nổi bật</p>
                    </div>
                    <img className="img-thumbnail " width={80} height={80} src={product.images?.[0].base_url} alt="" />
                    <img className="img-thumbnail " width={80} height={80} src={product.images?.[0].base_url} alt="" />
                    <img className="img-thumbnail " width={80} height={80} src={product.images?.[0].base_url} alt="" />
                    <img className="img-thumbnail " width={80} height={80} src={product.images?.[0].base_url} alt="" />
                </div>
            </div>
            <div className="cart ml-20 grid grid-cols-3 h-[70px] items-center">
                <button type="button" className="btn btn-outline-danger  ml-[10px] w-[250px] h-[50px]"> Mua Ngay</button>
                <img src="../../public/images/Icon.png" className="img__icon ml-[100px] w-[50px] h-[50px] mr-6" alt="" />
                <span className="r">Thêm vào <br /> giỏ hàng</span>
            </div>
        </div>
        <div className="container items-center mx-auto ">
            <h1 className="text-center m-10 text-danger fs-1">ĐẶC ĐIỂM NỔI BẬT</h1>
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8" dangerouslySetInnerHTML={{ __html: product.description }}></div>
            <div className="col-2"></div>
        </div>
    </div>
}
export default ProductDetail