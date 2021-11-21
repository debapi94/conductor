import * as grpc from '@grpc/grpc-js';
import { WorkflowServiceClient } from '../proto/service/workflow_service_grpc_pb';
import { TaskServiceClient } from '../proto/service/task_service_grpc_pb';
import { MetadataServiceClient } from '../proto/service/metadata_service_grpc_pb';

export class WorkflowClientManager{
    public workflowGrpcClient: WorkflowServiceClient;
    public taskGrpcClient: TaskServiceClient;
    public metadataGrpcClient: MetadataServiceClient;
   
    public constructor(address: string) {
      this.workflowGrpcClient = new WorkflowServiceClient(address, grpc.credentials.createInsecure());
      this.taskGrpcClient = new TaskServiceClient(address, grpc.credentials.createInsecure());
      this.metadataGrpcClient = new MetadataServiceClient(address, grpc.credentials.createInsecure());
    }

}