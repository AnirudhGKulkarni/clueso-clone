import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  Video,
  FileText,
  Settings,
  BarChart3,
  Users,
  Folder,
  Plus,
  Search,
  Bell,
  HelpCircle,
  LogOut,
  ChevronDown,
  Home,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Video, label: "Videos", href: "/dashboard/videos" },
  { icon: FileText, label: "Articles", href: "/dashboard/articles" },
  { icon: Folder, label: "Projects", href: "/dashboard/projects" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];
// child pages render their own content (Home, Videos, Articles, Projects, Analytics, Team, Settings)

export default function DashboardPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const [firstName, setFirstName] = useState<string>("John");
  const [fullName, setFullName] = useState<string>("John Doe");

  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard" || location.pathname === "/dashboard/";
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    // Prefer stored user info if available
    const userJson = localStorage.getItem("user");
    if (userJson) {
      try {
        const userObj = JSON.parse(userJson);
        if (userObj?.name) {
          setFullName(userObj.name);
          setFirstName(String(userObj.name).split(" ")[0]);
          return; // done
        }
      } catch (e) {
        // ignore
      }
    }
    // Try to extract user name from JWT token (if backend returns a JWT with name)
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const parts = token.split(".");
        if (parts.length >= 2) {
          const payload = JSON.parse(decodeURIComponent(escape(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")))));
          const name = payload?.firstName || payload?.name || payload?.given_name || "";
          if (name) {
            setFullName(String(name));
            setFirstName(String(name).split(" ")[0]);
          }
        }
      } catch (e) {
        // ignore parse errors
      }
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("name");
      localStorage.removeItem("firstName");
    } catch (e) {
      // ignore
    }
    // notify other tabs/components
    try {
      window.dispatchEvent(new Event("storage"));
    } catch (e) {}
    navigate("/");
  };

  // child routes will render into <Outlet />

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex flex-col fixed h-screen">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Clueso</span>
          </Link>
        </div>

        {/* New Video Button */}
        <div className="p-4">
          <Button className="w-full gap-2" size="lg">
            <Plus className="w-4 h-4" />
            New Video
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => {
                // prevent potential default suppression and ensure navigation
                try {
                  e.preventDefault();
                } catch (err) {}
                navigate(item.href);
              }}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">JD</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-foreground">{fullName}</p>
                  <p className="text-xs text-muted-foreground">Pro Plan</p>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings" className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="w-4 h-4 mr-2" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Header */}
        <header className="bg-background border-b border-border sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search videos, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content (child routes render here) */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}