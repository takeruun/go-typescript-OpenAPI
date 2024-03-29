/* tslint:disable */
/* eslint-disable */
/**
 * go-typescript-OpenAPI
 * praction api schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Hello,
    HelloFromJSON,
    HelloFromJSONTyped,
    HelloToJSON,
} from './Hello';

/**
 * 
 * @export
 * @interface HelloResponse
 */
export interface HelloResponse {
    /**
     * 
     * @type {string}
     * @memberof HelloResponse
     */
    message: string;
}

export function HelloResponseFromJSON(json: any): HelloResponse {
    return HelloResponseFromJSONTyped(json, false);
}

export function HelloResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HelloResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function HelloResponseToJSON(value?: HelloResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

