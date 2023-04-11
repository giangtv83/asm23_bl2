import instance from ".";
import { IProduct,updateForm,createProduct } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: number) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}

export const DeleteById = (id: string) => {
    const uri = "/products/" + id
    return instance.delete(uri)
}

export const create = (body: createProduct) => {
    const uri = "/products/"
    return instance.post(uri, body)
}
