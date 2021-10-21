import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for="exampleInputEmail1">Email</label>
        <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <label for="exampleInputEmail1">Repetir Email</label>
        <input type="email" placeholder="Email-2" {...register("Email-2", {required: true, pattern: /^\S+@\S+$/i})} />
        <label for="exampleInputEmail1">Nombre</label>
        <input type="name" placeholder="Nombre" {...register("Nombre", {required: true, min: 3})} />
        <label for="exampleInputEmail1">Contraseña</label>
        <input type="password" {...register("Contraseña", {required: true, min: 8})} />
        <label for="exampleInputEmail1">Repetir Contraseña</label>
        <input type="password" placeholder="Contraseña" {...register("Contraseña-2", {required: true, min: 8})} />

        <input type="submit" />
        </form>
    );
}
