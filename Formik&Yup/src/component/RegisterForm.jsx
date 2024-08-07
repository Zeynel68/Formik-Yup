import React from 'react'
import { useFormik } from "formik"
import { registerFormShemas } from '../shemas/FormShemas';
function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }



    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: "",
            password: "",
            confirmPassword: "",
            term: "",
        },
        validationSchema: registerFormShemas,
        onSubmit: submit
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>   <label>Email</label>
                    <input type="text" id="email" value={values.email} onChange={handleChange}

                        placeholder='Enter your email'
                    />
                    {errors.email && <p className='input-error'>{errors.email}</p>}</div>

                <div className='inputDiv'>   <label>Age</label>
                    <input type="number" id="age" value={values.age} onChange={handleChange} placeholder='Enter your age' />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>

                <div className='inputDiv'>   <label>Password</label>
                    <input type="password" id="password" value={values.password} onChange={handleChange} placeholder='Enter your password' />
                    {errors.password && <p className='input-error'>{errors.password}</p>}</div>

                <div className='inputDiv'>   <label>Repeat Password</label>
                    <input type="password" id="confirmPassword" value={values.confirmPassword} onChange={handleChange} placeholder='Confirm your password' />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}</div>

                <div className='inputDiv'>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                        <input style={{ width: "20px", height: "12px" }} type="checkbox" value={values.term} onChange={handleChange} />
                        <label>I accept the user agreement</label>
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}
                </div>


                <button type="submit" className='buton '>Save</button>

            </form>
        </div>
    )
}

export default RegisterForm