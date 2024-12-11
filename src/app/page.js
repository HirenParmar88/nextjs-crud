//this page.js file like index file of the next.js project..

// src/app/page.js
"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "@/components/navigationBar/navigationBar.jsx";
import dynamic from "next/dynamic";
import ImgGallary from "@/components/imagegallary/ImageGallary";
import CheckLazyLoading from "@/components/lazyloading/LazyLoading";

//check LazyLoading working or not
const Lazy = dynamic(()=> import('@/components/lazyloading/LazyLoading'),{
  loading: () => <div className="text-text-center">Loading ...</div>,
  ssr: false,
})

// Dynamically import Footer component with Suspense
const LazyFooter = dynamic(() => import("@/components/footer/Footer"), {
  loading: () => <div className="text-center">Loading footer...</div>, // Custom loading fallback
  ssr: false, // Disable SSR for this component to ensure it only loads client-side
});

export default function Dashboard() {
  return (
    <>
      <NavigationBar />

      <Lazy />

      <div className="container mt-5 bg-light">
        <br />
        <h2>Dashboard</h2>
        <br />
        <ul>
          <li>
            <Link
              href="/users"
              className="list-group-item list-group-item-action text-primary"
            >
              Users
            </Link>
          </li>
          <br />
          <br />
          <li>
            <Link
              href="/products"
              className="list-group-item list-group-item-action text-primary"
            >
              Products
            </Link>
          </li>
          <br />
          <br />
          <li>
            <Link
              href="/accessories"
              className="list-group-item list-group-item-action text-primary"
            >
              Accessories
            </Link>
          </li>
          <br />
          <br />
        </ul>
      </div>

      
      <ImgGallary />
      

      <div>
        <Suspense
          fallback={<div>Loading footer...</div>}
        >
          <LazyFooter showDate={true} />
        </Suspense>
      </div>
    </>
  );
}
