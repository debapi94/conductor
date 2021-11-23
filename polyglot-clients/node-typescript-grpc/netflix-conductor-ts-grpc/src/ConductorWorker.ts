
import { WorkflowClient } from './WorkflowClient';
import { TaskClient } from './TaskClient';
import { MetadataClient } from './MetadataClient';
import { WorkflowClientManager } from './WorkflowClientManager';
import { TaskReturnObject } from './common';
import { Task } from '../proto/model/task_pb';
import { TaskResult } from '../proto/model/taskresult_pb';

export class ConductorWorker{
    private workflowClient: WorkflowClient;
    private taskClient: TaskClient;
    private metadataClient: MetadataClient;

    private _threadCount:number;
    private _pollingInterval:number;
    private _workerId?:string;
    private _interval:any;
    private _taskStatus = this.getAllTaskStatue();
   
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

    public Execute(taskObj:Task, exec_function:() => TaskReturnObject){
         let resp = exec_function();
         
        let taskAsObj = taskObj?.toObject();
        let result = new TaskResult();
        result.setTaskId(taskObj.getTaskId());
        result.setWorkflowInstanceId(taskObj.getWorkflowInstanceId());
        result.setStatus(TaskResult.Status.COMPLETED);
        //result.setOutputMessage(resp.output);
        
        this.taskClient.updateTask(result, (err,resp) => {
            console.log(err);
            console.log(resp);
        });
    }

    public Start(taskReferenceName:string, exec_function:() => TaskReturnObject, domain?:string){
        //for()
        this._interval = setTimeout(this.PollAndExecute.bind(this), this._pollingInterval, taskReferenceName, exec_function, domain);
    }

    private PollAndExecute(taskReferenceName:string, exec_function:() => TaskReturnObject
    , domain?:string){        
        this.taskClient.poll((err,resp)=>{
            if(resp && resp.value){
                this.Execute(resp.value as Task, exec_function);
            }

        }, taskReferenceName, this._workerId, domain);
    }

    private getAllTaskStatue():Map<string, Task.Status>{
        //let obj = Object.fromEntries(new Map([[Task.Status[Task.Status.COMPLETED], Task.Status.COMPLETED]]));
        
        //let status:Array<{string:Task.Status}> = [{["COMPLETED"]:Task.Status.COMPLETED} as {string:Task.Status}];
        return new Map([["COMPLETED", Task.Status.COMPLETED]]);
        //TODO get all task enum into array smartly
        // for(let status of Task.Status.)
    }

}