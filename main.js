"use strict";
// Make it possible to use require in TypeScript
exports.__esModule = true;
var FilePublisher_1 = require("./tsClasses/FilePublisher");
var obj = new FilePublisher_1.FilePublisher("hitch.txt");
obj.showFile();