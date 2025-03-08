import React from 'react';
import ArticleHeader from './ModalContentChildren/ArticleHeader';
import ArticleBody from './ModalContentChildren/ArticleBody';
import ArticleFooter from './ModalContentChildren/ArticleFooter';
import { useParams } from "react-router-dom";
import { articles } from '../../Homepage.';
import { Banner } from "../Banner";
import "../../../src/index.css"; // Keep this for your custom styles if needed

const Article = () => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
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
  );
};

export default Article;
