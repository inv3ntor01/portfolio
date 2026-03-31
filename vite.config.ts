import fs from 'fs';
import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'vite.dev.test',
            clientPort: 443,
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        https: {
            key: fs.readFileSync('/usr/src/app/.infrastructure/conf/traefik/dev/certificates/local-dev-key.pem'),
            cert: fs.readFileSync('/usr/src/app/.infrastructure/conf/traefik/dev/certificates/local-dev.pem'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
    ],
});
