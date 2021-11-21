
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { WorkflowServiceClient } from '../proto/service/workflow_service_grpc_pb';
import { GetWorkflowsRequest } from '../proto/service/workflow_service_pb';
import { StartWorkflowRequest } from '../proto/model/startworkflowrequest_pb';

export class WorkflowClient {
    private grpcClient: WorkflowServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new WorkflowServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public GetWorkflows(callback:(error:net.Error,response:net.Response) => void) {
        const req = new GetWorkflowsRequest();
        this.grpcClient.getWorkflows(req, function(err, response) {
            //console.log(err);
            // console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getWorkflowsByIdMap().arr_;
            callback(error, resp);
          });
    }
   
    public StartWorkflow(name:string, callback:(error:net.Error,response:net.Response) => void) {
        const req = new StartWorkflowRequest();
        req.setName(name);
        this.grpcClient.startWorkflow(req, function(err, response) {
            console.log(err);
            console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && response.getWorkflowId();
            callback(error, resp);
          });
    }
  }
