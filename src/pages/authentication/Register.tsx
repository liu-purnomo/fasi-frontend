import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginFirebase from '../../components/buttons/LoginFirebase';
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
        <div className="flex min-h-screen">
            <div className="bg-gradient-to-t from-[#C9F6FF] to-[#35D6ED] w-1/2 min-h-screen hidden lg:flex flex-col items-center justify-center text-dark dark:text-black p-4">
                <div className="w-full mx-auto mb-5">
                    <img src="/logo.png" alt="logo fasi" className="lg:max-w-[300px] xl:max-w-[500px] mx-auto" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">Jadilah Anggota FASI</h3>
                <p>Organisasi Olahraga Dirgantara Resmi Indonesia</p>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                <div className="max-w-[480px] p-5 md:p-10">
                    <h2 className="font-bold text-3xl mb-3">Sign In</h2>
                    <p className="mb-7">Enter your email and password to register</p>
                    <form className="space-y-5" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" className="form-input" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-input" placeholder="Enter Email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-input" placeholder="Enter Password" />
                        </div>
                        <div>
                            <label className="cursor-pointer">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="text-white-dark">
                                    I agree the{' '}
                                    <button type="button" className="text-primary hover:underline">
                                        Terms and Conditions
                                    </button>
                                </span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                            SIGN UP
                        </button>
                    </form>
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
        </div>
    );
};

export default Register;
