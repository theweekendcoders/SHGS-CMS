import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Form from '../../../components/Form';



const page = async ({ params }: any) => {
    const product = params.productType;

    return (
        <div className='my-10'>
            <Form product={product}/>
        </div>
    )
}

export default page

