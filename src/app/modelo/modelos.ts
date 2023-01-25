export interface User{
    id:string;
    correo:string;
    password:string;
    perfil:'doctor' | 'cliente';
}