
function get (json, search) {
    let pointer = 0;
    let key = "";
    let result = json;
    let isGet = true;

    while(pointer <= search.length - 1) {
        if(search[pointer] === "." || search[pointer] === "[") {
            // 可能存在 ]. 的情况，不取值，p++
            // 对象取值
            if(key) result = result[key]
            key = ""
            pointer++
            isGet = true
        } else if(search[pointer] === "]") {
            // 数组取值
            result = result[Number(key)]
            key = ""
            pointer++
            isGet = true
        } else {
            isGet = false
            key += search[pointer++]
        }
    }
    return isGet ? result : result[key]
}
const json = {
    a: [
        {
            b: "c",
            c: [
                {},
                {
                    y: "取值"
                }
            ]
        },
        "d"
    ],
    x: 1
}

console.log('result ===', get(json, "a[0].c[1].y"))
