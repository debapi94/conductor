// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_task_service_pb = require('../service/task_service_pb.js');
var model_taskexeclog_pb = require('../model/taskexeclog_pb.js');
var model_taskresult_pb = require('../model/taskresult_pb.js');
var model_tasksummary_pb = require('../model/tasksummary_pb.js');
var model_task_pb = require('../model/task_pb.js');
var model_search_pb = require('../model/search_pb.js');

function serialize_conductor_grpc_search_Request(arg) {
  if (!(arg instanceof model_search_pb.Request)) {
    throw new Error('Expected argument of type conductor.grpc.search.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_search_Request(buffer_arg) {
  return model_search_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_AddLogRequest(arg) {
  if (!(arg instanceof service_task_service_pb.AddLogRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.AddLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_AddLogRequest(buffer_arg) {
  return service_task_service_pb.AddLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_AddLogResponse(arg) {
  if (!(arg instanceof service_task_service_pb.AddLogResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.AddLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_AddLogResponse(buffer_arg) {
  return service_task_service_pb.AddLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_BatchPollRequest(arg) {
  if (!(arg instanceof service_task_service_pb.BatchPollRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.BatchPollRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_BatchPollRequest(buffer_arg) {
  return service_task_service_pb.BatchPollRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_GetTaskLogsRequest(arg) {
  if (!(arg instanceof service_task_service_pb.GetTaskLogsRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.GetTaskLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_GetTaskLogsRequest(buffer_arg) {
  return service_task_service_pb.GetTaskLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_GetTaskLogsResponse(arg) {
  if (!(arg instanceof service_task_service_pb.GetTaskLogsResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.GetTaskLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_GetTaskLogsResponse(buffer_arg) {
  return service_task_service_pb.GetTaskLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_GetTaskRequest(arg) {
  if (!(arg instanceof service_task_service_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_GetTaskRequest(buffer_arg) {
  return service_task_service_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_GetTaskResponse(arg) {
  if (!(arg instanceof service_task_service_pb.GetTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.GetTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_GetTaskResponse(buffer_arg) {
  return service_task_service_pb.GetTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_PollRequest(arg) {
  if (!(arg instanceof service_task_service_pb.PollRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.PollRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_PollRequest(buffer_arg) {
  return service_task_service_pb.PollRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_PollResponse(arg) {
  if (!(arg instanceof service_task_service_pb.PollResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.PollResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_PollResponse(buffer_arg) {
  return service_task_service_pb.PollResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueAllInfoRequest(arg) {
  if (!(arg instanceof service_task_service_pb.QueueAllInfoRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueAllInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueAllInfoRequest(buffer_arg) {
  return service_task_service_pb.QueueAllInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueAllInfoResponse(arg) {
  if (!(arg instanceof service_task_service_pb.QueueAllInfoResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueAllInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueAllInfoResponse(buffer_arg) {
  return service_task_service_pb.QueueAllInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueInfoRequest(arg) {
  if (!(arg instanceof service_task_service_pb.QueueInfoRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueInfoRequest(buffer_arg) {
  return service_task_service_pb.QueueInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueInfoResponse(arg) {
  if (!(arg instanceof service_task_service_pb.QueueInfoResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueInfoResponse(buffer_arg) {
  return service_task_service_pb.QueueInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueSizesRequest(arg) {
  if (!(arg instanceof service_task_service_pb.QueueSizesRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueSizesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueSizesRequest(buffer_arg) {
  return service_task_service_pb.QueueSizesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_QueueSizesResponse(arg) {
  if (!(arg instanceof service_task_service_pb.QueueSizesResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.QueueSizesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_QueueSizesResponse(buffer_arg) {
  return service_task_service_pb.QueueSizesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_TaskSearchResult(arg) {
  if (!(arg instanceof service_task_service_pb.TaskSearchResult)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.TaskSearchResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_TaskSearchResult(buffer_arg) {
  return service_task_service_pb.TaskSearchResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_TaskSummarySearchResult(arg) {
  if (!(arg instanceof service_task_service_pb.TaskSummarySearchResult)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.TaskSummarySearchResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_TaskSummarySearchResult(buffer_arg) {
  return service_task_service_pb.TaskSummarySearchResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_UpdateTaskRequest(arg) {
  if (!(arg instanceof service_task_service_pb.UpdateTaskRequest)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.UpdateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_UpdateTaskRequest(buffer_arg) {
  return service_task_service_pb.UpdateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_grpc_tasks_UpdateTaskResponse(arg) {
  if (!(arg instanceof service_task_service_pb.UpdateTaskResponse)) {
    throw new Error('Expected argument of type conductor.grpc.tasks.UpdateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_grpc_tasks_UpdateTaskResponse(buffer_arg) {
  return service_task_service_pb.UpdateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_conductor_proto_Task(arg) {
  if (!(arg instanceof model_task_pb.Task)) {
    throw new Error('Expected argument of type conductor.proto.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_conductor_proto_Task(buffer_arg) {
  return model_task_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}


// option node_js_grpc_package = "netflix-conductor-node-js-grpc";
//
var TaskServiceService = exports.TaskServiceService = {
  // GET /poll/{tasktype}
poll: {
    path: '/conductor.grpc.tasks.TaskService/Poll',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.PollRequest,
    responseType: service_task_service_pb.PollResponse,
    requestSerialize: serialize_conductor_grpc_tasks_PollRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_PollRequest,
    responseSerialize: serialize_conductor_grpc_tasks_PollResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_PollResponse,
  },
  // /poll/batch/{tasktype}
batchPoll: {
    path: '/conductor.grpc.tasks.TaskService/BatchPoll',
    requestStream: false,
    responseStream: true,
    requestType: service_task_service_pb.BatchPollRequest,
    responseType: model_task_pb.Task,
    requestSerialize: serialize_conductor_grpc_tasks_BatchPollRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_BatchPollRequest,
    responseSerialize: serialize_conductor_proto_Task,
    responseDeserialize: deserialize_conductor_proto_Task,
  },
  // POST /
updateTask: {
    path: '/conductor.grpc.tasks.TaskService/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.UpdateTaskRequest,
    responseType: service_task_service_pb.UpdateTaskResponse,
    requestSerialize: serialize_conductor_grpc_tasks_UpdateTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_UpdateTaskRequest,
    responseSerialize: serialize_conductor_grpc_tasks_UpdateTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_UpdateTaskResponse,
  },
  // POST /{taskId}/log
addLog: {
    path: '/conductor.grpc.tasks.TaskService/AddLog',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.AddLogRequest,
    responseType: service_task_service_pb.AddLogResponse,
    requestSerialize: serialize_conductor_grpc_tasks_AddLogRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_AddLogRequest,
    responseSerialize: serialize_conductor_grpc_tasks_AddLogResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_AddLogResponse,
  },
  // GET {taskId}/log
getTaskLogs: {
    path: '/conductor.grpc.tasks.TaskService/GetTaskLogs',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.GetTaskLogsRequest,
    responseType: service_task_service_pb.GetTaskLogsResponse,
    requestSerialize: serialize_conductor_grpc_tasks_GetTaskLogsRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_GetTaskLogsRequest,
    responseSerialize: serialize_conductor_grpc_tasks_GetTaskLogsResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_GetTaskLogsResponse,
  },
  // GET /{taskId}
getTask: {
    path: '/conductor.grpc.tasks.TaskService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.GetTaskRequest,
    responseType: service_task_service_pb.GetTaskResponse,
    requestSerialize: serialize_conductor_grpc_tasks_GetTaskRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_GetTaskRequest,
    responseSerialize: serialize_conductor_grpc_tasks_GetTaskResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_GetTaskResponse,
  },
  // GET /queue/sizes
getQueueSizesForTasks: {
    path: '/conductor.grpc.tasks.TaskService/GetQueueSizesForTasks',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.QueueSizesRequest,
    responseType: service_task_service_pb.QueueSizesResponse,
    requestSerialize: serialize_conductor_grpc_tasks_QueueSizesRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_QueueSizesRequest,
    responseSerialize: serialize_conductor_grpc_tasks_QueueSizesResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_QueueSizesResponse,
  },
  // GET /queue/all
getQueueInfo: {
    path: '/conductor.grpc.tasks.TaskService/GetQueueInfo',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.QueueInfoRequest,
    responseType: service_task_service_pb.QueueInfoResponse,
    requestSerialize: serialize_conductor_grpc_tasks_QueueInfoRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_QueueInfoRequest,
    responseSerialize: serialize_conductor_grpc_tasks_QueueInfoResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_QueueInfoResponse,
  },
  // GET /queue/all/verbose
getQueueAllInfo: {
    path: '/conductor.grpc.tasks.TaskService/GetQueueAllInfo',
    requestStream: false,
    responseStream: false,
    requestType: service_task_service_pb.QueueAllInfoRequest,
    responseType: service_task_service_pb.QueueAllInfoResponse,
    requestSerialize: serialize_conductor_grpc_tasks_QueueAllInfoRequest,
    requestDeserialize: deserialize_conductor_grpc_tasks_QueueAllInfoRequest,
    responseSerialize: serialize_conductor_grpc_tasks_QueueAllInfoResponse,
    responseDeserialize: deserialize_conductor_grpc_tasks_QueueAllInfoResponse,
  },
  // GET /search
search: {
    path: '/conductor.grpc.tasks.TaskService/Search',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_task_service_pb.TaskSummarySearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_tasks_TaskSummarySearchResult,
    responseDeserialize: deserialize_conductor_grpc_tasks_TaskSummarySearchResult,
  },
  // GET /searchV2
searchV2: {
    path: '/conductor.grpc.tasks.TaskService/SearchV2',
    requestStream: false,
    responseStream: false,
    requestType: model_search_pb.Request,
    responseType: service_task_service_pb.TaskSearchResult,
    requestSerialize: serialize_conductor_grpc_search_Request,
    requestDeserialize: deserialize_conductor_grpc_search_Request,
    responseSerialize: serialize_conductor_grpc_tasks_TaskSearchResult,
    responseDeserialize: deserialize_conductor_grpc_tasks_TaskSearchResult,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
