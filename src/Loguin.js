import './App.css';
import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

function Loguin() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    };
    // let array = []
    // console.log(watch(errors.exampleRequired));
    // array.push(watch(errors.exampleRequired))
    // console.log(array)

    return (
        <form onSubmit={handleSubmit(onSubmit)} class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                {errors.exampleEmail && <p>⚠ This field is required</p>}
            <label for="exampleInputPassword">Password</label>
            <input type="password" placeholder="Password" {...register("Password", {required: true, min: 4})} />
                {errors.exampleRequired && <p> ⚠ This field is required</p>}
            <input type="submit" />
        </form>
    );
}

export default Loguin;