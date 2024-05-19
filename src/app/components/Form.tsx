"use client"

import React, { useState } from 'react'
import{ addToDB } from '../actions/addToDBAction';

const Form = () => {
    
    const [field, setField] = useState([{ configuration: "", values: [] }]);
    const [features, setFeatures] = useState([""]);
    const [specifications, setSpecifications] = useState([{ specification: "", property: "" }]);
    const [imageUrls, setImageUrls] = useState([""]);
    

    const [productMRP, setProductMRP] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');

  const handleMRPChange = (e:any) => {
    const mrpValue = e.target.value;
    setProductMRP(mrpValue);
    calculateDiscountedPrice(mrpValue, discountPercentage);
  };

  const handleDiscountPercentageChange = (e:any) => {
    const percentageValue = e.target.value;
    setDiscountPercentage(percentageValue);
    calculateDiscountedPrice(productMRP, percentageValue);
  };

  const calculateDiscountedPrice = (mrp:any, percentage:any) => {
    const mrpValue = parseFloat(mrp);
    const percentageValue = parseFloat(percentage);

    if (!isNaN(mrpValue) && !isNaN(percentageValue)) {
      const discountAmount = (mrpValue * percentageValue) / 100;
      const discountedPriceValue = mrpValue - discountAmount;
      setDiscountedPrice(discountedPriceValue.toFixed(2)); // Round to 2 decimal places
    } else {
      setDiscountedPrice('');
    }
  };




    const addMoreFields = () => {
        setField([...field, { configuration: "", values: [] }])
    }

    const addFeature = () => {
        setFeatures([...features, ""]);
    }

    const addSpecification = () => {
        setSpecifications([...specifications, { specification: "", property: "" }]);
    }

    const addImageUrl = () => {
        setImageUrls([...imageUrls, ""]);
    }

    const handleChange = (e: any, index: any) => {
        const { name, value } = e.target;
        const newField: any = [...field];
        newField[index][name] = value;
        setField(newField);
    }


    const removeField = (index: any) => {
        const deleteField = [...field];
        deleteField.splice(index, 1);
        setField(deleteField);

    }

    const handleFeatureChange = (e: any, featureIndex: any) => {
        const newFeatures = [...features];
        newFeatures[featureIndex] = e.target.value;
        setFeatures(newFeatures);
    }

    const removeFeature = (featureIndex: any) => {
        const newFeatures = [...features];
        newFeatures.splice(featureIndex, 1);
        setFeatures(newFeatures);
    }


    const handleSpecificationChange = (e: any, specIndex: any) => {
        const newSpecifications: any = [...specifications];
        const { name, value } = e.target;
        newSpecifications[specIndex][name] = value;
        setSpecifications(newSpecifications);
    }

    const removeSpecification = (specIndex: any) => {
        const newSpecifications = [...specifications];
        newSpecifications.splice(specIndex, 1);
        setSpecifications(newSpecifications);
    }

    const handleImageUrlChange = (e: any, imageUrlIndex: any) => {
        const newImageUrls = [...imageUrls];
        newImageUrls[imageUrlIndex] = e.target.value;
        setImageUrls(newImageUrls);
    }

    const removeImageUrl = (imageUrlIndex: any) => {
        const newImageUrls = [...imageUrls];
        newImageUrls.splice(imageUrlIndex, 1);
        setImageUrls(newImageUrls);
    }
    return (
        <form action={addToDB} className='sm flex flex-col gap-8'>
            <div>
                <h1 className='text-2xl font-medium underline'>Product Details</h1>
                <div className='flex flex-row mt-2 gap-44'>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <label htmlFor="productBrand" className='text-lg font-medium'>Product Brand</label>
                        <input type="text" id="productBrand" name="productBrand" className='border-2 border-black p-2 rounded-sm' />
                    </div>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <label htmlFor="productName" className='text-lg font-medium'>Product Name</label>
                        <input type="text" id="productName" name="productName" className='border-2 border-black p-2 rounded-sm' />
                    </div>
                </div>
                <div className='flex flex-row mt-2 gap-44'>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <label htmlFor="productCategory" className='text-lg font-medium'>Product Category</label>
                        <select id="productCategory" name="productCategory" className='border-2 border-black p-2 rounded-sm'>
                            <option value="">Select a Category</option>
                            <option value="monitors">Monitors</option>
                            <option value="processors">Processors</option>
                            <option value="motherboard">Motherboard</option>
                            <option value="accessories">Accessories</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <label htmlFor="productQuantity" className='text-lg font-medium'>Product Quantity</label>
                        <input type="number" id="productQuantity" name="productQuantity" className='border-2 border-black p-2 rounded-sm' />
                    </div>

                </div>
                <div className='flex flex-row mt-2 gap-44'>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <label htmlFor="productDescription" className='text-lg font-medium'>Product Description</label>
                        <textarea name="productDescription" id="productDescription" cols={30} rows={10} className='border-2 border-black p-2 rounded-sm'></textarea>
                    </div>

                </div>
            </div>


            <div>
      <h1 className='text-2xl font-medium underline'>Pricing Details</h1>
      <div className='flex flex-row mt-2 gap-44'>
        <div className='flex flex-col gap-2 w-1/3'>
          <label htmlFor="productMRP" className='text-lg font-medium'>Product MRP</label>
          <input
            type="text"
            id="productMRP"
            name="productMRP"
            className='border-2 border-black p-2 rounded-sm'
            value={productMRP}
            onChange={handleMRPChange}
          />
        </div>
      </div>
      <div className='flex flex-row mt-2 gap-44'>
        <div className='flex flex-col gap-2 w-1/3'>
          <label htmlFor="discountPercentage" className='text-lg font-medium'>Discount Percentage</label>
          <input
            type="text"
            id="discountPercentage"
            name="discountPercentage"
            className='border-2 border-black p-2 rounded-sm'
            value={discountPercentage}
            onChange={handleDiscountPercentageChange}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/3'>
          <label htmlFor="discountedPrice" className='text-lg font-medium'>Discounted Price</label>
          <input
            type="text"
            id="discountedPrice"
            name="discountedPrice"
            className='border-2 border-black p-2 rounded-sm'
            value={discountedPrice}
            readOnly // Make it read-only
          />
        </div>
      </div>
    </div>


            <div>
                <h1 className='text-2xl font-medium underline'>Product Configuration</h1>
                {
                    field.map((value: any, index: any) => (
                        <div key={index} className='mt-4'>
                            <div className='flex flex-row gap-44'>
                                <div className='flex flex-col gap-2 w-1/3'>
                                    <label htmlFor="configuration" className='text-lg font-medium'>Configuration</label>
                                    <input type="text" name="configuration" id="configuration" value={value.option} onChange={(e) =>  handleChange(e, index) } className='border-2 border-black p-2 rounded-sm' />
                                </div>
                                <div className='flex flex-col gap-2 w-1/3'>
                                    <label htmlFor="values" className='text-lg font-medium'>Values</label>
                                    <input type="text" name="values" id="values" value={value.values} onChange={(e) => { handleChange(e, index) }} className='border-2 border-black p-2 rounded-sm' />
                                </div>
                            </div>
                            <button type='button' onClick={() => removeField(index)} className='inline text-red-600 underline'>Remove</button>

                        </div>
                    ))

                }
                <button type='button' onClick={addMoreFields} className='border-4 border-black px-8 py-4 mt-4 w-1/3'>Add</button>
                {/* <p>{JSON.stringify(field)}</p> */}
            </div>


            <div>
                <h1 className='text-2xl font-medium underline'>Features</h1>
                {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='mt-4'>
                        <div className='flex flex-col mt-2 gap-2'>
                            <label htmlFor="feature" className='font-medium'>Feature {featureIndex+1}</label>
                            <input type="text" name="feature" id="feature" value={feature} onChange={(e) => handleFeatureChange(e, featureIndex)} className='border-2 border-black p-2 rounded-sm w-1/3' />
                        </div>
                        <button type='button' onClick={() => removeFeature(featureIndex)} className='underline text-red-600'>Remove</button>
                    </div>
                ))}
                <button type='button' onClick={addFeature} className='border-4 border-black px-8 py-4 mt-4 w-1/3'>Add</button>
                {/* <p>{features}</p> */}
            </div>

            <div>
                <h1 className='text-2xl font-medium underline'>Specifications</h1>
                {specifications.map((specification, specIndex) => (
                    <div key={specIndex} className='mt-4'>
                        <div className='flex flex-row gap-44'>
                            <div className='flex flex-col gap-2 w-1/3'>
                                <label htmlFor="specification" className='text-lg font-medium'>Specification</label>
                                <input type="text" name="specification" id="specification" value={specification.specification} onChange={(e) => { handleSpecificationChange(e, specIndex) }} className='border-2 border-black p-2 rounded-sm' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/3'>
                                <label htmlFor="property" className='text-lg font-medium'>Value</label>
                                <input type="text" name="property" id="property" value={specification.property} onChange={(e) => { handleSpecificationChange(e, specIndex) }} className='border-2 border-black p-2 rounded-sm' />
                            </div>
                        </div>

                        <button type='button' onClick={() => removeSpecification(specIndex)} className='inline text-red-600 underline'>Remove</button>
                    </div>
                ))}
                <button type='button' onClick={addSpecification} className='border-4 border-black px-8 py-4 mt-4 w-1/3'>Add</button>
                {/* <p>{JSON.stringify(specifications)}</p> */}
            </div>

            <div>
                <h1 className='text-2xl font-medium underline'>Product Image URLs</h1>
                {imageUrls.map((imageUrl, imageUrlIndex) => (


                    <div key={imageUrlIndex}>
                        <div className='flex flex-col mt-2 gap-2'>
                            <label htmlFor="imageURL" className='font-medium'>Image {imageUrlIndex+1}</label>
                            <input type="text" name="imageURL" id="imageURL" value={imageUrl} onChange={(e) => handleImageUrlChange(e, imageUrlIndex)} className='border-2 border-black p-2 rounded-sm w-1/3' />
                        </div>
                        <button type='button' onClick={() => removeImageUrl(imageUrlIndex)} className='inline text-red-600 underline'>Remove</button>
                    </div>
                ))}
                <button type='button' onClick={addImageUrl} className='border-4 border-black px-8 py-4 mt-4 w-1/3'>Add</button>
            </div>

            <input type="submit" value="Add Product" className='bg-black text-white px-8 py-4 mt-4 w-1/3' />
        </form>
    )
}

export default Form
