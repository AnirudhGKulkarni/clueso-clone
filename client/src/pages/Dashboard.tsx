import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Sparkles,
  Upload,
  Clock,
  Star,
  MoreHorizontal,
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

const recentVideos = [
  { id: 1, title: "Product Demo - Q4 Features", duration: "3:24", status: "completed", date: "2 hours ago" },
  { id: 2, title: "Onboarding Tutorial", duration: "5:12", status: "processing", date: "Yesterday" },
  { id: 3, title: "Customer Success Webinar", duration: "12:45", status: "completed", date: "3 days ago" },
  { id: 4, title: "Feature Walkthrough", duration: "2:18", status: "completed", date: "Last week" },
];

const quickStats = [
  { label: "Total Videos", value: "24", icon: Video, trend: "+3 this week" },
  { label: "Total Articles", value: "156", icon: FileText, trend: "+12 this week" },
  { label: "Watch Time", value: "4.2h", icon: Clock, trend: "+15% vs last week" },
  { label: "Team Members", value: "8", icon: Users, trend: "2 pending invites" },
];

export default function DashboardPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => location.pathname === path;

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
                  <p className="text-sm font-medium text-foreground">John Doe</p>
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
              <DropdownMenuItem className="text-destructive">
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

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your videos today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-primary mt-1">{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <button className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Upload Video</h3>
              <p className="text-sm text-muted-foreground">Upload a screen recording to transform</p>
            </button>
            <button className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Record New</h3>
              <p className="text-sm text-muted-foreground">Start a new screen recording</p>
            </button>
            <button className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">AI Templates</h3>
              <p className="text-sm text-muted-foreground">Start with a pre-built template</p>
            </button>
          </div>

          {/* Recent Videos */}
          <div className="bg-card border border-border rounded-xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Recent Videos</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/videos">View all</Link>
              </Button>
            </div>
            <div className="divide-y divide-border">
              {recentVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-32 h-20 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Video className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{video.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-muted-foreground">{video.duration}</span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          video.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        )}
                      >
                        {video.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{video.date}</div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}