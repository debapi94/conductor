// package: conductor.grpc.workflows
// file: service/workflow_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_workflow_service_pb from "../service/workflow_service_pb";
import * as model_search_pb from "../model/search_pb";
import * as model_workflow_pb from "../model/workflow_pb";
import * as model_workflowsummary_pb from "../model/workflowsummary_pb";
import * as model_skiptaskrequest_pb from "../model/skiptaskrequest_pb";
import * as model_startworkflowrequest_pb from "../model/startworkflowrequest_pb";
import * as model_rerunworkflowrequest_pb from "../model/rerunworkflowrequest_pb";

interface IWorkflowServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startWorkflow: IWorkflowServiceService_IStartWorkflow;
    getWorkflows: IWorkflowServiceService_IGetWorkflows;
    getWorkflowStatus: IWorkflowServiceService_IGetWorkflowStatus;
    removeWorkflow: IWorkflowServiceService_IRemoveWorkflow;
    getRunningWorkflows: IWorkflowServiceService_IGetRunningWorkflows;
    decideWorkflow: IWorkflowServiceService_IDecideWorkflow;
    pauseWorkflow: IWorkflowServiceService_IPauseWorkflow;
    resumeWorkflow: IWorkflowServiceService_IResumeWorkflow;
    skipTaskFromWorkflow: IWorkflowServiceService_ISkipTaskFromWorkflow;
    rerunWorkflow: IWorkflowServiceService_IRerunWorkflow;
    restartWorkflow: IWorkflowServiceService_IRestartWorkflow;
    retryWorkflow: IWorkflowServiceService_IRetryWorkflow;
    resetWorkflowCallbacks: IWorkflowServiceService_IResetWorkflowCallbacks;
    terminateWorkflow: IWorkflowServiceService_ITerminateWorkflow;
    search: IWorkflowServiceService_ISearch;
    searchByTasks: IWorkflowServiceService_ISearchByTasks;
    searchV2: IWorkflowServiceService_ISearchV2;
    searchByTasksV2: IWorkflowServiceService_ISearchByTasksV2;
}

