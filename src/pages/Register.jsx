import React from "react";
import { Formik } from "formik";

const FormularioFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (values.password.length < 7) {
          errors.password =
            "The password must contain more than 7 characters: Include at least one special character, one number and one upper case.";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 3000);
        //resetForm();
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        isSubmitting,
        errors,
      }) => (
        <div className="flex justify-center">
          <div className="container px-32 py-16 mt-12">
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="username" className="text-xl">
                Username:
              </label>
              <input
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-8"
              />
              <label htmlFor="email" className="text-xl">
                Email:
              </label>
              <input
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-8"
              />
              <label htmlFor="password" className="text-xl">
                Password:
              </label>
              <input
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              {touched.password && errors.password && <p>{errors.password}</p>}
              <button
                className="text-center inline-block px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mt-12"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormularioFormik;
