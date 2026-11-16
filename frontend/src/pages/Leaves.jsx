import { useState } from 'react';
import { Check, X, Search, Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { leaveRows } from '../data/mockData.js';
export default function Leaves(){
 const [tab,setTab]=useState('All requests');
 const [rows,setRows]=useState(leaveRows);
 const filtered=rows.filter(r=>tab==='All requests'||r.status===tab);
 const review=(name,status)=>setRows(old=>old.map(r=>r.name===name?{...r,status}:r));
 return <><PageHeader eyebrow="PEOPLE / TIME OFF" title="Leave requests" description="Review time-off requests and keep your team running smoothly." action={<button className="btn btn-primary"><Plus size={16}/> Request leave</button>}/>
 <div className="mini-stats"><div><strong>{rows.filter(r=>r.status==='Pending').length}</strong><span>Pending review</span></div><div><strong>{rows.filter(r=>r.status==='Approved').length}</strong><span>Approved</span></div><div><strong>{rows.filter(r=>r.status==='Rejected').length}</strong><span>Declined</span></div></div>
 <div className="filter-row"><div className="tabs">{['All requests','Pending','Approved','Rejected'].map(t=><button key={t} className={tab===t?'tab-active':''} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="input-search compact"><Search size={16}/><input placeholder="Search requests..."/></div></div>
 <article className="card"><div className="card-heading"><div><h2>Time-off requests</h2><p>Review and manage employee leave applications</p></div></div><div className="table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>LEAVE TYPE</th><th>DATES</th><th>DURATION</th><th>APPLIED ON</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody>{filtered.map(r=><tr key={r.name}><td><div className="person-cell"><div className="avatar">{r.initials}</div><strong>{r.name}</strong></div></td><td>{r.type}</td><td>{r.dates}</td><td>{r.days}</td><td>{r.applied}</td><td><StatusBadge status={r.status}/></td><td>{r.status==='Pending'?<div className="row-actions"><button className="approve-btn" title="Approve" onClick={()=>review(r.name,'Approved')}><Check size={15}/></button><button className="reject-btn" title="Reject" onClick={()=>review(r.name,'Rejected')}><X size={15}/></button></div>:<span className="muted">Reviewed</span>}</td></tr>)}</tbody></table></div></article></>;
}
