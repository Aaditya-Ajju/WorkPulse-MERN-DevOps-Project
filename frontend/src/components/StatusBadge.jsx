export default function StatusBadge({status}) { const cls=status.toLowerCase().replaceAll(' ','-'); return <span className={`status-badge ${cls}`}><i></i>{status}</span>; }
