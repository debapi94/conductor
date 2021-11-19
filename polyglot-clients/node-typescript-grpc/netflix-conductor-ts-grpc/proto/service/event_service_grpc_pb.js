// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_event_service_pb = require('../service/event_service_pb.js');
var model_eventhandler_pb = require('../model/eventhandler_pb.js');

function serialize_conductor_grpc_events_AddEventHandlerRequest(arg) {
  if (!(arg instanceof service_event_service_pb.AddEventHandlerRequest)) {
    throw new Error('Expected argument of type conductor.grpc.events.AddEventHandlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_AddEventHandlerRequest(buffer_arg) {
  return service_event_service_pb.AddEventHandlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_AddEventHandlerResponse(arg) {
  if (!(arg instanceof service_event_service_pb.AddEventHandlerResponse)) {
    throw new Error('Expected argument of type conductor.grpc.events.AddEventHandlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_AddEventHandlerResponse(buffer_arg) {
  return service_event_service_pb.AddEventHandlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_GetEventHandlersForEventRequest(arg) {
  if (!(arg instanceof service_event_service_pb.GetEventHandlersForEventRequest)) {
    throw new Error('Expected argument of type conductor.grpc.events.GetEventHandlersForEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_GetEventHandlersForEventRequest(buffer_arg) {
  return service_event_service_pb.GetEventHandlersForEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_GetEventHandlersRequest(arg) {
  if (!(arg instanceof service_event_service_pb.GetEventHandlersRequest)) {
    throw new Error('Expected argument of type conductor.grpc.events.GetEventHandlersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_GetEventHandlersRequest(buffer_arg) {
  return service_event_service_pb.GetEventHandlersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_RemoveEventHandlerRequest(arg) {
  if (!(arg instanceof service_event_service_pb.RemoveEventHandlerRequest)) {
    throw new Error('Expected argument of type conductor.grpc.events.RemoveEventHandlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_RemoveEventHandlerRequest(buffer_arg) {
  return service_event_service_pb.RemoveEventHandlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_RemoveEventHandlerResponse(arg) {
  if (!(arg instanceof service_event_service_pb.RemoveEventHandlerResponse)) {
    throw new Error('Expected argument of type conductor.grpc.events.RemoveEventHandlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_RemoveEventHandlerResponse(buffer_arg) {
  return service_event_service_pb.RemoveEventHandlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_UpdateEventHandlerRequest(arg) {
  if (!(arg instanceof service_event_service_pb.UpdateEventHandlerRequest)) {
    throw new Error('Expected argument of type conductor.grpc.events.UpdateEventHandlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_UpdateEventHandlerRequest(buffer_arg) {
  return service_event_service_pb.UpdateEventHandlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_events_UpdateEventHandlerResponse(arg) {
  if (!(arg instanceof service_event_service_pb.UpdateEventHandlerResponse)) {
    throw new Error('Expected argument of type conductor.grpc.events.UpdateEventHandlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_events_UpdateEventHandlerResponse(buffer_arg) {
  return service_event_service_pb.UpdateEventHandlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_proto_EventHandler(arg) {
  if (!(arg instanceof model_eventhandler_pb.EventHandler)) {
    throw new Error('Expected argument of type conductor.proto.EventHandler');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_proto_EventHandler(buffer_arg) {
  return model_eventhandler_pb.EventHandler.deserializeBinary(new Uint8Array(buffer_arg));
}


// option node_js_grpc_package = "netflix-conductor-node-js-grpc";
//
var EventServiceService = exports.EventServiceService = {
  // POST /
addEventHandler: {
    path: '/conductor.grpc.events.EventService/AddEventHandler',
    requestStream: false,
    responseStream: false,
    requestType: service_event_service_pb.AddEventHandlerRequest,
    responseType: service_event_service_pb.AddEventHandlerResponse,
    requestSerialize: serialize_conductor_grpc_events_AddEventHandlerRequest,
    requestDeserialize: deserialize_conductor_grpc_events_AddEventHandlerRequest,
    responseSerialize: serialize_conductor_grpc_events_AddEventHandlerResponse,
    responseDeserialize: deserialize_conductor_grpc_events_AddEventHandlerResponse,
  },
  // PUT /
updateEventHandler: {
    path: '/conductor.grpc.events.EventService/UpdateEventHandler',
    requestStream: false,
    responseStream: false,
    requestType: service_event_service_pb.UpdateEventHandlerRequest,
    responseType: service_event_service_pb.UpdateEventHandlerResponse,
    requestSerialize: serialize_conductor_grpc_events_UpdateEventHandlerRequest,
    requestDeserialize: deserialize_conductor_grpc_events_UpdateEventHandlerRequest,
    responseSerialize: serialize_conductor_grpc_events_UpdateEventHandlerResponse,
    responseDeserialize: deserialize_conductor_grpc_events_UpdateEventHandlerResponse,
  },
  // DELETE /{name}
removeEventHandler: {
    path: '/conductor.grpc.events.EventService/RemoveEventHandler',
    requestStream: false,
    responseStream: false,
    requestType: service_event_service_pb.RemoveEventHandlerRequest,
    responseType: service_event_service_pb.RemoveEventHandlerResponse,
    requestSerialize: serialize_conductor_grpc_events_RemoveEventHandlerRequest,
    requestDeserialize: deserialize_conductor_grpc_events_RemoveEventHandlerRequest,
    responseSerialize: serialize_conductor_grpc_events_RemoveEventHandlerResponse,
    responseDeserialize: deserialize_conductor_grpc_events_RemoveEventHandlerResponse,
  },
  // GET /
getEventHandlers: {
    path: '/conductor.grpc.events.EventService/GetEventHandlers',
    requestStream: false,
    responseStream: true,
    requestType: service_event_service_pb.GetEventHandlersRequest,
    responseType: model_eventhandler_pb.EventHandler,
    requestSerialize: serialize_conductor_grpc_events_GetEventHandlersRequest,
    requestDeserialize: deserialize_conductor_grpc_events_GetEventHandlersRequest,
    responseSerialize: serialize_conductor_proto_EventHandler,
    responseDeserialize: deserialize_conductor_proto_EventHandler,
  },
  // GET /{name}
getEventHandlersForEvent: {
    path: '/conductor.grpc.events.EventService/GetEventHandlersForEvent',
    requestStream: false,
    responseStream: true,
    requestType: service_event_service_pb.GetEventHandlersForEventRequest,
    responseType: model_eventhandler_pb.EventHandler,
    requestSerialize: serialize_conductor_grpc_events_GetEventHandlersForEventRequest,
    requestDeserialize: deserialize_conductor_grpc_events_GetEventHandlersForEventRequest,
    responseSerialize: serialize_conductor_proto_EventHandler,
    responseDeserialize: deserialize_conductor_proto_EventHandler,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
