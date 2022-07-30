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
/**
 * 
 * @export
 * @interface Hello
 */
export interface Hello {
    /**
     * 
     * @type {string}
     * @memberof Hello
     */
    message: string;
}

export function HelloFromJSON(json: any): Hello {
    return HelloFromJSONTyped(json, false);
}

export function HelloFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hello {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function HelloToJSON(value?: Hello | null): any {
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
