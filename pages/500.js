import Link from 'next/link';
import { useRouter } from 'next/router'

import React, { useEffect } from 'react';
import PageBase from '../components/PageBase';

const ErrorPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    }, []);
    return (
        <PageBase pageTitle="500 Error :(">
            <Container>
            </Container>
        </PageBase>
    );
}

export default ErrorPage;

