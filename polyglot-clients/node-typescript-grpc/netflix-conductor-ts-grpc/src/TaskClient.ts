
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { TaskServiceClient } from '../proto/service/task_service_grpc_pb';
import * as tasks from '../proto/service/task_service_pb';
import { Task } from '../proto/model/task_pb';

export function iEqual(a:number):number{
    return a*10;
}

export class TaskClient {
    private grpcClient: TaskServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new TaskServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public GetTask(taskId:string, callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.GetTaskRequest();
        req.setTaskId(taskId);

        this.grpcClient.getTask(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && JSON.stringify(response.getTask());
            callback(error, resp);
          });
    }
   
    public UpdateTask(taskObj:Task, callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.UpdateTaskRequest();

        this.grpcClient.updateTask(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getTaskId();
            callback(error, resp);
          });
    }
   
    public Poll(callback:(error:net.Error,response:net.Response) => void, 
                workerId:string, taskType:string, domain?:string) {
        const req = new tasks.PollRequest();
        req.setWorkerId(workerId);
        req.setTaskType(taskType);
        if(domain)
          req.setDomain(domain);

        this.grpcClient.poll(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && JSON.stringify(response.getTask());
            callback(error, resp);
          });
    }
   
    public PollBatch(callback:(error:net.Error,response:net.Response) => void
    , workerId:string, taskType:string, count:number, timeOut:number, domain?:string) {
        const req = new tasks.BatchPollRequest();
        req.setTimeout(timeOut);
        req.setCount(count);
        req.setWorkerId(workerId);
        req.setTaskType(taskType);
        if(domain)
          req.setDomain(domain);

          //TODO stream implementation
        // this.grpcClient.batchPoll(req, function(err, response) {
        //     //console.log(err);
        //     // console.log(response);
        //     const error = new net.Error();
        //     error.message = err ? err.message : ""; 
        //     const resp = new net.Response();
        //     resp.value = response && JSON.stringify(response.getTask());
        //     callback(error, resp);
        //   });
    }
   
    public GetTaskLogs(callback:(error:net.Error,response:net.Response) => void, taskId:string) {
        const req = new tasks.GetTaskLogsRequest();
        req.setTaskId(taskId);

        this.grpcClient.getTaskLogs(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && JSON.stringify(response.getLogsList());
            callback(error, resp);
          });
    }
   
    public GetQueueInfo(callback:(error:net.Error,response:net.Response) => void, taskId:string) {
        const req = new tasks.QueueInfoRequest();

        this.grpcClient.getQueueInfo(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getQueuesMap();
            callback(error, resp);
          });
    }
   
    public GetQueueAllInfo(callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.QueueAllInfoRequest();
        this.grpcClient.getQueueAllInfo(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getQueuesMap().arr_;
            callback(error, resp);
          });
    }
  }
