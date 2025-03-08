import Banner from "./frontpage/Banner";
import ClickableGridParent from "./frontpage/ClickGrid/ClickableGridParent";
import StockTrending from "./frontpage/StockTrending";
import {articleText, articleText3, articleText4, articleText5} from "./text";
export const articles = [
  {
    id: 3,
    title: "Manipulative People",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
    excerpt: "",
    text: articleText,
    timestamp: "February 22, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 4,
    title: "Jean-Paul Sartre (1905–1980)",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTon4v0odKwLq72dWfS68kWf5oUi4eqnf9kT-sdmowZQb0noV-n4ebSmHJDEZxq_JUpRJBXnathbTx7BFkAn8zng",
    excerpt: "",
    text: articleText3,
    timestamp: "February 23, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 5,
    title: "Immigrating to Canada",
    image: "https://torontolife.mblycdn.com/tl/resized/2022/07/w1280/CNT-Exterior-Night-Lighting-201808-02.jpg",
    excerpt: "",
    text: articleText4,
    timestamp: "March 6, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 6,
    title: "Core Principles of Rocket Science",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNkVRxE2J-0VmdsCNiJYAIfSJyMP8SyXXWg&s",
    excerpt: "",
    text: articleText5,
    timestamp: "March 7, 2025",
    author: 'Nicholas R. Steen'
  }
];

  // Sort articles by timestamp from most recent to oldest
articles.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
export default function HomePage() {
    
    return (
        <div>
            <Banner></Banner>
            <ClickableGridParent articles={articles}/>
            <div style={{ width: "100%", maxWidth: "1200px", height: "auto", overflowY: "auto", marginTop: "20px", minHeight:1500 }}>
                <StockTrending />
            </div>
        </div>
    
     ) ;
  }