// import React, { useState } from "react";
// import "./listing2.css"; // Ensure this path is correct

// const initialState = {
//   listingType: "",
//   occupancyType: "",
//   societyName: "",
//   city: "",
//   locality: "",
//   bedrooms: "",
//   balcony: "",
//   floorNumber: "",
//   totalFloors: "",
//   furnishedStatus: "",
//   bathrooms: "",
//   availableFrom: "",
//   monthlyRent: "",
//   securityDeposit: "",
//   maintenanceCharge: "",
//   description: "",
//   photo: null,
// };

// function Listing() {
//   const [form, setForm] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [photoPreview, setPhotoPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     if (type === "file") {
//       const file = e.target.files[0];
//       if (file && file.type === "image/jpeg") {
//         setForm({ ...form, photo: file });
//         setPhotoPreview(URL.createObjectURL(file));
//       } else {
//         setForm({ ...form, photo: null });
//         setPhotoPreview(null);
//       }
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const validate = () => {
//     let temp = {};
//     if (!form.listingType) temp.listingType = "Required";
//     if (!form.occupancyType) temp.occupancyType = "Required";
//     if (!form.societyName) temp.societyName = "Required";
//     if (!form.city) temp.city = "Required";
//     if (!form.locality) temp.locality = "Required";
//     if (!form.bedrooms) temp.bedrooms = "Required";
//     if (form.balcony === "") temp.balcony = "Required";
//     if (!form.floorNumber) temp.floorNumber = "Required";
//     if (!form.totalFloors) temp.totalFloors = "Required";
//     if (!form.furnishedStatus) temp.furnishedStatus = "Required";
//     if (!form.bathrooms) temp.bathrooms = "Required";
//     if (!form.availableFrom) temp.availableFrom = "Required";
//     if (!form.monthlyRent) temp.monthlyRent = "Required";
//     if (!form.securityDeposit) temp.securityDeposit = "Required";
//     if (!form.maintenanceCharge) temp.maintenanceCharge = "Required";
//     if (!form.description) temp.description = "Required";
//     if (!form.photo) temp.photo = "JPG photo required";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Here you can send 'form' data to backend using fetch/axios API call.
//       alert("Listing submitted successfully!");
//       setForm(initialState);
//       setPhotoPreview(null);
//       setErrors({});
//     }
//   };

//   return (
//     <form className="listing-form" onSubmit={handleSubmit}>
//       <h2>Room Listing Form</h2>
//       <div className="form-row">
//         <label>Listing Type*</label>
//         <select name="listingType" value={form.listingType} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="rent">Rent</option>
//           <option value="lease">Lease</option>
//         </select>
//         {errors.listingType && <span className="error">{errors.listingType}</span>}
//       </div>

//       <div className="form-row">
//         <label>Occupancy Type*</label>
//         <select name="occupancyType" value={form.occupancyType} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="full house">Full House</option>
//           <option value="sharing">Sharing</option>
//         </select>
//         {errors.occupancyType && <span className="error">{errors.occupancyType}</span>}
//       </div>

//       <div className="form-row">
//         <label>Society Name*</label>
//         <input
//           name="societyName"
//           type="text"
//           value={form.societyName}
//           onChange={handleChange}
//         />
//         {errors.societyName && <span className="error">{errors.societyName}</span>}
//       </div>

//       <div className="form-row">
//         <label>City*</label>
//         <input
//           name="city"
//           type="text"
//           value={form.city}
//           onChange={handleChange}
//         />
//         {errors.city && <span className="error">{errors.city}</span>}
//       </div>

//       <div className="form-row">
//         <label>Locality*</label>
//         <input
//           name="locality"
//           type="text"
//           value={form.locality}
//           onChange={handleChange}
//         />
//         {errors.locality && <span className="error">{errors.locality}</span>}
//       </div>

//       <div className="form-row">
//         <label>Bedrooms*</label>
//         <input
//           name="bedrooms"
//           type="number"
//           min="1"
//           value={form.bedrooms}
//           onChange={handleChange}
//         />
//         {errors.bedrooms && <span className="error">{errors.bedrooms}</span>}
//       </div>

//       <div className="form-row">
//         <label>Balcony*</label>
//         <select name="balcony" value={form.balcony} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>
//         {errors.balcony && <span className="error">{errors.balcony}</span>}
//       </div>

//       <div className="form-row">
//         <label>Floor Number*</label>
//         <input
//           name="floorNumber"
//           type="number"
//           min="0"
//           value={form.floorNumber}
//           onChange={handleChange}
//         />
//         {errors.floorNumber && <span className="error">{errors.floorNumber}</span>}
//       </div>

//       <div className="form-row">
//         <label>Total Floors*</label>
//         <input
//           name="totalFloors"
//           type="number"
//           min="1"
//           value={form.totalFloors}
//           onChange={handleChange}
//         />
//         {errors.totalFloors && <span className="error">{errors.totalFloors}</span>}
//       </div>

//       <div className="form-row">
//         <label>Furnished Status*</label>
//         <select name="furnishedStatus" value={form.furnishedStatus} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="well furnished">Well Furnished</option>
//           <option value="semi-furnished">Semi-furnished</option>
//         </select>
//         {errors.furnishedStatus && <span className="error">{errors.furnishedStatus}</span>}
//       </div>

//       <div className="form-row">
//         <label>Bathrooms*</label>
//         <input
//           name="bathrooms"
//           type="number"
//           min="1"
//           value={form.bathrooms}
//           onChange={handleChange}
//         />
//         {errors.bathrooms && <span className="error">{errors.bathrooms}</span>}
//       </div>

//       <div className="form-row">
//         <label>Available From*</label>
//         <input
//           name="availableFrom"
//           type="date"
//           value={form.availableFrom}
//           onChange={handleChange}
//         />
//         {errors.availableFrom && <span className="error">{errors.availableFrom}</span>}
//       </div>

//       <div className="form-row">
//         <label>Monthly Rent (₹)*</label>
//         <input
//           name="monthlyRent"
//           type="number"
//           min="0"
//           value={form.monthlyRent}
//           onChange={handleChange}
//         />
//         {errors.monthlyRent && <span className="error">{errors.monthlyRent}</span>}
//       </div>

//       <div className="form-row">
//         <label>Security Deposit (₹)*</label>
//         <input
//           name="securityDeposit"
//           type="number"
//           min="0"
//           value={form.securityDeposit}
//           onChange={handleChange}
//         />
//         {errors.securityDeposit && <span className="error">{errors.securityDeposit}</span>}
//       </div>

//       <div className="form-row">
//         <label>Maintenance Charge (₹)*</label>
//         <input
//           name="maintenanceCharge"
//           type="number"
//           min="0"
//           value={form.maintenanceCharge}
//           onChange={handleChange}
//         />
//         {errors.maintenanceCharge && <span className="error">{errors.maintenanceCharge}</span>}
//       </div>

//       <div className="form-row">
//         <label>Description*</label>
//         <textarea
//           name="description"
//           rows="3"
//           value={form.description}
//           onChange={handleChange}
//         />
//         {errors.description && <span className="error">{errors.description}</span>}
//       </div>

//       <div className="form-row">
//         <label>Photo (JPG only)*</label>
//         <input
//           name="photo"
//           type="file"
//           accept=".jpg, .jpeg"
//           onChange={handleChange}
//         />
//         {errors.photo && <span className="error">{errors.photo}</span>}
//         {photoPreview && (
//           <img src={photoPreview} alt="Preview" className="photo-preview" />
//         )}
//       </div>

//       <button type="submit">Submit Listing</button>
//     </form>
//   );
// }

// export default Listing;




















import React, { useState } from "react";
import "./listing2.css"; // Ensure this path is correct
import { BASE_URL } from "../../utils/constants";

const initialState = {
  listingType: "",
  occupancyType: "",
  societyName: "",
  city: "",
  locality: "",
  bedrooms: "",
  balcony: "",
  floorNumber: "",
  totalFloors: "",
  furnishedStatus: "",
  bathrooms: "",
  availableFrom: "",
  monthlyRent: "",
  securityDeposit: "",
  maintenanceCharge: "",
  description: "",
  photo: [],
};

function Listing() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value, type } = e.target;
  //   if (type === "file") {
  //     const file = e.target.files[0];
  //     if (file && file.type === "image/jpeg") {
  //       setForm({ ...form, photo: file });
  //       setPhotoPreview(URL.createObjectURL(file));
  //     } else {
  //       setForm({ ...form, photo: null });
  //       setPhotoPreview(null);
  //     }
  //   } else {
  //     setForm({ ...form, [name]: value });
  //   }
  // };

  const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === "file") {
    if (files && files.length > 0) {
      const validFiles = Array.from(files).filter((file) =>
        ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      );
      setForm({ ...form, photo: validFiles });

      const previews = validFiles.map((file) => URL.createObjectURL(file));
      setPhotoPreview(previews);
    } else {
      setForm({ ...form, photo: [] });
      setPhotoPreview([]);
    }
  } else {
    setForm({ ...form, [name]: value });
  }
};


  const validate = () => {
    let temp = {};
    if (!form.listingType) temp.listingType = "Required";
    if (!form.occupancyType) temp.occupancyType = "Required";
    if (!form.societyName) temp.societyName = "Required";
    if (!form.city) temp.city = "Required";
    if (!form.locality) temp.locality = "Required";
    if (!form.bedrooms) temp.bedrooms = "Required";
    if (form.balcony === "") temp.balcony = "Required";
    if (!form.floorNumber) temp.floorNumber = "Required";
    if (!form.totalFloors) temp.totalFloors = "Required";
    if (!form.furnishedStatus) temp.furnishedStatus = "Required";
    if (!form.bathrooms) temp.bathrooms = "Required";
    if (!form.availableFrom) temp.availableFrom = "Required";
    if (!form.monthlyRent) temp.monthlyRent = "Required";
    if (!form.securityDeposit) temp.securityDeposit = "Required";
    if (!form.maintenanceCharge) temp.maintenanceCharge = "Required";
    if (!form.description) temp.description = "Required";
    if (!form.photo) temp.photo = "JPG photo required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     // Here you can send 'form' data to backend using fetch/axios API call.
  //     alert("Listing submitted successfully!");
  //     setForm(initialState);
  //     setPhotoPreview(null);
  //     setErrors({});
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
  console.log("Validation failed:", errors); // Add this
}

  if (!validate()) return;

  const formData = new FormData();
  Object.entries(form).forEach(([key, value]) => {
    if (key === "photo") {
      value.forEach((file) => formData.append("photos", file)); // "photos" should match backend field name
    } else {
      formData.append(key, value);
    }
  });

  try {
    console.log("before submit");
    const response = await axios.post(`${BASE_URL}/api/rooms/create`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);

    
    // Axios automatically parses the response
    const data = response.data;

    alert("Listing submitted successfully!");
    setForm(initialState);
    setPhotoPreview([]);
    setErrors({});
  } catch (error) {
    const message = error.response?.data?.error || "Something went wrong";
    alert(message);
  }
};

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <h2>Room Listing Form</h2>
      <div className="form-row">
        <label>Listing Type*</label>
        <select name="listingType" value={form.listingType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="rent">Rent</option>
          <option value="lease">Lease</option>
        </select>
        {errors.listingType && <span className="error">{errors.listingType}</span>}
      </div>

      <div className="form-row">
        <label>Occupancy Type*</label>
        <select name="occupancyType" value={form.occupancyType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="full house">Full House</option>
          <option value="sharing">Sharing</option>
        </select>
        {errors.occupancyType && <span className="error">{errors.occupancyType}</span>}
      </div>

      <div className="form-row">
        <label>Society Name*</label>
        <input
          name="societyName"
          type="text"
          value={form.societyName}
          onChange={handleChange}
        />
        {errors.societyName && <span className="error">{errors.societyName}</span>}
      </div>

      <div className="form-row">
        <label>City*</label>
        <input
          name="city"
          type="text"
          value={form.city}
          onChange={handleChange}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>

      <div className="form-row">
        <label>Locality*</label>
        <input
          name="locality"
          type="text"
          value={form.locality}
          onChange={handleChange}
        />
        {errors.locality && <span className="error">{errors.locality}</span>}
      </div>

      <div className="form-row">
        <label>Bedrooms*</label>
        <input
          name="bedrooms"
          type="number"
          min="1"
          value={form.bedrooms}
          onChange={handleChange}
        />
        {errors.bedrooms && <span className="error">{errors.bedrooms}</span>}
      </div>

      <div className="form-row">
        <label>Balcony*</label>
        <select name="balcony" value={form.balcony} onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.balcony && <span className="error">{errors.balcony}</span>}
      </div>

      <div className="form-row">
        <label>Floor Number*</label>
        <input
          name="floorNumber"
          type="number"
          min="0"
          value={form.floorNumber}
          onChange={handleChange}
        />
        {errors.floorNumber && <span className="error">{errors.floorNumber}</span>}
      </div>

      <div className="form-row">
        <label>Total Floors*</label>
        <input
          name="totalFloors"
          type="number"
          min="1"
          value={form.totalFloors}
          onChange={handleChange}
        />
        {errors.totalFloors && <span className="error">{errors.totalFloors}</span>}
      </div>

      <div className="form-row">
        <label>Furnished Status*</label>
        <select name="furnishedStatus" value={form.furnishedStatus} onChange={handleChange}>
          <option value="">Select</option>
          <option value="well furnished">Well Furnished</option>
          <option value="semi-furnished">Semi-furnished</option>
        </select>
        {errors.furnishedStatus && <span className="error">{errors.furnishedStatus}</span>}
      </div>

      <div className="form-row">
        <label>Bathrooms*</label>
        <input
          name="bathrooms"
          type="number"
          min="1"
          value={form.bathrooms}
          onChange={handleChange}
        />
        {errors.bathrooms && <span className="error">{errors.bathrooms}</span>}
      </div>

      <div className="form-row">
        <label>Available From*</label>
        <input
          name="availableFrom"
          type="date"
          value={form.availableFrom}
          onChange={handleChange}
        />
        {errors.availableFrom && <span className="error">{errors.availableFrom}</span>}
      </div>

      <div className="form-row">
        <label>Monthly Rent (₹)*</label>
        <input
          name="monthlyRent"
          type="number"
          min="0"
          value={form.monthlyRent}
          onChange={handleChange}
        />
        {errors.monthlyRent && <span className="error">{errors.monthlyRent}</span>}
      </div>

      <div className="form-row">
        <label>Security Deposit (₹)*</label>
        <input
          name="securityDeposit"
          type="number"
          min="0"
          value={form.securityDeposit}
          onChange={handleChange}
        />
        {errors.securityDeposit && <span className="error">{errors.securityDeposit}</span>}
      </div>

      <div className="form-row">
        <label>Maintenance Charge (₹)*</label>
        <input
          name="maintenanceCharge"
          type="number"
          min="0"
          value={form.maintenanceCharge}
          onChange={handleChange}
        />
        {errors.maintenanceCharge && <span className="error">{errors.maintenanceCharge}</span>}
      </div>

      <div className="form-row">
        <label>Description*</label>
        <textarea
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>

      <div className="form-row">
        <label>Photo (JPG only)*</label>
        <input
          name="photo"
          // formData.append("photos", file);

          type="file"
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={handleChange}
        />
        {errors.photo && <span className="error">{errors.photo}</span>}
        {photoPreview?.map((src, idx) => (
          <img key={idx} src={src} alt={`Preview ${idx}`} className="photo-preview" />
        ))}
      </div>

      <button type="submit">Submit Listing</button>
    </form>
  );
}

export default Listing;