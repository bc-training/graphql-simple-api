import { Service } from 'typedi';
import { Configuration } from './configuration';

@Service()
export class ConfigurationService {

    private _config!: Configuration;

    set configuration(value: Configuration) {
        this._config = value;
    }

    get configuration(): Configuration {
        return this._config;
    }

}
