// package: conductor.proto
// file: model/polldata.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PollData extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): PollData;
    getDomain(): string;
    setDomain(value: string): PollData;
    getWorkerId(): string;
    setWorkerId(value: string): PollData;
    getLastPollTime(): number;
    setLastPollTime(value: number): PollData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollData.AsObject;
    static toObject(includeInstance: boolean, msg: PollData): PollData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollData;
    static deserializeBinaryFromReader(message: PollData, reader: jspb.BinaryReader): PollData;
}

export namespace PollData {
    export type AsObject = {
        queueName: string,
        domain: string,
        workerId: string,
        lastPollTime: number,
    }
}
