/**
 * The above function is a React component that renders a cookie banner with options to decline or
 * allow cookies.
 * @returns The code is returning a React component called `CookieBanner`.
 */

'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';
import styles from "./cookiebanner.module.css"


export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
    }, [setCookieConsent]);

    useEffect(() => {
        const newValue = cookieConsent ? "granted" : "denied";
        window.gtag("consent", "update", {
            "analytics_storage": newValue,
        });
        setLocalStorage("cookie_consent", cookieConsent);
        console.log("Cookie Consent: ", cookieConsent);
    }, [cookieConsent]);

    return (
        <div className={`${styles.cookieBanner} ${cookieConsent != null ? styles.hidden : ""}`}>

            <div className={styles.cookieText}>
                <Link href="/admin/conditions-generales">
                    <p>
                        Nous utilisons des{" "}
                        <span className={styles.fontBold}>cookies</span> sur ce site.
                    </p>
                </Link>
            </div>
            <div className={styles.cookiesButton}>
                <button
                    className={styles.buttonDecline}
                    onClick={() => setCookieConsent(false)}
                >
                    Refuser
                </button>
                <button
                    className={styles.buttonAllow}
                    onClick={() => setCookieConsent(true)}
                >
                    Autoriser
                </button>
            </div>
        </div>
    );
}