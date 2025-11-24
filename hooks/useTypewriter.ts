import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && display.length < word.length) {
          setDisplay(word.slice(0, display.length + 1));
        } else if (!deleting && display.length === word.length) {
          setTimeout(() => setDeleting(true), pause);
        } else if (deleting && display.length > 0) {
          setDisplay(word.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words, speed, pause]);

  return display;
}
