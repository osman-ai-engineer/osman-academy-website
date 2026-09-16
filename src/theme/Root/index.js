import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Root({children}) {
  const location = useLocation();
  const history = useHistory();
  const baseUrl = useBaseUrl('/');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const showProgress = /\/books\//.test(location.pathname);

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

  useEffect(() => {
    if (!showProgress) {
      setProgress(0);
      return undefined;
    }
    let raf = null;
    const update = () => {
      raf = null;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setProgress(pct);
    };
    const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [showProgress, location.pathname]);

  return <>
    {showProgress && (
      <div className="oa-progress" aria-hidden="true">
        <div className="oa-progress__fill" style={{width: `${progress}%`}} />
      </div>
    )}
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