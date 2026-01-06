
import { Link, useLocation } from 'react-router-dom';
import { FileText, Plus, LogOut } from 'lucide-react';
import logo from "/logo-1.jpeg"

const DashSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard/reviews', icon: FileText, label: 'Reviews' },
    { path: '/dashboard/create-review', icon: Plus, label: 'Create Review' }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
  };
  
  return (
    <div className="h-screen w-64 bg-black border-r border-zinc-800 flex flex-col">
      {/* Logo/Brand Section */}
      <div className="h-16 flex gap-4 items-center px-6 border-b border-zinc-800">
    
              <div className=' rounded-full w-8 grid place-items-center aspect-square overflow-clip'>
                <img src={logo} className='w-10 cursor-pointer rounded-full aspect-square scale-108' alt="Subrent logo" />
              </div>
              <h2 className='text-white font-bold tracking-wider text-lg md:text-xl cursor-pointer'>SUBRENT</h2>
       
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                    ${active 
                      ? 'bg-white text-black' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;