export function removeUndefined(object: any) {
    let resultObj: any = {}
    Object.keys(object).forEach((key) => {
        if (object[key] === Object(object[key])) {
            console.log(key + "HAS MORE")
            resultObj[key] = removeUndefined(object[key]);
        } else if (object[key] !== undefined) {
            console.log(key + " - NOT UNDEFINED")
            resultObj[key] = object[key];
        } else {
            console.log(key + " - UNDEFINED")
        }
    })
    return resultObj
}
