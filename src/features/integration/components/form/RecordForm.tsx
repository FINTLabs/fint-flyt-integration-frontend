import {FormGroup} from '@mui/material';
import React from 'react';
import {dropdownPlaceholder} from "../../util/DefaultValues";
import {IInputField} from "../../types/InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import InputField from "./InputField";

const RecordForm: React.FunctionComponent<any> = (props) => {
    const recordFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Tittel", formValue: "recordData.title"},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Offentlig tittel", formValue: "recordData.publicTitle"},
        {input: INPUT_TYPE.DROPDOWN, label: "Kategori", value: props.watch("recordData.category"), formValue: "recordData.category", dropDownItems: dropdownPlaceholder},
        {input: INPUT_TYPE.DROPDOWN, label: "Administrativ enhet", value: props.watch("recordData.administrativeUnit"), formValue: "recordData.administrativeUnit", dropDownItems: dropdownPlaceholder},
        {input: INPUT_TYPE.DROPDOWN, label: "Status", value: props.watch("recordData.status"), formValue: "recordData.status", dropDownItems: dropdownPlaceholder},
        {input: INPUT_TYPE.DROPDOWN, label: "Tilgangskode", value: props.watch("recordData.accessCode"), formValue: "recordData.accessCode", dropDownItems: dropdownPlaceholder},
        {input: INPUT_TYPE.DROPDOWN, label: "Hjemmel", value: props.watch("recordData.paragraph"), formValue: "recordData.paragraph", dropDownItems: dropdownPlaceholder},
   ]
    return (
        <FormGroup className={props.style.formControl}>
            {recordFormFields.map((field, index) => {
                return (
                    <InputField key={index}
                                required={field.required}
                                error={field.error}
                                input={field.input}
                                label={field.label}
                                value={field.value}
                                formValue={field.formValue}
                                dropdownItems={field.dropDownItems}
                                {...props}
                    />
                )}
            )}
        </FormGroup>
    );
}

export default RecordForm;