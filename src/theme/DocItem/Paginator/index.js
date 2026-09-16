import React from 'react';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function NavCard({item, direction}) {
  if (!item) {
    return null;
  }
  return (
    <Link to={item.permalink} className={`chapter-nav__card chapter-nav__card--${direction}`}>
      <span className="chapter-nav__label">{direction === 'next' ? 'Next chapter' : 'Previous chapter'}</span>
      <span className="chapter-nav__title">{item.title}</span>
    </Link>
  );
}

export default function DocItemPaginator() {
  const {metadata} = useDoc();
  const {previous, next} = metadata;
  if (!previous && !next) {
    return null;
  }
  return (
    <nav className="chapter-nav" aria-label="Chapter navigation">
      <NavCard item={previous} direction="previous" />
      <NavCard item={next} direction="next" />
    </nav>
  );
}