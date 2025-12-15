import { Hono } from "hono";
import { AuthService } from "../services/auth.service.ts";

const authService = new AuthService();


export const authController = new Hono();

// @register
authController.post('/register',async(data)=>{
    try {
        const {email,password} = await data.req.json();

        const newUser = await authService.register(email,password);
        return data.json({user: newUser},201);

    }catch(error){
        return data.json({message: 'Registration failed'},500);
    }
});

// @login
authController.post('/login',async(data)=>{
    try{
        const {email,password} = await data.req.json();

        const result = await authService.login(email,password);
        return data.json({token: result.token},200);
    }catch(error){
        return data.json({message: 'Invalid credentials'},401);
    }
})