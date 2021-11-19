
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { TaskServiceClient } from './proto/service/task_service_grpc_pb';
import { QueueAllInfoRequest } from './proto/service/task_service_pb';

export function iEqual(a:number):number{
    return a*10;
}

export class TaskClient {
    private grpcClient: TaskServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new TaskServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public GetQueueAllInfo(callback:(error:net.Error,response:net.Response) => void) {
        const req:QueueAllInfoRequest = new QueueAllInfoRequest();
        this.grpcClient.getQueueAllInfo(req, function(err, response) {
            console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getQueuesMap().arr_;
            callback(error, resp);
          });
    }
  }
