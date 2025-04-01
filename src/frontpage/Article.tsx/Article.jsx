import React from 'react';
import ArticleHeader from './ModalContentChildren/ArticleHeader';
import ArticleBody from './ModalContentChildren/ArticleBody';
import ArticleFooter from './ModalContentChildren/ArticleFooter';
import { useParams } from "react-router-dom";
import { articles } from '../../Homepage.';
import { Banner } from "../Banner";
import {Helmet} from "react-helmet-async";
import "../../../src/index.css"; // Keep this for your custom styles if needed

const Article = () => {
  const { slug } = useParams();
  
  // Find the article by slug
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
    <Helmet>
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@em0blackgirls" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={"Learn."} />
        <meta name="twitter:image" content={article.image} />
        <meta name="twitter:creator" content="@em0blackgirls" />

        {/* Open Graph meta tags (for other social media platforms) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={"Learn."} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content="https://www.emoblackgirls.com/article/${article.id}" />
      </Helmet>
    <div>
      <Banner />
      {/* Bootstrap grid container */}
      <div className="container mt-5" style={{marginTop: 400}}>
        <div className="row">
          <div className="col-12">
            <ArticleHeader 
              title={article.title} 
              timestamp={article.timestamp} 
              author={article.author} 
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ArticleBody body={article.text} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ArticleFooter />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Article;
