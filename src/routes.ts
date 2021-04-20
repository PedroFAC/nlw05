import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsController } from './controllers/SettingsController';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

/**
 *Tipos de parametros
 * Routes prams => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 *
 * Body params =>{
 *
 *}
 */

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };
