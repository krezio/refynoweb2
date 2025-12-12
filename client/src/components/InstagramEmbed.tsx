import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  postUrl: string;
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="instagram-embed-container bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-border/30"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "16px",
          boxShadow: "none",
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      />
    </div>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
