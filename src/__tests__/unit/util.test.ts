// @ts-ignore
import {ValueBuilder} from "../../features/integration/types/ValueBuilder";
import {createValueBuilder, fieldToString, toValueString} from "../../features/util/ValueBuilderUtil";
import {MOCK_CASE_CONFIGURATION} from "../mock/mock-case-configuration";

const valueBuilderWithTags: ValueBuilder = {
    value: "Lorem ipsum %s %s",
    properties: [{key: "foo", order: 0, source: "FORM"}, {key: "bar", order: 1, source: "FORM"}]}

const valueBuilderNoTags: ValueBuilder = {
    value: "Lorem ipsum foo bar", properties: []}

const valueBuilderOnlyTag: ValueBuilder = {
    value: "%s", properties: [{key: "foo", order: 0, source: "FORM"}]}

const valueBuilderOnlyTags: ValueBuilder = {
    value: "%s %s %s", properties: [{key: "foo", order: 0, source: "FORM"}, {key: "bar", order: 1, source: "FORM"}, {key: "bubu", order: 2, source: "FORM"}]}

const valueBuilderEmptyString: ValueBuilder = {
    value: "", properties: []
}
const valueBuilderNoProperties: ValueBuilder = {
    value: "Lorem ipsum, foo, bar"
}

const valueBuilderEmpty: ValueBuilder = {}

test('It should format tags correctly', () => {
    expect(createValueBuilder("Lorem ipsum {foo} {bar}")).toEqual(valueBuilderWithTags);
});

test('It should handle no tags, and format correctly', () => {
    expect(createValueBuilder("Lorem ipsum foo bar")).toEqual(valueBuilderNoTags);
});

test('It should handle just tags, and format correctly', () => {
    expect(createValueBuilder("{foo}")).toEqual(valueBuilderOnlyTag);
});

test('It should handle empty input string', () => {
    expect(createValueBuilder("")).toEqual(valueBuilderEmptyString);
});

test('It should convert from valueBuilder with tags to valueString correctly', () => {
    expect(toValueString(valueBuilderWithTags)).toEqual("Lorem ipsum {foo} {bar}");
});

test('It should convert from valueBuilder with only tag to valueString correctly', () => {
    expect(toValueString(valueBuilderOnlyTag)).toEqual("{foo}");
});

test('It should convert from valueBuilder with only tags to valueString correctly', () => {
    expect(toValueString(valueBuilderOnlyTags)).toEqual("{foo} {bar} {bubu}");
});

test('It should convert from valueBuilder with no tags to valueString correctly', () => {
    expect(toValueString(valueBuilderNoTags)).toEqual("Lorem ipsum foo bar");
});

test('It should handle empty valuebuilder', () => {
    expect(toValueString(valueBuilderEmpty)).toEqual("");
});

test('It should handle no properties', () => {
    expect(toValueString(valueBuilderNoProperties)).toEqual("Lorem ipsum, foo, bar");
});

test('It should convert field to string', () => {
    expect(fieldToString(MOCK_CASE_CONFIGURATION, "administrativenhet")).toEqual("unit4");
});

test('It should convert field with tags to string', () => {
    expect(fieldToString(MOCK_CASE_CONFIGURATION, "offentligTittel", true)).toEqual("public title also with {two} {tags}");
});