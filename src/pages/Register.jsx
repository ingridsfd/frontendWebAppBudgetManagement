import React from "react";
import { Formik } from "formik";

const FormularioFormik = () => {
return (
    <Formik
    initialValues={{
        username: "",
        email: "",
        password: ""
    }}
    validate={(values) => {
        let errors = {};
        if (values.password.length < 7) {
        errors.password = "The password must contain 7 characters or more";
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
        <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
        >
        <label htmlFor="username">Username:</label>
        <input
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <label htmlFor="email">Email:</label>
        <input
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <label htmlFor="password">Password:</label>
        <input
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}        
        <button type="submit" disabled={isSubmitting}>
            SUBMIT
        </button>
        </form>
    )}
    </Formik>
);
};

export default FormularioFormik;