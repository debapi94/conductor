// package: conductor.proto
// file: model/task.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_workflowtask_pb from "../model/workflowtask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Task extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): Task;
    getStatus(): Task.Status;
    setStatus(value: Task.Status): Task;

    getInputDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputDataMap(): void;
    getReferenceTaskName(): string;
    setReferenceTaskName(value: string): Task;
    getRetryCount(): number;
    setRetryCount(value: number): Task;
    getSeq(): number;
    setSeq(value: number): Task;
    getCorrelationId(): string;
    setCorrelationId(value: string): Task;
    getPollCount(): number;
    setPollCount(value: number): Task;
    getTaskDefName(): string;
    setTaskDefName(value: string): Task;
    getScheduledTime(): number;
    setScheduledTime(value: number): Task;
    getStartTime(): number;
    setStartTime(value: number): Task;
    getEndTime(): number;
    setEndTime(value: number): Task;
    getUpdateTime(): number;
    setUpdateTime(value: number): Task;
    getStartDelayInSeconds(): number;
    setStartDelayInSeconds(value: number): Task;
    getRetriedTaskId(): string;
    setRetriedTaskId(value: string): Task;
    getRetried(): boolean;
    setRetried(value: boolean): Task;
    getExecuted(): boolean;
    setExecuted(value: boolean): Task;
    getCallbackFromWorker(): boolean;
    setCallbackFromWorker(value: boolean): Task;
    getResponseTimeoutSeconds(): number;
    setResponseTimeoutSeconds(value: number): Task;
    getWorkflowInstanceId(): string;
    setWorkflowInstanceId(value: string): Task;
    getWorkflowType(): string;
    setWorkflowType(value: string): Task;
    getTaskId(): string;
    setTaskId(value: string): Task;
    getReasonForIncompletion(): string;
    setReasonForIncompletion(value: string): Task;
    getCallbackAfterSeconds(): number;
    setCallbackAfterSeconds(value: number): Task;
    getWorkerId(): string;
    setWorkerId(value: string): Task;

    getOutputDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearOutputDataMap(): void;

    hasWorkflowTask(): boolean;
    clearWorkflowTask(): void;
    getWorkflowTask(): model_workflowtask_pb.WorkflowTask | undefined;
    setWorkflowTask(value?: model_workflowtask_pb.WorkflowTask): Task;
    getDomain(): string;
    setDomain(value: string): Task;

    hasInputMessage(): boolean;
    clearInputMessage(): void;
    getInputMessage(): google_protobuf_any_pb.Any | undefined;
    setInputMessage(value?: google_protobuf_any_pb.Any): Task;

    hasOutputMessage(): boolean;
    clearOutputMessage(): void;
    getOutputMessage(): google_protobuf_any_pb.Any | undefined;
    setOutputMessage(value?: google_protobuf_any_pb.Any): Task;
    getRateLimitPerFrequency(): number;
    setRateLimitPerFrequency(value: number): Task;
    getRateLimitFrequencyInSeconds(): number;
    setRateLimitFrequencyInSeconds(value: number): Task;
    getExternalInputPayloadStoragePath(): string;
    setExternalInputPayloadStoragePath(value: string): Task;
    getExternalOutputPayloadStoragePath(): string;
    setExternalOutputPayloadStoragePath(value: string): Task;
    getWorkflowPriority(): number;
    setWorkflowPriority(value: number): Task;
    getExecutionNameSpace(): string;
    setExecutionNameSpace(value: string): Task;
    getIsolationGroupId(): string;
    setIsolationGroupId(value: string): Task;
    getIteration(): number;
    setIteration(value: number): Task;
    getSubWorkflowId(): string;
    setSubWorkflowId(value: string): Task;
    getSubworkflowChanged(): boolean;
    setSubworkflowChanged(value: boolean): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        taskType: string,
        status: Task.Status,

        inputDataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        referenceTaskName: string,
        retryCount: number,
        seq: number,
        correlationId: string,
        pollCount: number,
        taskDefName: string,
        scheduledTime: number,
        startTime: number,
        endTime: number,
        updateTime: number,
        startDelayInSeconds: number,
        retriedTaskId: string,
        retried: boolean,
        executed: boolean,
        callbackFromWorker: boolean,
        responseTimeoutSeconds: number,
        workflowInstanceId: string,
        workflowType: string,
        taskId: string,
        reasonForIncompletion: string,
        callbackAfterSeconds: number,
        workerId: string,

        outputDataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        workflowTask?: model_workflowtask_pb.WorkflowTask.AsObject,
        domain: string,
        inputMessage?: google_protobuf_any_pb.Any.AsObject,
        outputMessage?: google_protobuf_any_pb.Any.AsObject,
        rateLimitPerFrequency: number,
        rateLimitFrequencyInSeconds: number,
        externalInputPayloadStoragePath: string,
        externalOutputPayloadStoragePath: string,
        workflowPriority: number,
        executionNameSpace: string,
        isolationGroupId: string,
        iteration: number,
        subWorkflowId: string,
        subworkflowChanged: boolean,
    }

    export enum Status {
    IN_PROGRESS = 0,
    CANCELED = 1,
    FAILED = 2,
    FAILED_WITH_TERMINAL_ERROR = 3,
    COMPLETED = 4,
    COMPLETED_WITH_ERRORS = 5,
    SCHEDULED = 6,
    TIMED_OUT = 7,
    SKIPPED = 8,
    }

}
