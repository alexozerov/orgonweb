// source: core/contract/storage_contract.proto
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
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof window !== 'undefined' && window) ||
  (typeof global !== 'undefined' && global) ||
  (typeof self !== 'undefined' && self) ||
  (function () { return this; }).call(null) ||
  Function('return this')();

goog.exportSymbol('TronWebProto.BuyStorageBytesContract', null, global);
goog.exportSymbol('TronWebProto.BuyStorageContract', null, global);
goog.exportSymbol('TronWebProto.SellStorageContract', null, global);
goog.exportSymbol('TronWebProto.UpdateBrokerageContract', null, global);
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
TronWebProto.BuyStorageBytesContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(TronWebProto.BuyStorageBytesContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  TronWebProto.BuyStorageBytesContract.displayName = 'TronWebProto.BuyStorageBytesContract';
}
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
TronWebProto.BuyStorageContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(TronWebProto.BuyStorageContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  TronWebProto.BuyStorageContract.displayName = 'TronWebProto.BuyStorageContract';
}
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
TronWebProto.SellStorageContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(TronWebProto.SellStorageContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  TronWebProto.SellStorageContract.displayName = 'TronWebProto.SellStorageContract';
}
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
TronWebProto.UpdateBrokerageContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(TronWebProto.UpdateBrokerageContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  TronWebProto.UpdateBrokerageContract.displayName = 'TronWebProto.UpdateBrokerageContract';
}



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
TronWebProto.BuyStorageBytesContract.prototype.toObject = function(opt_includeInstance) {
  return TronWebProto.BuyStorageBytesContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!TronWebProto.BuyStorageBytesContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.BuyStorageBytesContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    bytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!TronWebProto.BuyStorageBytesContract}
 */
TronWebProto.BuyStorageBytesContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new TronWebProto.BuyStorageBytesContract;
  return TronWebProto.BuyStorageBytesContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!TronWebProto.BuyStorageBytesContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!TronWebProto.BuyStorageBytesContract}
 */
TronWebProto.BuyStorageBytesContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytes(value);
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
TronWebProto.BuyStorageBytesContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  TronWebProto.BuyStorageBytesContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!TronWebProto.BuyStorageBytesContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.BuyStorageBytesContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
TronWebProto.BuyStorageBytesContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
TronWebProto.BuyStorageBytesContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
TronWebProto.BuyStorageBytesContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!TronWebProto.BuyStorageBytesContract} returns this
 */
TronWebProto.BuyStorageBytesContract.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 bytes = 2;
 * @return {number}
 */
TronWebProto.BuyStorageBytesContract.prototype.getBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!TronWebProto.BuyStorageBytesContract} returns this
 */
TronWebProto.BuyStorageBytesContract.prototype.setBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
TronWebProto.BuyStorageContract.prototype.toObject = function(opt_includeInstance) {
  return TronWebProto.BuyStorageContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!TronWebProto.BuyStorageContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.BuyStorageContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    quant: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!TronWebProto.BuyStorageContract}
 */
TronWebProto.BuyStorageContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new TronWebProto.BuyStorageContract;
  return TronWebProto.BuyStorageContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!TronWebProto.BuyStorageContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!TronWebProto.BuyStorageContract}
 */
TronWebProto.BuyStorageContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuant(value);
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
TronWebProto.BuyStorageContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  TronWebProto.BuyStorageContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!TronWebProto.BuyStorageContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.BuyStorageContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getQuant();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
TronWebProto.BuyStorageContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
TronWebProto.BuyStorageContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
TronWebProto.BuyStorageContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!TronWebProto.BuyStorageContract} returns this
 */
TronWebProto.BuyStorageContract.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 quant = 2;
 * @return {number}
 */
TronWebProto.BuyStorageContract.prototype.getQuant = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!TronWebProto.BuyStorageContract} returns this
 */
TronWebProto.BuyStorageContract.prototype.setQuant = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
TronWebProto.SellStorageContract.prototype.toObject = function(opt_includeInstance) {
  return TronWebProto.SellStorageContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!TronWebProto.SellStorageContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.SellStorageContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    storageBytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!TronWebProto.SellStorageContract}
 */
TronWebProto.SellStorageContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new TronWebProto.SellStorageContract;
  return TronWebProto.SellStorageContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!TronWebProto.SellStorageContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!TronWebProto.SellStorageContract}
 */
TronWebProto.SellStorageContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStorageBytes(value);
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
TronWebProto.SellStorageContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  TronWebProto.SellStorageContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!TronWebProto.SellStorageContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.SellStorageContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStorageBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
TronWebProto.SellStorageContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
TronWebProto.SellStorageContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
TronWebProto.SellStorageContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!TronWebProto.SellStorageContract} returns this
 */
TronWebProto.SellStorageContract.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 storage_bytes = 2;
 * @return {number}
 */
TronWebProto.SellStorageContract.prototype.getStorageBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!TronWebProto.SellStorageContract} returns this
 */
TronWebProto.SellStorageContract.prototype.setStorageBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
TronWebProto.UpdateBrokerageContract.prototype.toObject = function(opt_includeInstance) {
  return TronWebProto.UpdateBrokerageContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!TronWebProto.UpdateBrokerageContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.UpdateBrokerageContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    brokerage: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!TronWebProto.UpdateBrokerageContract}
 */
TronWebProto.UpdateBrokerageContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new TronWebProto.UpdateBrokerageContract;
  return TronWebProto.UpdateBrokerageContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!TronWebProto.UpdateBrokerageContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!TronWebProto.UpdateBrokerageContract}
 */
TronWebProto.UpdateBrokerageContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBrokerage(value);
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
TronWebProto.UpdateBrokerageContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  TronWebProto.UpdateBrokerageContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!TronWebProto.UpdateBrokerageContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
TronWebProto.UpdateBrokerageContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBrokerage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
TronWebProto.UpdateBrokerageContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
TronWebProto.UpdateBrokerageContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
TronWebProto.UpdateBrokerageContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!TronWebProto.UpdateBrokerageContract} returns this
 */
TronWebProto.UpdateBrokerageContract.prototype.setOwnerAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 brokerage = 2;
 * @return {number}
 */
TronWebProto.UpdateBrokerageContract.prototype.getBrokerage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!TronWebProto.UpdateBrokerageContract} returns this
 */
TronWebProto.UpdateBrokerageContract.prototype.setBrokerage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, TronWebProto);
