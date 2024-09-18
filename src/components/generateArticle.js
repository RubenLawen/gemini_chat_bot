import MarkdownIt from 'markdown-it';
import { useEffect, useRef, useState } from 'react';

const md = new MarkdownIt();

export default function GenerateArticle(props) {
  const [contentHtml, setContentHtml] = useState([]);
  const textToResponsRef = useRef(null);

  useEffect(() => {
    const newContentHtml = props?.content.map((element) => {
      if (element?.type === "bot") {
        return {
          ...element,
          content: md.render(element?.content)  
        };
      }
      return element;
    });
    setContentHtml(newContentHtml);
  }, [props?.content]); 

  useEffect(() => {
    if (textToResponsRef.current) {
      textToResponsRef.current.scrollTop = textToResponsRef.current.scrollHeight;
    }
  }, [contentHtml]);

  return (
    <section id="textToRespons" ref={textToResponsRef}>
      {contentHtml.map((element, index) => {
        if (element?.type === "bot") {
          return (
            <article className="bot" key={index}>
              <img src="/assets/gemini.png" alt="bot image" />
              <p dangerouslySetInnerHTML={{ __html: element?.content }} />
            </article>
          );
        } else {
          return (
            <article className="user" key={index}>
              <p>{element?.content}</p>
              <img src="/assets/user.png" alt="user image" />
            </article>
          );
        }
      })}
    </section>
  );
}
