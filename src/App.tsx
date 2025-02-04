import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/CHANGELOG.md") // Assurez-vous que le fichier est accessible depuis le public/
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) =>
        console.error("Erreur lors du chargement du Markdown :", error)
      );
  }, []);
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {markdown}
    </ReactMarkdown>
  );
};

export default App;
