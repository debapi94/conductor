// package: conductor.grpc.events
// file: service/event_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_eventhandler_pb from "../model/eventhandler_pb";

export class AddEventHandlerRequest extends jspb.Message { 

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): model_eventhandler_pb.EventHandler | undefined;
    setHandler(value?: model_eventhandler_pb.EventHandler): AddEventHandlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEventHandlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddEventHandlerRequest): AddEventHandlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEventHandlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEventHandlerRequest;
    static deserializeBinaryFromReader(message: AddEventHandlerRequest, reader: jspb.BinaryReader): AddEventHandlerRequest;
}

export namespace AddEventHandlerRequest {
    export type AsObject = {
        handler?: model_eventhandler_pb.EventHandler.AsObject,
    }
}

export class AddEventHandlerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEventHandlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddEventHandlerResponse): AddEventHandlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEventHandlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEventHandlerResponse;
    static deserializeBinaryFromReader(message: AddEventHandlerResponse, reader: jspb.BinaryReader): AddEventHandlerResponse;
}

export namespace AddEventHandlerResponse {
    export type AsObject = {
    }
}

export class UpdateEventHandlerRequest extends jspb.Message { 

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): model_eventhandler_pb.EventHandler | undefined;
    setHandler(value?: model_eventhandler_pb.EventHandler): UpdateEventHandlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEventHandlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEventHandlerRequest): UpdateEventHandlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEventHandlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEventHandlerRequest;
    static deserializeBinaryFromReader(message: UpdateEventHandlerRequest, reader: jspb.BinaryReader): UpdateEventHandlerRequest;
}

export namespace UpdateEventHandlerRequest {
    export type AsObject = {
        handler?: model_eventhandler_pb.EventHandler.AsObject,
    }
}

export class UpdateEventHandlerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEventHandlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEventHandlerResponse): UpdateEventHandlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEventHandlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEventHandlerResponse;
    static deserializeBinaryFromReader(message: UpdateEventHandlerResponse, reader: jspb.BinaryReader): UpdateEventHandlerResponse;
}

export namespace UpdateEventHandlerResponse {
    export type AsObject = {
    }
}

export class RemoveEventHandlerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RemoveEventHandlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEventHandlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEventHandlerRequest): RemoveEventHandlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEventHandlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEventHandlerRequest;
    static deserializeBinaryFromReader(message: RemoveEventHandlerRequest, reader: jspb.BinaryReader): RemoveEventHandlerRequest;
}

export namespace RemoveEventHandlerRequest {
    export type AsObject = {
        name: string,
    }
}

export class RemoveEventHandlerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEventHandlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEventHandlerResponse): RemoveEventHandlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEventHandlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEventHandlerResponse;
    static deserializeBinaryFromReader(message: RemoveEventHandlerResponse, reader: jspb.BinaryReader): RemoveEventHandlerResponse;
}

export namespace RemoveEventHandlerResponse {
    export type AsObject = {
    }
}

export class GetEventHandlersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventHandlersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventHandlersRequest): GetEventHandlersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventHandlersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventHandlersRequest;
    static deserializeBinaryFromReader(message: GetEventHandlersRequest, reader: jspb.BinaryReader): GetEventHandlersRequest;
}

export namespace GetEventHandlersRequest {
    export type AsObject = {
    }
}

export class GetEventHandlersForEventRequest extends jspb.Message { 
    getEvent(): string;
    setEvent(value: string): GetEventHandlersForEventRequest;
    getActiveOnly(): boolean;
    setActiveOnly(value: boolean): GetEventHandlersForEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventHandlersForEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventHandlersForEventRequest): GetEventHandlersForEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventHandlersForEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventHandlersForEventRequest;
    static deserializeBinaryFromReader(message: GetEventHandlersForEventRequest, reader: jspb.BinaryReader): GetEventHandlersForEventRequest;
}

export namespace GetEventHandlersForEventRequest {
    export type AsObject = {
        event: string,
        activeOnly: boolean,
    }
}
