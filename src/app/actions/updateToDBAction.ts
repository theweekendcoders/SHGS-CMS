"use server";
export const updateToDB = async (updatedData:any) => {
console.log(updatedData)
  const response = await fetch(
    "http://localhost:3000/api/products/addProduct",
    {
      method: "POST",
      body: JSON.stringify(
        updatedData
      ),
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
