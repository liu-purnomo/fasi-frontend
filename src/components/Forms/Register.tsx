import { useMutation } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Authentication } from '../../api/authentication.api';
import Alert from '../../utils/Alert';

export const RegisterForm: React.FC = () => {
    const { mutate, isLoading, isSuccess, isError, error, data } = useMutation<RegisterResponseInterface, AxiosErrorResponse, RegisterFormInterface>({
        mutationFn: Authentication.register,
    });

    const submitForm = (values: RegisterFormInterface) => {
        console.log(values);
        mutate(values);
    };

    if (isSuccess) {
        Alert.toast('success', data.message);
    }

    if (isError) {
        Alert.default('error', 'Oops...', error?.message);
    }

    const initialValues = {
        username: '',
        fullName: '',
        email: '',
        password: '',
    };

    const validationForm = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-z0-9-]+$/, 'Username is only allowed to use lowercase and dash (-) character.')
            .min(6, 'Username must be at least 6 characters.')
            .required('Please fill the username'),
        fullName: Yup.string().required('Please fill the full name'),
        email: Yup.string().email('Please fill the valid email').required('Please fill the email'),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).*$/, 'Password must contain at least one uppercase, lowercase, number, and special character.')
            .min(8, 'Password must be at least 8 characters.')
            .required('Please fill the Password'),
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationForm} onSubmit={submitForm}>
            {({ errors, touched, submitCount, values }) => (
                <Form className="space-y-5">
                    <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="fullName">First Name </label>
                        <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />
                        {submitCount ? errors.fullName ? <div className="text-danger mt-1">{errors.fullName}</div> : '' : <div className="text-danger mt-1">*Required</div>}
                    </div>
                    <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" id="username" placeholder="Enter username" className="form-input" />
                        {touched ? (
                            errors.username ? (
                                <div className="text-danger mt-1">{errors.username}</div>
                            ) : (
                                <div className="text-[#1abc9c] mt-1">Looks Good!</div>
                            )
                        ) : (
                            <div className="text-danger mt-1">*Required</div>
                        )}
                    </div>
                    <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" id="email" placeholder="Enter Email" className="form-input" />
                        {touched ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : '' : <div className="text-danger mt-1">*Required</div>}
                    </div>
                    <div className={submitCount ? (errors.password ? 'has-error' : 'has-success') : ''}>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text" id="password" placeholder="Enter Password" className="form-input" />
                        {touched ? (
                            errors.password ? (
                                <div className="text-danger mt-1">{errors.password}</div>
                            ) : (
                                <div className="text-[#1abc9c] mt-1">Strong Password!</div>
                            )
                        ) : (
                            <div className="text-danger mt-1">*Required</div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'SIGN IN'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
