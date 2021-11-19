// package: conductor.proto
// file: model/workflow.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_workflowdef_pb from "../model/workflowdef_pb";
import * as model_task_pb from "../model/task_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Workflow extends jspb.Message { 
    getStatus(): Workflow.WorkflowStatus;
    setStatus(value: Workflow.WorkflowStatus): Workflow;
    getEndTime(): number;
    setEndTime(value: number): Workflow;
    getWorkflowId(): string;
    setWorkflowId(value: string): Workflow;
    getParentWorkflowId(): string;
    setParentWorkflowId(value: string): Workflow;
    getParentWorkflowTaskId(): string;
    setParentWorkflowTaskId(value: string): Workflow;
    clearTasksList(): void;
    getTasksList(): Array<model_task_pb.Task>;
    setTasksList(value: Array<model_task_pb.Task>): Workflow;
    addTasks(value?: model_task_pb.Task, index?: number): model_task_pb.Task;

    getInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputMap(): void;

    getOutputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearOutputMap(): void;
    getCorrelationId(): string;
    setCorrelationId(value: string): Workflow;
    getReRunFromWorkflowId(): string;
    setReRunFromWorkflowId(value: string): Workflow;
    getReasonForIncompletion(): string;
    setReasonForIncompletion(value: string): Workflow;
    getEvent(): string;
    setEvent(value: string): Workflow;

    getTaskToDomainMap(): jspb.Map<string, string>;
    clearTaskToDomainMap(): void;
    clearFailedReferenceTaskNamesList(): void;
    getFailedReferenceTaskNamesList(): Array<string>;
    setFailedReferenceTaskNamesList(value: Array<string>): Workflow;
    addFailedReferenceTaskNames(value: string, index?: number): string;

    hasWorkflowDefinition(): boolean;
    clearWorkflowDefinition(): void;
    getWorkflowDefinition(): model_workflowdef_pb.WorkflowDef | undefined;
    setWorkflowDefinition(value?: model_workflowdef_pb.WorkflowDef): Workflow;
    getExternalInputPayloadStoragePath(): string;
    setExternalInputPayloadStoragePath(value: string): Workflow;
    getExternalOutputPayloadStoragePath(): string;
    setExternalOutputPayloadStoragePath(value: string): Workflow;
    getPriority(): number;
    setPriority(value: number): Workflow;

    getVariablesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearVariablesMap(): void;
    getLastRetriedTime(): number;
    setLastRetriedTime(value: number): Workflow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Workflow.AsObject;
    static toObject(includeInstance: boolean, msg: Workflow): Workflow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Workflow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Workflow;
    static deserializeBinaryFromReader(message: Workflow, reader: jspb.BinaryReader): Workflow;
}

export namespace Workflow {
    export type AsObject = {
        status: Workflow.WorkflowStatus,
        endTime: number,
        workflowId: string,
        parentWorkflowId: string,
        parentWorkflowTaskId: string,
        tasksList: Array<model_task_pb.Task.AsObject>,

        inputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,

        outputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        correlationId: string,
        reRunFromWorkflowId: string,
        reasonForIncompletion: string,
        event: string,

        taskToDomainMap: Array<[string, string]>,
        failedReferenceTaskNamesList: Array<string>,
        workflowDefinition?: model_workflowdef_pb.WorkflowDef.AsObject,
        externalInputPayloadStoragePath: string,
        externalOutputPayloadStoragePath: string,
        priority: number,

        variablesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        lastRetriedTime: number,
    }

    export enum WorkflowStatus {
    RUNNING = 0,
    COMPLETED = 1,
    FAILED = 2,
    TIMED_OUT = 3,
    TERMINATED = 4,
    PAUSED = 5,
    }

}
