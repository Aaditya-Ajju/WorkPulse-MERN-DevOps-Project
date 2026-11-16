import { Router } from 'express';
const router = Router();

// Learning placeholder: implement persistence, auth, validation, and date rules in later tasks.
router.get('/', (_req, res) => res.json({ message: 'Attendance API starter', items: [] }));
router.post('/check-in', (_req, res) => res.status(501).json({ message: 'Implement check-in in Task 11' }));
router.post('/check-out', (_req, res) => res.status(501).json({ message: 'Implement check-out in Task 11' }));
export default router;
