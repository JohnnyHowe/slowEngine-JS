import {Display} from "../display/index.js";
import * as Conversions from "./vectorConversions.js";

import {Vector} from "../geometry/index.js";

/**
 * Draw an image on the screen
 * position and size in pixels
 * @param {SlowEngineImage} image - Image to draw
 * @param {Vector} position - Where to put the image (centre anchor)
 * @param {Vector} size - absolute size of image
 */
function drawScreenImage(image, position, size) {
    if (image.isLoaded()) {
        let topLeft = position.minus(size.divided(2));
        Display.context.drawImage(image.image, topLeft.x, topLeft.y, size.x, size.y);
    }
}


/**
 * Draw the image
 * position in game units
 * @param {SlowEngineImage} image - image to draw
 * @param {Vector} position - Where to put the image (centre anchor)
 * @param {Vector} pixelsPerUnit - how to scale the image, how many pixels per game unit?
 */
function drawGameImage(image, position, pixelsPerUnit) {
    if (image.isLoaded()) {
        let size = image.getSize();
        let displaySize = new Vector(size.x / pixelsPerUnit.x, size.y / pixelsPerUnit.y).multiplied(Display.Camera.pixelsPerUnit)
        drawScreenImage(image, Conversions.getScreenPosition(position), displaySize);
    }
}


export {drawScreenImage, drawGameImage}