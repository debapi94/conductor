// package: conductor.grpc.tasks
// file: service/task_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_taskexeclog_pb from "../model/taskexeclog_pb";
import * as model_taskresult_pb from "../model/taskresult_pb";
import * as model_tasksummary_pb from "../model/tasksummary_pb";
import * as model_task_pb from "../model/task_pb";
import * as model_search_pb from "../model/search_pb";

export class PollRequest extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): PollRequest;
    getWorkerId(): string;
    setWorkerId(value: string): PollRequest;
    getDomain(): string;
    setDomain(value: string): PollRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollRequest): PollRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollRequest;
    static deserializeBinaryFromReader(message: PollRequest, reader: jspb.BinaryReader): PollRequest;
}

export namespace PollRequest {
    export type AsObject = {
        taskType: string,
        workerId: string,
        domain: string,
    }
}

export class PollResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): model_task_pb.Task | undefined;
    setTask(value?: model_task_pb.Task): PollResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollResponse): PollResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollResponse;
    static deserializeBinaryFromReader(message: PollResponse, reader: jspb.BinaryReader): PollResponse;
}

export namespace PollResponse {
    export type AsObject = {
        task?: model_task_pb.Task.AsObject,
    }
}

export class BatchPollRequest extends jspb.Message { 
    getTaskType(): string;
    setTaskType(value: string): BatchPollRequest;
    getWorkerId(): string;
    setWorkerId(value: string): BatchPollRequest;
    getDomain(): string;
    setDomain(value: string): BatchPollRequest;
    getCount(): number;
    setCount(value: number): BatchPollRequest;
    getTimeout(): number;
    setTimeout(value: number): BatchPollRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchPollRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchPollRequest): BatchPollRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchPollRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchPollRequest;
    static deserializeBinaryFromReader(message: BatchPollRequest, reader: jspb.BinaryReader): BatchPollRequest;
}

export namespace BatchPollRequest {
    export type AsObject = {
        taskType: string,
        workerId: string,
        domain: string,
        count: number,
        timeout: number,
    }
}

export class UpdateTaskRequest extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): model_taskresult_pb.TaskResult | undefined;
    setResult(value?: model_taskresult_pb.TaskResult): UpdateTaskRequest;

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
        result?: model_taskresult_pb.TaskResult.AsObject,
    }
}

export class UpdateTaskResponse extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): UpdateTaskResponse;

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
        taskId: string,
    }
}

export class AddLogRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): AddLogRequest;
    getLog(): string;
    setLog(value: string): AddLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddLogRequest): AddLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLogRequest;
    static deserializeBinaryFromReader(message: AddLogRequest, reader: jspb.BinaryReader): AddLogRequest;
}

export namespace AddLogRequest {
    export type AsObject = {
        taskId: string,
        log: string,
    }
}

export class AddLogResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddLogResponse): AddLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLogResponse;
    static deserializeBinaryFromReader(message: AddLogResponse, reader: jspb.BinaryReader): AddLogResponse;
}

export namespace AddLogResponse {
    export type AsObject = {
    }
}

export class GetTaskLogsRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GetTaskLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskLogsRequest): GetTaskLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskLogsRequest;
    static deserializeBinaryFromReader(message: GetTaskLogsRequest, reader: jspb.BinaryReader): GetTaskLogsRequest;
}

export namespace GetTaskLogsRequest {
    export type AsObject = {
        taskId: string,
    }
}

export class GetTaskLogsResponse extends jspb.Message { 
    clearLogsList(): void;
    getLogsList(): Array<model_taskexeclog_pb.TaskExecLog>;
    setLogsList(value: Array<model_taskexeclog_pb.TaskExecLog>): GetTaskLogsResponse;
    addLogs(value?: model_taskexeclog_pb.TaskExecLog, index?: number): model_taskexeclog_pb.TaskExecLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskLogsResponse): GetTaskLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskLogsResponse;
    static deserializeBinaryFromReader(message: GetTaskLogsResponse, reader: jspb.BinaryReader): GetTaskLogsResponse;
}

export namespace GetTaskLogsResponse {
    export type AsObject = {
        logsList: Array<model_taskexeclog_pb.TaskExecLog.AsObject>,
    }
}

export class GetTaskRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GetTaskRequest;

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
        taskId: string,
    }
}

export class GetTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): model_task_pb.Task | undefined;
    setTask(value?: model_task_pb.Task): GetTaskResponse;

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
        task?: model_task_pb.Task.AsObject,
    }
}

export class QueueSizesRequest extends jspb.Message { 
    clearTaskTypesList(): void;
    getTaskTypesList(): Array<string>;
    setTaskTypesList(value: Array<string>): QueueSizesRequest;
    addTaskTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueSizesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueueSizesRequest): QueueSizesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueSizesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueSizesRequest;
    static deserializeBinaryFromReader(message: QueueSizesRequest, reader: jspb.BinaryReader): QueueSizesRequest;
}

export namespace QueueSizesRequest {
    export type AsObject = {
        taskTypesList: Array<string>,
    }
}

export class QueueSizesResponse extends jspb.Message { 

