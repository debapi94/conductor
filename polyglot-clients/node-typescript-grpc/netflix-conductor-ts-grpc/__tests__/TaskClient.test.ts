import * as grpc from "@grpc/grpc-js";
import * as taskClient from '../src/TaskClient';
import * as common from '../src/common';
import * as tasks from "../proto/service/task_service_pb";
import { TaskServiceClient } from "../proto/service/task_service_grpc_pb";

type cb_getQueueAllInfo = (error: grpc.ServiceError | null, response: tasks.QueueAllInfoResponse) => void;
type cb_getQueueInfo = (error: grpc.ServiceError | null, response: tasks.QueueInfoResponse) => void;

jest.mock("../proto/service/task_service_grpc_pb", () => {
    // Works and lets you check for constructor calls:
    return {
        TaskServiceClient: jest.fn().mockImplementation(() => {
        return {
            getQueueAllInfo: (req:tasks.QueueAllInfoRequest, cb:cb_getQueueAllInfo) => { cb(null, new tasks.QueueAllInfoResponse()) },
            getQueueInfo: (req:tasks.QueueInfoRequest, cb:cb_getQueueInfo) => { cb(null, new tasks.QueueInfoResponse()) }
        };
      }),
    };
  });

test("getQueueAllInfo error", () => {
    const client = new taskClient.TaskClient("localhost:0000");
    client.getQueueAllInfo(callback);

    function callback(err:common.Error,resp:common.Response){
        //console.log(err);
        //console.log(resp);
        expect(err.message).not.toBeNull();
    }
});

test("getQueueInfo error", () => {
    const client = new taskClient.TaskClient("localhost:0000");
    client.getQueueInfo(callback);

    function callback(err:common.Error,resp:common.Response){
        expect(err.message).not.toBeNull();
        //expect(resp.value).toBeFalsy();
    }
});