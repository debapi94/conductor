import { iEqual, TaskClient, MetadataClient } from 'netflix-conductor-ts-grpc';

console.log(iEqual(13));

// const service = new TaskClient("localhost:8090");
// service.GetQueueAllInfo((err,resp) => {
//     console.log(err);
//     console.log(resp);
// })

const service = new MetadataClient("localhost:8090");
service.CreateWorkflow("kitchensink", (err,resp) => {
    console.log(err);
    console.log(resp);
})