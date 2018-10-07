import {FilePublisher} from './tsClasses/FilePublisher'; // Make it possible to use require in TypeScript
let obj = new FilePublisher("hitch.txt");
obj.showFile();