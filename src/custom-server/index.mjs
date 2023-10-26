import { readFile } from 'node:fs/promises';

import spdy from 'spdy';
import express from 'express';

import { appRoutes, globalRoutes } from './routes.mjs';

const port = 3001;

const app = express();

app.get('/push', async (req, res) => {

  try {

    if (res.push) {
      [
        '/favicon.ico'
      ].forEach(async (file) => {

        res.push(file, {}).end(await readFile(`../src${file}`));

      });

    }

    res.writeHead(200);
    res.end({ message: 'Hi HTTP/2' });

  } catch (error) {

    res
      .status(500)
      .send(error.toString());

  }

});

app.use(globalRoutes());
app.use(appRoutes());

spdy
  .createServer({
    key: await readFile('server.key'),
    cert: await readFile('server.crt')
  }, app)
  .listen(port, (err) => {

    if (err) {

      throw new Error(err);

    }

    console.log(`Listening on port ${port}`);

  });
