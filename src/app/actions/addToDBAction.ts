"use server";
export const addToDB = async (formdata: FormData) => {
  const formData = formdata;
  console.log(formData);

  const name = formdata.get("name");
  const category = formdata.get("category");
  const type = formdata.get("type");
  const price = formdata.get("price");
  const image = formdata.get("image");
  const stock = formdata.get("stock");
  const discount = formdata.get("discount");

  let response;
  if(category === 'sweets'){
    response = await fetch(
      "http://localhost:3000/api/products/addProduct",
      {
        method: "POST",
        body: JSON.stringify({  
          name,
          category,
          type,
          image,
          price,
          stock,
          discount,
        }),
      }
    );
  }
  else{
    response = await fetch(
      "http://localhost:3000/api/products/addProduct",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          category,
          image,
          price,
          stock,
          discount,
        }),
      }
    );
  }
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
