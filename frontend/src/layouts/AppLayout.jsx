import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Bell, ChevronDown, Menu, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';
const titles = {'/':'Overview','/attendance':'Attendance','/employees':'Employees','/leaves':'Leave requests','/reports':'Reports','/settings':'Settings'};
export default function AppLayout() {
  const [menuOpen,setMenuOpen]=useState(false);
  const location=useLocation();
  return <div className="app-shell"><Sidebar open={menuOpen} onClose={()=>setMenuOpen(false)}/><main className="main-area">
    <header className="topbar"><div className="topbar-left"><button className="icon-btn menu-btn" onClick={()=>setMenuOpen(true)}><Menu/></button><div className="breadcrumb">Workspace <span>/</span> <strong>{titles[location.pathname]||'Overview'}</strong></div></div><div className="topbar-actions"><div className="search-box"><Search size={16}/><input placeholder="Search anything..."/><kbd>⌘ K</kbd></div><button className="icon-btn notification"><Bell size={19}/><i></i></button><div className="topbar-profile"><div className="avatar avatar-purple">AJ</div><ChevronDown size={15}/></div></div></header>
    <div className="page-container"><Outlet/></div>
    <footer className="footer">© 2026 WorkPulse, Inc. <span>Made for better workdays.</span></footer>
  </main></div>;
}
