import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Attendance from './pages/Attendance.jsx';
import Employees from './pages/Employees.jsx';
import Leaves from './pages/Leaves.jsx';
import Reports from './pages/Reports.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/leaves" element={<Leaves />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
