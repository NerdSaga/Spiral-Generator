import { Point } from "./math.js";
import { calcNext, drawSpeed, lineColor, pointLimit, pointSize, showLines, start } from "../lab.js";
const canvas = document.createElement("canvas")
canvas.id = "gfxSurface";
canvas.width = 2000
canvas.height = 2000
document.body.appendChild(canvas)

const gfx = canvas.getContext("2d")
gfx.strokeStyle = "#ffffff"
gfx.translate(canvas.width/2, canvas.height/2)
gfx.save()
gfx.lineWidth = 2





let pen = new Point(0, 0)
let nextPen = new Point(0, 0)

let points = [
]



function draw() {
    gfx.fillStyle = "#ff5555"
    gfx.strokeStyle = lineColor
    gfx.beginPath()

    if (showLines)
    {
        for (let i = 1; i < points.length; i++) {
            const point = points[i];
            gfx.lineTo(point.x, point.y)
        }
    }


    gfx.lineTo(pen.x, pen.y)

    gfx.stroke()

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        gfx.fillRect(point.x-pointSize/2, point.y-pointSize/2, pointSize, pointSize)
    }

    gfx.fillStyle = "#55ff55"
    gfx.fillRect(pen.x-5, pen.y-5, 10, 10)

}

function penAtNext() {
    const distX = nextPen.x - pen.x
    const distY = nextPen.x - pen.x

    if (distX < 1 && distX > -1) {
        if (distY < 1 && distY > -1) {
            return true
        }
    }

    return false
}


gfx.fillStyle = "#123456"
gfx.fillRect(-canvas.width, -canvas.height, canvas.width*2, canvas.height*2)


let pointLimitReached = false
function loop() {
    gfx.fillStyle = "#ffffff"
    gfx.font = "50px sans-serif"
    // gfx.fillText("Point Count: " + points.length, -canvas.width / 2, canvas.width / 2)

    calcNext(pen)

    gfx.fillStyle = "#44ff44"
    gfx.fillRect(pen.x-pointSize/2, pen.y-pointSize/2, pointSize, pointSize)

    // pen.x += (nextPen.x - pen.x) * drawSpeed
    // pen.y += (nextPen.y - pen.y) * drawSpeed

    // if (penAtNext()) {
    //     pen.x = nextPen.x
    //     pen.y = nextPen.y
    //     points.push(new Point(pen.x, pen.y))

    //     if (points.length > pointLimit) {
    //         console.log("Met point limit: " + pointLimit)
    //         pointLimitReached = true
    //     }

    //     calcNext(nextPen)
    // }

    // draw()

    // if (!pointLimitReached) {
        // requestAnimationFrame(loop)
    // }
}
setInterval(loop, 1)
start(nextPen)
loop()