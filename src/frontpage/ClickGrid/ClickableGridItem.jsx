import Card from "./Card";
import { Link } from "react-router-dom";


const ClickableGridItem = ({ article }) => {
    return (
        <Link to={`/article/${article.id}`} className="cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition">
          <Card>
            {article.image ? (
              <div className="relative w-full h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold text-center p-2">
                    {article.title}
                  </h2>
                </div>
              </div>
            ) : (
              <div className="p-4">
                <h2 className="text-2xl font-bold">{article.title}</h2>
                <p className="text-sm text-gray-700">
                  {article.excerpt
                    ? article.excerpt
                    : article.text.slice(0, 200) + "..."}
                </p>
              </div>
            )}
          </Card>
        </Link>
      );
};
export default ClickableGridItem;