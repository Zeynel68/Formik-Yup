import * as yup from "yup"

export const registerFormShemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email address.!").required("Email address is required!"),
    age: yup.number().positive("Please enter a positive value!").required("Age field is required!").integer("Please enter an integer"),
    password: yup.string().required("Password field is required!"),
    confirmPassword: yup.string().required("Password verification field is required!").oneOf([yup.ref("password", yup.password)], "Passwords do not match"),
    term: yup.boolean().required("Please accept the agreement to register!")



})