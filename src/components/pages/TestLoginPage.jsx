import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../LazyLoader";
const Login =lazy(() => import('../Login/Login'));
const TestLoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default TestLoginPage;