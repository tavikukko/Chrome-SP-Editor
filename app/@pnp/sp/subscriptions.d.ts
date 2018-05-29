import { SharePointQueryable, SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
/**
 * Describes a collection of webhook subscriptions
 *
 */
export declare class Subscriptions extends SharePointQueryableCollection {
    /**
     * Creates a new instance of the Subscriptions class
     *
     * @param baseUrl - The url or SharePointQueryable which forms the parent of this webhook subscriptions collection
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Returns all the webhook subscriptions or the specified webhook subscription
     *
     * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
     */
    getById(subscriptionId: string): Subscription;
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (defaults to pnp-js-core-subscription when omitted)
     */
    add(notificationUrl: string, expirationDate: string, clientState?: string): Promise<SubscriptionAddResult>;
}
/**
 * Describes a single webhook subscription instance
 *
 */
export declare class Subscription extends SharePointQueryableInstance {
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     */
    update(expirationDate: string): Promise<SubscriptionUpdateResult>;
    /**
     * Removes this webhook subscription
     *
     */
    delete(): Promise<void>;
}
export interface SubscriptionAddResult {
    subscription: Subscription;
    data: any;
}
export interface SubscriptionUpdateResult {
    subscription: Subscription;
    data: any;
}
