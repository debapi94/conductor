
import { WorkflowClient } from './WorkflowClient';
import { TaskClient } from './TaskClient';
import { MetadataClient } from './MetadataClient';
import { WorkflowClientManager } from './WorkflowClientManager';
import { TaskReturnObject } from './common';
import { Task } from '../proto/model/task_pb';

export class ConductorWorker{
    private workflowClient: WorkflowClient;
    private taskClient: TaskClient;
    private metadataClient: MetadataClient;

    private _threadCount:number;
    private _pollingInterval:number;
    private _workerId?:string;
   
    public constructor(address: string, threadCount:number, pollingInterval:number
        , workerId?:string) {
            let mgr = new WorkflowClientManager(address);
            this.workflowClient = mgr.workflowClient;
            this.taskClient = mgr.taskClient;
            this.metadataClient = mgr.metadataClient;

            this._threadCount = threadCount;
            this._pollingInterval = pollingInterval;
            this._workerId = workerId;
    }

    public Execute(taskObj:Task, exec_function:(obj:any) => TaskReturnObject){

    }

    public Start(taskType:string, exec_function:(obj:any) => TaskReturnObject, domain?:string){
        //for()
        setInterval(this.PollAndExecute, this._pollingInterval, taskType, exec_function, domain);
    }

    private PollAndExecute(taskType:string, exec_function:(obj:any) => TaskReturnObject
    , domain?:string){
        this.taskClient.Poll((err,resp)=>{
            if(resp){
                this.Execute(resp as Task, exec_function);
            }

        }, this._workerId, taskType, domain);
    }

}