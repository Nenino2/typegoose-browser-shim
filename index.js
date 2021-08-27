"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyValue = "";

function dummyFn() {}

function dummyDecorator() {
	return dummyFn;
}

const dummyObj = {}

exports.prop = dummyDecorator;
exports.modelOptions = dummyDecorator;
exports.getModelForClass = dummyFn;
exports.Severity = dummyObj;
exports.Ref = null;