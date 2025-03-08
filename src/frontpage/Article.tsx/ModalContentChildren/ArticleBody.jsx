const formatTextToHTML = (text) => {
  if (!text) return "";

  return text
    .replace(/\n{2,}/g, "<br><br>") // Replace multiple newlines with proper breaks
    .replace(/(\d+)\.\s*<b>(.*?)<\/b>/g, '<li><strong>$2</strong>') // Convert numbered list headers
    .replace(/Key Actions:/g, "<br><em>Key Actions:</em>") // Emphasize "Key Actions"
    .replace(/\n/g, " ") // Remove single newlines (prevents breaking inline elements)
    .replace(/<h2>/g, '<h2 style="list-style-type: none; counter-reset: none;">'); // Add inline style to <h2> tags
};

const ArticleBody = ({ body }) => {
  return (
    <section style={{ textAlign: "left" }} className="article-body">
      <ol style={{ listStyleType: "none" }} dangerouslySetInnerHTML={{ __html: formatTextToHTML(body) }} />
    </section>
  );
};

export default ArticleBody;

