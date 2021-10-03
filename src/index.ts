import { 
  Server, 
  Request, 
  ResponseToolkit 
} from "@hapi/hapi";

import { 
  nate 
} from '@nate/instrumentation'

const init = async () => {

    const server: Server = new Server({
        port: 3000,
        host: '0.0.0.0'
    });

    nate.instrumentation.installMetrics({
      service: 'tssampleapp',
      version: '1.0.0'
    }, server);

    server.route({
      method: 'GET',
      path: '/',
      handler: (request: Request, h: ResponseToolkit) => {
          return 'Hello World!';
      }
    });

    server.route({
        method: 'GET',
        path: '/test',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'I am alive 🐔 ...';
        }
    });

  await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
