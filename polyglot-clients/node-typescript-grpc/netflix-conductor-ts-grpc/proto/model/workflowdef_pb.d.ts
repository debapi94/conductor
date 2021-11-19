// package: conductor.proto
// file: model/workflowdef.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_workflowtask_pb from "../model/workflowtask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class WorkflowDef extends jspb.Message { 
    getName(): string;
    setName(value: string): WorkflowDef;
    getDescription(): string;
    setDescription(value: string): WorkflowDef;
    getVersion(): number;
    setVersion(value: number): WorkflowDef;
    clearTasksList(): void;
    getTasksList(): Array<model_workflowtask_pb.WorkflowTask>;
    setTasksList(value: Array<model_workflowtask_pb.WorkflowTask>): WorkflowDef;
    addTasks(value?: model_workflowtask_pb.WorkflowTask, index?: number): model_workflowtask_pb.WorkflowTask;
    clearInputParametersList(): void;
    getInputParametersList(): Array<string>;
    setInputParametersList(value: Array<string>): WorkflowDef;
    addInputParameters(value: string, index?: number): string;

    getOutputParametersMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearOutputParametersMap(): void;
    getFailureWorkflow(): string;
    setFailureWorkflow(value: string): WorkflowDef;
    getSchemaVersion(): number;
    setSchemaVersion(value: number): WorkflowDef;
    getRestartable(): boolean;
    setRestartable(value: boolean): WorkflowDef;
    getWorkflowStatusListenerEnabled(): boolean;
    setWorkflowStatusListenerEnabled(value: boolean): WorkflowDef;
    getOwnerEmail(): string;
    setOwnerEmail(value: string): WorkflowDef;
    getTimeoutPolicy(): WorkflowDef.TimeoutPolicy;
    setTimeoutPolicy(value: WorkflowDef.TimeoutPolicy): WorkflowDef;
    getTimeoutSeconds(): number;
    setTimeoutSeconds(value: number): WorkflowDef;

    getVariablesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearVariablesMap(): void;

    getInputTemplateMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputTemplateMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowDef.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowDef): WorkflowDef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowDef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowDef;
    static deserializeBinaryFromReader(message: WorkflowDef, reader: jspb.BinaryReader): WorkflowDef;
}

export namespace WorkflowDef {
    export type AsObject = {
        name: string,
        description: string,
        version: number,
        tasksList: Array<model_workflowtask_pb.WorkflowTask.AsObject>,
        inputParametersList: Array<string>,

        outputParametersMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        failureWorkflow: string,
        schemaVersion: number,
        restartable: boolean,
        workflowStatusListenerEnabled: boolean,
        ownerEmail: string,
        timeoutPolicy: WorkflowDef.TimeoutPolicy,
        timeoutSeconds: number,

        variablesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,

        inputTemplateMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    }

    export enum TimeoutPolicy {
    TIME_OUT_WF = 0,
    ALERT_ONLY = 1,
    }

}
