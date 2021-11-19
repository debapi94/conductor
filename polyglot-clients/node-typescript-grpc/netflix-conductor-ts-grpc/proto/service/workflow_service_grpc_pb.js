// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_workflow_service_pb = require('../service/workflow_service_pb.js');
var model_search_pb = require('../model/search_pb.js');
var model_workflow_pb = require('../model/workflow_pb.js');
var model_workflowsummary_pb = require('../model/workflowsummary_pb.js');
var model_skiptaskrequest_pb = require('../model/skiptaskrequest_pb.js');
var model_startworkflowrequest_pb = require('../model/startworkflowrequest_pb.js');
var model_rerunworkflowrequest_pb = require('../model/rerunworkflowrequest_pb.js');

function serialize_conductor_grpc_search_Request(arg) {
  if (!(arg instanceof model_search_pb.Request)) {
    throw new Error('Expected argument of type conductor.grpc.search.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_search_Request(buffer_arg) {
  return model_search_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_DecideWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.DecideWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.DecideWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_DecideWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.DecideWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_DecideWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.DecideWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.DecideWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_DecideWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.DecideWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_GetRunningWorkflowsRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.GetRunningWorkflowsRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.GetRunningWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_GetRunningWorkflowsRequest(buffer_arg) {
  return service_workflow_service_pb.GetRunningWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_GetRunningWorkflowsResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.GetRunningWorkflowsResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.GetRunningWorkflowsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_GetRunningWorkflowsResponse(buffer_arg) {
  return service_workflow_service_pb.GetRunningWorkflowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_GetWorkflowStatusRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.GetWorkflowStatusRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.GetWorkflowStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_GetWorkflowStatusRequest(buffer_arg) {
  return service_workflow_service_pb.GetWorkflowStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_GetWorkflowsRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.GetWorkflowsRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.GetWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_GetWorkflowsRequest(buffer_arg) {
  return service_workflow_service_pb.GetWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_GetWorkflowsResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.GetWorkflowsResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.GetWorkflowsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_GetWorkflowsResponse(buffer_arg) {
  return service_workflow_service_pb.GetWorkflowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_PauseWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.PauseWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.PauseWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_PauseWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.PauseWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_PauseWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.PauseWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.PauseWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_PauseWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.PauseWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RemoveWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.RemoveWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RemoveWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RemoveWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.RemoveWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RemoveWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.RemoveWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RemoveWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RemoveWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.RemoveWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RerunWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.RerunWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RerunWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RerunWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.RerunWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_ResetWorkflowCallbacksRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.ResetWorkflowCallbacksRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.ResetWorkflowCallbacksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_ResetWorkflowCallbacksRequest(buffer_arg) {
  return service_workflow_service_pb.ResetWorkflowCallbacksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_ResetWorkflowCallbacksResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.ResetWorkflowCallbacksResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.ResetWorkflowCallbacksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_ResetWorkflowCallbacksResponse(buffer_arg) {
  return service_workflow_service_pb.ResetWorkflowCallbacksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RestartWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.RestartWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RestartWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RestartWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.RestartWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RestartWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.RestartWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RestartWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RestartWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.RestartWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_ResumeWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.ResumeWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.ResumeWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_ResumeWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.ResumeWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_ResumeWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.ResumeWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.ResumeWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_ResumeWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.ResumeWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RetryWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.RetryWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RetryWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RetryWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.RetryWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_RetryWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.RetryWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.RetryWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_RetryWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.RetryWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_SkipTaskRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.SkipTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.SkipTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_SkipTaskRequest(buffer_arg) {
  return service_workflow_service_pb.SkipTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_SkipTaskResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.SkipTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.SkipTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_SkipTaskResponse(buffer_arg) {
  return service_workflow_service_pb.SkipTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_StartWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.StartWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.StartWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_StartWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.StartWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_TerminateWorkflowRequest(arg) {
  if (!(arg instanceof service_workflow_service_pb.TerminateWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.TerminateWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_TerminateWorkflowRequest(buffer_arg) {
  return service_workflow_service_pb.TerminateWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_TerminateWorkflowResponse(arg) {
  if (!(arg instanceof service_workflow_service_pb.TerminateWorkflowResponse)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.TerminateWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_TerminateWorkflowResponse(buffer_arg) {
  return service_workflow_service_pb.TerminateWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_WorkflowSearchResult(arg) {
  if (!(arg instanceof service_workflow_service_pb.WorkflowSearchResult)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.WorkflowSearchResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_WorkflowSearchResult(buffer_arg) {
  return service_workflow_service_pb.WorkflowSearchResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_workflows_WorkflowSummarySearchResult(arg) {
  if (!(arg instanceof service_workflow_service_pb.WorkflowSummarySearchResult)) {
    throw new Error('Expected argument of type conductor.grpc.workflows.WorkflowSummarySearchResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_workflows_WorkflowSummarySearchResult(buffer_arg) {
  return service_workflow_service_pb.WorkflowSummarySearchResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_proto_RerunWorkflowRequest(arg) {
  if (!(arg instanceof model_rerunworkflowrequest_pb.RerunWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.proto.RerunWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_proto_RerunWorkflowRequest(buffer_arg) {
  return model_rerunworkflowrequest_pb.RerunWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_proto_StartWorkflowRequest(arg) {
  if (!(arg instanceof model_startworkflowrequest_pb.StartWorkflowRequest)) {
    throw new Error('Expected argument of type conductor.proto.StartWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_proto_StartWorkflowRequest(buffer_arg) {
  return model_startworkflowrequest_pb.StartWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_proto_Workflow(arg) {
  if (!(arg instanceof model_workflow_pb.Workflow)) {
    throw new Error('Expected argument of type conductor.proto.Workflow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_proto_Workflow(buffer_arg) {
  return model_workflow_pb.Workflow.deserializeBinary(new Uint8Array(buffer_arg));
}


// option node_js_grpc_package = "netflix-conductor-node-js-grpc";
//
var WorkflowServiceService = exports.WorkflowServiceService = {
  // POST /
startWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/StartWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: model_startworkflowrequest_pb.StartWorkflowRequest,
    responseType: service_workflow_service_pb.StartWorkflowResponse,
    requestSerialize: serialize_conductor_proto_StartWorkflowRequest,
    requestDeserialize: deserialize_conductor_proto_StartWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_StartWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_StartWorkflowResponse,
  },
  // GET /{name}/correlated/{correlationId}
getWorkflows: {
    path: '/conductor.grpc.workflows.WorkflowService/GetWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.GetWorkflowsRequest,
    responseType: service_workflow_service_pb.GetWorkflowsResponse,
    requestSerialize: serialize_conductor_grpc_workflows_GetWorkflowsRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_GetWorkflowsRequest,
    responseSerialize: serialize_conductor_grpc_workflows_GetWorkflowsResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_GetWorkflowsResponse,
  },
  // GET /{workflowId}
getWorkflowStatus: {
    path: '/conductor.grpc.workflows.WorkflowService/GetWorkflowStatus',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.GetWorkflowStatusRequest,
    responseType: model_workflow_pb.Workflow,
    requestSerialize: serialize_conductor_grpc_workflows_GetWorkflowStatusRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_GetWorkflowStatusRequest,
    responseSerialize: serialize_conductor_proto_Workflow,
    responseDeserialize: deserialize_conductor_proto_Workflow,
  },
  // DELETE /{workflodId}/remove
removeWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/RemoveWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.RemoveWorkflowRequest,
    responseType: service_workflow_service_pb.RemoveWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_RemoveWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_RemoveWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_RemoveWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_RemoveWorkflowResponse,
  },
  // GET /running/{name}
getRunningWorkflows: {
    path: '/conductor.grpc.workflows.WorkflowService/GetRunningWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.GetRunningWorkflowsRequest,
    responseType: service_workflow_service_pb.GetRunningWorkflowsResponse,
    requestSerialize: serialize_conductor_grpc_workflows_GetRunningWorkflowsRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_GetRunningWorkflowsRequest,
    responseSerialize: serialize_conductor_grpc_workflows_GetRunningWorkflowsResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_GetRunningWorkflowsResponse,
  },
  // PUT /decide/{workflowId}
decideWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/DecideWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.DecideWorkflowRequest,
    responseType: service_workflow_service_pb.DecideWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_DecideWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_DecideWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_DecideWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_DecideWorkflowResponse,
  },
  // PUT /{workflowId}/pause
pauseWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/PauseWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.PauseWorkflowRequest,
    responseType: service_workflow_service_pb.PauseWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_PauseWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_PauseWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_PauseWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_PauseWorkflowResponse,
  },
  // PUT /{workflowId}/pause
resumeWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/ResumeWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.ResumeWorkflowRequest,
    responseType: service_workflow_service_pb.ResumeWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_ResumeWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_ResumeWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_ResumeWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_ResumeWorkflowResponse,
  },
  // PUT /{workflowId}/skiptask/{taskReferenceName}
skipTaskFromWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/SkipTaskFromWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.SkipTaskRequest,
    responseType: service_workflow_service_pb.SkipTaskResponse,
    requestSerialize: serialize_conductor_grpc_workflows_SkipTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_SkipTaskRequest,
    responseSerialize: serialize_conductor_grpc_workflows_SkipTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_SkipTaskResponse,
  },
  // POST /{workflowId}/rerun
rerunWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/RerunWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: model_rerunworkflowrequest_pb.RerunWorkflowRequest,
    responseType: service_workflow_service_pb.RerunWorkflowResponse,
    requestSerialize: serialize_conductor_proto_RerunWorkflowRequest,
    requestDeserialize: deserialize_conductor_proto_RerunWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_RerunWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_RerunWorkflowResponse,
  },
  // POST /{workflowId}/restart
restartWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/RestartWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.RestartWorkflowRequest,
    responseType: service_workflow_service_pb.RestartWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_RestartWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_RestartWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_RestartWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_RestartWorkflowResponse,
  },
  // POST /{workflowId}retry
retryWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/RetryWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.RetryWorkflowRequest,
    responseType: service_workflow_service_pb.RetryWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_RetryWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_RetryWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_RetryWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_RetryWorkflowResponse,
  },
  // POST /{workflowId}/resetcallbacks
resetWorkflowCallbacks: {
    path: '/conductor.grpc.workflows.WorkflowService/ResetWorkflowCallbacks',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.ResetWorkflowCallbacksRequest,
    responseType: service_workflow_service_pb.ResetWorkflowCallbacksResponse,
    requestSerialize: serialize_conductor_grpc_workflows_ResetWorkflowCallbacksRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_ResetWorkflowCallbacksRequest,
    responseSerialize: serialize_conductor_grpc_workflows_ResetWorkflowCallbacksResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_ResetWorkflowCallbacksResponse,
  },
  // DELETE /{workflowId}
terminateWorkflow: {
    path: '/conductor.grpc.workflows.WorkflowService/TerminateWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: service_workflow_service_pb.TerminateWorkflowRequest,
    responseType: service_workflow_service_pb.TerminateWorkflowResponse,
    requestSerialize: serialize_conductor_grpc_workflows_TerminateWorkflowRequest,
    requestDeserialize: deserialize_conductor_grpc_workflows_TerminateWorkflowRequest,
    responseSerialize: serialize_conductor_grpc_workflows_TerminateWorkflowResponse,
    responseDeserialize: deserialize_conductor_grpc_workflows_TerminateWorkflowResponse,
  },
  // GET /search
search: {
    path: '/conductor.grpc.workflows.WorkflowService/Search',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_workflow_service_pb.WorkflowSummarySearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_workflows_WorkflowSummarySearchResult,
    responseDeserialize: deserialize_conductor_grpc_workflows_WorkflowSummarySearchResult,
  },
  searchByTasks: {
    path: '/conductor.grpc.workflows.WorkflowService/SearchByTasks',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_workflow_service_pb.WorkflowSummarySearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_workflows_WorkflowSummarySearchResult,
    responseDeserialize: deserialize_conductor_grpc_workflows_WorkflowSummarySearchResult,
  },
  // GET /searchV2
searchV2: {
    path: '/conductor.grpc.workflows.WorkflowService/SearchV2',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_workflow_service_pb.WorkflowSearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_workflows_WorkflowSearchResult,
    responseDeserialize: deserialize_conductor_grpc_workflows_WorkflowSearchResult,
  },
  searchByTasksV2: {
    path: '/conductor.grpc.workflows.WorkflowService/SearchByTasksV2',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_workflow_service_pb.WorkflowSearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_workflows_WorkflowSearchResult,
    responseDeserialize: deserialize_conductor_grpc_workflows_WorkflowSearchResult,
  },
};

exports.WorkflowServiceClient = grpc.makeGenericClientConstructor(WorkflowServiceService);
