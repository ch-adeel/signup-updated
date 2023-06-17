'use client';


import Header from "@/components/Header";
import React, {} from "react";
import { useFormik } from "formik";

 const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      rollNo: "",
      mobileNo: "",
      email: "",
      fatherName: ""
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
        errors.name = "Name should only contain letters and spaces";
      }   
      if (!values.fatherName) {
        errors.fatherName = "Father's Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
        errors.name = "Name should only contain letters and spaces";
      }   

      if (!values.rollNo) {
        errors.rollNo = "Roll No is required";
      } else if (!/^[a-zA-Z0-9]+$/.test(values.rollNo)) {
        errors.rollNo = "Roll No should only contain letters and numbers";
      }

      if (!values.mobileNo) {
        errors.mobileNo = "MobileNo is required";
      } else if (!/^\d+$/.test(values.mobileNo)) {
        errors.mobileNo = "Invalid mobile number";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^[a-zA-Z0-9]+$/.test(values.password)) {
        errors.password = "Password should only contain letters and numbers";
      } else if (values.password.length < 8) {
        errors.password = "Password should be at least 8 characters long";
      }
      
      

      
      

      return errors;
    },
    onSubmit: async(values) => {
      // Handle form submission
      console.log(values);
      const response=await fetch('http://localhost:8000/User/Signup',
      {
        method:'POST',
        body:JSON.stringify({values:values}),
        headers: {
          "Content-Type": "application/json",
        }

      })
      const data= await response.json()
      console.log(data.message)
      alert(data.message)
    },
  });

        return(
            <>
            <Header/>
           

      
       <form className="max-w-3xl mx-auto p-6 mt-3 bg-white rounded shadow-md border-4 font-serif"onSubmit={formik.handleSubmit} autoComplete="off">
  <h2 className="text-4xl font-bold mb-6 text-center">Student Signup</h2>
  <div className="mb-4">
    <label htmlFor="name" className="block font-semibold mb-2 text-2xl">
      Name<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your name"
      value={formik.values.name}
      onChange={formik.handleChange}
    />
    {formik.errors.name && formik.touched.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
  </div>
  <div className="mb-4">
    <label htmlFor="rollNo" className="block font-semibold mb-2 text-2xl">
      Reg No<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="rollNo"
      name="rollNo"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your roll number"
      value={formik.values.rollNo}
      onChange={formik.handleChange}
    />
     {formik.errors.rollNo && formik.touched.rollNo && (
            <div className="text-red-500">{formik.errors.rollNo}</div>
          )}
  </div>
  <div className="mb-4">
    <label htmlFor="mobileNo" className="block font-semibold mb-2 text-2xl">
      Mobile No<span className="text-red-500">*</span>

    </label>
    <input
  type="text"
  id="mobileNo"
  name="mobileNo"
  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
  placeholder="Enter your mobile number e.g +92 xxxx-nnnnnn"
  value={formik.values.mobileNo}
  onChange={formik.handleChange}
/>
{formik.errors.mobileNo && formik.touched.mobileNo && (
  <div className="text-red-500">{formik.errors.mobileNo}</div>
)}

   
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block font-semibold mb-2 text-2xl">
      Email<span className="text-red-500">*</span>

    </label>
    <input
  type="email"
  id="email"
  name="email"
  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
  placeholder="Enter your email address"
  value={formik.values.email}
  onChange={formik.handleChange}
/>
{formik.errors.email && formik.touched.email && (
  <div className="text-red-500">{formik.errors.email}</div>
)}

  </div>
  <div className="mb-4">
    <label htmlFor="fatherName" className="block font-semibold mb-2 text-2xl">
      Father's Name<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="fatherName"
      name="fatherName"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your father's name"
      value={formik.values.fatherName}
      onChange={formik.handleChange}
    />
    {formik.errors.fatherName && formik.touched.fatherName && (
            <div className="text-red-500">{formik.errors.fatherName}</div>
          )}
    
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block font-semibold mb-2 text-2xl">
      Password<span className="text-red-500">*</span>

    </label>
  <input
      type="password"
      id="password"
      name="password"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Please Enter Password"
      value={formik.values.password}
      onChange={formik.handleChange}
    />
    {formik.errors.password && formik.touched.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
    
  </div>
 
  <div className="mt-6">
    <button
    // onClick={submitsignup}
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none font-sans text-xl"
    >
      Sign Up
    </button>
  </div>
</form>


            </>
        )
    }
    export default Register