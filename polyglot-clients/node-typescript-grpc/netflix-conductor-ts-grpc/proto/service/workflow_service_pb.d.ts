// package: conductor.grpc.workflows
// file: service/workflow_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_search_pb from "../model/search_pb";
import * as model_workflow_pb from "../model/workflow_pb";
import * as model_workflowsummary_pb from "../model/workflowsummary_pb";
import * as model_skiptaskrequest_pb from "../model/skiptaskrequest_pb";
import * as model_startworkflowrequest_pb from "../model/startworkflowrequest_pb";
import * as model_rerunworkflowrequest_pb from "../model/rerunworkflowrequest_pb";

export class StartWorkflowResponse extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): StartWorkflowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartWorkflowResponse): StartWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartWorkflowResponse;
    static deserializeBinaryFromReader(message: StartWorkflowResponse, reader: jspb.BinaryReader): StartWorkflowResponse;
}

export namespace StartWorkflowResponse {
    export type AsObject = {
        workflowId: string,
    }
}

export class GetWorkflowsRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetWorkflowsRequest;
    clearCorrelationIdList(): void;
    getCorrelationIdList(): Array<string>;
    setCorrelationIdList(value: Array<string>): GetWorkflowsRequest;
    addCorrelationId(value: string, index?: number): string;
    getIncludeClosed(): boolean;
    setIncludeClosed(value: boolean): GetWorkflowsRequest;
    getIncludeTasks(): boolean;
    setIncludeTasks(value: boolean): GetWorkflowsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowsRequest): GetWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowsRequest;
    static deserializeBinaryFromReader(message: GetWorkflowsRequest, reader: jspb.BinaryReader): GetWorkflowsRequest;
}

export namespace GetWorkflowsRequest {
    export type AsObject = {
        name: string,
        correlationIdList: Array<string>,
        includeClosed: boolean,
        includeTasks: boolean,
    }
}

export class GetWorkflowsResponse extends jspb.Message { 

    getWorkflowsByIdMap(): jspb.Map<string, GetWorkflowsResponse.Workflows>;
    clearWorkflowsByIdMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowsResponse): GetWorkflowsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowsResponse;
    static deserializeBinaryFromReader(message: GetWorkflowsResponse, reader: jspb.BinaryReader): GetWorkflowsResponse;
}

export namespace GetWorkflowsResponse {
    export type AsObject = {

        workflowsByIdMap: Array<[string, GetWorkflowsResponse.Workflows.AsObject]>,
    }


    export class Workflows extends jspb.Message { 
        clearWorkflowsList(): void;
        getWorkflowsList(): Array<model_workflow_pb.Workflow>;
        setWorkflowsList(value: Array<model_workflow_pb.Workflow>): Workflows;
        addWorkflows(value?: model_workflow_pb.Workflow, index?: number): model_workflow_pb.Workflow;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Workflows.AsObject;
        static toObject(includeInstance: boolean, msg: Workflows): Workflows.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Workflows, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Workflows;
        static deserializeBinaryFromReader(message: Workflows, reader: jspb.BinaryReader): Workflows;
    }

    export namespace Workflows {
        export type AsObject = {
            workflowsList: Array<model_workflow_pb.Workflow.AsObject>,
        }
    }

}

export class GetWorkflowStatusRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): GetWorkflowStatusRequest;
    getIncludeTasks(): boolean;
    setIncludeTasks(value: boolean): GetWorkflowStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowStatusRequest): GetWorkflowStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowStatusRequest;
    static deserializeBinaryFromReader(message: GetWorkflowStatusRequest, reader: jspb.BinaryReader): GetWorkflowStatusRequest;
}

export namespace GetWorkflowStatusRequest {
    export type AsObject = {
        workflowId: string,
        includeTasks: boolean,
    }
}

