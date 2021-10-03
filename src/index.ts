import { 
  Server, 
  Request, 
  ResponseToolkit 
} from "@hapi/hapi";
import { putWalletsAccountsHandler, putWalletsAccountsHandlerOptions } from "./get-name.controller";

const init = async () => {

    const server: Server = new Server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
      method: 'GET',
      path: '/stripe',
      handler: putWalletsAccountsHandler
    });

  await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
