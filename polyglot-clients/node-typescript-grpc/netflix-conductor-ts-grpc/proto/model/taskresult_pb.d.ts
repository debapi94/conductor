// package: conductor.proto
// file: model/taskresult.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class TaskResult extends jspb.Message { 
    getWorkflowInstanceId(): string;
    setWorkflowInstanceId(value: string): TaskResult;
    getTaskId(): string;
    setTaskId(value: string): TaskResult;
    getReasonForIncompletion(): string;
    setReasonForIncompletion(value: string): TaskResult;
    getCallbackAfterSeconds(): number;
    setCallbackAfterSeconds(value: number): TaskResult;
    getWorkerId(): string;
    setWorkerId(value: string): TaskResult;
    getStatus(): TaskResult.Status;
    setStatus(value: TaskResult.Status): TaskResult;

    getOutputDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearOutputDataMap(): void;

    hasOutputMessage(): boolean;
    clearOutputMessage(): void;
    getOutputMessage(): google_protobuf_any_pb.Any | undefined;
    setOutputMessage(value?: google_protobuf_any_pb.Any): TaskResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskResult.AsObject;
    static toObject(includeInstance: boolean, msg: TaskResult): TaskResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskResult;
    static deserializeBinaryFromReader(message: TaskResult, reader: jspb.BinaryReader): TaskResult;
}

export namespace TaskResult {
    export type AsObject = {
        workflowInstanceId: string,
        taskId: string,
        reasonForIncompletion: string,
        callbackAfterSeconds: number,
        workerId: string,
        status: TaskResult.Status,

        outputDataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        outputMessage?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum Status {
    IN_PROGRESS = 0,
    FAILED = 1,
    FAILED_WITH_TERMINAL_ERROR = 2,
    COMPLETED = 3,
    }

}
