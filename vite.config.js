import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/auto-korea/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                catalog: 'catalog.html',
                car: 'car.html',
                stock: 'stock.html',
                car_stock: 'car-stock.html',
                calculator: 'calculator.html',
                about: 'about.html',
                reviews: 'reviews.html',
                services: 'services.html',
            },
        },
    },
    server: {
        host: true
    },
})
