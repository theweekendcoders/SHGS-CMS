"use server";
export const updateToDB = async (updatedData:any) => {
  const response = await fetch(
    "http://localhost:3000/api/products/updateProduct",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // Ensure the content type is set to JSON
      },
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
