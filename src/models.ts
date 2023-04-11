import * as Yup from 'yup'

export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description__small: string,
    description: string,
    images: {
        base_url: string,
        // is_gallery:boolean,
        // label:null,
        // large_url: string,
        // medium_url:string,
        // position:null,
        // small_url:string,
        // thumbnail_url:string,
    }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}

export const createProductSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number(),
    original_price:Yup.number(),
    description: Yup.string().required("trường dữ liệu bắt buộc"),
    image: Yup.array().min(6)
})

export type createProduct = Yup.InferType<typeof createProductSchema>

export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>