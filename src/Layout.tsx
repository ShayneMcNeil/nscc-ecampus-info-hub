import { Link, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, Moon, Sun, BookOpen, Languages } from "lucide-react";
import { useState, useEffect } from "react";

const pagesIndex = [
  { path: "/", title: "Home", keywords: "Pjila’si welcome ecampus information site overview support resources" },
  { path: "/about/our-campus", title: "Our Campus", keywords: "campus indigenous land acknowledgement african nova scotians recognition you belong right here right now always faculty statement asynchronous synchronous programs certificate diploma business early childhood" },
  { path: "/about/our-team", title: "Our Team", keywords: "team" },
  { path: "/about/our-communication", title: "Our Communication", keywords: "communication" },
  { path: "/about/key-terms", title: "Key Terms", keywords: "key terms explained simply glossary" },
  { path: "/about/contacts", title: "Contacts & Quick Links", keywords: "contacts phone email links" },
  { path: "/finances", title: "Finances", keywords: "finances money tuition fees" },
  { path: "/academics", title: "Academics", keywords: "academics classes courses" },
  { path: "/services", title: "Student Services", keywords: "student services help support" },
];

export function Layout() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isFinancesDropdownOpen, setIsFinancesDropdownOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('light');
  const [langFr, setLangFr] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : pagesIndex.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        page.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-sepia');
    } else if (theme === 'sepia') {
      document.documentElement.classList.add('theme-sepia');
      document.documentElement.classList.remove('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.remove('theme-sepia');
    }
  }, [theme]);

  const toggleTranslate = () => {
    if (!langFr) {
      setLangFr(true);
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = 'fr';
        select.dispatchEvent(new Event('change'));
      }
    } else {
      setLangFr(false);
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
         select.value = 'en';
         select.dispatchEvent(new Event('change'));
      }
      // Clear cookie and reload to reset Google Translate widget completely if needed
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
      setTimeout(() => window.location.reload(), 100);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 transition-colors duration-300">
      {/* Search overlay background */}
      {isSearchExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 transition-opacity"
          onClick={() => setIsSearchExpanded(false)}
        />
      )}

      {/* Under Construction Banner */}
      <div className="bg-[#ffc72c] text-[#003a70] text-center py-2 text-sm font-semibold tracking-wide shadow-sm z-20 relative" data-no-invert="true">
        ⚠️ This site is currently under construction. Some information may be incomplete or subject to change.
      </div>

      {/* Header/Navbar */}
      <header className="bg-[#003a70] text-white h-20 shadow-lg shrink-0 relative z-20" data-no-invert="true">
        <div className="h-full px-4 md:px-10 flex justify-between items-center max-w-7xl mx-auto md:max-w-none">
          
          {/* Logo area */}
          <div className="flex items-center">
            <Link to="/" className="flex items-baseline space-x-2 hover:opacity-90 transition-opacity">
              <span className="text-4xl font-bold italic lowercase tracking-tight">nscc</span>
              <span className="text-lg font-light text-blue-100 hidden sm:inline-block">
                eCampus Student Info Hub
              </span>
            </Link>
          </div>

          {/* Navigation & Search */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <nav className="hidden md:flex space-x-8 items-center">
              <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "border-b-2 border-[#ffc72c] text-white pb-1" : "text-blue-200 hover:text-white"}`}>Home</NavLink>
              
              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${location.pathname.startsWith('/about') ? "border-b-2 border-[#ffc72c] text-white pb-1" : "text-blue-200 hover:text-white"}`}
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 z-50 pt-1 -mt-1">
                    <div className="bg-[#002b55] rounded-b-lg shadow-xl border border-blue-900 overflow-hidden py-2">
                      <NavLink to="/about/our-campus" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Our Campus</span>
                        {location.pathname === "/about/our-campus" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/about/our-team" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Our Team</span>
                        {location.pathname === "/about/our-team" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/about/our-communication" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Our Communication</span>
                        {location.pathname === "/about/our-communication" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/about/key-terms" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Our Key Terms, Explained Simply</span>
                        {location.pathname === "/about/key-terms" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/about/contacts" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Contacts & Quick Links</span>
                        {location.pathname === "/about/contacts" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsFinancesDropdownOpen(true)}
                onMouseLeave={() => setIsFinancesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${location.pathname.startsWith('/finances') ? "border-b-2 border-[#ffc72c] text-white pb-1" : "text-blue-200 hover:text-white"}`}
                >
                  <span>Finances</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFinancesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFinancesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 z-50 pt-1 -mt-1">
                    <div className="bg-[#002b55] rounded-b-lg shadow-xl border border-blue-900 overflow-hidden py-2">
                      <NavLink to="/finances/tuition-payment" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Tuition &amp; Payment</span>
                        {location.pathname === "/finances/tuition-payment" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/finances/purchasing-textbooks" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Purchasing Textbooks</span>
                        {location.pathname === "/finances/purchasing-textbooks" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/finances/purchasing-tech" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Purchasing Tech</span>
                        {location.pathname === "/finances/purchasing-tech" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsAcademicsDropdownOpen(true)}
                onMouseLeave={() => setIsAcademicsDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${location.pathname.startsWith('/academics') ? "border-b-2 border-[#ffc72c] text-white pb-1" : "text-blue-200 hover:text-white"}`}
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAcademicsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAcademicsDropdownOpen && (
                  <div className="absolute top-full left-0 w-[420px] z-50 pt-1 -mt-1">
                    <div className="bg-[#002b55] rounded-b-lg shadow-xl border border-blue-900 overflow-hidden py-2">
                      <NavLink to="/academics/school-of-access" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>School of Access, Education & Language</span>
                        {location.pathname === "/academics/school-of-access" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/academics/school-of-business" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>School of Business, Creative Industries and Education</span>
                        {location.pathname === "/academics/school-of-business" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/academics/school-of-health" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>School of Health & Human Services</span>
                        {location.pathname === "/academics/school-of-health" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/academics/applied-technology" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Applied Technology and Innovation</span>
                        {location.pathname === "/academics/applied-technology" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/academics/funded-programs" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Funded Programs</span>
                        {location.pathname === "/academics/funded-programs" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/academics/convocation" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Convocation, Credentials & Transcripts</span>
                        {location.pathname === "/academics/convocation" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${location.pathname.startsWith('/services') ? "border-b-2 border-[#ffc72c] text-white pb-1" : "text-blue-200 hover:text-white"}`}
                >
                  <span>Student Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 z-50 pt-1 -mt-1">
                    <div className="bg-[#002b55] rounded-b-lg shadow-xl border border-blue-900 overflow-hidden py-2">
                      <NavLink to="/services/student-supports" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Student Supports</span>
                        {location.pathname === "/services/student-supports" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/services/technology-supports" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Technology Supports</span>
                        {location.pathname === "/services/technology-supports" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/services/event-schedule" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Event Schedule</span>
                        {location.pathname === "/services/event-schedule" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/services/ebite-vodcasts" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>eBite Vodcasts &amp; eMeetup Recordings</span>
                        {location.pathname === "/services/ebite-vodcasts" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/services/library-learning" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Library & Learning Commons</span>
                        {location.pathname === "/services/library-learning" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                      <NavLink to="/services/career-job-search" className={({ isActive }) => `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${isActive ? 'text-[#ffc72c] bg-[#004a8b] font-medium' : 'text-blue-200 hover:text-white hover:bg-[#004a8b]'}`}>
                        <span>Career & Job Search</span>
                        {location.pathname === "/services/career-job-search" && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc72c]"></div>}
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Layout Toggles */}
            <div className="hidden lg:flex items-center gap-2 border-r border-blue-800 pr-4 mr-2">
              <button 
                onClick={() => setTheme(prev => prev === 'light' ? 'dark' : prev === 'dark' ? 'sepia' : 'light')}
                className="p-1.5 rounded-md transition-colors text-blue-300 hover:text-white hover:bg-white/10"
                title={`Current mode: ${theme}. Click to change.`}
              >
                {theme === 'light' && <Sun className="w-5 h-5" />}
                {theme === 'dark' && <Moon className="w-5 h-5" />}
                {theme === 'sepia' && <BookOpen className="w-5 h-5" />}
              </button>
              <div className="w-px h-5 bg-blue-800 mx-1"></div>
              <button 
                onClick={toggleTranslate}
                className={`p-1.5 rounded-md transition-colors flex items-center gap-1 text-sm font-bold ${langFr ? 'bg-blue-600 text-white' : 'text-blue-300 hover:text-white hover:bg-white/10'}`}
                title="Translate to French"
              >
                <Languages className="w-4 h-4" />
                <span>FR</span>
              </button>
            </div>

            <div className="flex items-center relative h-8 ml-2" data-no-invert="true">
              <div 
                className={`flex items-center bg-[#002b55] rounded-full overflow-hidden transition-all duration-300 ease-in-out border border-blue-800 ${
                  isSearchExpanded ? 'w-48 sm:w-64 opacity-100 px-4 py-1.5' : 'w-9 opacity-0 pointer-events-none'
                } absolute right-0 top-0 h-full z-10`}
              >
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eCampus..." 
                  className="bg-transparent border-none outline-none w-full text-blue-300 placeholder-blue-300/70 text-xs pl-2"
                />
              </div>

              {isSearchExpanded && searchQuery && (
                <div className="absolute top-10 right-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-2 max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          navigate(result.path);
                          setSearchQuery("");
                          setIsSearchExpanded(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm text-[#003a70] font-medium border-b border-slate-100 last:border-0"
                      >
                        {result.title}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-slate-500">No results found</div>
                  )}
                </div>
              )}
              
              <button 
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className={`relative z-20 p-1.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center h-8 w-8 ${isSearchExpanded ? 'bg-white/10 ml-48 sm:ml-64' : 'bg-[#002b55] border border-blue-800'}`}
                aria-label="Toggle site search"
              >
                <Search className="w-4 h-4 text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col p-6 md:p-12 lg:p-16 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#003a70] h-auto py-8 md:py-0 md:h-32 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between border-t border-blue-900 shrink-0" data-no-invert="true">
        <div className="text-blue-200 text-sm md:text-left text-center mb-6 md:mb-0">
          <p className="font-semibold text-white mb-1">Nova Scotia Community College</p>
          <p>&copy; 2024 eCampus Student Hub. All rights reserved.</p>
        </div>
        <div className="flex space-x-12">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Quick Links</span>
            <div className="h-[1px] w-full bg-blue-800 mb-2"></div>
            <span className="text-xs text-blue-200">Privacy Policy</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-2 font-bold">Contact</span>
            <div className="h-[1px] w-full bg-blue-800 mb-2"></div>
            <span className="text-xs text-blue-200">ecampus@nscc.ca</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
