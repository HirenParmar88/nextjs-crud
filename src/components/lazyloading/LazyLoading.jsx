// src/components/lazyloading/LazyLoading.jsx

'use client'

import { useEffect, useState } from "react";
import "/src/app/globals.css";

function CheckLazyLoading(){
    const [secondParagraphVisible, setSecondParagraphVisible]= useState(false)
    const [loader, setLoader]= useState(true)
    
    useEffect(()=>{
        const timer = setTimeout(()=>{  
            setSecondParagraphVisible(true);
        },3000);    // 3 second delay

        const loderTime = setTimeout(()=>{  
            setLoader(false);
        },3000);    // 3 second delay

        return()=>clearTimeout(timer,loderTime);
    },[]);

    return(
        <>
            <div>
                <p>
                1. Lazy loading is a design pattern commonly used in web development and software engineering to optimize the performance of applications by delaying the loading of resources until they are actually needed. This approach helps to improve the initial loading time of a web page or application, reduce memory usage, and enhance the overall user experience.

                How Lazy Loading Works
                In a typical scenario without lazy loading, all resources (such as images, scripts, and components) are loaded at once when the page is accessed. This can lead to longer loading times, especially if the page contains a lot of heavy resources. With lazy loading, resources are only loaded when they are about to enter the viewport (the visible area of the web page) or when they are explicitly required by the user.

                Key Benefits of Lazy Loading
                Improved Performance: By loading only the necessary resources initially, lazy loading reduces the amount of data that needs to be transferred over the network, leading to faster page load times.
                </p>

                {secondParagraphVisible&&(<p>2. Reduced Memory Usage: Since not all resources are loaded at once, the memory footprint of the application is minimized, which is particularly beneficial for mobile devices and low-powered devices.

                Better User Experience: Users can start interacting with the page more quickly, as they do not have to wait for all resources to load. This can lead to higher engagement and lower bounce rates.

                Bandwidth Savings: Lazy loading can help save bandwidth, especially for users who may not scroll down to see all the content on a page.

                Common Use Cases
                Images: Lazy loading is often used for images in long web pages or galleries. Images are loaded only when they are about to be displayed in the viewport.
                </p>)}
                
            </div>
            {loader && (<div className="loader-container">
                <div className="loader"></div>
            </div>)}
            
        </>
    )
}
export default CheckLazyLoading;