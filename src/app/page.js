//this page.js file like index file of the next.js project..

// src/app/page.js
'use client'
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '@/components/navigationBar/navigationBar.jsx';
export default function Dashboard() {

  return (
    <>
    <NavigationBar />
    
    <div className="container mt-5 bg-light"><br/>
      <h2>Dashboard</h2><br/>
      <ul>
        <li>
          <Link href="/users" className="list-group-item list-group-item-action text-primary" >Users</Link>
        </li><br/><br/>
        <li>
          <Link href="/products" className="list-group-item list-group-item-action text-primary">Products</Link>
        </li><br/><br/>
        <li>
          <Link href="/accessories" className="list-group-item list-group-item-action text-primary">Accessories</Link>
        </li><br/><br/>
      </ul>
    </div>
    </>
  );
}

