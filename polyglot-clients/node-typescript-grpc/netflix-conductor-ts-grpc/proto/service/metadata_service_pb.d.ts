// package: conductor.grpc.metadata
// file: service/metadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_taskdef_pb from "../model/taskdef_pb";
import * as model_workflowdef_pb from "../model/workflowdef_pb";

export class CreateWorkflowRequest extends jspb.Message { 

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): model_workflowdef_pb.WorkflowDef | undefined;
    setWorkflow(value?: model_workflowdef_pb.WorkflowDef): CreateWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWorkflowRequest): CreateWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWorkflowRequest;
    static deserializeBinaryFromReader(message: CreateWorkflowRequest, reader: jspb.BinaryReader): CreateWorkflowRequest;
}

export namespace CreateWorkflowRequest {
    export type AsObject = {
        workflow?: model_workflowdef_pb.WorkflowDef.AsObject,
    }
}

export class CreateWorkflowResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWorkflowResponse): CreateWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWorkflowResponse;
    static deserializeBinaryFromReader(message: CreateWorkflowResponse, reader: jspb.BinaryReader): CreateWorkflowResponse;
}

export namespace CreateWorkflowResponse {
    export type AsObject = {
    }
}

export class UpdateWorkflowsRequest extends jspb.Message { 
    clearDefsList(): void;
    getDefsList(): Array<model_workflowdef_pb.WorkflowDef>;
    setDefsList(value: Array<model_workflowdef_pb.WorkflowDef>): UpdateWorkflowsRequest;
    addDefs(value?: model_workflowdef_pb.WorkflowDef, index?: number): model_workflowdef_pb.WorkflowDef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWorkflowsRequest): UpdateWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWorkflowsRequest;
    static deserializeBinaryFromReader(message: UpdateWorkflowsRequest, reader: jspb.BinaryReader): UpdateWorkflowsRequest;
}

export namespace UpdateWorkflowsRequest {
    export type AsObject = {
        defsList: Array<model_workflowdef_pb.WorkflowDef.AsObject>,
    }
}

export class UpdateWorkflowsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWorkflowsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWorkflowsResponse): UpdateWorkflowsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWorkflowsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWorkflowsResponse;
    static deserializeBinaryFromReader(message: UpdateWorkflowsResponse, reader: jspb.BinaryReader): UpdateWorkflowsResponse;
}

export namespace UpdateWorkflowsResponse {
    export type AsObject = {
    }
}

export class GetWorkflowRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetWorkflowRequest;
    getVersion(): number;
    setVersion(value: number): GetWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowRequest): GetWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowRequest;
    static deserializeBinaryFromReader(message: GetWorkflowRequest, reader: jspb.BinaryReader): GetWorkflowRequest;
}

export namespace GetWorkflowRequest {
    export type AsObject = {
        name: string,
        version: number,
    }
}

export class GetWorkflowResponse extends jspb.Message { 

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): model_workflowdef_pb.WorkflowDef | undefined;
    setWorkflow(value?: model_workflowdef_pb.WorkflowDef): GetWorkflowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowResponse): GetWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowResponse;
    static deserializeBinaryFromReader(message: GetWorkflowResponse, reader: jspb.BinaryReader): GetWorkflowResponse;
}

export namespace GetWorkflowResponse {
    export type AsObject = {
        workflow?: model_workflowdef_pb.WorkflowDef.AsObject,
    }
}

export class CreateTasksRequest extends jspb.Message { 
    clearDefsList(): void;
    getDefsList(): Array<model_taskdef_pb.TaskDef>;
    setDefsList(value: Array<model_taskdef_pb.TaskDef>): CreateTasksRequest;
    addDefs(value?: model_taskdef_pb.TaskDef, index?: number): model_taskdef_pb.TaskDef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTasksRequest): CreateTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTasksRequest;
    static deserializeBinaryFromReader(message: CreateTasksRequest, reader: jspb.BinaryReader): CreateTasksRequest;
}

export namespace CreateTasksRequest {
    export type AsObject = {
        defsList: Array<model_taskdef_pb.TaskDef.AsObject>,
    }
}

export class CreateTasksResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTasksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTasksResponse): CreateTasksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTasksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTasksResponse;
    static deserializeBinaryFromReader(message: CreateTasksResponse, reader: jspb.BinaryReader): CreateTasksResponse;
}

export namespace CreateTasksResponse {
    export type AsObject = {
    }
}

export class UpdateTaskRequest extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): model_taskdef_pb.TaskDef | undefined;
    setTask(value?: model_taskdef_pb.TaskDef): UpdateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
    static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
    export type AsObject = {
        task?: model_taskdef_pb.TaskDef.AsObject,
    }
}

export class UpdateTaskResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskResponse): UpdateTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskResponse;
    static deserializeBinaryFromReader(message: UpdateTaskResponse, reader: jspb.BinaryReader): UpdateTaskResponse;
}

export namespace UpdateTaskResponse {
    export type AsObject = {
    }
}

export class GetTaskRequest extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): GetTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
    static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
    export type AsObject = {
        taskType: string,
    }
}

export class GetTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): model_taskdef_pb.TaskDef | undefined;
    setTask(value?: model_taskdef_pb.TaskDef): GetTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskResponse): GetTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskResponse;
    static deserializeBinaryFromReader(message: GetTaskResponse, reader: jspb.BinaryReader): GetTaskResponse;
}

export namespace GetTaskResponse {
    export type AsObject = {
        task?: model_taskdef_pb.TaskDef.AsObject,
    }
}

export class DeleteTaskRequest extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): DeleteTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
    static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
    export type AsObject = {
        taskType: string,
    }
}

export class DeleteTaskResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskResponse): DeleteTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskResponse;
    static deserializeBinaryFromReader(message: DeleteTaskResponse, reader: jspb.BinaryReader): DeleteTaskResponse;
}

export namespace DeleteTaskResponse {
    export type AsObject = {
    }
}
