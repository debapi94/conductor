import * as grpc from '@grpc/grpc-js';
import { WorkflowServiceClient } from '../proto/service/workflow_service_grpc_pb';
import { TaskServiceClient } from '../proto/service/task_service_grpc_pb';
import { MetadataServiceClient } from '../proto/service/metadata_service_grpc_pb';
import { WorkflowClientManager } from './WorkflowClientManager';

export class ConductorWorker{
    private workflowGrpcClient: WorkflowServiceClient;
    private taskGrpcClient: TaskServiceClient;
    private metadataGrpcClient: MetadataServiceClient;

    private _threadCount:number;
    private _pollingInterval:number;
    private _workerId?:string;
   
    public constructor(address: string, threadCount:number, pollingInterval:number
        , workerId?:string) {
            let mgr = new WorkflowClientManager(address);
            this.workflowGrpcClient = mgr.workflowGrpcClient;
            this.taskGrpcClient = mgr.taskGrpcClient;
            this.metadataGrpcClient = mgr.metadataGrpcClient;

            this._threadCount = threadCount;
            this._pollingInterval = pollingInterval;
            this._workerId = workerId;
    }

}