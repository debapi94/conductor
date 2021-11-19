// package: conductor.proto
// file: model/workflowtask.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as model_taskdef_pb from "../model/taskdef_pb";
import * as model_subworkflowparams_pb from "../model/subworkflowparams_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class WorkflowTask extends jspb.Message { 
    getName(): string;
    setName(value: string): WorkflowTask;
    getTaskReferenceName(): string;
    setTaskReferenceName(value: string): WorkflowTask;
    getDescription(): string;
    setDescription(value: string): WorkflowTask;

    getInputParametersMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearInputParametersMap(): void;
    getType(): string;
    setType(value: string): WorkflowTask;
    getDynamicTaskNameParam(): string;
    setDynamicTaskNameParam(value: string): WorkflowTask;
    getCaseValueParam(): string;
    setCaseValueParam(value: string): WorkflowTask;
    getCaseExpression(): string;
    setCaseExpression(value: string): WorkflowTask;
    getScriptExpression(): string;
    setScriptExpression(value: string): WorkflowTask;

    getDecisionCasesMap(): jspb.Map<string, WorkflowTask.WorkflowTaskList>;
    clearDecisionCasesMap(): void;
    getDynamicForkTasksParam(): string;
    setDynamicForkTasksParam(value: string): WorkflowTask;
    getDynamicForkTasksInputParamName(): string;
    setDynamicForkTasksInputParamName(value: string): WorkflowTask;
    clearDefaultCaseList(): void;
    getDefaultCaseList(): Array<WorkflowTask>;
    setDefaultCaseList(value: Array<WorkflowTask>): WorkflowTask;
    addDefaultCase(value?: WorkflowTask, index?: number): WorkflowTask;
    clearForkTasksList(): void;
    getForkTasksList(): Array<WorkflowTask.WorkflowTaskList>;
    setForkTasksList(value: Array<WorkflowTask.WorkflowTaskList>): WorkflowTask;
    addForkTasks(value?: WorkflowTask.WorkflowTaskList, index?: number): WorkflowTask.WorkflowTaskList;
    getStartDelay(): number;
    setStartDelay(value: number): WorkflowTask;

    hasSubWorkflowParam(): boolean;
    clearSubWorkflowParam(): void;
    getSubWorkflowParam(): model_subworkflowparams_pb.SubWorkflowParams | undefined;
    setSubWorkflowParam(value?: model_subworkflowparams_pb.SubWorkflowParams): WorkflowTask;
    clearJoinOnList(): void;
    getJoinOnList(): Array<string>;
    setJoinOnList(value: Array<string>): WorkflowTask;
    addJoinOn(value: string, index?: number): string;
    getSink(): string;
    setSink(value: string): WorkflowTask;
    getOptional(): boolean;
    setOptional(value: boolean): WorkflowTask;

    hasTaskDefinition(): boolean;
    clearTaskDefinition(): void;
    getTaskDefinition(): model_taskdef_pb.TaskDef | undefined;
    setTaskDefinition(value?: model_taskdef_pb.TaskDef): WorkflowTask;
    getRateLimited(): boolean;
    setRateLimited(value: boolean): WorkflowTask;
    clearDefaultExclusiveJoinTaskList(): void;
    getDefaultExclusiveJoinTaskList(): Array<string>;
    setDefaultExclusiveJoinTaskList(value: Array<string>): WorkflowTask;
    addDefaultExclusiveJoinTask(value: string, index?: number): string;
    getAsyncComplete(): boolean;
    setAsyncComplete(value: boolean): WorkflowTask;
    getLoopCondition(): string;
    setLoopCondition(value: string): WorkflowTask;
    clearLoopOverList(): void;
    getLoopOverList(): Array<WorkflowTask>;
    setLoopOverList(value: Array<WorkflowTask>): WorkflowTask;
    addLoopOver(value?: WorkflowTask, index?: number): WorkflowTask;
    getRetryCount(): number;
    setRetryCount(value: number): WorkflowTask;
    getEvaluatorType(): string;
    setEvaluatorType(value: string): WorkflowTask;
    getExpression(): string;
    setExpression(value: string): WorkflowTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowTask.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowTask): WorkflowTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowTask;
    static deserializeBinaryFromReader(message: WorkflowTask, reader: jspb.BinaryReader): WorkflowTask;
}

export namespace WorkflowTask {
    export type AsObject = {
        name: string,
        taskReferenceName: string,
        description: string,

        inputParametersMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        type: string,
        dynamicTaskNameParam: string,
        caseValueParam: string,
        caseExpression: string,
        scriptExpression: string,

        decisionCasesMap: Array<[string, WorkflowTask.WorkflowTaskList.AsObject]>,
        dynamicForkTasksParam: string,
        dynamicForkTasksInputParamName: string,
        defaultCaseList: Array<WorkflowTask.AsObject>,
        forkTasksList: Array<WorkflowTask.WorkflowTaskList.AsObject>,
        startDelay: number,
        subWorkflowParam?: model_subworkflowparams_pb.SubWorkflowParams.AsObject,
        joinOnList: Array<string>,
        sink: string,
        optional: boolean,
        taskDefinition?: model_taskdef_pb.TaskDef.AsObject,
        rateLimited: boolean,
        defaultExclusiveJoinTaskList: Array<string>,
        asyncComplete: boolean,
        loopCondition: string,
        loopOverList: Array<WorkflowTask.AsObject>,
        retryCount: number,
        evaluatorType: string,
        expression: string,
    }


    export class WorkflowTaskList extends jspb.Message { 
        clearTasksList(): void;
        getTasksList(): Array<WorkflowTask>;
        setTasksList(value: Array<WorkflowTask>): WorkflowTaskList;
        addTasks(value?: WorkflowTask, index?: number): WorkflowTask;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WorkflowTaskList.AsObject;
        static toObject(includeInstance: boolean, msg: WorkflowTaskList): WorkflowTaskList.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WorkflowTaskList, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WorkflowTaskList;
        static deserializeBinaryFromReader(message: WorkflowTaskList, reader: jspb.BinaryReader): WorkflowTaskList;
    }

    export namespace WorkflowTaskList {
        export type AsObject = {
            tasksList: Array<WorkflowTask.AsObject>,
        }
    }

}
