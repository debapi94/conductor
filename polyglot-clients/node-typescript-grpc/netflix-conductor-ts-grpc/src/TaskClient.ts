
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { TaskServiceClient } from '../proto/service/task_service_grpc_pb';
import * as tasks from '../proto/service/task_service_pb';
import { Task } from '../proto/model/task_pb';
import { TaskResult } from '../proto/model/taskresult_pb';

export function iEqual(a:number):number{
    return a*10;
}

export class TaskClient {
    private grpcClient: TaskServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new TaskServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public getTask(taskId:string, callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.GetTaskRequest();
        req.setTaskId(taskId);

        this.grpcClient.getTask(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && JSON.stringify(response.getTask());
            callback(error, resp);
          });
    }
   
    public updateTask(taskResultObj:TaskResult, callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.UpdateTaskRequest();
        req.setResult(taskResultObj);

        this.grpcClient.updateTask(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getTaskId();
            callback(error, resp);
          });
    }
   
    public poll(callback:(error:net.Error,response:net.Response) => void, 
                taskReferenceName:string, workerId?:string, domain?:string) {
        const req = new tasks.PollRequest();
        req.setTaskType(taskReferenceName);
        if(workerId)
          req.setWorkerId(workerId);
        if(domain)
          req.setDomain(domain);

        this.grpcClient.poll(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            
            resp.value = response && response.getTask();
            callback(error, resp);
          });
    }
   
    public getTaskLogs(callback:(error:net.Error,response:net.Response) => void, taskId:string) {
        const req = new tasks.GetTaskLogsRequest();
        req.setTaskId(taskId);

        this.grpcClient.getTaskLogs(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && JSON.stringify(response.getLogsList());
            callback(error, resp);
          });
    }
   
    public getQueueInfo(callback:(error:net.Error,response:net.Response) => void, taskId:string) {
        const req = new tasks.QueueInfoRequest();

        this.grpcClient.getQueueInfo(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getQueuesMap();
            callback(error, resp);
          });
    }
   
    public getQueueAllInfo(callback:(error:net.Error,response:net.Response) => void) {
        const req = new tasks.QueueAllInfoRequest();
        this.grpcClient.getQueueAllInfo(req, function(err, response) {
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getQueuesMap().arr_;
            callback(error, resp);
          });
    }
  }
