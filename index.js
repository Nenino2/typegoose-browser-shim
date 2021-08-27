"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyValue = "";

function dummyFn() {}

exports.dummyFn = dummyFn;

function dummyDecorator() {
	return dummyFn;
}

exports.prop = dummyDecorator;
exports.modelOptions = dummyDecorator;
exports.getModelForClass = dummyFn;
