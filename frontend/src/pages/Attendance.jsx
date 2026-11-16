import { useState } from 'react';
import { CalendarDays, Download, Search, Clock3, LogIn, LogOut } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { attendanceRows } from '../data/mockData.js';
export default function Attendance(){
 const [query,setQuery]=useState('');
 const [checkedIn,setCheckedIn]=useState(false);
 const rows=attendanceRows.filter(r=>r.name.toLowerCase().includes(query.toLowerCase())||r.id.toLowerCase().includes(query.toLowerCase()));
 return <><PageHeader eyebrow="PEOPLE / TIME TRACKING" title="Attendance" description="Track daily check-ins, working hours, and attendance records." action={<button className="btn btn-secondary"><Download size={16}/> Export CSV</button>}/>
 <div className="attendance-hero"><div><span className="live-label"><i/> TODAY · THURSDAY, 12 NOV</span><h2>{checkedIn?'You are checked in':'Good day, Aditya!'}</h2><p>{checkedIn?'Your workday is in progress. Have a productive day!':'Keep your attendance up to date.'}</p></div><div className="clock-display"><Clock3 size={18}/><strong>{checkedIn?'09:00 AM':'08:58 AM'}</strong><span>Local time (demo)</span></div><div className="clock-actions"><button className="btn btn-primary" onClick={()=>setCheckedIn(!checkedIn)}>{checkedIn?<LogOut size={16}/>:<LogIn size={16}/>} {checkedIn?'Check out':'Check in'}</button></div></div>
 <div className="filter-row"><div className="input-search"><Search size={16}/><input placeholder="Search employee..." value={query} onChange={e=>setQuery(e.target.value)}/></div><button className="btn btn-secondary"><CalendarDays size={16}/> 12 Nov 2026</button><button className="btn btn-secondary">All status⌄</button></div>
 <article className="card"><div className="card-heading"><div><h2>Attendance records</h2><p>{rows.length} records shown · Demo data</p></div></div><div className="table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>DATE</th><th>CHECK IN</th><th>CHECK OUT</th><th>WORK HOURS</th><th>STATUS</th></tr></thead><tbody>{rows.map(r=><tr key={r.id}><td><div className="person-cell"><div className="avatar">{r.initials}</div><div><strong>{r.name}</strong><small>{r.id}</small></div></div></td><td>{r.date}</td><td>{r.checkIn}</td><td>{r.checkOut}</td><td>{r.hours}</td><td><StatusBadge status={r.status}/></td></tr>)}</tbody></table></div></article></>;
}
