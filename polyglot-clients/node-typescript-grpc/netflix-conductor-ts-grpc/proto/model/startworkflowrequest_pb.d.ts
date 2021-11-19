// package: conductor.proto
// file: model/startworkflowrequest.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_workflowdef_pb from "../model/workflowdef_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class StartWorkflowRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): StartWorkflowRequest;
    getVersion(): number;
    setVersion(value: number): StartWorkflowRequest;
    getCorrelationId(): string;
    setCorrelationId(value: string): StartWorkflowRequest;

    getInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputMap(): void;

    getTaskToDomainMap(): jspb.Map<string, string>;
    clearTaskToDomainMap(): void;

    hasWorkflowDef(): boolean;
    clearWorkflowDef(): void;
    getWorkflowDef(): model_workflowdef_pb.WorkflowDef | undefined;
    setWorkflowDef(value?: model_workflowdef_pb.WorkflowDef): StartWorkflowRequest;
    getExternalInputPayloadStoragePath(): string;
    setExternalInputPayloadStoragePath(value: string): StartWorkflowRequest;
    getPriority(): number;
    setPriority(value: number): StartWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartWorkflowRequest): StartWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartWorkflowRequest;
    static deserializeBinaryFromReader(message: StartWorkflowRequest, reader: jspb.BinaryReader): StartWorkflowRequest;
}

export namespace StartWorkflowRequest {
    export type AsObject = {
        name: string,
        version: number,
        correlationId: string,

        inputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,

        taskToDomainMap: Array<[string, string]>,
        workflowDef?: model_workflowdef_pb.WorkflowDef.AsObject,
        externalInputPayloadStoragePath: string,
        priority: number,
    }
}
