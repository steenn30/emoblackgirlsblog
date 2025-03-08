import ClickableGridItem from "./ClickableGridItem";

const ClickableGridParent = ({ articles }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {articles.map((article, index) => (
          <ClickableGridItem key={index} article={article} />
        ))}
        
      </div>
    );
  };

export default ClickableGridParent;