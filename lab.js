import { Point } from "./src/math.js"


// Custom variables
let radUnit = 1.6180339887498949
let rad = 0
// let a = 0
let phi = 1.6180339887498949
let b = 0.1
let a = 0
//


/**
 * 
 * @param {*} point 
 */
export function start(point) {
    point.x = 0
    point.y = 0
}

/**
 * 
 * @param {Point} point 
 * @returns 
 */
export function calcNext(point) {
    point.x = (a + b * rad) * Math.cos(rad)
    point.y = (a + b * rad) * Math.sin(rad)
    rad += radUnit
}




/**
 * Settings
 */
export const drawSpeed = 1
export const pointLimit = 40000
export const pointSize = 2
export const lineColor = "#aaaaaa00"