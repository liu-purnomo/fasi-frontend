import { createBrowserRouter, redirect } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import LoginPage from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import Alert from '../utils/Alert';

const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {
            if (localStorage.getItem('token')) {
                throw redirect('/dashboard');
            }
            return null;
        },
        element: <BlankLayout />,
        children: [
            {
                path: '',
                element: <LoginPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/dashboard',
        loader: () => {
            if (!localStorage.getItem('token')) {
                Alert.default('error', 'Oops...', 'Please login first!');
                throw redirect('/login');
            }
            return null;
        },
        element: <DefaultLayout />,
    },
]);

export default router;
