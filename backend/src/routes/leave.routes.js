import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => res.json({ message: 'Leave API starter', items: [] }));
router.post('/', (_req, res) => res.status(501).json({ message: 'Implement leave request in Task 13' }));
router.patch('/:id/review', (_req, res) => res.status(501).json({ message: 'Implement leave review in Task 13' }));
export default router;
