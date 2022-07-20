import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../LazyLoader";
const Registration =lazy(() => import('../Registration/Registration'));
const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Registration/>
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;