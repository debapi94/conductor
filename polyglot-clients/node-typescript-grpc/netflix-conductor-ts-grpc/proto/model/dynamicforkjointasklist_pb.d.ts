// package: conductor.proto
// file: model/dynamicforkjointasklist.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_dynamicforkjointask_pb from "../model/dynamicforkjointask_pb";

export class DynamicForkJoinTaskList extends jspb.Message { 
    clearDynamicTasksList(): void;
    getDynamicTasksList(): Array<model_dynamicforkjointask_pb.DynamicForkJoinTask>;
    setDynamicTasksList(value: Array<model_dynamicforkjointask_pb.DynamicForkJoinTask>): DynamicForkJoinTaskList;
    addDynamicTasks(value?: model_dynamicforkjointask_pb.DynamicForkJoinTask, index?: number): model_dynamicforkjointask_pb.DynamicForkJoinTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicForkJoinTaskList.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicForkJoinTaskList): DynamicForkJoinTaskList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicForkJoinTaskList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicForkJoinTaskList;
    static deserializeBinaryFromReader(message: DynamicForkJoinTaskList, reader: jspb.BinaryReader): DynamicForkJoinTaskList;
}

export namespace DynamicForkJoinTaskList {
    export type AsObject = {
        dynamicTasksList: Array<model_dynamicforkjointask_pb.DynamicForkJoinTask.AsObject>,
    }
}
