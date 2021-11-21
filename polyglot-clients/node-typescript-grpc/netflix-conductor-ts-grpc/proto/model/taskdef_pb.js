// source: model/taskdef.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.conductor.proto.TaskDef', null, global);
goog.exportSymbol('proto.conductor.proto.TaskDef.RetryLogic', null, global);
goog.exportSymbol('proto.conductor.proto.TaskDef.TimeoutPolicy', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.conductor.proto.TaskDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.conductor.proto.TaskDef.repeatedFields_, null);
};
goog.inherits(proto.conductor.proto.TaskDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conductor.proto.TaskDef.displayName = 'proto.conductor.proto.TaskDef';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.conductor.proto.TaskDef.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.conductor.proto.TaskDef.prototype.toObject = function(opt_includeInstance) {
  return proto.conductor.proto.TaskDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conductor.proto.TaskDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conductor.proto.TaskDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    retryCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeoutSeconds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    inputKeysList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    outputKeysList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    timeoutPolicy: jspb.Message.getFieldWithDefault(msg, 7, 0),
    retryLogic: jspb.Message.getFieldWithDefault(msg, 8, 0),
    retryDelaySeconds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    responseTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 10, 0),
    concurrentExecLimit: jspb.Message.getFieldWithDefault(msg, 11, 0),
    inputTemplateMap: (f = msg.getInputTemplateMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : [],
    rateLimitPerFrequency: jspb.Message.getFieldWithDefault(msg, 14, 0),
    rateLimitFrequencyInSeconds: jspb.Message.getFieldWithDefault(msg, 15, 0),
    isolationGroupId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    executionNameSpace: jspb.Message.getFieldWithDefault(msg, 17, ""),
    ownerEmail: jspb.Message.getFieldWithDefault(msg, 18, ""),
    pollTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 19, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.conductor.proto.TaskDef}
 */
proto.conductor.proto.TaskDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conductor.proto.TaskDef;
  return proto.conductor.proto.TaskDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conductor.proto.TaskDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conductor.proto.TaskDef}
 */
proto.conductor.proto.TaskDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeoutSeconds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputKeys(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputKeys(value);
      break;
    case 7:
      var value = /** @type {!proto.conductor.proto.TaskDef.TimeoutPolicy} */ (reader.readEnum());
      msg.setTimeoutPolicy(value);
      break;
    case 8:
      var value = /** @type {!proto.conductor.proto.TaskDef.RetryLogic} */ (reader.readEnum());
      msg.setRetryLogic(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryDelaySeconds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResponseTimeoutSeconds(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConcurrentExecLimit(value);
      break;
    case 12:
      var value = msg.getInputTemplateMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "", new proto.google.protobuf.Value());
         });
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRateLimitPerFrequency(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRateLimitFrequencyInSeconds(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsolationGroupId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionNameSpace(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerEmail(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPollTimeoutSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.conductor.proto.TaskDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conductor.proto.TaskDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conductor.proto.TaskDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conductor.proto.TaskDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRetryCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimeoutSeconds();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInputKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getOutputKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTimeoutPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRetryLogic();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getRetryDelaySeconds();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getResponseTimeoutSeconds();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getConcurrentExecLimit();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getInputTemplateMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
  f = message.getRateLimitPerFrequency();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getRateLimitFrequencyInSeconds();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getIsolationGroupId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getExecutionNameSpace();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPollTimeoutSeconds();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.conductor.proto.TaskDef.RetryLogic = {
  FIXED: 0,
  EXPONENTIAL_BACKOFF: 1
};

/**
 * @enum {number}
 */
proto.conductor.proto.TaskDef.TimeoutPolicy = {
  RETRY: 0,
  TIME_OUT_WF: 1,
  ALERT_ONLY: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.conductor.proto.TaskDef.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.conductor.proto.TaskDef.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 retry_count = 3;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timeout_seconds = 4;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string input_keys = 5;
 * @return {!Array<string>}
 */
proto.conductor.proto.TaskDef.prototype.getInputKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setInputKeysList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.addInputKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.clearInputKeysList = function() {
  return this.setInputKeysList([]);
};


/**
 * repeated string output_keys = 6;
 * @return {!Array<string>}
 */
proto.conductor.proto.TaskDef.prototype.getOutputKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setOutputKeysList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.addOutputKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.clearOutputKeysList = function() {
  return this.setOutputKeysList([]);
};


/**
 * optional TimeoutPolicy timeout_policy = 7;
 * @return {!proto.conductor.proto.TaskDef.TimeoutPolicy}
 */
proto.conductor.proto.TaskDef.prototype.getTimeoutPolicy = function() {
  return /** @type {!proto.conductor.proto.TaskDef.TimeoutPolicy} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.conductor.proto.TaskDef.TimeoutPolicy} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setTimeoutPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional RetryLogic retry_logic = 8;
 * @return {!proto.conductor.proto.TaskDef.RetryLogic}
 */
proto.conductor.proto.TaskDef.prototype.getRetryLogic = function() {
  return /** @type {!proto.conductor.proto.TaskDef.RetryLogic} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.conductor.proto.TaskDef.RetryLogic} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setRetryLogic = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int32 retry_delay_seconds = 9;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getRetryDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setRetryDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 response_timeout_seconds = 10;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getResponseTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setResponseTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 concurrent_exec_limit = 11;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getConcurrentExecLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setConcurrentExecLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * map<string, google.protobuf.Value> input_template = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.conductor.proto.TaskDef.prototype.getInputTemplateMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.clearInputTemplateMap = function() {
  this.getInputTemplateMap().clear();
  return this;};


/**
 * optional int32 rate_limit_per_frequency = 14;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getRateLimitPerFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setRateLimitPerFrequency = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 rate_limit_frequency_in_seconds = 15;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getRateLimitFrequencyInSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setRateLimitFrequencyInSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string isolation_group_id = 16;
 * @return {string}
 */
proto.conductor.proto.TaskDef.prototype.getIsolationGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setIsolationGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string execution_name_space = 17;
 * @return {string}
 */
proto.conductor.proto.TaskDef.prototype.getExecutionNameSpace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setExecutionNameSpace = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string owner_email = 18;
 * @return {string}
 */
proto.conductor.proto.TaskDef.prototype.getOwnerEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setOwnerEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional int32 poll_timeout_seconds = 19;
 * @return {number}
 */
proto.conductor.proto.TaskDef.prototype.getPollTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.conductor.proto.TaskDef} returns this
 */
proto.conductor.proto.TaskDef.prototype.setPollTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


goog.object.extend(exports, proto.conductor.proto);