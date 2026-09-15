import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Root({children}) {
  const location = useLocation();
  const history = useHistory();
  const baseUrl = useBaseUrl('/');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest?.('a');
      if (!link || link.target === '_blank' || event.defaultPrevented) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
        event.preventDefault();
        setLoading(true);
        history.push(`${url.pathname}${url.search}${url.hash}`);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [history]);

  return <>
    {children}
    <div className={`oa-loader${loading ? ' oa-loader--visible' : ''}`} role="status" aria-live="polite" aria-label="Loading">
      <div className="oa-loader__mark" aria-hidden="true">
        <img className="oa-loader__static" src={`${baseUrl}img/3.svg`} alt="" />
        <img className="oa-loader__gear" src={`${baseUrl}img/4.svg`} alt="" />
      </div>
      <span className="oa-loader__label" aria-hidden="true">Loading<span className="oa-loader__dots"><span>.</span><span>.</span><span>.</span></span></span>
    </div>
  </>;
}
