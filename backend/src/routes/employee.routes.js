import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => res.json({ message: 'Employee API starter', items: [] }));
router.post('/', (_req, res) => res.status(501).json({ message: 'Implement employee creation in Task 10' }));
export default router;
