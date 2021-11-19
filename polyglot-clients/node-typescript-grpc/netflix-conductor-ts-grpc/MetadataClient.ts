
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { WorkflowDef } from './proto/model/workflowdef_pb';
import { MetadataServiceClient } from './proto/service/metadata_service_grpc_pb';
import { CreateWorkflowRequest } from './proto/service/metadata_service_pb';

export class MetadataClient {
    private grpcClient: MetadataServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new MetadataServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public CreateWorkflow(name:string, callback:(error:net.Error,response:net.Response) => void) {
        const def = new WorkflowDef();
        def.setName(name);
        

        const req = new CreateWorkflowRequest();
        req.setWorkflow(def);
        
        
        this.grpcClient.createWorkflow(req, function(err, response) {
            console.log(err);
            console.log(response);
            const error = new net.Error();
            error.message = err ? err.message : ""; 
            const resp = new net.Response();
            resp.value = response && "test";
            callback(error, resp);
          });
    }
  }
