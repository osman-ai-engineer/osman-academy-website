import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFoundContent() {
  const baseUrl = useBaseUrl('/');
  return (
    <main className="oa-404">
      <div className="oa-404__mark" aria-hidden="true">
        <img className="oa-404__static" src={`${baseUrl}img/3.svg`} alt="" />
        <img className="oa-404__gear" src={`${baseUrl}img/4.svg`} alt="" />
        <div className="oa-404__orbit">
          <span className="oa-404__glass">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <line x1="15.4" y1="15.4" x2="21" y2="21" />
            </svg>
          </span>
        </div>
      </div>
      <h1>Page Not Found</h1>
      <p>We looked, but this page isn&rsquo;t here. Let&rsquo;s get you back on track.</p>
      <div className="oa-404__actions">
        <Link className="button button--primary button--lg" to="/">Take me home</Link>
        <Link className="button button--secondary button--lg" to="/story">Read our story</Link>
      </div>
    </main>
  );
}