import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]?.replace("#", "") || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0]?.replace("#", "") || "";

      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el && el.offsetTop <= scrollY) {
          current = id.replace("#", "");
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
