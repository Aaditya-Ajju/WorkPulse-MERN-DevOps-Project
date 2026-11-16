import { NavLink } from 'react-router-dom';
import { Activity, CalendarCheck, CalendarDays, ChartNoAxesCombined, LayoutDashboard, Settings, Users, X } from 'lucide-react';
const links = [
  { to: '/', label: 'Overview', icon: LayoutDashboard },
  { to: '/attendance', label: 'Attendance', icon: CalendarCheck },
  { to: '/employees', label: 'Employees', icon: Users },
  { to: '/leaves', label: 'Leave requests', icon: CalendarDays, badge: '4' },
  { to: '/reports', label: 'Reports', icon: ChartNoAxesCombined }
];
export default function Sidebar({ open, onClose }) {
  return <><div className={`mobile-shade ${open ? 'show' : ''}`} onClick={onClose}></div>
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><Activity size={20}/></div><span>work<span className="brand-accent">pulse</span></span><button className="icon-btn close-menu" onClick={onClose}><X size={19}/></button></div>
      <div className="workspace-label">WORKSPACE</div>
      <nav>{links.map(({to,label,icon:Icon,badge})=><NavLink key={to} to={to} end={to==='/'} onClick={onClose} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span>{badge&&<b className="nav-badge">{badge}</b>}</NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="workspace-label">PREFERENCES</div><NavLink to="/settings" onClick={onClose} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Settings size={18}/><span>Settings</span></NavLink><div className="help-card"><div className="help-icon">?</div><strong>Need a hand?</strong><p>Visit the help center for guides and support.</p><a href="mailto:support@workpulse.local">Get support ↗</a></div><div className="profile-mini"><div className="avatar avatar-purple">AJ</div><div><strong>Aditya Jain</strong><small>Workspace Admin</small></div><span className="more">···</span></div></div>
    </aside></>;
}
