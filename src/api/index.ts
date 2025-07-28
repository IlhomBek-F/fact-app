import { InfoType } from "../core/enums"
import { isRandom } from "../helper"

const BASE_URL = "http://numbersapi.com"

export function getInfo(value: number, type: InfoType): Promise<Response> {
    const factIndex = isRandom(value) ? InfoType.Random : value
    return fetch(`${BASE_URL}/${factIndex}/${type}`)
}