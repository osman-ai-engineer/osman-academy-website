import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function AcademyPage({data}) {
  const brokenLinks = useBrokenLinks();
  // Register anchors in migrated HTML with Docusaurus's server-side validator.
  for (const match of data.html.matchAll(/\bid="([^"]+)"/g)) brokenLinks.collectAnchor(match[1]);
  for (const match of data.html.matchAll(/\bhref="([^"]+)"/g)) {
    if (!/^(?:[a-z]+:|\/\/)/i.test(match[1])) brokenLinks.collectLink(match[1]);
  }
  const [active, setActive] = useState('overview');
  const content = useRef(null);
  const mobileMenu = useRef(null);
  useEffect(() => {
    if (!data.toc.length) return;
    let scheduled = false;
    const update = () => {
      scheduled = false;
      let current = data.toc[0].id;
      for (const item of data.toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 170) current = item.id;
      }
      setActive(current);
    };
    const scroll = () => {if (!scheduled) {scheduled = true; requestAnimationFrame(update);}};
    update();
    window.addEventListener('scroll', scroll, {passive:true});
    return () => window.removeEventListener('scroll', scroll);
  }, [data.key]);
  useEffect(() => {
    if (data.className !== 'oa-home' || !content.current) return;
    content.current.querySelectorAll('a[href="#how-we-teach"]').forEach((link) => { link.href = '/about#how-we-teach'; });
    const primary = content.current.querySelector('#top .hero-ctas a');
    if (primary) { primary.href = '#programs'; primary.textContent = 'Discover Learning Programs'; }
    content.current.querySelectorAll('h2').forEach((heading) => {
      if (heading.textContent.trim() === 'Practical AI Skills Program') heading.textContent = 'Practical AI Skills Programs';
    });
    content.current.querySelectorAll('h3').forEach((heading) => {
      if (heading.textContent.trim() === 'A Portfolio Employers Notice') {
        const description = heading.parentElement?.querySelector('p');
        if (description) description.textContent = 'You’ll leave with practical portfolio projects, each polished with our help, so your portfolio does the talking in interviews.';
      }
      if (heading.textContent.trim() === 'The Skills That Actually Get You Hired' || heading.textContent.trim() === 'Practical Skills for Your Career') {
        heading.textContent = 'The Skills That Actually Get You Hired';
        const description = heading.parentElement?.querySelector('p');
        if (description) description.textContent = 'Learn how to communicate your AI knowledge, frame your work, discuss projects, and demonstrate practical skills in professional conversations and interviews.';
      }
      if (heading.textContent.trim() === 'A Community That Has Your Back') {
        heading.textContent = 'Learn With Support';
        const description = heading.parentElement?.querySelector('p');
        if (description) description.textContent = 'Stuck on something? Ask questions, explore different approaches, and keep moving through the program. Osman Academy is here to provide guidance as you learn.';
      }
    });
    content.current.querySelectorAll('#faq em').forEach((label) => { label.remove(); });
  }, [data.className]);
  useEffect(() => {
    if (!data.className?.includes('oa-about') || !content.current) return;
    const link = content.current.querySelector('#team .method-cta a');
    if (link) { link.href = '/programs'; link.textContent = 'Discover our learning programs'; }
  }, [data.className]);
  const sectionLinks = <ul>{data.toc.map(item => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => {setActive(item.id); if(mobileMenu.current) mobileMenu.current.open = false;}}>{item.label}</a></li>)}</ul>;
  return <Layout title={data.title} description={data.description}>
    <div className={data.toc.length ? 'program-layout' : undefined}>
      {data.toc.length > 0 && <aside className="program-sidebar"><Link className="program-back" to="/programs">← Learning Programs</Link><p className="sidebar-title">{data.title}</p><nav aria-label="Page sections">{sectionLinks}</nav><Link className="sidebar-book" to={`/books/${data.key}`}>Read the E-Book ↗</Link><span className="sidebar-status">Udemy course coming soon</span></aside>}
      <main id="main" className={`academy-content ${data.className}`} ref={content}>
        {data.toc.length > 0 && <details className="mobile-sections" ref={mobileMenu}><summary>On this page</summary><nav aria-label="Page sections on mobile">{sectionLinks}</nav></details>}
        <div dangerouslySetInnerHTML={{__html:data.html}} />
      </main>
    </div>
  </Layout>;
}
