// src/app/page.js
'use client';

import GenerateArticle from '@/components/GenerateArticle';
import { useState } from "react";

export default function Home() {
  const [isSending, setIsSending] = useState(false);
  const [arr, setArr] = useState([{ type: "bot", content: "Bienvenue sur le bot Brawhallah Gemini ! Je suis conçu exclusivement pour répondre à toutes vos questions concernant le jeux => __**BrawlHalla**__." }]);

  const handlerButton = async () => {
    const value = document.getElementById("toRequest");
    if (value.value !== "") {
      const userRequest= { type: "user", content: value.value };
      setArr(prevArr => [...prevArr, userRequest]);

      setIsSending(true);
      value.value = "";
      const response = await fetch('/api/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userRequest.content }),
      });
      
      if(response.status === 200){
        const data = await response.json();  
        setArr(prevArr => [...prevArr, { type: "bot", content: data?.result }]);  
      } else {
        alert("Erreur interne");
      }
      
      setIsSending(false);
    } else {
      alert("Votre demande est vide ?");
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlerButton()
    }
  };

  return (
    <main>
      <GenerateArticle content={arr} />
      <section id="textToRequest">
        <div>
          <input type="text" disabled={isSending} id="toRequest" onKeyDown={handleKeyDown} />
          <button
            className="buttonToSend"
            role="button"
            disabled={isSending}
            onClick={handlerButton}
          >
            {isSending ? (
              <img src="/assets/loading.gif" />
            ) : (
              <img src="/assets/arrow.png" />
            )}
          </button>
        </div>
      </section>
    </main>
  );
}