export class GetWorkflowStatusResponse extends jspb.Message { 

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): model_workflow_pb.Workflow | undefined;
    setWorkflow(value?: model_workflow_pb.Workflow): GetWorkflowStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowStatusResponse): GetWorkflowStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowStatusResponse;
    static deserializeBinaryFromReader(message: GetWorkflowStatusResponse, reader: jspb.BinaryReader): GetWorkflowStatusResponse;
}

export namespace GetWorkflowStatusResponse {
    export type AsObject = {
        workflow?: model_workflow_pb.Workflow.AsObject,
    }
}

export class RemoveWorkflowRequest extends jspb.Message { 
    getWorkflodId(): string;
    setWorkflodId(value: string): RemoveWorkflowRequest;
    getArchiveWorkflow(): boolean;
    setArchiveWorkflow(value: boolean): RemoveWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveWorkflowRequest): RemoveWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveWorkflowRequest;
    static deserializeBinaryFromReader(message: RemoveWorkflowRequest, reader: jspb.BinaryReader): RemoveWorkflowRequest;
}

export namespace RemoveWorkflowRequest {
    export type AsObject = {
        workflodId: string,
        archiveWorkflow: boolean,
    }
}

export class RemoveWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveWorkflowResponse): RemoveWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveWorkflowResponse;
    static deserializeBinaryFromReader(message: RemoveWorkflowResponse, reader: jspb.BinaryReader): RemoveWorkflowResponse;
}

export namespace RemoveWorkflowResponse {
    export type AsObject = {
    }
}

export class GetRunningWorkflowsRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetRunningWorkflowsRequest;
    getVersion(): number;
    setVersion(value: number): GetRunningWorkflowsRequest;
    getStartTime(): number;
    setStartTime(value: number): GetRunningWorkflowsRequest;
    getEndTime(): number;
    setEndTime(value: number): GetRunningWorkflowsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRunningWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRunningWorkflowsRequest): GetRunningWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRunningWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRunningWorkflowsRequest;
    static deserializeBinaryFromReader(message: GetRunningWorkflowsRequest, reader: jspb.BinaryReader): GetRunningWorkflowsRequest;
}

export namespace GetRunningWorkflowsRequest {
    export type AsObject = {
        name: string,
        version: number,
        startTime: number,
        endTime: number,
    }
}

export class GetRunningWorkflowsResponse extends jspb.Message { 
    clearWorkflowIdsList(): void;
    getWorkflowIdsList(): Array<string>;
    setWorkflowIdsList(value: Array<string>): GetRunningWorkflowsResponse;
    addWorkflowIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRunningWorkflowsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRunningWorkflowsResponse): GetRunningWorkflowsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRunningWorkflowsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRunningWorkflowsResponse;
    static deserializeBinaryFromReader(message: GetRunningWorkflowsResponse, reader: jspb.BinaryReader): GetRunningWorkflowsResponse;
}

export namespace GetRunningWorkflowsResponse {
    export type AsObject = {
        workflowIdsList: Array<string>,
    }
}

export class DecideWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): DecideWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecideWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DecideWorkflowRequest): DecideWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecideWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecideWorkflowRequest;
    static deserializeBinaryFromReader(message: DecideWorkflowRequest, reader: jspb.BinaryReader): DecideWorkflowRequest;
}

export namespace DecideWorkflowRequest {
    export type AsObject = {
        workflowId: string,
    }
}

export class DecideWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecideWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DecideWorkflowResponse): DecideWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecideWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecideWorkflowResponse;
    static deserializeBinaryFromReader(message: DecideWorkflowResponse, reader: jspb.BinaryReader): DecideWorkflowResponse;
}

export namespace DecideWorkflowResponse {
    export type AsObject = {
    }
}

export class PauseWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): PauseWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PauseWorkflowRequest): PauseWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseWorkflowRequest;
    static deserializeBinaryFromReader(message: PauseWorkflowRequest, reader: jspb.BinaryReader): PauseWorkflowRequest;
}

export namespace PauseWorkflowRequest {
    export type AsObject = {
        workflowId: string,
    }
}

