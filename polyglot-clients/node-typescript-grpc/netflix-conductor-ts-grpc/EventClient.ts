
import * as grpc from '@grpc/grpc-js';
import * as net from './common';
import { EventServiceClient } from './proto/service/event_service_grpc_pb';
import { GetEventHandlersRequest } from './proto/service/event_service_pb';

export class EventClient {
    private grpcClient: EventServiceClient;
   
    public constructor(address: string) {
      this.grpcClient = new EventServiceClient(address, grpc.credentials.createInsecure());
    }
   
    public GetEventHandlers(callback:(error:net.Error,response:net.Response) => void) {
        const req:GetEventHandlersRequest = new GetEventHandlersRequest();
        //TODO: stream to be implemented
        // this.grpcClient.getEventHandlers(req, function(err, response) {
        //     //console.log(err);
        //     // console.log(response);
        //     const error = new net.Error();
        //     error.message = err ? err.message : ""; 
        //     const resp = new net.Response();
        //     resp.value = response && response.getWorkflowsByIdMap().arr_;
        //     callback(error, resp);
        //   });
    }
  }
