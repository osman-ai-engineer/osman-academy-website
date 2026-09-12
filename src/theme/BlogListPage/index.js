import React from 'react';
import OriginalBlogListPage from '@theme-original/BlogListPage';
import BlogEmpty from '@site/src/components/BlogEmpty';

export default function BlogListPage(props) {
  return props.items.length ? <OriginalBlogListPage {...props}/> : <BlogEmpty/>;
}
