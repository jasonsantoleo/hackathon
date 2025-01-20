import React from 'react';
import { Button } from '../ui/button';
import { 
  Handshake, 
  LogOut, 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings 
} from 'lucide-react';

const Header = () => {
  const navigationItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={16} className="mr-2" /> },
    { label: 'Orders', icon: <ShoppingBag size={16} className="mr-2" /> },
    { label: 'Customers', icon: <Users size={16} className="mr-2" /> },
    { label: 'Settings', icon: <Settings size={16} className="mr-2" /> }
  ];

  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button variant="ghost" className="hover:bg-transparent">
        <Handshake className="mr-2" />
        <span className="font-semibold">Business Accelerator</span>
      </Button>

      <nav className="flex flex-row gap-8">
        {navigationItems.map((item, index) => (
          <Button 
            key={index} 
            variant="ghost" 
            className="flex items-center hover:bg-gray-100"
          >
            {item.icon}
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
        <LogOut className="mr-2" size={16} />
        <span>Log Out</span>
      </Button>
    </header>
  );
};

export default Header;