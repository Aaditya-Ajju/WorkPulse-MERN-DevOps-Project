export const stats = [
  { label: 'Present today', value: '128', change: '+8.2%', tone: 'green' },
  { label: 'Absent today', value: '12', change: '-2.4%', tone: 'red' },
  { label: 'On leave', value: '08', change: 'This week', tone: 'amber' },
  { label: 'Total employees', value: '148', change: '+4 this month', tone: 'blue' }
];
export const employees = [
  { id: 'EMP-001', name: 'Aarav Sharma', email: 'aarav@company.com', team: 'Engineering', role: 'Frontend Developer', status: 'Present', initials: 'AS' },
  { id: 'EMP-002', name: 'Diya Patel', email: 'diya@company.com', team: 'Design', role: 'Product Designer', status: 'Present', initials: 'DP' },
  { id: 'EMP-003', name: 'Kabir Mehta', email: 'kabir@company.com', team: 'Engineering', role: 'Backend Developer', status: 'On leave', initials: 'KM' },
  { id: 'EMP-004', name: 'Ananya Iyer', email: 'ananya@company.com', team: 'Human Resources', role: 'HR Manager', status: 'Absent', initials: 'AI' },
  { id: 'EMP-005', name: 'Reyansh Gupta', email: 'reyansh@company.com', team: 'Engineering', role: 'DevOps Engineer', status: 'Present', initials: 'RG' },
  { id: 'EMP-006', name: 'Sara Khan', email: 'sara@company.com', team: 'Marketing', role: 'Marketing Lead', status: 'Present', initials: 'SK' }
];
export const attendanceRows = [
  { name: 'Aarav Sharma', id: 'EMP-001', date: '12 Nov 2026', checkIn: '09:02 AM', checkOut: '06:08 PM', hours: '9h 06m', status: 'Present', initials: 'AS' },
  { name: 'Diya Patel', id: 'EMP-002', date: '12 Nov 2026', checkIn: '08:54 AM', checkOut: '06:01 PM', hours: '9h 07m', status: 'Present', initials: 'DP' },
  { name: 'Kabir Mehta', id: 'EMP-003', date: '12 Nov 2026', checkIn: '—', checkOut: '—', hours: '—', status: 'On leave', initials: 'KM' },
  { name: 'Ananya Iyer', id: 'EMP-004', date: '12 Nov 2026', checkIn: '—', checkOut: '—', hours: '—', status: 'Absent', initials: 'AI' },
  { name: 'Reyansh Gupta', id: 'EMP-005', date: '12 Nov 2026', checkIn: '09:18 AM', checkOut: '—', hours: 'In progress', status: 'Present', initials: 'RG' }
];
export const leaveRows = [
  { name: 'Kabir Mehta', type: 'Casual Leave', dates: '12 Nov – 13 Nov', days: '2 days', applied: '10 Nov 2026', status: 'Pending', initials: 'KM' },
  { name: 'Sara Khan', type: 'Sick Leave', dates: '14 Nov', days: '1 day', applied: '11 Nov 2026', status: 'Pending', initials: 'SK' },
  { name: 'Aarav Sharma', type: 'Earned Leave', dates: '20 Nov – 21 Nov', days: '2 days', applied: '08 Nov 2026', status: 'Approved', initials: 'AS' },
  { name: 'Diya Patel', type: 'Casual Leave', dates: '03 Nov', days: '1 day', applied: '01 Nov 2026', status: 'Rejected', initials: 'DP' }
];
