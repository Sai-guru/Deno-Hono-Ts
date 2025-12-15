import brcyptjs from 'bcryptjs';
import {SignJWT,jwtVerify} from 'jose';
import { ENV } from '../config/env.ts';
import { JWT } from "../utils/jwt.ts";

interface User {
    id: string,email: string,password: string
}

const users: User[] = [];

export class AuthService {

    // @Register
    async register(email: string, password: string) {
        try {
            const existingUser = users.find((user)=>user.email === email);
        if(existingUser) throw new Error('User already exists');

        const hashedPass =  await brcyptjs.hash(password,10);

        const newUser :User={
            id: crypto.randomUUID(),
            email,
            password: hashedPass
        }
        users.push(newUser);
        return {id: newUser.id, email: newUser.email};
        }catch (error){
            throw new Error('Registration failed');
        } 
    }

    // @Login
    async login(email:string,password:string){

        try {
            const user = users.find(user=>user.email === email);
        if(!user) throw new Error('Invalid credentials');

        const validPass = await brcyptjs.compare(password,user.password);
        if(!validPass) throw new Error('Invalid credentials');

        const token = await JWT.sign({id: user.id, email: user.email},'2h');

        return {token};
        }catch (error){ 
            throw new Error('Invalid credentials');
        }   
    }

    // @VerifyToken
    async verifyToken(token:string){
        try{
            const {payload} = await jwtVerify(token,new TextEncoder().encode(ENV.JWT_SECRET));
            return {valid: true, payload};
        }catch(_){
            return {valid: false};
        }
    }
}
