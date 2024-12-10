//src/app/lazyloading/page.js

'use client';
import dynamic from 'next/dynamic.js';
import { Suspense } from 'react';

// Dynamically import LazyLoading component
const LazyLoading2= dynamic(()=> import('@/components/lazyloading/LazyLoading.jsx'),{
    suspense: true, //enable support for suspense
});

function LazyLoadingPage(){
    
    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoading2 />
            </Suspense>
            
        </>
    )
}
export default LazyLoadingPage;