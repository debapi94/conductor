// package: conductor.grpc.metadata
// file: service/metadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_metadata_service_pb from "../service/metadata_service_pb";
import * as model_taskdef_pb from "../model/taskdef_pb";
import * as model_workflowdef_pb from "../model/workflowdef_pb";

interface IMetadataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWorkflow: IMetadataServiceService_ICreateWorkflow;
    updateWorkflows: IMetadataServiceService_IUpdateWorkflows;
    getWorkflow: IMetadataServiceService_IGetWorkflow;
    createTasks: IMetadataServiceService_ICreateTasks;
    updateTask: IMetadataServiceService_IUpdateTask;
    getTask: IMetadataServiceService_IGetTask;
    deleteTask: IMetadataServiceService_IDeleteTask;
}

interface IMetadataServiceService_ICreateWorkflow extends grpc.MethodDefinition<service_metadata_service_pb.CreateWorkflowRequest, service_metadata_service_pb.CreateWorkflowResponse> {
    path: "/conductor.grpc.metadata.MetadataService/CreateWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.CreateWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.CreateWorkflowRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.CreateWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.CreateWorkflowResponse>;
}
interface IMetadataServiceService_IUpdateWorkflows extends grpc.MethodDefinition<service_metadata_service_pb.UpdateWorkflowsRequest, service_metadata_service_pb.UpdateWorkflowsResponse> {
    path: "/conductor.grpc.metadata.MetadataService/UpdateWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.UpdateWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.UpdateWorkflowsRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.UpdateWorkflowsResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.UpdateWorkflowsResponse>;
}
interface IMetadataServiceService_IGetWorkflow extends grpc.MethodDefinition<service_metadata_service_pb.GetWorkflowRequest, service_metadata_service_pb.GetWorkflowResponse> {
    path: "/conductor.grpc.metadata.MetadataService/GetWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.GetWorkflowRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.GetWorkflowRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.GetWorkflowResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.GetWorkflowResponse>;
}
interface IMetadataServiceService_ICreateTasks extends grpc.MethodDefinition<service_metadata_service_pb.CreateTasksRequest, service_metadata_service_pb.CreateTasksResponse> {
    path: "/conductor.grpc.metadata.MetadataService/CreateTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.CreateTasksRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.CreateTasksRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.CreateTasksResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.CreateTasksResponse>;
}
interface IMetadataServiceService_IUpdateTask extends grpc.MethodDefinition<service_metadata_service_pb.UpdateTaskRequest, service_metadata_service_pb.UpdateTaskResponse> {
    path: "/conductor.grpc.metadata.MetadataService/UpdateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.UpdateTaskRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.UpdateTaskRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.UpdateTaskResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.UpdateTaskResponse>;
}
interface IMetadataServiceService_IGetTask extends grpc.MethodDefinition<service_metadata_service_pb.GetTaskRequest, service_metadata_service_pb.GetTaskResponse> {
    path: "/conductor.grpc.metadata.MetadataService/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.GetTaskResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.GetTaskResponse>;
}
interface IMetadataServiceService_IDeleteTask extends grpc.MethodDefinition<service_metadata_service_pb.DeleteTaskRequest, service_metadata_service_pb.DeleteTaskResponse> {
    path: "/conductor.grpc.metadata.MetadataService/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_metadata_service_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<service_metadata_service_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<service_metadata_service_pb.DeleteTaskResponse>;
    responseDeserialize: grpc.deserialize<service_metadata_service_pb.DeleteTaskResponse>;
}

export const MetadataServiceService: IMetadataServiceService;

export interface IMetadataServiceServer extends grpc.UntypedServiceImplementation {
    createWorkflow: grpc.handleUnaryCall<service_metadata_service_pb.CreateWorkflowRequest, service_metadata_service_pb.CreateWorkflowResponse>;
    updateWorkflows: grpc.handleUnaryCall<service_metadata_service_pb.UpdateWorkflowsRequest, service_metadata_service_pb.UpdateWorkflowsResponse>;
    getWorkflow: grpc.handleUnaryCall<service_metadata_service_pb.GetWorkflowRequest, service_metadata_service_pb.GetWorkflowResponse>;
    createTasks: grpc.handleUnaryCall<service_metadata_service_pb.CreateTasksRequest, service_metadata_service_pb.CreateTasksResponse>;
    updateTask: grpc.handleUnaryCall<service_metadata_service_pb.UpdateTaskRequest, service_metadata_service_pb.UpdateTaskResponse>;
    getTask: grpc.handleUnaryCall<service_metadata_service_pb.GetTaskRequest, service_metadata_service_pb.GetTaskResponse>;
    deleteTask: grpc.handleUnaryCall<service_metadata_service_pb.DeleteTaskRequest, service_metadata_service_pb.DeleteTaskResponse>;
}

export interface IMetadataServiceClient {
    createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    createTasks(request: service_metadata_service_pb.CreateTasksRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    createTasks(request: service_metadata_service_pb.CreateTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    createTasks(request: service_metadata_service_pb.CreateTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: service_metadata_service_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: service_metadata_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: service_metadata_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_metadata_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_metadata_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: service_metadata_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
}

export class MetadataServiceClient extends grpc.Client implements IMetadataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public createWorkflow(request: service_metadata_service_pb.CreateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateWorkflowResponse) => void): grpc.ClientUnaryCall;
    public updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public updateWorkflows(request: service_metadata_service_pb.UpdateWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: service_metadata_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetWorkflowResponse) => void): grpc.ClientUnaryCall;
    public createTasks(request: service_metadata_service_pb.CreateTasksRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    public createTasks(request: service_metadata_service_pb.CreateTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    public createTasks(request: service_metadata_service_pb.CreateTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.CreateTasksResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: service_metadata_service_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: service_metadata_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: service_metadata_service_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_metadata_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_metadata_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: service_metadata_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.GetTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: service_metadata_service_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_metadata_service_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
}
