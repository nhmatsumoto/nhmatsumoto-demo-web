//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export interface EntityBaseDto {
    id: number;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UsuarioDTO extends EntityBaseDto {
    email: string;
    name: string;
}

export interface LoginRequestDTO {
    email: string;
    senha: string;
}

export interface LogoutDTO {
    email: string;
    refreshToken: string;
}

export interface EnderecoDTO extends EntityBaseDto {
    numero: string;
    complemento: string;
    logradouro: string;
    cidade: string;
    esatado: EstadosEnum;
    codigoPostal: string;
    pais: string;
    rua: string;
    enderecoAtual: boolean;
}

export enum EstadosEnum {
    AC = 1,
    AL = 2,
    AP = 3,
    AM = 4,
    BA = 5,
    CE = 6,
    DF = 7,
    ES = 8,
    GO = 9,
    MA = 10,
    MT = 11,
    MS = 12,
    MG = 13,
    PA = 14,
    PB = 15,
    PR = 16,
    PE = 17,
    PI = 18,
    RJ = 19,
    RN = 20,
    RS = 21,
    RO = 22,
    RR = 23,
    SC = 24,
    SP = 25,
    SE = 26,
    TO = 27,
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}