// package: conductor.grpc.search
// file: model/search.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Request extends jspb.Message { 
    getStart(): number;
    setStart(value: number): Request;
    getSize(): number;
    setSize(value: number): Request;
    getSort(): string;
    setSort(value: string): Request;
    getFreeText(): string;
    setFreeText(value: string): Request;
    getQuery(): string;
    setQuery(value: string): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        start: number,
        size: number,
        sort: string,
        freeText: string,
        query: string,
    }
}
