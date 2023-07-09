import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginFirebase from '../../components/Buttons/LoginFirebase';
import { RegisterForm } from '../../components/Forms/Register';
import { setPageTitle } from '../../store/themeConfigSlice';

const Register = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Register'));
    });
    const navigate = useNavigate();

    const submitForm = () => {
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-3">Sign Up</h2>
                <p className="mb-7">Enter your email and password to register</p>
                <RegisterForm />
                <div className="relative my-7 h-5 text-center before:w-full before:h-[1px] before:absolute before:inset-0 before:m-auto before:bg-[#ebedf2]  dark:before:bg-[#253b5c]">
                    <div className="font-bold text-white-dark bg-[#fafafa] dark:bg-[#060818] px-2 relative z-[1] inline-block">
                        <span>OR</span>
                    </div>
                </div>
                <LoginFirebase />
                <p className="text-center">
                    Already have an account ?
                    <Link to="/login" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
