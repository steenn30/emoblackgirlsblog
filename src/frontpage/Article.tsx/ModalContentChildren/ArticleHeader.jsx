

const  ArticleHeader = ({title, author, timestamp}) =>{
    return(
         <header className="article-header" style={{marginTop:-300}}>
      <h1>{title}</h1>
      <p className="author">
        By <strong>{author}</strong> | Published on {timestamp}
      </p>
    </header>
    )
}


export default ArticleHeader;