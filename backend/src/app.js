import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import attendanceRoutes from './routes/attendance.routes.js';
import employeeRoutes from './routes/employee.routes.js';
import leaveRoutes from './routes/leave.routes.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.status(200).json({
  status: 'ok', service: 'workpulse-api', timestamp: new Date().toISOString()
}));
app.use('/api/attendance', attendanceRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

export default app;
