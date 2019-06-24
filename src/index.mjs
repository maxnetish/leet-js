import process from 'process';
import {runMaxArea} from "./container-with-most-water";
import {runInToRoman} from "./integer-to-roman";
import {runIsMatch} from "./regular-expression-matching";
import {runReverse} from "./revers-integer";
import {runZigzagConverion} from "./zigzag-convert";
import {runFindMedianSortedArrays} from "./find-median-sordet-array";

console.log(`Started on ${process.platform}!`);

runMaxArea();
runInToRoman();
runIsMatch();
runReverse();
runZigzagConverion();
runFindMedianSortedArrays();

