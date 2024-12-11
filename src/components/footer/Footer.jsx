// src/components/footer/Footer.jsx

'use client';

import React, { useState, useEffect } from 'react';

function Footer({ dynamicLinks, showDate = true }) {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        if (showDate) {
            const date = new Date();
            setCurrentDate(date.toLocaleDateString());
        }
    }, [showDate]);

    return (
        <footer className="card-footer bg-light border-top py-3">
            <div className="container text-center">
                <div className="footer-content">
                    <p className="mb-2 text-muted">@2024. All Rights Reserved.</p>

                    {/* Render dynamic links */}
                    <ul className="list-inline">
                        {dynamicLinks?.map((link, index) => (
                            <li key={index} className="list-inline-item mx-2">
                                <a
                                    href={link.url}
                                    className="text-decoration-none text-success"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Display current date */}
                    {showDate && <p className="mt-3 small text-muted">Today's Date: {currentDate}</p>}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
