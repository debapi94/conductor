// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_metadata_service_pb = require('../service/metadata_service_pb.js');
var model_taskdef_pb = require('../model/taskdef_pb.js');
var model_workflowdef_pb = require('../model/workflowdef_pb.js');

function serialize_conductor_grpc_metadata_CreateTasksRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.CreateTasksRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.CreateTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_CreateTasksRequest(buffer_arg) {
  return service_metadata_service_pb.CreateTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_CreateTasksResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.CreateTasksResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.CreateTasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_CreateTasksResponse(buffer_arg) {
  return service_metadata_service_pb.CreateTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_CreateWorkflowRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.CreateWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.CreateWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_CreateWorkflowRequest(buffer_arg) {
  return service_metadata_service_pb.CreateWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_CreateWorkflowResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.CreateWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.CreateWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_CreateWorkflowResponse(buffer_arg) {
  return service_metadata_service_pb.CreateWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_DeleteTaskRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_DeleteTaskRequest(buffer_arg) {
  return service_metadata_service_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_DeleteTaskResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.DeleteTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.DeleteTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_DeleteTaskResponse(buffer_arg) {
  return service_metadata_service_pb.DeleteTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_GetTaskRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_GetTaskRequest(buffer_arg) {
  return service_metadata_service_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_GetTaskResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.GetTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.GetTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_GetTaskResponse(buffer_arg) {
  return service_metadata_service_pb.GetTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_GetWorkflowRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.GetWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.GetWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_GetWorkflowRequest(buffer_arg) {
  return service_metadata_service_pb.GetWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_GetWorkflowResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.GetWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.GetWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_GetWorkflowResponse(buffer_arg) {
  return service_metadata_service_pb.GetWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_UpdateTaskRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.UpdateTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.UpdateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_UpdateTaskRequest(buffer_arg) {
  return service_metadata_service_pb.UpdateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_UpdateTaskResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.UpdateTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.UpdateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_UpdateTaskResponse(buffer_arg) {
  return service_metadata_service_pb.UpdateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_UpdateWorkflowsRequest(arg) {
  if (!(arg instanceof service_metadata_service_pb.UpdateWorkflowsRequest)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.UpdateWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_UpdateWorkflowsRequest(buffer_arg) {
  return service_metadata_service_pb.UpdateWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_metadata_UpdateWorkflowsResponse(arg) {
  if (!(arg instanceof service_metadata_service_pb.UpdateWorkflowsResponse)) {
    throw new Error('Expected argument of type conductor.grpc.metadata.UpdateWorkflowsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_metadata_UpdateWorkflowsResponse(buffer_arg) {
  return service_metadata_service_pb.UpdateWorkflowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// option node_js_grpc_package = "netflix-conductor-node-js-grpc";
//
var MetadataServiceService = exports.MetadataServiceService = {
  // POST /workflow
createWorkflow: {
    path: '/conductor.grpc.metadata.MetadataService/CreateWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.CreateWorkflowRequest,
    responseType: service_metadata_service_pb.CreateWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_metadata_CreateWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_CreateWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_metadata_CreateWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_CreateWorkflowResponse,
  },
  // PUT /workflow
updateWorkflows: {
    path: '/conductor.grpc.metadata.MetadataService/UpdateWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.UpdateWorkflowsRequest,
    responseType: service_metadata_service_pb.UpdateWorkflowsResponse,
    requestSerialize: serialize_conductor_grpc_metadata_UpdateWorkflowsRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_UpdateWorkflowsRequest,
    responseSerialize: serialize_conductor_grpc_metadata_UpdateWorkflowsResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_UpdateWorkflowsResponse,
  },
  // GET /workflow/{name}
getWorkflow: {
    path: '/conductor.grpc.metadata.MetadataService/GetWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.GetWorkflowRequest,
    responseType: service_metadata_service_pb.GetWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_metadata_GetWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_GetWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_metadata_GetWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_GetWorkflowResponse,
  },
  // POST /taskdefs
createTasks: {
    path: '/conductor.grpc.metadata.MetadataService/CreateTasks',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.CreateTasksRequest,
    responseType: service_metadata_service_pb.CreateTasksResponse,
    requestSerialize: serialize_conductor_grpc_metadata_CreateTasksRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_CreateTasksRequest,
    responseSerialize: serialize_conductor_grpc_metadata_CreateTasksResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_CreateTasksResponse,
  },
  // PUT /taskdefs
updateTask: {
    path: '/conductor.grpc.metadata.MetadataService/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.UpdateTaskRequest,
    responseType: service_metadata_service_pb.UpdateTaskResponse,
    requestSerialize: serialize_conductor_grpc_metadata_UpdateTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_UpdateTaskRequest,
    responseSerialize: serialize_conductor_grpc_metadata_UpdateTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_UpdateTaskResponse,
  },
  // GET /taskdefs/{tasktype}
getTask: {
    path: '/conductor.grpc.metadata.MetadataService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.GetTaskRequest,
    responseType: service_metadata_service_pb.GetTaskResponse,
    requestSerialize: serialize_conductor_grpc_metadata_GetTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_GetTaskRequest,
    responseSerialize: serialize_conductor_grpc_metadata_GetTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_GetTaskResponse,
  },
  // DELETE /taskdefs/{tasktype}
deleteTask: {
    path: '/conductor.grpc.metadata.MetadataService/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: service_metadata_service_pb.DeleteTaskRequest,
    responseType: service_metadata_service_pb.DeleteTaskResponse,
    requestSerialize: serialize_conductor_grpc_metadata_DeleteTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_metadata_DeleteTaskRequest,
    responseSerialize: serialize_conductor_grpc_metadata_DeleteTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_metadata_DeleteTaskResponse,
  },
};

exports.MetadataServiceClient = grpc.makeGenericClientConstructor(MetadataServiceService);
