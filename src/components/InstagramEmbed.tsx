import { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";

interface InstagramEmbedProps {
  postUrl: string;
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    
    if (existingScript) {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setLoaded(true);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="instagram-embed-wrapper relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-400/5 border border-border/20"
    >
      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
          <FaInstagram className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">@refyno</span>
      </div>
      <div className="pt-10 pb-0">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: "transparent",
            border: "0",
            borderRadius: "0",
            boxShadow: "none",
            margin: "0 auto",
            maxWidth: "100%",
            minWidth: "280px",
            padding: "0",
            width: "100%",
          }}
        />
      </div>
      <style>{`
        .instagram-embed-wrapper .instagram-media {
          min-width: 280px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        .instagram-embed-wrapper .instagram-media-rendered {
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }
        .instagram-embed-wrapper iframe {
          border-radius: 0 0 16px 16px !important;
        }
      `}</style>
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
