import { Application } from 'express';
import APIRoutes from './app/api';

export default function routes(app: Application): void {
    app.use('/api', APIRoutes);
};