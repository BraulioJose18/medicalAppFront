export function removeUndefined(object: any) {
    let resultObj: any = {}
    Object.keys(object).forEach((key) => {
        if (object[key] === Object(object[key])) {
            resultObj[key] = removeUndefined(object[key]);
        } else if (object[key] !== undefined) {
            resultObj[key] = object[key];
        } else {
        }
    })
    return resultObj
}
