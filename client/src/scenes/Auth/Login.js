import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, GoogleLogin } from '../../components';
import { loginSchema } from '../../validation/validationSchema';

const Login = () => {
  return (
    <div className="login">
      <div className="login__block toggled">
        <div className="login__block__header">
          <i className="zmdi zmdi-account-circle" />
          Hi there! Please Sign in
        </div>

        <div className="login__block__body">
          <Formik
            enableReinitialize
            validationSchema={loginSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={() => {
              // await handleLogin(body);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  label="Email Address"
                  name="email"
                  type="mail"
                  erro={`${
                    errors.email && touched.email ? 'errors has' : 'errors no'
                  }`}
                />

                <ErrorMessage name="email" />

                <Field
                  label="Password"
                  name="password"
                  type="password"
                  erro={`${!!(errors.password && touched.password)}`}
                  component={Input}
                />
                <button
                  type="submit"
                  className="btn btn--light btn--icon m-t-15"
                >
                  <i className="zmdi zmdi-long-arrow-right" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
