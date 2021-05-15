const http = require('http');
const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await nextApp.prepare();

        const app = express();

        // Middlewares for setup
        app.set('json spaces', 2);
        app.set('subdomain offset', 1);

        app.use(helmet());
        app.use(compression());
        app.use(methodOverride());
        app.use(cors({ origin: '*' }));
        app.use(express.json());

        app.on('error', error => {
            switch (error.code) {
                case 'EACCES':
                    console.error(`${port} requires elevated privileges`);
                    process.exit(1);
                    break;

                case 'EADDRINUSE':
                    console.error(`${port} is already in use`);
                    process.exit(1);
                    break;

                default:
                    throw error;
            }
        });

        // Server errors
        process.on('unhandledRejection', error => {
            console.error('!!! Unhandled Rejection: ', error);
            process.exit(1);
        });

        process.on('uncaughtException', error => {
            console.error('!!! Uncaught Exception: ', error);
            process.exit(1);
        });

        app.all('*', (req, res) => {
            return handle(req, res);
        });

        const httpServer = http.createServer(app);
        httpServer.listen(port, error => {
            if (error) throw error;
            console.log(`Server running on ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
