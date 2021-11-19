// package: conductor.proto
// file: model/eventhandler.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class EventHandler extends jspb.Message { 
    getName(): string;
    setName(value: string): EventHandler;
    getEvent(): string;
    setEvent(value: string): EventHandler;
    getCondition(): string;
    setCondition(value: string): EventHandler;
    clearActionsList(): void;
    getActionsList(): Array<EventHandler.Action>;
    setActionsList(value: Array<EventHandler.Action>): EventHandler;
    addActions(value?: EventHandler.Action, index?: number): EventHandler.Action;
    getActive(): boolean;
    setActive(value: boolean): EventHandler;
    getEvaluatorType(): string;
    setEvaluatorType(value: string): EventHandler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventHandler.AsObject;
    static toObject(includeInstance: boolean, msg: EventHandler): EventHandler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventHandler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventHandler;
    static deserializeBinaryFromReader(message: EventHandler, reader: jspb.BinaryReader): EventHandler;
}

export namespace EventHandler {
    export type AsObject = {
        name: string,
        event: string,
        condition: string,
        actionsList: Array<EventHandler.Action.AsObject>,
        active: boolean,
        evaluatorType: string,
    }


    export class StartWorkflow extends jspb.Message { 
        getName(): string;
        setName(value: string): StartWorkflow;
        getVersion(): number;
        setVersion(value: number): StartWorkflow;
        getCorrelationId(): string;
        setCorrelationId(value: string): StartWorkflow;

        getInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
        clearInputMap(): void;

        hasInputMessage(): boolean;
        clearInputMessage(): void;
        getInputMessage(): google_protobuf_any_pb.Any | undefined;
        setInputMessage(value?: google_protobuf_any_pb.Any): StartWorkflow;

        getTaskToDomainMap(): jspb.Map<string, string>;
        clearTaskToDomainMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StartWorkflow.AsObject;
        static toObject(includeInstance: boolean, msg: StartWorkflow): StartWorkflow.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StartWorkflow, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StartWorkflow;
        static deserializeBinaryFromReader(message: StartWorkflow, reader: jspb.BinaryReader): StartWorkflow;
    }

    export namespace StartWorkflow {
        export type AsObject = {
            name: string,
            version: number,
            correlationId: string,

            inputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
            inputMessage?: google_protobuf_any_pb.Any.AsObject,

            taskToDomainMap: Array<[string, string]>,
        }
    }

    export class TaskDetails extends jspb.Message { 
        getWorkflowId(): string;
        setWorkflowId(value: string): TaskDetails;
        getTaskRefName(): string;
        setTaskRefName(value: string): TaskDetails;

        getOutputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
        clearOutputMap(): void;

        hasOutputMessage(): boolean;
        clearOutputMessage(): void;
        getOutputMessage(): google_protobuf_any_pb.Any | undefined;
        setOutputMessage(value?: google_protobuf_any_pb.Any): TaskDetails;
        getTaskId(): string;
        setTaskId(value: string): TaskDetails;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TaskDetails.AsObject;
        static toObject(includeInstance: boolean, msg: TaskDetails): TaskDetails.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TaskDetails, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TaskDetails;
        static deserializeBinaryFromReader(message: TaskDetails, reader: jspb.BinaryReader): TaskDetails;
    }

    export namespace TaskDetails {
        export type AsObject = {
            workflowId: string,
            taskRefName: string,

            outputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
            outputMessage?: google_protobuf_any_pb.Any.AsObject,
            taskId: string,
        }
    }

    export class Action extends jspb.Message { 
        getAction(): EventHandler.Action.Type;
        setAction(value: EventHandler.Action.Type): Action;

        hasStartWorkflow(): boolean;
        clearStartWorkflow(): void;
        getStartWorkflow(): EventHandler.StartWorkflow | undefined;
        setStartWorkflow(value?: EventHandler.StartWorkflow): Action;

        hasCompleteTask(): boolean;
        clearCompleteTask(): void;
        getCompleteTask(): EventHandler.TaskDetails | undefined;
        setCompleteTask(value?: EventHandler.TaskDetails): Action;

        hasFailTask(): boolean;
        clearFailTask(): void;
        getFailTask(): EventHandler.TaskDetails | undefined;
        setFailTask(value?: EventHandler.TaskDetails): Action;
        getExpandInlineJson(): boolean;
        setExpandInlineJson(value: boolean): Action;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
        export type AsObject = {
            action: EventHandler.Action.Type,
            startWorkflow?: EventHandler.StartWorkflow.AsObject,
            completeTask?: EventHandler.TaskDetails.AsObject,
            failTask?: EventHandler.TaskDetails.AsObject,
            expandInlineJson: boolean,
        }

        export enum Type {
    START_WORKFLOW = 0,
    COMPLETE_TASK = 1,
    FAIL_TASK = 2,
        }

    }

}