interface IWorkflowServiceService_IStartWorkflow extends grpc.MethodDefinition<model_startworkflowrequest_pb.StartWorkflowRequest, service_workflow_service_pb.StartWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/StartWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_startworkflowrequest_pb.StartWorkflowRequest>;
    requestDeserialize: grpc.deserialize<model_startworkflowrequest_pb.StartWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.StartWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.StartWorkflowResponse>;
}
interface IWorkflowServiceService_IGetWorkflows extends grpc.MethodDefinition<service_workflow_service_pb.GetWorkflowsRequest, service_workflow_service_pb.GetWorkflowsResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/GetWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.GetWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.GetWorkflowsRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.GetWorkflowsResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.GetWorkflowsResponse>;
}
interface IWorkflowServiceService_IGetWorkflowStatus extends grpc.MethodDefinition<service_workflow_service_pb.GetWorkflowStatusRequest, model_workflow_pb.Workflow> {
    path: "/conductor.grpc.workflows.WorkflowService/GetWorkflowStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.GetWorkflowStatusRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.GetWorkflowStatusRequest>;
    responseSerialize: grpc.serialize<model_workflow_pb.Workflow>;
    responseDeserialize: grpc.deserialize<model_workflow_pb.Workflow>;
}
interface IWorkflowServiceService_IRemoveWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.RemoveWorkflowRequest, service_workflow_service_pb.RemoveWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/RemoveWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.RemoveWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.RemoveWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.RemoveWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.RemoveWorkflowResponse>;
}
interface IWorkflowServiceService_IGetRunningWorkflows extends grpc.MethodDefinition<service_workflow_service_pb.GetRunningWorkflowsRequest, service_workflow_service_pb.GetRunningWorkflowsResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/GetRunningWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.GetRunningWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.GetRunningWorkflowsRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.GetRunningWorkflowsResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.GetRunningWorkflowsResponse>;
}
interface IWorkflowServiceService_IDecideWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.DecideWorkflowRequest, service_workflow_service_pb.DecideWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/DecideWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.DecideWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.DecideWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.DecideWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.DecideWorkflowResponse>;
}
interface IWorkflowServiceService_IPauseWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.PauseWorkflowRequest, service_workflow_service_pb.PauseWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/PauseWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.PauseWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.PauseWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.PauseWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.PauseWorkflowResponse>;
}
interface IWorkflowServiceService_IResumeWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.ResumeWorkflowRequest, service_workflow_service_pb.ResumeWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/ResumeWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.ResumeWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.ResumeWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.ResumeWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.ResumeWorkflowResponse>;
}
interface IWorkflowServiceService_ISkipTaskFromWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.SkipTaskRequest, service_workflow_service_pb.SkipTaskResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/SkipTaskFromWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.SkipTaskRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.SkipTaskRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.SkipTaskResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.SkipTaskResponse>;
}
interface IWorkflowServiceService_IRerunWorkflow extends grpc.MethodDefinition<model_rerunworkflowrequest_pb.RerunWorkflowRequest, service_workflow_service_pb.RerunWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/RerunWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_rerunworkflowrequest_pb.RerunWorkflowRequest>;
    requestDeserialize: grpc.deserialize<model_rerunworkflowrequest_pb.RerunWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.RerunWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.RerunWorkflowResponse>;
}
interface IWorkflowServiceService_IRestartWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.RestartWorkflowRequest, service_workflow_service_pb.RestartWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/RestartWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.RestartWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.RestartWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.RestartWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.RestartWorkflowResponse>;
}
interface IWorkflowServiceService_IRetryWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.RetryWorkflowRequest, service_workflow_service_pb.RetryWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/RetryWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.RetryWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.RetryWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.RetryWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.RetryWorkflowResponse>;
}
interface IWorkflowServiceService_IResetWorkflowCallbacks extends grpc.MethodDefinition<service_workflow_service_pb.ResetWorkflowCallbacksRequest, service_workflow_service_pb.ResetWorkflowCallbacksResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/ResetWorkflowCallbacks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.ResetWorkflowCallbacksRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.ResetWorkflowCallbacksRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.ResetWorkflowCallbacksResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.ResetWorkflowCallbacksResponse>;
}
interface IWorkflowServiceService_ITerminateWorkflow extends grpc.MethodDefinition<service_workflow_service_pb.TerminateWorkflowRequest, service_workflow_service_pb.TerminateWorkflowResponse> {
    path: "/conductor.grpc.workflows.WorkflowService/TerminateWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_workflow_service_pb.TerminateWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_workflow_service_pb.TerminateWorkflowRequest>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.TerminateWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.TerminateWorkflowResponse>;
}
interface IWorkflowServiceService_ISearch extends grpc.MethodDefinition<model_search_pb.Request, service_workflow_service_pb.WorkflowSummarySearchResult> {
    path: "/conductor.grpc.workflows.WorkflowService/Search";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.WorkflowSummarySearchResult>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.WorkflowSummarySearchResult>;
}
interface IWorkflowServiceService_ISearchByTasks extends grpc.MethodDefinition<model_search_pb.Request, service_workflow_service_pb.WorkflowSummarySearchResult> {
    path: "/conductor.grpc.workflows.WorkflowService/SearchByTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.WorkflowSummarySearchResult>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.WorkflowSummarySearchResult>;
}
interface IWorkflowServiceService_ISearchV2 extends grpc.MethodDefinition<model_search_pb.Request, service_workflow_service_pb.WorkflowSearchResult> {
    path: "/conductor.grpc.workflows.WorkflowService/SearchV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.WorkflowSearchResult>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.WorkflowSearchResult>;
}
interface IWorkflowServiceService_ISearchByTasksV2 extends grpc.MethodDefinition<model_search_pb.Request, service_workflow_service_pb.WorkflowSearchResult> {
    path: "/conductor.grpc.workflows.WorkflowService/SearchByTasksV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_search_pb.Request>;
    requestDeserialize: grpc.deserialize<model_search_pb.Request>;
    responseSerialize: grpc.serialize<service_workflow_service_pb.WorkflowSearchResult>;
    responseDeserialize: grpc.deserialize<service_workflow_service_pb.WorkflowSearchResult>;
}

export const WorkflowServiceService: IWorkflowServiceService;

