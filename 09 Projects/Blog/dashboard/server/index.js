const path = require('path');
const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');

const port = process.env.PORT || 3000;

const run = async () => {
    const app = express();

    app.set('json spaces', 2);
    app.set('subdomain offset', 1);

    app.use(compression());
    app.use(methodOverride());
    app.use(cors({ origin: '*' }));
    app.use(express.json());

    app.on('error', error => {
        switch (error.code) {
            case 'EACCES':
                console.error(`${port} requires elevated privileges`);
                return process.exit(1);
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                return process.exit(1);
            default:
                throw error;
        }
    });

    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        const pathname = req.path;
        const invalidExtensions = ['.js', '.json', '.css'];
        const preventSend = !!invalidExtensions.find(ext => pathname.indexOf(ext) > -1);

        /*
            1) Statuses 400+ will throw in-promise error in service worker,
            and with it prevent the app from initially loading.
            2) Most content, including returning index.html, will
            cause issues in parsing the response in front end.
            Returning empty response does the job.

            The rest of the resolve logic happens in front end app,
            where it decides if it ought to clean cache + reload.
        */
        if (preventSend) return res.status(204).send();

        return res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(port, error => {
        if (error) throw error;

        console.log(`Server is running on ${port}...`);
    });

    process.on('unhandledRejection', error => {
        console.log('!! Unhandled Rejection !!', error);
    });

    process.on('uncaughtException', error => {
        console.log('!! Uncaught Exception !!', error);
    });
};

run();
