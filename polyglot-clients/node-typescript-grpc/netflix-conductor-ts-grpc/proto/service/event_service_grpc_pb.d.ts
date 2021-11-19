// package: conductor.grpc.events
// file: service/event_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_event_service_pb from "../service/event_service_pb";
import * as model_eventhandler_pb from "../model/eventhandler_pb";

interface IEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addEventHandler: IEventServiceService_IAddEventHandler;
    updateEventHandler: IEventServiceService_IUpdateEventHandler;
    removeEventHandler: IEventServiceService_IRemoveEventHandler;
    getEventHandlers: IEventServiceService_IGetEventHandlers;
    getEventHandlersForEvent: IEventServiceService_IGetEventHandlersForEvent;
}

interface IEventServiceService_IAddEventHandler extends grpc.MethodDefinition<service_event_service_pb.AddEventHandlerRequest, service_event_service_pb.AddEventHandlerResponse> {
    path: "/conductor.grpc.events.EventService/AddEventHandler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_event_service_pb.AddEventHandlerRequest>;
    requestDeserialize: grpc.deserialize<service_event_service_pb.AddEventHandlerRequest>;
    responseSerialize: grpc.serialize<service_event_service_pb.AddEventHandlerResponse>;
    responseDeserialize: grpc.deserialize<service_event_service_pb.AddEventHandlerResponse>;
}
interface IEventServiceService_IUpdateEventHandler extends grpc.MethodDefinition<service_event_service_pb.UpdateEventHandlerRequest, service_event_service_pb.UpdateEventHandlerResponse> {
    path: "/conductor.grpc.events.EventService/UpdateEventHandler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_event_service_pb.UpdateEventHandlerRequest>;
    requestDeserialize: grpc.deserialize<service_event_service_pb.UpdateEventHandlerRequest>;
    responseSerialize: grpc.serialize<service_event_service_pb.UpdateEventHandlerResponse>;
    responseDeserialize: grpc.deserialize<service_event_service_pb.UpdateEventHandlerResponse>;
}
interface IEventServiceService_IRemoveEventHandler extends grpc.MethodDefinition<service_event_service_pb.RemoveEventHandlerRequest, service_event_service_pb.RemoveEventHandlerResponse> {
    path: "/conductor.grpc.events.EventService/RemoveEventHandler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_event_service_pb.RemoveEventHandlerRequest>;
    requestDeserialize: grpc.deserialize<service_event_service_pb.RemoveEventHandlerRequest>;
    responseSerialize: grpc.serialize<service_event_service_pb.RemoveEventHandlerResponse>;
    responseDeserialize: grpc.deserialize<service_event_service_pb.RemoveEventHandlerResponse>;
}
interface IEventServiceService_IGetEventHandlers extends grpc.MethodDefinition<service_event_service_pb.GetEventHandlersRequest, model_eventhandler_pb.EventHandler> {
    path: "/conductor.grpc.events.EventService/GetEventHandlers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<service_event_service_pb.GetEventHandlersRequest>;
    requestDeserialize: grpc.deserialize<service_event_service_pb.GetEventHandlersRequest>;
    responseSerialize: grpc.serialize<model_eventhandler_pb.EventHandler>;
    responseDeserialize: grpc.deserialize<model_eventhandler_pb.EventHandler>;
}
interface IEventServiceService_IGetEventHandlersForEvent extends grpc.MethodDefinition<service_event_service_pb.GetEventHandlersForEventRequest, model_eventhandler_pb.EventHandler> {
    path: "/conductor.grpc.events.EventService/GetEventHandlersForEvent";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<service_event_service_pb.GetEventHandlersForEventRequest>;
    requestDeserialize: grpc.deserialize<service_event_service_pb.GetEventHandlersForEventRequest>;
    responseSerialize: grpc.serialize<model_eventhandler_pb.EventHandler>;
    responseDeserialize: grpc.deserialize<model_eventhandler_pb.EventHandler>;
}

export const EventServiceService: IEventServiceService;

export interface IEventServiceServer extends grpc.UntypedServiceImplementation {
    addEventHandler: grpc.handleUnaryCall<service_event_service_pb.AddEventHandlerRequest, service_event_service_pb.AddEventHandlerResponse>;
    updateEventHandler: grpc.handleUnaryCall<service_event_service_pb.UpdateEventHandlerRequest, service_event_service_pb.UpdateEventHandlerResponse>;
    removeEventHandler: grpc.handleUnaryCall<service_event_service_pb.RemoveEventHandlerRequest, service_event_service_pb.RemoveEventHandlerResponse>;
    getEventHandlers: grpc.handleServerStreamingCall<service_event_service_pb.GetEventHandlersRequest, model_eventhandler_pb.EventHandler>;
    getEventHandlersForEvent: grpc.handleServerStreamingCall<service_event_service_pb.GetEventHandlersForEventRequest, model_eventhandler_pb.EventHandler>;
}

export interface IEventServiceClient {
    addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    getEventHandlers(request: service_event_service_pb.GetEventHandlersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    getEventHandlers(request: service_event_service_pb.GetEventHandlersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    getEventHandlersForEvent(request: service_event_service_pb.GetEventHandlersForEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    getEventHandlersForEvent(request: service_event_service_pb.GetEventHandlersForEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
}

export class EventServiceClient extends grpc.Client implements IEventServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public addEventHandler(request: service_event_service_pb.AddEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.AddEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public updateEventHandler(request: service_event_service_pb.UpdateEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.UpdateEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public removeEventHandler(request: service_event_service_pb.RemoveEventHandlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_event_service_pb.RemoveEventHandlerResponse) => void): grpc.ClientUnaryCall;
    public getEventHandlers(request: service_event_service_pb.GetEventHandlersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    public getEventHandlers(request: service_event_service_pb.GetEventHandlersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    public getEventHandlersForEvent(request: service_event_service_pb.GetEventHandlersForEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
    public getEventHandlersForEvent(request: service_event_service_pb.GetEventHandlersForEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<model_eventhandler_pb.EventHandler>;
}
