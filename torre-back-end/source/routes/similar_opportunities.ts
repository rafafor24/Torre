import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/similar/:id', controller.similarOpportunities);

export = router;