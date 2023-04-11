import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getAll, DeleteById } from "../api/products"
import { IProduct } from "../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // xóa sản phẩm 
    const handleDelete = async (productId: string) => {
        const status = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này chứ ?")

        if (status) {
            await DeleteById(productId)
            setProducts(products.filter(product => product.id !== productId))
        }

    }


    return <div className="mt-20">
        <h2>Product list</h2>
        <button className="bg-green-600 text-white rounded-md p-2 ml-1">
            <Link to={`/admin/products`}>
                Thêm mới
            </Link></button>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[80%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <button className="bg-blue-600 text-white rounded-md p-2 mr-1"> <Link to={`/admin/product/${product.id}`}>
                                    Sửa
                                </Link></button>
                                <button className="bg-red-600 text-white rounded-md p-2 ml-1" onClick={() => handleDelete(product.id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
}

export default Dashboard