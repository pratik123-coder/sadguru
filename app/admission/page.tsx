"use client"
import React from "react";
import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { motion } from "framer-motion";

// Validation Schema using Zod
const admissionFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  parentName: z.string().min(1, "Parent name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be 10 digits"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp number must be at least 10 digits")
    .max(10, "WhatsApp number must be 10 digits"),
  gender: z.enum(["Male", "Female", "Prefer Not to Say"], {
    required_error: "Please select your gender",
  }),
  category: z.enum(["General", "OBC", "SC / ST"], {
    required_error: "Please select your category",
  }),
  email: z.string().email("Invalid email address"),
  qualification: z.string().min(1, "Qualification is required"),
  percentage: z
    .number()
    .min(0, "Percentage must be at least 0")
    .max(100, "Percentage cannot exceed 100"),
  interested: z.string().min(1, "Please select a "),
  address: z.string().min(1, "Address is required"),
});

const AdmissionForm = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-8 px-4 min-h-screen">
      <motion.h1
        className="text-[3rem] font-bold text-gray-800 mb-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admission Form
      </motion.h1>
      <motion.h2
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in touch. Fill the form.
      </motion.h2>
      <Formik
        initialValues={{
          name: "",
          parentName: "",
          phone: "",
          whatsapp: "",
          gender: "",
          category: "",
          email: "",
          qualification: "",
          percentage: "",
          interested: "",
          address: "",
        }}
        validationSchema={toFormikValidationSchema(admissionFormSchema)}
        onSubmit={(values, {resetForm}) => {
          console.log("Form Data:", values);
          resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl space-y-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Name</label>
              <Field
                name="name"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.name && touched.name && (
                <span className="text-sm text-red-500">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">
                Father / Mother Name
              </label>
              <Field
                name="parentName"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.parentName && touched.parentName && (
                <span className="text-sm text-red-500">
                  {errors.parentName}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Phone No.</label>
              <Field
                name="phone"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.phone && touched.phone && (
                <span className="text-sm text-red-500">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">WhatsApp No.</label>
              <Field
                name="whatsapp"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.whatsapp && touched.whatsapp && (
                <span className="text-sm text-red-500">{errors.whatsapp}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Gender</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-radio"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-radio"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="gender"
                    value="Prefer Not to Say"
                    className="form-radio"
                  />
                  <span>Prefer Not to Say</span>
                </label>
              </div>
              {errors.gender && touched.gender && (
                <span className="text-sm text-red-500">{errors.gender}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Category</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="category"
                    value="General"
                    className="form-radio"
                  />
                  <span>General</span>
                </label>
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="category"
                    value="OBC"
                    className="form-radio"
                  />
                  <span>OBC</span>
                </label>
                <label className="flex items-center space-x-1">
                  <Field
                    type="radio"
                    name="category"
                    value="SC / ST"
                    className="form-radio"
                  />
                  <span>SC / ST</span>
                </label>
              </div>
              {errors.category && touched.category && (
                <span className="text-sm text-red-500">{errors.category}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Email</label>
              <Field
                name="email"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.email && touched.email && (
                <span className="text-sm text-red-500">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Qualification</label>
              <Field
                name="qualification"
                as="select"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </Field>
              {errors.qualification && touched.qualification && (
                <span className="text-sm text-red-500">
                  {errors.qualification}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Percentage</label>
              <Field
                name="percentage"
                type="number"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.percentage && touched.percentage && (
                <span className="text-sm text-red-500">{errors.percentage}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">
                Interested 
              </label>
              <Field
                name="interested"
                as="select"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select </option>
                <option value="General Nursing">General Nursing</option>
                <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                <option value="B.Sc. Anesthesia">B.Sc. Anesthesia</option>
                <option value="B.Sc. Medical Laboratory Technology">B.Sc. Medical Laboratory Technology</option>
                <option value="B.Sc. Medical Radiation Technology">B.Sc. Medical Radiation Technology</option>
                <option value="B.Sc. Operation Theatre Technology">B.Sc. Operation Theatre Technology</option>
                <option value="Diploma in Medical Lab">Diploma in Medical Lab</option>
                <option value="Diploma in Medical Radiation">Diploma in Medical Radiation</option>
                <option value="Diploma in Medical Radiation Therapy">Diploma in Medical Radiation Therapy</option>
                <option value="Certified Cath Lab Technician">Certified Cath Lab Technician</option>
                <option value="Certified Dialysis Technician">Certified Dialysis Technician</option>
                <option value="Certified OT Technician">Certified OT Technician</option>
                <option value="Certified Ward Technician">Certified Ward Technician</option>
                <option value="Certified ECG Technician">Certified ECG Technician</option>
              </Field>
              {errors.interested && touched.interested && (
                <span className="text-sm text-red-500">
                  {errors.interested}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Address</label>
              <Field
                name="address"
                as="textarea"
                rows={3}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.address && touched.address && (
                <span className="text-sm text-red-500">{errors.address}</span>
              )}
            </div>

            <motion.button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdmissionForm;
