import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
function BookLogo(){return <img src={useBaseUrl('/assets/oa-logo-trimmed.png')} alt=""/>;}
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const books = [
  {id:'fundamentals',title:'AI Fundamentals',subtitle:'Begin with understanding.',text:'Human intelligence, the foundations of AI, and the ideas that connect them. No mathematics or coding required.',number:'01',color:'green'},
  {id:'associate',title:'AI Associate',subtitle:'Bring AI into your work.',text:'Prompting, evaluating results, and applying AI thoughtfully to everyday professional work.',number:'02',color:'blue'},
  {id:'developer',title:'AI Developer',subtitle:'Build with AI.',text:'Develop AI applications through code, APIs, tools, and practical engineering decisions.',number:'03',color:'wood'},
  {id:'architect',title:'AI Architect',subtitle:'Think in systems.',text:'Explore the design of production AI systems, from individual components to the complete architecture.',number:'04',color:'ink'},
];

export default function Books(){return <Layout title="E-Books" description="Read Osman Academy's developing collection of AI e-books."><main className="library-page"><header className="library-header"><span className="eyebrow">The Osman Academy library</span><h1>Make room for<br/><em>understanding.</em></h1><p>AI concepts, explained with care. Read at your own pace, work through the examples, and return whenever you need a clearer picture.</p><div className="draft-note"><span className="status-dot"/> A growing collection · All e-books are in draft</div></header><section className="book-grid" aria-label="E-book collection">{books.map(book=>{
  const ready = book.id === 'fundamentals';
  const cover = <><div className="cover-brand"><BookLogo/>Osman Academy</div><span className="cover-number">{book.number}</span><div className="cover-title">{book.title}</div><div className="cover-subtitle">{book.subtitle}</div><div className="cover-bottom">{ready ? <><span>E-BOOK</span><span>↗</span></> : <span>COMING SOON</span>}</div></>;
  return <article className={`book-card book-${book.color}`} key={book.id}>
    {ready
      ? <Link className="book-cover" to={`/books/${book.id}`} aria-label={`Read ${book.title}`}>{cover}</Link>
      : <div className="book-cover book-cover--disabled" aria-hidden="true">{cover}</div>}
    <div className="book-info">
      <h2>{book.title}</h2>
      <p>{book.text}</p>
      {ready
        ? <Link className="book-read" to={`/books/${book.id}`}>Read the E-Book <span>→</span></Link>
        : <span className="book-read book-read--disabled">Coming Soon</span>}
      <Link className="book-program" to={`/programs/ai-${book.id}`}>Explore the learning program</Link>
    </div>
  </article>;
})}</section></main></Layout>;}