export class PauseWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PauseWorkflowResponse): PauseWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseWorkflowResponse;
    static deserializeBinaryFromReader(message: PauseWorkflowResponse, reader: jspb.BinaryReader): PauseWorkflowResponse;
}

export namespace PauseWorkflowResponse {
    export type AsObject = {
    }
}

export class ResumeWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): ResumeWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeWorkflowRequest): ResumeWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeWorkflowRequest;
    static deserializeBinaryFromReader(message: ResumeWorkflowRequest, reader: jspb.BinaryReader): ResumeWorkflowRequest;
}

export namespace ResumeWorkflowRequest {
    export type AsObject = {
        workflowId: string,
    }
}

export class ResumeWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeWorkflowResponse): ResumeWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeWorkflowResponse;
    static deserializeBinaryFromReader(message: ResumeWorkflowResponse, reader: jspb.BinaryReader): ResumeWorkflowResponse;
}

export namespace ResumeWorkflowResponse {
    export type AsObject = {
    }
}

export class SkipTaskRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): SkipTaskRequest;
    getTaskReferenceName(): string;
    setTaskReferenceName(value: string): SkipTaskRequest;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): model_skiptaskrequest_pb.SkipTaskRequest | undefined;
    setRequest(value?: model_skiptaskrequest_pb.SkipTaskRequest): SkipTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SkipTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SkipTaskRequest): SkipTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SkipTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SkipTaskRequest;
    static deserializeBinaryFromReader(message: SkipTaskRequest, reader: jspb.BinaryReader): SkipTaskRequest;
}

export namespace SkipTaskRequest {
    export type AsObject = {
        workflowId: string,
        taskReferenceName: string,
        request?: model_skiptaskrequest_pb.SkipTaskRequest.AsObject,
    }
}

export class SkipTaskResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SkipTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SkipTaskResponse): SkipTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SkipTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SkipTaskResponse;
    static deserializeBinaryFromReader(message: SkipTaskResponse, reader: jspb.BinaryReader): SkipTaskResponse;
}

export namespace SkipTaskResponse {
    export type AsObject = {
    }
}

export class RerunWorkflowResponse extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): RerunWorkflowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RerunWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RerunWorkflowResponse): RerunWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RerunWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RerunWorkflowResponse;
    static deserializeBinaryFromReader(message: RerunWorkflowResponse, reader: jspb.BinaryReader): RerunWorkflowResponse;
}

export namespace RerunWorkflowResponse {
    export type AsObject = {
        workflowId: string,
    }
}

export class RestartWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): RestartWorkflowRequest;
    getUseLatestDefinitions(): boolean;
    setUseLatestDefinitions(value: boolean): RestartWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestartWorkflowRequest): RestartWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartWorkflowRequest;
    static deserializeBinaryFromReader(message: RestartWorkflowRequest, reader: jspb.BinaryReader): RestartWorkflowRequest;
}

export namespace RestartWorkflowRequest {
    export type AsObject = {
        workflowId: string,
        useLatestDefinitions: boolean,
    }
}

export class RestartWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RestartWorkflowResponse): RestartWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartWorkflowResponse;
    static deserializeBinaryFromReader(message: RestartWorkflowResponse, reader: jspb.BinaryReader): RestartWorkflowResponse;
}

export namespace RestartWorkflowResponse {
    export type AsObject = {
    }
}

export class RetryWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): RetryWorkflowRequest;
    getResumeSubworkflowTasks(): boolean;
    setResumeSubworkflowTasks(value: boolean): RetryWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetryWorkflowRequest): RetryWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryWorkflowRequest;
    static deserializeBinaryFromReader(message: RetryWorkflowRequest, reader: jspb.BinaryReader): RetryWorkflowRequest;
}

export namespace RetryWorkflowRequest {
    export type AsObject = {
        workflowId: string,
        resumeSubworkflowTasks: boolean,
    }
}

export class RetryWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RetryWorkflowResponse): RetryWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryWorkflowResponse;
    static deserializeBinaryFromReader(message: RetryWorkflowResponse, reader: jspb.BinaryReader): RetryWorkflowResponse;
}

