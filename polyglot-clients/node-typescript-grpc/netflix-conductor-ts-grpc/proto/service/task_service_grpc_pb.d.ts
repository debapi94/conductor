// package: conductor.grpc.tasks
// file: service/task_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_task_service_pb from "../service/task_service_pb";
import * as model_taskexeclog_pb from "../model/taskexeclog_pb";
import * as model_taskresult_pb from "../model/taskresult_pb";
import * as model_tasksummary_pb from "../model/tasksummary_pb";
import * as model_task_pb from "../model/task_pb";
import * as model_search_pb from "../model/search_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    poll: ITaskServiceService_IPoll;
    batchPoll: ITaskServiceService_IBatchPoll;
    updateTask: ITaskServiceService_IUpdateTask;
    addLog: ITaskServiceService_IAddLog;
    getTaskLogs: ITaskServiceService_IGetTaskLogs;
    getTask: ITaskServiceService_IGetTask;
    getQueueSizesForTasks: ITaskServiceService_IGetQueueSizesForTasks;
    getQueueInfo: ITaskServiceService_IGetQueueInfo;
    getQueueAllInfo: ITaskServiceService_IGetQueueAllInfo;
    search: ITaskServiceService_ISearch;
    searchV2: ITaskServiceService_ISearchV2;
}

