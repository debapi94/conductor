// package: conductor.proto
// file: model/workflowsummary.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_workflow_pb from "../model/workflow_pb";

export class WorkflowSummary extends jspb.Message { 
    getWorkflowType(): string;
    setWorkflowType(value: string): WorkflowSummary;
    getVersion(): number;
    setVersion(value: number): WorkflowSummary;
    getWorkflowId(): string;
    setWorkflowId(value: string): WorkflowSummary;
    getCorrelationId(): string;
    setCorrelationId(value: string): WorkflowSummary;
    getStartTime(): string;
    setStartTime(value: string): WorkflowSummary;
    getUpdateTime(): string;
    setUpdateTime(value: string): WorkflowSummary;
    getEndTime(): string;
    setEndTime(value: string): WorkflowSummary;
    getStatus(): model_workflow_pb.Workflow.WorkflowStatus;
    setStatus(value: model_workflow_pb.Workflow.WorkflowStatus): WorkflowSummary;
    getInput(): string;
    setInput(value: string): WorkflowSummary;
    getOutput(): string;
    setOutput(value: string): WorkflowSummary;
    getReasonForIncompletion(): string;
    setReasonForIncompletion(value: string): WorkflowSummary;
    getExecutionTime(): number;
    setExecutionTime(value: number): WorkflowSummary;
    getEvent(): string;
    setEvent(value: string): WorkflowSummary;
    getFailedReferenceTaskNames(): string;
    setFailedReferenceTaskNames(value: string): WorkflowSummary;
    getExternalInputPayloadStoragePath(): string;
    setExternalInputPayloadStoragePath(value: string): WorkflowSummary;
    getExternalOutputPayloadStoragePath(): string;
    setExternalOutputPayloadStoragePath(value: string): WorkflowSummary;
    getPriority(): number;
    setPriority(value: number): WorkflowSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowSummary.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowSummary): WorkflowSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowSummary;
    static deserializeBinaryFromReader(message: WorkflowSummary, reader: jspb.BinaryReader): WorkflowSummary;
}

export namespace WorkflowSummary {
    export type AsObject = {
        workflowType: string,
        version: number,
        workflowId: string,
        correlationId: string,
        startTime: string,
        updateTime: string,
        endTime: string,
        status: model_workflow_pb.Workflow.WorkflowStatus,
        input: string,
        output: string,
        reasonForIncompletion: string,
        executionTime: number,
        event: string,
        failedReferenceTaskNames: string,
        externalInputPayloadStoragePath: string,
        externalOutputPayloadStoragePath: string,
        priority: number,
    }
}
