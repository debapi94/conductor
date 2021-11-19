// package: conductor.proto
// file: model/eventexecution.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_eventhandler_pb from "../model/eventhandler_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class EventExecution extends jspb.Message { 
    getId(): string;
    setId(value: string): EventExecution;
    getMessageId(): string;
    setMessageId(value: string): EventExecution;
    getName(): string;
    setName(value: string): EventExecution;
    getEvent(): string;
    setEvent(value: string): EventExecution;
    getCreated(): number;
    setCreated(value: number): EventExecution;
    getStatus(): EventExecution.Status;
    setStatus(value: EventExecution.Status): EventExecution;
    getAction(): model_eventhandler_pb.EventHandler.Action.Type;
    setAction(value: model_eventhandler_pb.EventHandler.Action.Type): EventExecution;

    getOutputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearOutputMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventExecution.AsObject;
    static toObject(includeInstance: boolean, msg: EventExecution): EventExecution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventExecution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventExecution;
    static deserializeBinaryFromReader(message: EventExecution, reader: jspb.BinaryReader): EventExecution;
}

export namespace EventExecution {
    export type AsObject = {
        id: string,
        messageId: string,
        name: string,
        event: string,
        created: number,
        status: EventExecution.Status,
        action: model_eventhandler_pb.EventHandler.Action.Type,

        outputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    }

    export enum Status {
    IN_PROGRESS = 0,
    COMPLETED = 1,
    FAILED = 2,
    SKIPPED = 3,
    }

}