export namespace RetryWorkflowResponse {
    export type AsObject = {
    }
}

export class ResetWorkflowCallbacksRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): ResetWorkflowCallbacksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetWorkflowCallbacksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetWorkflowCallbacksRequest): ResetWorkflowCallbacksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetWorkflowCallbacksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetWorkflowCallbacksRequest;
    static deserializeBinaryFromReader(message: ResetWorkflowCallbacksRequest, reader: jspb.BinaryReader): ResetWorkflowCallbacksRequest;
}

export namespace ResetWorkflowCallbacksRequest {
    export type AsObject = {
        workflowId: string,
    }
}

export class ResetWorkflowCallbacksResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetWorkflowCallbacksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResetWorkflowCallbacksResponse): ResetWorkflowCallbacksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetWorkflowCallbacksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetWorkflowCallbacksResponse;
    static deserializeBinaryFromReader(message: ResetWorkflowCallbacksResponse, reader: jspb.BinaryReader): ResetWorkflowCallbacksResponse;
}

export namespace ResetWorkflowCallbacksResponse {
    export type AsObject = {
    }
}

export class TerminateWorkflowRequest extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): TerminateWorkflowRequest;
    getReason(): string;
    setReason(value: string): TerminateWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerminateWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TerminateWorkflowRequest): TerminateWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerminateWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerminateWorkflowRequest;
    static deserializeBinaryFromReader(message: TerminateWorkflowRequest, reader: jspb.BinaryReader): TerminateWorkflowRequest;
}

export namespace TerminateWorkflowRequest {
    export type AsObject = {
        workflowId: string,
        reason: string,
    }
}

export class TerminateWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerminateWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TerminateWorkflowResponse): TerminateWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerminateWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerminateWorkflowResponse;
    static deserializeBinaryFromReader(message: TerminateWorkflowResponse, reader: jspb.BinaryReader): TerminateWorkflowResponse;
}

export namespace TerminateWorkflowResponse {
    export type AsObject = {
    }
}

export class WorkflowSummarySearchResult extends jspb.Message { 
    getTotalHits(): number;
    setTotalHits(value: number): WorkflowSummarySearchResult;
    clearResultsList(): void;
    getResultsList(): Array<model_workflowsummary_pb.WorkflowSummary>;
    setResultsList(value: Array<model_workflowsummary_pb.WorkflowSummary>): WorkflowSummarySearchResult;
    addResults(value?: model_workflowsummary_pb.WorkflowSummary, index?: number): model_workflowsummary_pb.WorkflowSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowSummarySearchResult.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowSummarySearchResult): WorkflowSummarySearchResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowSummarySearchResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowSummarySearchResult;
    static deserializeBinaryFromReader(message: WorkflowSummarySearchResult, reader: jspb.BinaryReader): WorkflowSummarySearchResult;
}

export namespace WorkflowSummarySearchResult {
    export type AsObject = {
        totalHits: number,
        resultsList: Array<model_workflowsummary_pb.WorkflowSummary.AsObject>,
    }
}

export class WorkflowSearchResult extends jspb.Message { 
    getTotalHits(): number;
    setTotalHits(value: number): WorkflowSearchResult;
    clearResultsList(): void;
    getResultsList(): Array<model_workflow_pb.Workflow>;
    setResultsList(value: Array<model_workflow_pb.Workflow>): WorkflowSearchResult;
    addResults(value?: model_workflow_pb.Workflow, index?: number): model_workflow_pb.Workflow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowSearchResult.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowSearchResult): WorkflowSearchResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowSearchResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowSearchResult;
    static deserializeBinaryFromReader(message: WorkflowSearchResult, reader: jspb.BinaryReader): WorkflowSearchResult;
}

export namespace WorkflowSearchResult {
    export type AsObject = {
        totalHits: number,
        resultsList: Array<model_workflow_pb.Workflow.AsObject>,
    }
}
