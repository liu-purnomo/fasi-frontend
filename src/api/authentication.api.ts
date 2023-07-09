import { AxiosError } from 'axios';
import { instance } from '../config/axios.instance';

export class Authentication {
    static async login(values: LoginFormInterface): Promise<LoginResponseInterface> {
        try {
            const { data } = await instance({
                method: 'POST',
                url: 'users/login',
                data: {
                    username: values.username,
                    password: values.password,
                },
            });
            return data;
        } catch (error: AxiosError | any) {
            throw new Error(error.response.data.message);
        }
    }

    static async register(values: RegisterFormInterface): Promise<RegisterResponseInterface> {
        try {
            const { data } = await instance({
                method: 'POST',
                url: 'users/register',
                data: {
                    fullName: values.fullName,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
            });
            return data;
        } catch (error: AxiosError | any) {
            throw new Error(error.response.data.message);
        }
    }
}
