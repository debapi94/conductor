import { iEqual, TaskClient, MetadataClient, WorkflowClient } from 'netflix-conductor-ts-grpc';

console.log(iEqual(13));

const service = new TaskClient("localhost:8090");
service.GetQueueAllInfo((err,resp) => {
    console.log(err);
    console.log(resp);
})

// const service = new WorkflowClient("localhost:8090");
// service.StartWorkflow("kitchensink", (err,resp) => {
//     console.log(err);
//     console.log(resp);
// })