import {Box, FormGroup} from '@mui/material';
import React from 'react';
import {applicantOptions, dropdownPlaceholder, HelpTextPopover} from "../../util/DefaultValues";
import InputField from "./InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import {IInputField} from "../../types/InputField";
import {ApplicantType} from "../../types/ApplicantType";
import {FieldErrors} from "react-hook-form";
import HelpPopover from "../popover/HelpPopover";

const ApplicantForm: React.FunctionComponent<any> = (props) => {
    let isOrganisation = props.watch("applicantData.type") === ApplicantType.ORGANISATION
    let errors: FieldErrors = props.errors;
    let required: boolean = props.validation;
    const applicantFormFields: IInputField[] = [
        {input: INPUT_TYPE.RADIO, label: "Velg avsendertype", formValue: "applicantData.type", value: props.watch("applicantData.type"), radioOptions: applicantOptions, defaultValue: props.watch("applicantData.type"), helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Organisasjonsnummer", formValue: "applicantData.organisationNumber", required:isOrganisation && required, hidden:!isOrganisation, error:errors.applicantData?.organisationNumber, value: props.activeFormData?.applicantData?.organisationNumber, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Fødelsesnummer", formValue: "", required:isOrganisation && required, hidden:isOrganisation, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Navn", formValue: "applicantData.name", required:required, error:errors.applicantData?.name, value: props.activeFormData?.applicantData?.name, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Adresse", formValue: "applicantData.address", required:required, error:errors.applicantData?.address, value: props.activeFormData?.applicantData?.address, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Postnummer", formValue: "applicantData.postalCode", required:required, error:errors.applicantData?.postalCode, value: props.activeFormData?.applicantData?.postalCode, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Poststed", formValue: "applicantData.city", required:required, error:errors.applicantData?.city, value: props.activeFormData?.applicantData?.city, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Telefonnummer", formValue: "applicantData.phoneNumber", required:required, error:errors.applicantData?.phoneNumber, value: props.activeFormData?.applicantData?.phoneNumber, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Epost", formValue: "applicantData.email", required:required, error:errors.applicantData?.email, value: props.activeFormData?.applicantData?.email, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Kontaktperson ##", formValue: "applicantData.email", required:required, error:errors.applicantData?.email, value: props.activeFormData?.applicantData?.email, helpText:HelpTextPopover},
        {input: INPUT_TYPE.SWITCH, label: "Skjerming", formValue: ''},
        {input: INPUT_TYPE.DROPDOWN, label: "Tilgangskode", value: props.watch("applicantData.accessCode"), formValue: "applicantData.accessCode", dropDownItems: dropdownPlaceholder, required:required, error:errors.applicantData?.accessCode, helpText:HelpTextPopover},
        {input: INPUT_TYPE.DROPDOWN, label: "Hjemmel", value: props.watch("applicantData.paragraph"), formValue: "applicantData.paragraph", dropDownItems: dropdownPlaceholder, required:required, error:errors.applicantData?.paragraph, helpText:HelpTextPopover},
    ]

    return (
        <div>
            <FormGroup className={props.style.formControl}>
                {applicantFormFields.map((field, index) => {
                    return (
                        field.hidden ?
                            <div key={index}/> :
                            <Box sx={{display: 'flex'}} key={index}>
                                <Box width={'100%'}>
                                    <InputField required={field.required}
                                                error={field.error}
                                                input={field.input}
                                                label={field.label}
                                                value={field.value}
                                                formValue={field.formValue}
                                                dropdownItems={field.dropDownItems}
                                                radioOptions={field.radioOptions}
                                                defaultValue={field.defaultValue}
                                                {...props}
                                    />
                                </Box>
                                {field.helpText && <Box>
                                    <HelpPopover popoverContent={field.helpText}/>
                                </Box>}
                            </Box>
                    )}
                )}
            </FormGroup>
        </div>
    );
}

export default ApplicantForm;