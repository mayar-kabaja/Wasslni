import { Router } from 'express';
import {
  signUp, SMS, login, getProfile, parcelDetails, getParcels, addParcel, deleteParcel,
} from '../controllers';

import { asyncMiddleware, checkAuth, checkSeller } from '../middleware';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/sms', asyncMiddleware(SMS));
router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(login));
router.get('/profile', asyncMiddleware(checkAuth), asyncMiddleware(getProfile));
router.get('/parcel/:id', asyncMiddleware(checkAuth), asyncMiddleware(parcelDetails));
router.delete('/parcel/:id', asyncMiddleware(checkSeller), asyncMiddleware(deleteParcel));
router.post('/parcel', asyncMiddleware(checkSeller), asyncMiddleware(addParcel));
router.get('/parcels', asyncMiddleware(checkAuth), asyncMiddleware(getParcels));

export default router;
