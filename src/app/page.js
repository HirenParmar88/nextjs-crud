//index file of the project.
'use client'

// src/app/page.js
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
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
  );
}