    getQueueForTaskMap(): jspb.Map<string, number>;
    clearQueueForTaskMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueSizesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueueSizesResponse): QueueSizesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueSizesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueSizesResponse;
    static deserializeBinaryFromReader(message: QueueSizesResponse, reader: jspb.BinaryReader): QueueSizesResponse;
}

export namespace QueueSizesResponse {
    export type AsObject = {

        queueForTaskMap: Array<[string, number]>,
    }
}

export class QueueInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueueInfoRequest): QueueInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueInfoRequest;
    static deserializeBinaryFromReader(message: QueueInfoRequest, reader: jspb.BinaryReader): QueueInfoRequest;
}

export namespace QueueInfoRequest {
    export type AsObject = {
    }
}

export class QueueInfoResponse extends jspb.Message { 

    getQueuesMap(): jspb.Map<string, number>;
    clearQueuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueueInfoResponse): QueueInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueInfoResponse;
    static deserializeBinaryFromReader(message: QueueInfoResponse, reader: jspb.BinaryReader): QueueInfoResponse;
}

export namespace QueueInfoResponse {
    export type AsObject = {

        queuesMap: Array<[string, number]>,
    }
}

export class QueueAllInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueAllInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueueAllInfoRequest): QueueAllInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueAllInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueAllInfoRequest;
    static deserializeBinaryFromReader(message: QueueAllInfoRequest, reader: jspb.BinaryReader): QueueAllInfoRequest;
}

export namespace QueueAllInfoRequest {
    export type AsObject = {
    }
}

export class QueueAllInfoResponse extends jspb.Message { 

    getQueuesMap(): jspb.Map<string, QueueAllInfoResponse.QueueInfo>;
    clearQueuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueAllInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueueAllInfoResponse): QueueAllInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueAllInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueAllInfoResponse;
    static deserializeBinaryFromReader(message: QueueAllInfoResponse, reader: jspb.BinaryReader): QueueAllInfoResponse;
}

export namespace QueueAllInfoResponse {
    export type AsObject = {

        queuesMap: Array<[string, QueueAllInfoResponse.QueueInfo.AsObject]>,
    }


    export class ShardInfo extends jspb.Message { 
        getSize(): number;
        setSize(value: number): ShardInfo;
        getUacked(): number;
        setUacked(value: number): ShardInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ShardInfo.AsObject;
        static toObject(includeInstance: boolean, msg: ShardInfo): ShardInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ShardInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ShardInfo;
        static deserializeBinaryFromReader(message: ShardInfo, reader: jspb.BinaryReader): ShardInfo;
    }

    export namespace ShardInfo {
        export type AsObject = {
            size: number,
            uacked: number,
        }
    }

    export class QueueInfo extends jspb.Message { 

        getShardsMap(): jspb.Map<string, QueueAllInfoResponse.ShardInfo>;
        clearShardsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QueueInfo.AsObject;
        static toObject(includeInstance: boolean, msg: QueueInfo): QueueInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QueueInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QueueInfo;
        static deserializeBinaryFromReader(message: QueueInfo, reader: jspb.BinaryReader): QueueInfo;
    }

    export namespace QueueInfo {
        export type AsObject = {

            shardsMap: Array<[string, QueueAllInfoResponse.ShardInfo.AsObject]>,
        }
    }

}

export class TaskSummarySearchResult extends jspb.Message { 
    getTotalHits(): number;
    setTotalHits(value: number): TaskSummarySearchResult;
    clearResultsList(): void;
    getResultsList(): Array<model_tasksummary_pb.TaskSummary>;
    setResultsList(value: Array<model_tasksummary_pb.TaskSummary>): TaskSummarySearchResult;
    addResults(value?: model_tasksummary_pb.TaskSummary, index?: number): model_tasksummary_pb.TaskSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskSummarySearchResult.AsObject;
    static toObject(includeInstance: boolean, msg: TaskSummarySearchResult): TaskSummarySearchResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskSummarySearchResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskSummarySearchResult;
    static deserializeBinaryFromReader(message: TaskSummarySearchResult, reader: jspb.BinaryReader): TaskSummarySearchResult;
}

export namespace TaskSummarySearchResult {
    export type AsObject = {
        totalHits: number,
        resultsList: Array<model_tasksummary_pb.TaskSummary.AsObject>,
    }
}

export class TaskSearchResult extends jspb.Message { 
    getTotalHits(): number;
    setTotalHits(value: number): TaskSearchResult;
    clearResultsList(): void;
    getResultsList(): Array<model_task_pb.Task>;
    setResultsList(value: Array<model_task_pb.Task>): TaskSearchResult;
    addResults(value?: model_task_pb.Task, index?: number): model_task_pb.Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskSearchResult.AsObject;
    static toObject(includeInstance: boolean, msg: TaskSearchResult): TaskSearchResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskSearchResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskSearchResult;
    static deserializeBinaryFromReader(message: TaskSearchResult, reader: jspb.BinaryReader): TaskSearchResult;
}

export namespace TaskSearchResult {
    export type AsObject = {
        totalHits: number,
        resultsList: Array<model_task_pb.Task.AsObject>,
    }
}
