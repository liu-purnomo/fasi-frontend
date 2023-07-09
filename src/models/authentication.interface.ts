interface LoginFormInterface {
    username: string;
    password: string;
}

interface LoginResponseInterface {
    token: string;
}

interface RegisterFormInterface {
    fullName: string;
    username: string;
    email: string;
    password: string;
}

interface RegisterResponseInterface {
    message: string;
}
