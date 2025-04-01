import Banner from "./frontpage/Banner";
import ClickableGridParent from "./frontpage/ClickGrid/ClickableGridParent";
import StockTrending from "./frontpage/StockTrending";
import {articleText, articleText3, articleText4, articleText5, articleText6, articleText7, articleText8, articleText9, articleText10, articleText11, articleText12, articleText14, articleText15, articleText16, articleText17, articleText18, articleText19, articleText20, articleText21} from "./text";

// Assuming the generateSlug function is defined as follows:
function generateSlug(article) {
  const formattedTitle = article.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .trim();

  return `${formattedTitle}-${article.id}`; // Add the ID to ensure uniqueness
}



export const articles = [
  {
    id: 3,
    title: "Manipulative People",
    slug: generateSlug({ id: 3, title: "Manipulative People" }), // Call the slug function
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
    excerpt: "",
    text: articleText,
    timestamp: "February 22, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 4,
    title: "Jean-Paul Sartre (1905–1980)",
    slug: generateSlug({ id: 4, title: "Jean-Paul Sartre (1905–1980)" }), // Call the slug function
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTon4v0odKwLq72dWfS68kWf5oUi4eqnf9kT-sdmowZQb0noV-n4ebSmHJDEZxq_JUpRJBXnathbTx7BFkAn8zng",
    excerpt: "",
    text: articleText3,
    timestamp: "February 23, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 5,
    title: "Immigrating to Canada",
    slug: generateSlug({ id: 5, title: "Immigrating to Canada" }), // Call the slug function
    image: "https://torontolife.mblycdn.com/tl/resized/2022/07/w1280/CNT-Exterior-Night-Lighting-201808-02.jpg",
    excerpt: "",
    text: articleText4,
    timestamp: "March 6, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 6,
    title: "Core Principles of Rocket Science",
    slug: generateSlug({ id: 6, title: "Core Principles of Rocket Science" }), // Call the slug function
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNkVRxE2J-0VmdsCNiJYAIfSJyMP8SyXXWg&s",
    excerpt: "",
    text: articleText5,
    timestamp: "March 7, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 7,
    title: "Computer Engineering for Rocket Science",
    slug: generateSlug({ id: 7, title: "Computer Engineering for Rocket Science" }), // Call the slug function
    image: "https://media.licdn.com/dms/image/v2/D5612AQGqaFI2X8ekZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1735036752042?e=2147483647&v=beta&t=W6beuSmzVzn-bTS8lUKr7KqKjr6dLYuAQfBjCOykoKQ",
    excerpt: "",
    text: articleText6,
    timestamp: "March 8, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 8,
    title: "Rocket Fuels",
    slug: generateSlug({ id: 8, title: "Rocket Fuels" }), // Call the slug function
    image: "https://cdn-images-1.medium.com/max/1600/0*oJTpg9Lm1lOa9XkT",
    excerpt: "",
    text: articleText7,
    timestamp: "March 9, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 10,
    title: "CEOs",
    slug: generateSlug({ id: 10, title: "CEOs" }), // Call the slug function
    image: "https://i.guim.co.uk/img/static/sys-images/Business/Pix/pictures/2011/3/30/1301502606135/Microsoft-Founders-Bill-G-007.jpg?width=465&dpr=1&s=none&crop=none",
    excerpt: "",
    text: articleText9,
    timestamp: "March 10, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 9,
    title: "So You Want To Start a Startup",
    slug: generateSlug({ id: 9, title: "So You Want To Start a Startup" }), // Call the slug function
    image: "https://www.jpmorgan.com/content/dam/jpmorgan/images/cb/startups/cb-solutions-innovation-economy-startups-440x810-horizontal.jpg",
    excerpt: "",
    text: articleText8,
    timestamp: "March 10, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 11,
    title: "Cap Tables",
    slug: generateSlug({ id: 11, title: "Cap Tables" }), // Call the slug function
    image: "https://i.redd.it/764z6dnn83g51.jpg",
    excerpt: "",
    text: articleText10,
    timestamp: "March 11, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 12,
    title: "Computer Numbers",
    slug: generateSlug({ id: 12, title: "Computer Numbers" }), // Call the slug function
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNM5pOX1nNKWqYQqikxOua8rY4HEaXzT_eNw&s",
    excerpt: "",
    text: articleText11,
    timestamp: "March 15, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 13,
    title: "Weed",
    slug: generateSlug({ id: 13, title: "Weed" }), // Call the slug function
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2023/03/2023-02-22T233710Z_1116962260_MT1USATODAY20061394_RTRMADP_3_MEDICINAL-MARIJUANA-BUDS-ARE-DRIED-AT-THE-STABILITY-CANNABIS-1024x683.jpg",
    excerpt: "",
    text: articleText12,
    timestamp: "March 16, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 14,
    title: "Good Burgers",
    slug: generateSlug({ id: 14, title: "Good Burgers" }), // Call the slug function
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLot9598kXY1vN_YwckqEOS5_PBpMw8i82DQ&s",
    excerpt: "",
    text: articleText14,
    timestamp: "March 17, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 15,
    title: "Cyberthreats",
    slug: generateSlug({ id: 15, title: "Cyberthreats" }), // Call the slug function
    image: "https://st.depositphotos.com/16122460/58886/i/450/depositphotos_588868604-stock-photo-silhouette-anonymous-hacker-digital-binary.jpg",
    excerpt: "",
    text: articleText15,
    timestamp: "March 18, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 16,
    title: "p-n junction",
    slug: generateSlug({ id: 16, title: "p-n junction" }), // Call the slug function
    image: "https://i0.wp.com/mundus2035.com/wp-content/uploads/2021/05/Fundamentals-Of-Pn-Junction-Diode-You-Need-To-Know.jpg?fit=1200%2C628&ssl=1",
    excerpt: "",
    text: articleText16,
    timestamp: "March 21, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 17,
    title: "Shady Medical Company Business Practices",
    slug: generateSlug({ id: 16, title: "Shady Medical Company Business Practices" }), // Call the slug function
    image: "https://onlinecoursesblog.hillsdale.edu/wp-content/uploads/2023/11/julius-caesar-blood-1-e1701355772710.jpeg",
    excerpt: "",
    text: articleText17,
    timestamp: "March 22, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 18,
    title: "Internal Combustion Engine",
    slug: generateSlug({ id: 18, title: "Internal Combustion Engine" }), // Call the slug function
    image: "https://accelleron-industries.com/content/dam/accelleronind/charge/articles/making-the-explosive-switch-from-steam-power-to-internal-combustion-1200x857.jpg",
    excerpt: "",
    text: articleText18,
    timestamp: "March 24, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 19,
    title: "Metaphysical Reflections on Gestation",
    slug: generateSlug({ id: 19, title: "Metaphysical Reflections on Gestation" }), // Call the slug function
    image: "https://media.cnn.com/api/v1/images/stellar/prod/150323113024-four-month-ultrasound.jpg?q=x_0,y_351,h_1398,w_2484,c_crop/h_833,w_1480",
    excerpt: "",
    text: articleText19,
    timestamp: "March 29, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 20,
    title: "America's Future with AI",
    slug: generateSlug({ id: 20, title: "America's Future with AI" }), // Call the slug function
    image: "https://npr.brightspotcdn.com/dims4/default/d0e3886/2147483647/strip/true/crop/1760x1084+0+0/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F06%2F6e%2F0daf680547f0b07f863e3a1900f5%2Fabandoned-building.png",
    excerpt: "",
    text: articleText20,
    timestamp: "March 31, 2025",
    author: 'Nicholas R. Steen'
  },
  {
    id: 21,
    title: "April Fool's",
    slug: generateSlug({ id: 20, title: "April Fool's" }), // Call the slug function
    image: "https://www.dictionary.com/e/wp-content/uploads/2021/03/20210328_AprilFools_1000x700-790x310.jpg",
    excerpt: "",
    text: articleText21,
    timestamp: "April 1, 2025",
    author: 'Nicholas R. Steen'
  }

  
];

// Generate Breadcrumbs for each article
articles.forEach((article, index) => {
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://emoblackgirls.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://emoblackgirls.com/article",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://emoblackgirls.com/article/${article.slug}`,
      },
    ],
  };

  // Insert breadcrumb JSON into the page dynamically
  const breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(breadcrumbJson)}</script>`;
  document.head.insertAdjacentHTML("beforeend", breadcrumbScript);
});



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