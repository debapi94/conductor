import { iEqual, TaskClient, WorkflowClient
    , ConductorWorker, TaskReturnObject } from 'netflix-conductor-ts-grpc';

const exec_function = () => ({'status': 'COMPLETED', 'output': {}, 'logs': []} as TaskReturnObject);

let cc = new ConductorWorker("localhost:8090", 2, 2000, "5e17f8cf-46dd-4c72-808c-edc4b6bd16db");

cc.Start("task_1", exec_function);

//console.log(iEqual(13));

// const service = new TaskClient("localhost:8090");
// service.GetQueueAllInfo((err,resp) => {
//     console.log(err);
//     console.log(resp);
// })

// const service = new WorkflowClient("localhost:8090");
// service.StartWorkflow("kitchensink", (err,resp) => {
//     console.log(err);
//     console.log(resp);
// })