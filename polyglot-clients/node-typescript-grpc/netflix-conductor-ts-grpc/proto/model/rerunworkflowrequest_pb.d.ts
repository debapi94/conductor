// package: conductor.proto
// file: model/rerunworkflowrequest.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class RerunWorkflowRequest extends jspb.Message { 
    getReRunFromWorkflowId(): string;
    setReRunFromWorkflowId(value: string): RerunWorkflowRequest;

    getWorkflowInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearWorkflowInputMap(): void;
    getReRunFromTaskId(): string;
    setReRunFromTaskId(value: string): RerunWorkflowRequest;

    getTaskInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearTaskInputMap(): void;
    getCorrelationId(): string;
    setCorrelationId(value: string): RerunWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RerunWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RerunWorkflowRequest): RerunWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RerunWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RerunWorkflowRequest;
    static deserializeBinaryFromReader(message: RerunWorkflowRequest, reader: jspb.BinaryReader): RerunWorkflowRequest;
}

export namespace RerunWorkflowRequest {
    export type AsObject = {
        reRunFromWorkflowId: string,

        workflowInputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        reRunFromTaskId: string,

        taskInputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        correlationId: string,
    }
}
