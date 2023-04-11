import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { createProduct, createProductSchema } from '../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { create } from '../api/products';
import { useNavigate } from 'react-router-dom';
const CreatProducts = () => {
    const { register, handleSubmit } = useForm<createProduct>({
        resolver: yupResolver(createProductSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: createProduct) => {
        // console.log(data);

        const response = await create(data)
        console.log(response);
        navigate('/admin')
    }


    return <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
                <div className="lg border:col-span-2 lg border:py-12">
                    Update sản phẩm
                </div>

                <div className="rounded-lg border bg-white p-8 shadow-lg lg border:col-span-3 lg border:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                {...register("name")}
                            />
                            <p className='text-red-600 text-[10px]'>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Gía</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    {...register("price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                </p>
                            </div>

                            <div>
                                <label>Giảm giá</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    {...register("original_price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                </p>
                            </div>
                        </div>


                        <div>
                            <label>Mô tả</label>

                            <textarea
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                {...register("description")}
                            ></textarea>
                            <p className='text-red-600 text-[10px]'>
                            </p>
                        </div>

                        <div>
                            <label>Ảnh</label>

                            <input type="text"
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                {...register("image")}
                            ></input>
                            <p className='text-red-600 text-[10px]'>
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default CreatProducts