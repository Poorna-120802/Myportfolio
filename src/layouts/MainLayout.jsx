import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { MouseGlow } from "@/components/common/MouseGlow";
import { FloatingOrbs } from "@/components/common/FloatingOrbs";

export function MainLayout({
  commandOpen,
  setCommandOpen,
  theme,
  toggleTheme,
}) {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <MouseGlow />
      <FloatingOrbs />
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <CommandPalette
        open={commandOpen}
        onOpenChange={setCommandOpen}
        onToggleTheme={toggleTheme}
      />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
