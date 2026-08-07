import { useEffect, useState, useRef } from "react";

export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0]);
  const intersectingIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingIds.current.add(entry.target.id);
          } else {
            intersectingIds.current.delete(entry.target.id);
          }
        });

        // escolhe a primeira seção (em ordem visual) que está intersectando
        const firstVisible = ids.find((id) => intersectingIds.current.has(id));
        if (firstVisible) {
          setActiveId(firstVisible);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}