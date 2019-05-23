/**
 * Datapath API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InstalledApplication } from '../model/installedApplication';
import { RemoteLaunchConfigItem } from '../model/remoteLaunchConfigItem';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'https://virtserver.swaggerhub.com/Sigurd2020/Datapath/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * creates new config object
     * Adds an app config item to the system
     * @param remoteLaunchConfigItem remoteLaunchConfigItem item to add
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRemoteLaunchConfigItem(remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createRemoteLaunchConfigItem(remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createRemoteLaunchConfigItem(remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createRemoteLaunchConfigItem(remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/remoteConfigs`,
            remoteLaunchConfigItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deletes existing config object
     * deletes an app config item to the system
     * @param id id for looking up app config
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRemoteLaunchConfigItem(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRemoteLaunchConfigItem(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRemoteLaunchConfigItem(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRemoteLaunchConfigItem(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRemoteLaunchConfigItem.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/remoteConfig/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * gets available apps
     * gets list of available app configs
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRemoteAppConfigs(observe?: 'body', reportProgress?: boolean): Observable<Array<RemoteLaunchConfigItem>>;
    public getAllRemoteAppConfigs(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RemoteLaunchConfigItem>>>;
    public getAllRemoteAppConfigs(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RemoteLaunchConfigItem>>>;
    public getAllRemoteAppConfigs(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<RemoteLaunchConfigItem>>(`${this.basePath}/remoteConfigs`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * gets availables apps
     * gets list of available apps
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAvailableApplications(observe?: 'body', reportProgress?: boolean): Observable<Array<InstalledApplication>>;
    public getAvailableApplications(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<InstalledApplication>>>;
    public getAvailableApplications(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<InstalledApplication>>>;
    public getAvailableApplications(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<InstalledApplication>>(`${this.basePath}/applications`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * gets config object by id
     * By passing in the appropriate options, you can search for available apps in the system
     * @param id id for looking up app config
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRemoteLaunchConfigItemById(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<RemoteLaunchConfigItem>>;
    public getRemoteLaunchConfigItemById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RemoteLaunchConfigItem>>>;
    public getRemoteLaunchConfigItemById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RemoteLaunchConfigItem>>>;
    public getRemoteLaunchConfigItemById(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRemoteLaunchConfigItemById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<RemoteLaunchConfigItem>>(`${this.basePath}/remoteConfig/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updates existing config object
     * updates existing config object
     * @param id id for looking up app config
     * @param remoteLaunchConfigItem remoteLaunchConfigItem item to add
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRemoteLaunchConfigItem(id: string, remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateRemoteLaunchConfigItem(id: string, remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateRemoteLaunchConfigItem(id: string, remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateRemoteLaunchConfigItem(id: string, remoteLaunchConfigItem?: RemoteLaunchConfigItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateRemoteLaunchConfigItem.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/remoteConfig/${encodeURIComponent(String(id))}`,
            remoteLaunchConfigItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
