"use server";
export const addToDB = async (formdata: FormData) => {
  const formData = formdata;
  // Iterate through FormData entries and construct a plain object
  const data: Record<string, string | string[]> = {};
  for (const [key, value] of formData.entries()) {
    // If the key already exists in the data object, create an array to store multiple values
    if (data.hasOwnProperty(key)) {
      if (Array.isArray(data[key])) {
        if (typeof value === "string") {
          (data[key] as string[]).push(value);
        }
      } else {
        const existingValue = data[key] as string;
        if (typeof existingValue === "string" && typeof value === "string") {
          data[key] = [existingValue, value];
        }
      }
    } else {
      if (typeof value === "string") {
        data[key] = value;
      }
    }
  }

  //Storing all the configuration data
  const processConfigurationData = (data: any) => {
    const { configuration, values } = data;
  
    const configurationData: Record<string, string[]> = {};
  
    // Ensure both configuration and values arrays have the same length
    if (configuration && values && configuration.length === values.length) {
      for (let i = 0; i < configuration.length; i++) {
        const configKey = configuration[i];
        const configValues = values[i].split(',').map((value: any) => value.trim()); // Split values by comma and trim spaces
  
        configurationData[configKey] = configValues;
      }
    }
  
    return configurationData;
  };
  
  // Storing all the specification data
  const processSpecificationData = (data: any) => {
    const { specification, property } = data;
  
    const specificationData: Record<string, string> = {};
  
    // Ensure both specification and property arrays have the same length
    if (
      Array.isArray(specification) &&
      Array.isArray(property) &&
      specification.length === property.length
    ) {
      for (let i = 0; i < specification.length; i++) {
        const specKey = specification[i];
        const specValue = property[i];
  
        specificationData[specKey] = specValue;
      }
    }
  
    return specificationData;
  };
  

  const brand = formdata.get("productBrand");
  const name = formdata.get("productName");
  const description = formdata.get("productDescription");
  const category = formdata.get("productCategory");
  const quantity = formdata.get("productQuantity");
  const mrp = Number(formdata.get("productMRP"));
  const discount_percentage = Number(formdata.get("discountPercentage"));
  const discountedPrice = Number(formdata.get("discountedPrice"));
  const configuration = processConfigurationData(data);
  const specifications = processSpecificationData(data);
  const reviews = "None";
  const images = data.imageURL;
  const features = data.feature;

  const response = await fetch(
    "http://localhost:3000/api/products/addProduct",
    {
      method: "POST",
      body: JSON.stringify({
        brand,
        name,
        description,
        category,
        quantity,
        mrp,
        discount_percentage,
        discounted_price,
        features,
        configuration,
        specifications,
        reviews,
        images,
      }),
    }
  );
  if (response.ok) {
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    // Handle success, e.g., redirect or show a success message
  } else {
    console.error("Upload failed. Status:", response.status);
    const errorText = await response.text();
    console.error("Error Response:", errorText);
    // Handle error
  }
};
