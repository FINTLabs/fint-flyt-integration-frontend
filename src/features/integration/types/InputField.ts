import {INPUT_TYPE} from "./InputType.enum";
import {IResourceItem} from "../../../resourcesContext/types";

export interface IInputField {
    input: INPUT_TYPE;
    label: string;
    formValue: string;
    value?: Function | string;
    dropDownItems?: ISelect[];
    radioOptions?: ISelect[];
    defaultValue?: string;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    setter?: (item: IResourceItem) => void;
    searchOption?: boolean;
}

export interface ISelect {
    label: string,
    value: string,
    description?: string
}