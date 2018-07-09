import logger from '../../../logger';

interface Default {
    id: number;
    name: string;
}

let id = 0;
const fetchs: Default[] = [
    { id: id++, name: 'fetch data 0' },
    { id: id++, name: 'fetch data 1' },
];

export class DefaultsService {
    async all(): Promise<Default[]> {
        logger.info(fetchs, 'fetch all');
        return fetchs;
    }

    async one(_id: number): Promise<Default> {
        logger.info(`fetch one with id ${_id}`);
        return this.all().then(r => r[_id]);
    }

    async create(name: string): Promise<Default> {
        logger.info(`create with name ${name}`);
        const fetch: Default = {
            id: id++,
            name,
        };
        fetchs.push(fetch);
        return fetch;
    }
}

export default new DefaultsService();
