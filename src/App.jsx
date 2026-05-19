import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <MainLayout
                  commandOpen={commandOpen}
                  setCommandOpen={setCommandOpen}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              }
            >
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
