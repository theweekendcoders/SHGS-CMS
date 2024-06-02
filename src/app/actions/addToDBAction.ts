"use server";
export const addToDB = async (formdata: FormData) => {
  const formData = formdata;
  console.log(formData);

  const name = formdata.get("name");
  const category = formdata.get("category");
  const type = formdata.get("type");
  const image = formdata.get("image");
  const price = formdata.get("price");
  const stock = formdata.get("stock");
  const discount = formdata.get("discount");

  const response = await fetch(
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
