import React from 'react'
import UpdateProducts from '../../../components/UpdateProducts'

const page = ({ searchParams }: any) => {
  const productDetails = JSON.parse(searchParams.productDetails)
  console.log(productDetails)
  return (
    <div>
        <UpdateProducts product={productDetails}></UpdateProducts>
    </div>
  )
}

export default page
