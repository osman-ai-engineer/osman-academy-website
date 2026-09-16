import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc, useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function ChapterKicker() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const category = breadcrumbs?.find((item) => item.type === 'category');
  if (!category) {
    return null;
  }
  return <p className="chapter-kicker">{category.label}</p>;
}

export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      <ChapterKicker />
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}