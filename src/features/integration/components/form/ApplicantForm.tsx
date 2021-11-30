import {FormGroup} from '@mui/material';
import React from 'react';
import {dropdownPlaceholder} from "../../util/DefaultValues";
import InputField from "./InputField";
import {INPUT_TYPES} from "../../types/InputTypes.enum";
import {IInputField} from "../../types/InputField";

const ApplicantForm: React.FunctionComponent<any> = (props) => {
    const inputTestArray: IInputField[] = [
        {input: INPUT_TYPES.TEXT_FIELD, label: "Navn", formValue: "applicantData.name"},
        {input: INPUT_TYPES.TEXT_FIELD, label: "Adresse", formValue: "applicantData.address"},
        {input: INPUT_TYPES.TEXT_FIELD, label: "Postnummer", formValue: "applicantData.postalCode"},
        {input: INPUT_TYPES.TEXT_FIELD, label: "Poststed", formValue: "applicantData.city"},
        {input: INPUT_TYPES.TEXT_FIELD, label: "Telefonnummer", formValue: "applicantData.phoneNumber"},
        {input: INPUT_TYPES.TEXT_FIELD, label: "Epost", formValue: "applicantData.email"},
        {input: INPUT_TYPES.DROPDOWN, label: "Tilgangskode", value: props.watch("applicantData.accessCode"), formValue: "applicantData.accessCode", dropDownItems: dropdownPlaceholder},
        {input: INPUT_TYPES.DROPDOWN, label: "Hjemmel", value: props.watch("applicantData.paragraph"), formValue: "applicantData.paragraph", dropDownItems: dropdownPlaceholder}
    ]

    return (
        <FormGroup className={props.style.formControl}>
            {inputTestArray.map((inputInfo, index) => {
                return (
                    <InputField key={index}
                                input={inputInfo.input}
                                label={inputInfo.label}
                                value={inputInfo.value}
                                formValue={inputInfo.formValue}
                                dropdownItems={inputInfo.dropDownItems}
                                setValue={props.setValue}/>
                )})}
        </FormGroup>
    );
}

export default ApplicantForm;