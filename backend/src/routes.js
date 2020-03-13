import { Router } from 'express';
import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';

const routes = new Router();

routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);

routes.post('/devs', DevController.store);

routes.put('/devs/:id', DevController.update);

routes.delete('/devs/:id', DevController.destroy);

export default routes;
