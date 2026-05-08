import React, { useEffect, useRef } from "react";
import bgm from "../assets/bgm.mp3";

function GlobalAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(bgm);
    audio.loop = true;
    audio.volume = 0.5;

    const playMusic = async () => {
      try {
        await audio.play();
        document.removeEventListener("click", playMusic);
      } catch (e) {
        console.log("Autoplay blocked until user interaction.");
      }
    };

    document.addEventListener("click", playMusic);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}

export default GlobalAudio;
