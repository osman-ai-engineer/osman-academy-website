import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {groupBlogSidebarItemsByYear, useVisibleBlogSidebarItems} from '@docusaurus/plugin-content-blog/client';

export default function BlogLayout({sidebar, toc, children, ...props}) {
  const [collapsed, setCollapsed] = useState(false);
  const {pathname} = useLocation();
  const items = useVisibleBlogSidebarItems(sidebar?.items || []);
  const groups = groupBlogSidebarItemsByYear(items);
  return <Layout {...props}>
    <div className={`oa-blog-layout${collapsed ? ' oa-blog-layout--collapsed' : ''}`}>
      <aside className="oa-blog-sidebar">
        <button className="oa-blog-toggle" type="button" aria-expanded={!collapsed} aria-controls="oa-blog-posts" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '»' : '«'}<span>{collapsed ? 'Expand blog sidebar' : 'Collapse blog sidebar'}</span>
        </button>
        <nav id="oa-blog-posts" aria-label="Blog posts by year" hidden={collapsed}>
          <Link className="oa-blog-home" to="/blog">All posts</Link>
          {groups.map(([year, posts]) => <details key={year} open>
            <summary>{year}</summary>
            <ul className="clean-list">{posts.map(post => <li key={post.permalink}>
              <Link to={post.permalink} aria-current={pathname === post.permalink ? 'page' : undefined}>{post.title}</Link>
            </li>)}</ul>
          </details>)}
        </nav>
      </aside>
      <div className={`oa-blog-reading${toc ? ' oa-blog-reading--with-toc' : ''}`}>
        {toc && <details className="oa-blog-mobile-toc"><summary>On this page</summary>{toc}</details>}
        <main className="oa-blog-article">{children}</main>
        {toc && <aside className="oa-blog-toc" aria-label="Article sections">{toc}</aside>}
      </div>
    </div>
  </Layout>;
}
