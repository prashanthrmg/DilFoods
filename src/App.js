import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./screens/nav/SideNavBar";
import TopNavBar from "./screens/nav/TopNavBar";
import Dashboard from "./screens/dashboard";
import ItemSales from "./screens/itemSales";
import RevenueAnalysis from "./screens/revenueAnalysis";
import OrderStatus from "./screens/orderStatus";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar isSidebar={isSidebar} />
          <main className="content">
            <TopNavBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/itemSales" element={<ItemSales />} />
              <Route path="/orderStatus" element={<OrderStatus />} />
              <Route path="/revenueAnalysis" element={<RevenueAnalysis />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
