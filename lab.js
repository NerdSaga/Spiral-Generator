import { Point } from "./src/math.js"


// Custom variables
let radUnit = 0.1
let rad = 0
let phi = 1.6180339887498949
let c = 1
let n = 0
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
    // let r = c * Math.sqrt(n)
    // let o = n * phi

    point.x = (c * Math.sqrt(n * phi) * Math.sin(n * phi))
    point.y = (c * Math.sqrt(n * phi) * Math.cos(n * phi))
    n++
    
}




/**
 * Settings
 */
export const drawSpeed = 1
export const pointLimit = 50000
export const pointSize = 2
export const lineColor = "#00000000"
export const showLines = false