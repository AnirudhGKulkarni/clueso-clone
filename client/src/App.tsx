import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PricingPage from "./pages/Pricing";
import CareersPage from "./pages/Careers";
import DashboardPage from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/Home";
import VideosPage from "./pages/dashboard/Videos";
import ArticlesPage from "./pages/dashboard/Articles";
import ProjectsPage from "./pages/dashboard/Projects";
import AnalyticsPage from "./pages/dashboard/Analytics";
import TeamPage from "./pages/dashboard/Team";
import SettingsPage from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<DashboardHome />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;