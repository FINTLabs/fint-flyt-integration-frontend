import {addId} from "../../features/util/JsonUtil";

const array = [
    {
        "name":"name0",
        "type":"INFO",
        "errors":[]
    }, {
        "name":"name1",
        "type":"ERROR",
        "errors":[
            {"errorCode":"error0Code"},
            {"errorCode":"error1Code"}
        ]
    }
]

const expectedArray = [
    {
        "id": 0,
        "name":"name0",
        "type":"INFO",
        "errors":[]
    }, {
        "name":"name1",
        "id": 1,
        "type":"ERROR",
        "errors":[
            {"errorCode":"error0Code"},
            {"errorCode":"error1Code"}
        ]
    }
]

const expectedNestedArray = [
    {
        "name":"name0",
        "type":"INFO",
        "errors":[]
    }, {
        "name":"name1",
        "type":"ERROR",
        "errors":[
            {"id": 0, "errorCode":"error0Code"},
            {"id": 1, "errorCode":"error1Code"}
        ]
    }
]

test('It should add id field to json object, where there is a "name" field', () => {
    array.forEach(addId(0, 'name'))
    expect(array).toEqual(expectedArray);
});

test('It should add id field to nested json object, where there is a "errorCode" field', () => {
    array.forEach((item: any) =>
        item.errors.forEach(addId(0, 'errorCode'))
    );
    expect(array).toEqual(expectedNestedArray);
});

