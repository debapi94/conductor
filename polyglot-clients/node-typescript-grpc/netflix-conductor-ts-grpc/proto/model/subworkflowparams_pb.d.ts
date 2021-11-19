// package: conductor.proto
// file: model/subworkflowparams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class SubWorkflowParams extends jspb.Message { 
    getName(): string;
    setName(value: string): SubWorkflowParams;
    getVersion(): number;
    setVersion(value: number): SubWorkflowParams;

    getTaskToDomainMap(): jspb.Map<string, string>;
    clearTaskToDomainMap(): void;

    hasWorkflowDefinition(): boolean;
    clearWorkflowDefinition(): void;
    getWorkflowDefinition(): google_protobuf_struct_pb.Value | undefined;
    setWorkflowDefinition(value?: google_protobuf_struct_pb.Value): SubWorkflowParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubWorkflowParams.AsObject;
    static toObject(includeInstance: boolean, msg: SubWorkflowParams): SubWorkflowParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubWorkflowParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubWorkflowParams;
    static deserializeBinaryFromReader(message: SubWorkflowParams, reader: jspb.BinaryReader): SubWorkflowParams;
}

export namespace SubWorkflowParams {
    export type AsObject = {
        name: string,
        version: number,

        taskToDomainMap: Array<[string, string]>,
        workflowDefinition?: google_protobuf_struct_pb.Value.AsObject,
    }
}
