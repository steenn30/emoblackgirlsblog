import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function ArticleFooter() {
    return (
        <footer className="article-footer text-center p-4">
            <p>Liked this article? Share it on social media!</p>
            <div className="social-media-links flex justify-center gap-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}

export default ArticleFooter;