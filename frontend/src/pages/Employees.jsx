import { useState } from 'react';
import { Plus, Search, SlidersHorizontal, Mail } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { employees } from '../data/mockData.js';
export default function Employees(){
 const [query,setQuery]=useState('');
 const rows=employees.filter(e=>(e.name+' '+e.email+' '+e.team).toLowerCase().includes(query.toLowerCase()));
 return <><PageHeader eyebrow="PEOPLE / DIRECTORY" title="Employees" description="Manage your people, teams, and employee information." action={<button className="btn btn-primary"><Plus size={16}/> Add employee</button>}/>
 <div className="mini-stats"><div><strong>148</strong><span>Total employees</span></div><div><strong>132</strong><span>Active</span></div><div><strong>8</strong><span>On leave</span></div><div><strong>6</strong><span>Departments</span></div></div>
 <div className="filter-row"><div className="input-search"><Search size={16}/><input placeholder="Search by name, email or team..." value={query} onChange={e=>setQuery(e.target.value)}/></div><button className="btn btn-secondary"><SlidersHorizontal size={16}/> Filters</button><button className="btn btn-secondary">All departments⌄</button></div>
 <article className="card"><div className="card-heading"><div><h2>All employees</h2><p>Showing {rows.length} of 148 employees · Demo data</p></div><button className="btn btn-ghost">Manage columns⌄</button></div><div className="table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>DEPARTMENT</th><th>POSITION</th><th>STATUS</th><th></th></tr></thead><tbody>{rows.map(e=><tr key={e.id}><td><div className="person-cell"><div className="avatar">{e.initials}</div><div><strong>{e.name}</strong><small><Mail size={11}/> {e.email}</small></div></div></td><td>{e.team}</td><td>{e.role}</td><td><StatusBadge status={e.status}/></td><td><button className="icon-btn">···</button></td></tr>)}</tbody></table></div></article></>;
}
