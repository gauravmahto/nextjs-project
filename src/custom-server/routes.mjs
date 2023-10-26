import { Router } from 'express';

export function globalRoutes() {

  const router = Router();

  router.get('/', (req, res) => {

    return res.json({
      message: 'Hello World!'
    });

  });

  return router;

}

export function appRoutes() {

  const router = Router();

  router.get('/users', (req, res) => {

    const users = [

      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Joe' },
      { id: 4, name: 'Jill' }

    ];

    return res.json(users);

  });

  return router;

}
