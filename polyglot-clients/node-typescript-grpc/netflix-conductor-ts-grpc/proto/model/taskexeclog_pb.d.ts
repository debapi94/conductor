// package: conductor.proto
// file: model/taskexeclog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TaskExecLog extends jspb.Message { 
    getLog(): string;
    setLog(value: string): TaskExecLog;
    getTaskId(): string;
    setTaskId(value: string): TaskExecLog;
    getCreatedTime(): number;
    setCreatedTime(value: number): TaskExecLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskExecLog.AsObject;
    static toObject(includeInstance: boolean, msg: TaskExecLog): TaskExecLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskExecLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskExecLog;
    static deserializeBinaryFromReader(message: TaskExecLog, reader: jspb.BinaryReader): TaskExecLog;
}

export namespace TaskExecLog {
    export type AsObject = {
        log: string,
        taskId: string,
        createdTime: number,
    }
}
