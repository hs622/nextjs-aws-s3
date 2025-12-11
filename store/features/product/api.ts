import {API_BASE_URL} from "@/lib/constants";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProductData} from "./productSlice";
import {IProduct} from "@/types/product";

type TProduct = keyof IProduct;

export const fetchProducts = createAsyncThunk (
    "products/getProducts" ,
    async ( {
                limit ,
                skip ,
                properties ,
            }: {
        limit?: number;
        skip?: number;
        properties?: TProduct[];
    } ): Promise<IProductData> => {
        try {
            let url: string = `${ API_BASE_URL }/products`;
            let query: string;

            if (limit) url += url.endsWith ( "products" ) ? `?limit=${ limit }` : `&limit=${ limit }`;
            if (skip) url += url.endsWith ( "products" ) ? `?skip=${ skip }` : `&skip=${ skip }`;

            if (properties) {
                const query = properties.join ()
                url += url.endsWith ( "products" ) ? `?select=${ query }` : `&select=${ query }`;
                console.log ( url );
            }

            const reponse = await fetch ( url );
            return await reponse.json ();
        } catch (error) {
            console.log ( error );
            throw new Error ( "Error while fetching products" );
        }
    }
);

export const fetchProduct = createAsyncThunk (
    "products/getProduct" ,
    async ( { productId }: { productId: number } ) => {
        console.log ( `request rise for the product number: ${ productId }` );
        const data = await fetch ( `${ API_BASE_URL }/products` );

        return await data.json ();
    }
);

