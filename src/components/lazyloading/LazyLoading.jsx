// src/components/lazyloading/LazyLoading.jsx

"use client"

function LazyLoading(){

    return(
        <>
            {Array.from({length: 20},(_, i)=>(
                <p key={i}>lazy loading...</p>
            ))}
        </>
    )
}
export default LazyLoading;