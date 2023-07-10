import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Authentication } from '../../api/authentication.api';
import Alert from '../../utils/Alert';

export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { mutate, isLoading, isSuccess, isError, error, data } = useMutation<LoginResponseInterface, AxiosErrorResponse, LoginFormInterface>({
        mutationFn: Authentication.login,
    });

    const submitForm = (values: LoginFormInterface) => {
        mutate(values);
    };

    if (isSuccess) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
        Alert.toast('success', 'Login success');
    }

    if (isError) {
        Alert.default('error', 'Oops...', error?.message);
    }

    const initialValues = {
        username: '',
        password: '',
    };

    const validationForm = Yup.object().shape({
        username: Yup.string().required('Please fill the username / username'),
        password: Yup.string().required('Please fill the Password'),
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationForm} onSubmit={submitForm}>
            {({ values, errors, touched, submitCount, handleChange }) => (
                <Form className="space-y-5">
                    <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="username">Username or email</label>
                        <input id="username" type="username" name="username" className="form-input" placeholder="Enter username or email" value={values.username} onChange={handleChange} />
                        {submitCount ? errors.username ? <div className="text-danger mt-1">{errors.username}</div> : '' : ''}
                    </div>
                    <div className={submitCount ? (errors.password ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" className="form-input" placeholder="Enter Password" value={values.password} onChange={handleChange} />
                        {submitCount ? errors.password ? <div className="text-danger mt-1">{errors.password}</div> : '' : ''}
                    </div>
                    <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'SIGN IN'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
