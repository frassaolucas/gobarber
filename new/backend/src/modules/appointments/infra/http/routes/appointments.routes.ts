import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// authentication middleware
appointmentsRouter.use(ensureAuthenticated);

// list appointmentss
// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

// create appointment
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
