// package: conductor.proto
// file: model/taskdef.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class TaskDef extends jspb.Message { 
    getName(): string;
    setName(value: string): TaskDef;
    getDescription(): string;
    setDescription(value: string): TaskDef;
    getRetryCount(): number;
    setRetryCount(value: number): TaskDef;
    getTimeoutSeconds(): number;
    setTimeoutSeconds(value: number): TaskDef;
    clearInputKeysList(): void;
    getInputKeysList(): Array<string>;
    setInputKeysList(value: Array<string>): TaskDef;
    addInputKeys(value: string, index?: number): string;
    clearOutputKeysList(): void;
    getOutputKeysList(): Array<string>;
    setOutputKeysList(value: Array<string>): TaskDef;
    addOutputKeys(value: string, index?: number): string;
    getTimeoutPolicy(): TaskDef.TimeoutPolicy;
    setTimeoutPolicy(value: TaskDef.TimeoutPolicy): TaskDef;
    getRetryLogic(): TaskDef.RetryLogic;
    setRetryLogic(value: TaskDef.RetryLogic): TaskDef;
    getRetryDelaySeconds(): number;
    setRetryDelaySeconds(value: number): TaskDef;
    getResponseTimeoutSeconds(): number;
    setResponseTimeoutSeconds(value: number): TaskDef;
    getConcurrentExecLimit(): number;
    setConcurrentExecLimit(value: number): TaskDef;

    getInputTemplateMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputTemplateMap(): void;
    getRateLimitPerFrequency(): number;
    setRateLimitPerFrequency(value: number): TaskDef;
    getRateLimitFrequencyInSeconds(): number;
    setRateLimitFrequencyInSeconds(value: number): TaskDef;
    getIsolationGroupId(): string;
    setIsolationGroupId(value: string): TaskDef;
    getExecutionNameSpace(): string;
    setExecutionNameSpace(value: string): TaskDef;
    getOwnerEmail(): string;
    setOwnerEmail(value: string): TaskDef;
    getPollTimeoutSeconds(): number;
    setPollTimeoutSeconds(value: number): TaskDef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskDef.AsObject;
    static toObject(includeInstance: boolean, msg: TaskDef): TaskDef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskDef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskDef;
    static deserializeBinaryFromReader(message: TaskDef, reader: jspb.BinaryReader): TaskDef;
}

export namespace TaskDef {
    export type AsObject = {
        name: string,
        description: string,
        retryCount: number,
        timeoutSeconds: number,
        inputKeysList: Array<string>,
        outputKeysList: Array<string>,
        timeoutPolicy: TaskDef.TimeoutPolicy,
        retryLogic: TaskDef.RetryLogic,
        retryDelaySeconds: number,
        responseTimeoutSeconds: number,
        concurrentExecLimit: number,

        inputTemplateMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        rateLimitPerFrequency: number,
        rateLimitFrequencyInSeconds: number,
        isolationGroupId: string,
        executionNameSpace: string,
        ownerEmail: string,
        pollTimeoutSeconds: number,
    }

    export enum RetryLogic {
    FIXED = 0,
    EXPONENTIAL_BACKOFF = 1,
    }

    export enum TimeoutPolicy {
    RETRY = 0,
    TIME_OUT_WF = 1,
    ALERT_ONLY = 2,
    }

}
