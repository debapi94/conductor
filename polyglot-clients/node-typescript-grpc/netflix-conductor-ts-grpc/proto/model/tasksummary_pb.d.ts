// package: conductor.proto
// file: model/tasksummary.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_task_pb from "../model/task_pb";

export class TaskSummary extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): TaskSummary;
    getWorkflowType(): string;
    setWorkflowType(value: string): TaskSummary;
    getCorrelationId(): string;
    setCorrelationId(value: string): TaskSummary;
    getScheduledTime(): string;
    setScheduledTime(value: string): TaskSummary;
    getStartTime(): string;
    setStartTime(value: string): TaskSummary;
    getUpdateTime(): string;
    setUpdateTime(value: string): TaskSummary;
    getEndTime(): string;
    setEndTime(value: string): TaskSummary;
    getStatus(): model_task_pb.Task.Status;
    setStatus(value: model_task_pb.Task.Status): TaskSummary;
    getReasonForIncompletion(): string;
    setReasonForIncompletion(value: string): TaskSummary;
    getExecutionTime(): number;
    setExecutionTime(value: number): TaskSummary;
    getQueueWaitTime(): number;
    setQueueWaitTime(value: number): TaskSummary;
    getTaskDefName(): string;
    setTaskDefName(value: string): TaskSummary;
    getTaskType(): string;
    setTaskType(value: string): TaskSummary;
    getInput(): string;
    setInput(value: string): TaskSummary;
    getOutput(): string;
    setOutput(value: string): TaskSummary;
    getTaskId(): string;
    setTaskId(value: string): TaskSummary;
    getExternalInputPayloadStoragePath(): string;
    setExternalInputPayloadStoragePath(value: string): TaskSummary;
    getExternalOutputPayloadStoragePath(): string;
    setExternalOutputPayloadStoragePath(value: string): TaskSummary;
    getWorkflowPriority(): number;
    setWorkflowPriority(value: number): TaskSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskSummary.AsObject;
    static toObject(includeInstance: boolean, msg: TaskSummary): TaskSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskSummary;
    static deserializeBinaryFromReader(message: TaskSummary, reader: jspb.BinaryReader): TaskSummary;
}

export namespace TaskSummary {
    export type AsObject = {
        workflowId: string,
        workflowType: string,
        correlationId: string,
        scheduledTime: string,
        startTime: string,
        updateTime: string,
        endTime: string,
        status: model_task_pb.Task.Status,
        reasonForIncompletion: string,
        executionTime: number,
        queueWaitTime: number,
        taskDefName: string,
        taskType: string,
        input: string,
        output: string,
        taskId: string,
        externalInputPayloadStoragePath: string,
        externalOutputPayloadStoragePath: string,
        workflowPriority: number,
    }
}