interface ITaskServiceService_IPoll extends grpc.MethodDefinition<service_task_service_pb.PollRequest, service_task_service_pb.PollResponse> {
    path: "/conductor.grpc.tasks.TaskService/Poll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.PollRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.PollRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.PollResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.PollResponse>;
}
interface ITaskServiceService_IBatchPoll extends grpc.MethodDefinition<service_task_service_pb.BatchPollRequest, model_task_pb.Task> {
    path: "/conductor.grpc.tasks.TaskService/BatchPoll";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<service_task_service_pb.BatchPollRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.BatchPollRequest>;
    responseSerialize: grpc.serialize<model_task_pb.Task>;
    responseDeserialize: grpc.deserialize<model_task_pb.Task>;
}
interface ITaskServiceService_IUpdateTask extends grpc.MethodDefinition<service_task_service_pb.UpdateTaskRequest, service_task_service_pb.UpdateTaskResponse> {
    path: "/conductor.grpc.tasks.TaskService/UpdateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.UpdateTaskRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.UpdateTaskRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.UpdateTaskResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.UpdateTaskResponse>;
}
interface ITaskServiceService_IAddLog extends grpc.MethodDefinition<service_task_service_pb.AddLogRequest, service_task_service_pb.AddLogResponse> {
    path: "/conductor.grpc.tasks.TaskService/AddLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.AddLogRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.AddLogRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.AddLogResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.AddLogResponse>;
}
interface ITaskServiceService_IGetTaskLogs extends grpc.MethodDefinition<service_task_service_pb.GetTaskLogsRequest, service_task_service_pb.GetTaskLogsResponse> {
    path: "/conductor.grpc.tasks.TaskService/GetTaskLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.GetTaskLogsRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.GetTaskLogsRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.GetTaskLogsResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.GetTaskLogsResponse>;
}
interface ITaskServiceService_IGetTask extends grpc.MethodDefinition<service_task_service_pb.GetTaskRequest, service_task_service_pb.GetTaskResponse> {
    path: "/conductor.grpc.tasks.TaskService/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.GetTaskResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.GetTaskResponse>;
}
interface ITaskServiceService_IGetQueueSizesForTasks extends grpc.MethodDefinition<service_task_service_pb.QueueSizesRequest, service_task_service_pb.QueueSizesResponse> {
    path: "/conductor.grpc.tasks.TaskService/GetQueueSizesForTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.QueueSizesRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.QueueSizesRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.QueueSizesResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.QueueSizesResponse>;
}
interface ITaskServiceService_IGetQueueInfo extends grpc.MethodDefinition<service_task_service_pb.QueueInfoRequest, service_task_service_pb.QueueInfoResponse> {
    path: "/conductor.grpc.tasks.TaskService/GetQueueInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.QueueInfoRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.QueueInfoRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.QueueInfoResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.QueueInfoResponse>;
}
interface ITaskServiceService_IGetQueueAllInfo extends grpc.MethodDefinition<service_task_service_pb.QueueAllInfoRequest, service_task_service_pb.QueueAllInfoResponse> {
    path: "/conductor.grpc.tasks.TaskService/GetQueueAllInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_task_service_pb.QueueAllInfoRequest>;
    requestDeserialize: grpc.deserialize<service_task_service_pb.QueueAllInfoRequest>;
    responseSerialize: grpc.serialize<service_task_service_pb.QueueAllInfoResponse>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.QueueAllInfoResponse>;
}
interface ITaskServiceService_ISearch extends grpc.MethodDefinition<model_search_pb.Request, service_task_service_pb.TaskSummarySearchResult> {
    path: "/conductor.grpc.tasks.TaskService/Search";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_task_service_pb.TaskSummarySearchResult>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.TaskSummarySearchResult>;
}
interface ITaskServiceService_ISearchV2 extends grpc.MethodDefinition<model_search_pb.Request, service_task_service_pb.TaskSearchResult> {
    path: "/conductor.grpc.tasks.TaskService/SearchV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_task_service_pb.TaskSearchResult>;
    responseDeserialize: grpc.deserialize<service_task_service_pb.TaskSearchResult>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer extends grpc.UntypedServiceImplementation {
    poll: grpc.handleUnaryCall<service_task_service_pb.PollRequest, service_task_service_pb.PollResponse>;
    batchPoll: grpc.handleServerStreamingCall<service_task_service_pb.BatchPollRequest, model_task_pb.Task>;
    updateTask: grpc.handleUnaryCall<service_task_service_pb.UpdateTaskRequest, service_task_service_pb.UpdateTaskResponse>;
    addLog: grpc.handleUnaryCall<service_task_service_pb.AddLogRequest, service_task_service_pb.AddLogResponse>;
    getTaskLogs: grpc.handleUnaryCall<service_task_service_pb.GetTaskLogsRequest, service_task_service_pb.GetTaskLogsResponse>;
    getTask: grpc.handleUnaryCall<service_task_service_pb.GetTaskRequest, service_task_service_pb.GetTaskResponse>;
    getQueueSizesForTasks: grpc.handleUnaryCall<service_task_service_pb.QueueSizesRequest, service_task_service_pb.QueueSizesResponse>;
    getQueueInfo: grpc.handleUnaryCall<service_task_service_pb.QueueInfoRequest, service_task_service_pb.QueueInfoResponse>;
    getQueueAllInfo: grpc.handleUnaryCall<service_task_service_pb.QueueAllInfoRequest, service_task_service_pb.QueueAllInfoResponse>;
    search: grpc.handleUnaryCall<model_search_pb.Request, service_task_service_pb.TaskSummarySearchResult>;
    searchV2: grpc.handleUnaryCall<model_search_pb.Request, service_task_service_pb.TaskSearchResult>;
}

export interface ITaskServiceClient {
    poll(request: service_task_service_pb.PollRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    poll(request: service_task_service_pb.PollRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    poll(request: service_task_service_pb.PollRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    batchPoll(request: service_task_service_pb.BatchPollRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_task_pb.Task>;
    batchPoll(request: service_task_service_pb.BatchPollRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_task_pb.Task>;
    updateTask(request: service_task_service_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: service_task_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: service_task_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    addLog(request: service_task_service_pb.AddLogRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    addLog(request: service_task_service_pb.AddLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    addLog(request: service_task_service_pb.AddLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_task_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_task_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_task_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    getQueueInfo(request: service_task_service_pb.QueueInfoRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    getQueueInfo(request: service_task_service_pb.QueueInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    getQueueInfo(request: service_task_service_pb.QueueInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public poll(request: service_task_service_pb.PollRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    public poll(request: service_task_service_pb.PollRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    public poll(request: service_task_service_pb.PollRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.PollResponse) => void): grpc.ClientUnaryCall;
    public batchPoll(request: service_task_service_pb.BatchPollRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_task_pb.Task>;
    public batchPoll(request: service_task_service_pb.BatchPollRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_task_pb.Task>;
    public updateTask(request: service_task_service_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: service_task_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: service_task_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public addLog(request: service_task_service_pb.AddLogRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    public addLog(request: service_task_service_pb.AddLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    public addLog(request: service_task_service_pb.AddLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.AddLogResponse) => void): grpc.ClientUnaryCall;
    public getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    public getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    public getTaskLogs(request: service_task_service_pb.GetTaskLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskLogsResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_task_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_task_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_task_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    public getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    public getQueueSizesForTasks(request: service_task_service_pb.QueueSizesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueSizesResponse) => void): grpc.ClientUnaryCall;
    public getQueueInfo(request: service_task_service_pb.QueueInfoRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    public getQueueInfo(request: service_task_service_pb.QueueInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    public getQueueInfo(request: service_task_service_pb.QueueInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueInfoResponse) => void): grpc.ClientUnaryCall;
    public getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    public getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    public getQueueAllInfo(request: service_task_service_pb.QueueAllInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.QueueAllInfoResponse) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSummarySearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_task_service_pb.TaskSearchResult) => void): grpc.ClientUnaryCall;
}
