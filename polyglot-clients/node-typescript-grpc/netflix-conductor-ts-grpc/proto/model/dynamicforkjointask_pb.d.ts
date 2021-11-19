// package: conductor.proto
// file: model/dynamicforkjointask.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DynamicForkJoinTask extends jspb.Message { 
    getTaskName(): string;
    setTaskName(value: string): DynamicForkJoinTask;
    getWorkflowName(): string;
    setWorkflowName(value: string): DynamicForkJoinTask;
    getReferenceName(): string;
    setReferenceName(value: string): DynamicForkJoinTask;

    getInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputMap(): void;
    getType(): string;
    setType(value: string): DynamicForkJoinTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicForkJoinTask.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicForkJoinTask): DynamicForkJoinTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicForkJoinTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicForkJoinTask;
    static deserializeBinaryFromReader(message: DynamicForkJoinTask, reader: jspb.BinaryReader): DynamicForkJoinTask;
}

export namespace DynamicForkJoinTask {
    export type AsObject = {
        taskName: string,
        workflowName: string,
        referenceName: string,

        inputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        type: string,
    }
}