export interface IWorkflowServiceServer extends grpc.UntypedServiceImplementation {
    startWorkflow: grpc.handleUnaryCall<model_startworkflowrequest_pb.StartWorkflowRequest, service_workflow_service_pb.StartWorkflowResponse>;
    getWorkflows: grpc.handleUnaryCall<service_workflow_service_pb.GetWorkflowsRequest, service_workflow_service_pb.GetWorkflowsResponse>;
    getWorkflowStatus: grpc.handleUnaryCall<service_workflow_service_pb.GetWorkflowStatusRequest, model_workflow_pb.Workflow>;
    removeWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.RemoveWorkflowRequest, service_workflow_service_pb.RemoveWorkflowResponse>;
    getRunningWorkflows: grpc.handleUnaryCall<service_workflow_service_pb.GetRunningWorkflowsRequest, service_workflow_service_pb.GetRunningWorkflowsResponse>;
    decideWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.DecideWorkflowRequest, service_workflow_service_pb.DecideWorkflowResponse>;
    pauseWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.PauseWorkflowRequest, service_workflow_service_pb.PauseWorkflowResponse>;
    resumeWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.ResumeWorkflowRequest, service_workflow_service_pb.ResumeWorkflowResponse>;
    skipTaskFromWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.SkipTaskRequest, service_workflow_service_pb.SkipTaskResponse>;
    rerunWorkflow: grpc.handleUnaryCall<model_rerunworkflowrequest_pb.RerunWorkflowRequest, service_workflow_service_pb.RerunWorkflowResponse>;
    restartWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.RestartWorkflowRequest, service_workflow_service_pb.RestartWorkflowResponse>;
    retryWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.RetryWorkflowRequest, service_workflow_service_pb.RetryWorkflowResponse>;
    resetWorkflowCallbacks: grpc.handleUnaryCall<service_workflow_service_pb.ResetWorkflowCallbacksRequest, service_workflow_service_pb.ResetWorkflowCallbacksResponse>;
    terminateWorkflow: grpc.handleUnaryCall<service_workflow_service_pb.TerminateWorkflowRequest, service_workflow_service_pb.TerminateWorkflowResponse>;
    search: grpc.handleUnaryCall<model_search_pb.Request, service_workflow_service_pb.WorkflowSummarySearchResult>;
    searchByTasks: grpc.handleUnaryCall<model_search_pb.Request, service_workflow_service_pb.WorkflowSummarySearchResult>;
    searchV2: grpc.handleUnaryCall<model_search_pb.Request, service_workflow_service_pb.WorkflowSearchResult>;
    searchByTasksV2: grpc.handleUnaryCall<model_search_pb.Request, service_workflow_service_pb.WorkflowSearchResult>;
}

export interface IWorkflowServiceClient {
    startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    search(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    searchByTasks(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    searchByTasks(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    searchByTasks(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    searchByTasksV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    searchByTasksV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    searchByTasksV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
}

export class WorkflowServiceClient extends grpc.Client implements IWorkflowServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public startWorkflow(request: model_startworkflowrequest_pb.StartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getWorkflows(request: service_workflow_service_pb.GetWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public getWorkflowStatus(request: service_workflow_service_pb.GetWorkflowStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    public removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    public removeWorkflow(request: service_workflow_service_pb.RemoveWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RemoveWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getRunningWorkflows(request: service_workflow_service_pb.GetRunningWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.GetRunningWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    public decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    public decideWorkflow(request: service_workflow_service_pb.DecideWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.DecideWorkflowResponse) => void): grpc.ClientUnaryCall;
    public pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    public pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    public pauseWorkflow(request: service_workflow_service_pb.PauseWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.PauseWorkflowResponse) => void): grpc.ClientUnaryCall;
    public resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    public resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    public resumeWorkflow(request: service_workflow_service_pb.ResumeWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResumeWorkflowResponse) => void): grpc.ClientUnaryCall;
    public skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    public skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    public skipTaskFromWorkflow(request: service_workflow_service_pb.SkipTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.SkipTaskResponse) => void): grpc.ClientUnaryCall;
    public rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    public rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    public rerunWorkflow(request: model_rerunworkflowrequest_pb.RerunWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RerunWorkflowResponse) => void): grpc.ClientUnaryCall;
    public restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public restartWorkflow(request: service_workflow_service_pb.RestartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RestartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    public retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    public retryWorkflow(request: service_workflow_service_pb.RetryWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.RetryWorkflowResponse) => void): grpc.ClientUnaryCall;
    public resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    public resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    public resetWorkflowCallbacks(request: service_workflow_service_pb.ResetWorkflowCallbacksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.ResetWorkflowCallbacksResponse) => void): grpc.ClientUnaryCall;
    public terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public terminateWorkflow(request: service_workflow_service_pb.TerminateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.TerminateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public search(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasks(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasks(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasks(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSummarySearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    public searchV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasksV2(request: model_search_pb.Request, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasksV2(request: model_search_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
    public searchByTasksV2(request: model_search_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_workflow_service_pb.WorkflowSearchResult) => void): grpc.ClientUnaryCall;
}
