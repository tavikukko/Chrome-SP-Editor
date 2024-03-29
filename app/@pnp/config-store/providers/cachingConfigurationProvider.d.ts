import { IConfigurationProvider } from "../configuration.js";
import { ITypedHash, IPnPClientStore } from "@pnp/common";
/**
 * A caching provider which can wrap other non-caching providers
 *
 */
export default class CachingConfigurationProvider implements IConfigurationProvider {
    private wrappedProvider;
    private cacheKey;
    private store;
    /**
     * Creates a new caching configuration provider
     * @constructor
     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
     * @param {string} cacheKey Key that will be used to store cached items to the cache
     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
     */
    constructor(wrappedProvider: IConfigurationProvider, cacheKey: string, cacheStore?: IPnPClientStore);
    /**
     * Gets the wrapped configuration providers
     *
     * @return {IConfigurationProvider} Wrapped configuration provider
     */
    getWrappedProvider(): IConfigurationProvider;
    /**
     * Loads the configuration values either from the cache or from the wrapped provider
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    getConfiguration(): Promise<ITypedHash<string>>;
    private selectPnPCache;
}
//# sourceMappingURL=cachingConfigurationProvider.d.ts.map