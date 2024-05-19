import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Form from '../../../components/Form';



const page = async ({ params }: any) => {
    const product = params.productType;

    return (
        <Form product={product}/>
    )
}

export default page

