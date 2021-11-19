// package: conductor.proto
// file: model/skiptaskrequest.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class SkipTaskRequest extends jspb.Message { 

    getTaskInputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearTaskInputMap(): void;

    getTaskOutputMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearTaskOutputMap(): void;

    hasTaskInputMessage(): boolean;
    clearTaskInputMessage(): void;
    getTaskInputMessage(): google_protobuf_any_pb.Any | undefined;
    setTaskInputMessage(value?: google_protobuf_any_pb.Any): SkipTaskRequest;

    hasTaskOutputMessage(): boolean;
    clearTaskOutputMessage(): void;
    getTaskOutputMessage(): google_protobuf_any_pb.Any | undefined;
    setTaskOutputMessage(value?: google_protobuf_any_pb.Any): SkipTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SkipTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SkipTaskRequest): SkipTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SkipTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SkipTaskRequest;
    static deserializeBinaryFromReader(message: SkipTaskRequest, reader: jspb.BinaryReader): SkipTaskRequest;
}

export namespace SkipTaskRequest {
    export type AsObject = {

        taskInputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,

        taskOutputMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
        taskInputMessage?: google_protobuf_any_pb.Any.AsObject,
        taskOutputMessage?: google_protobuf_any_pb.Any.AsObject,
    }
}
