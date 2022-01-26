import {Box, FormGroup} from '@mui/material';
import React from 'react';
import {caseWorkers, dropdownPlaceholder, HelpTextPopover} from "../../util/DefaultValues";
import {IInputField} from "../../types/InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import InputField from "./InputField";
import {FieldErrors} from "react-hook-form";
import HelpPopover from "../popover/HelpPopover";

const CaseForm: React.FunctionComponent<any> = (props) => {
    let errors: FieldErrors = props.errors;
    let required: boolean = props.validation;
    const caseFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Tittel", formValue: "caseData.title", required: required, error:errors.caseData?.title, value: props.activeFormData?.caseData?.title},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Offentlig tittel", formValue: "caseData.publicTitle", required: required, error:errors.caseData?.publicTitle, value: props.activeFormData?.caseData?.publicTitle},
        {input: INPUT_TYPE.DROPDOWN, label: "Sakstype", value: props.watch("caseData.caseType"), formValue: "caseData.caseType", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.caseType},
        {input: INPUT_TYPE.DROPDOWN, label: "Administrativ enhet", value: props.watch("caseData.administrativeUnit"), formValue: "caseData.administrativeUnit", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.administrativeUnit},
        {input: INPUT_TYPE.DROPDOWN, label: "Arkivdel", value: props.watch("caseData.archiveUnit"), formValue: "caseData.archiveUnit", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.archiveUnit},
        {input: INPUT_TYPE.DROPDOWN, label: "Journalenhet", value: props.watch("caseData.recordUnit"), formValue: "caseData.recordUnit", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.recordUnit},
        {input: INPUT_TYPE.DROPDOWN, label: "Tilgangskode", value: props.watch("caseData.accessCode"), formValue: "caseData.accessCode", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.accessCode},
        {input: INPUT_TYPE.DROPDOWN, label: "Hjemmel", value: props.watch("caseData.paragraph"), formValue: "caseData.paragraph", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.paragraph},
        {input: INPUT_TYPE.DROPDOWN, label: "Saksansvarlig", value: props.watch("caseData.caseWorker"), formValue: "caseData.caseWorker", dropDownItems: caseWorkers, required: required, error:errors.caseData?.caseWorker},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Primær ordningsprinsipp", formValue: "caseData.primaryClassification", required: required, error:errors.caseData?.primaryClassification, value: props.activeFormData?.caseData?.primaryClassification},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Sekundær ordningsprinsipp", formValue: "caseData.secondaryClassification", required: required, error:errors.caseData?.secondaryClassification, value: props.activeFormData?.caseData?.secondaryClassification},
        {input: INPUT_TYPE.DROPDOWN, label: "Primærklasse", value: props.watch("caseData.primaryClass"), formValue: "caseData.primaryClass", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.primaryClass},
        {input: INPUT_TYPE.DROPDOWN, label: "Sekundærklasse", value: props.watch("caseData.secondaryClass"), formValue: "caseData.secondaryClass", dropDownItems: dropdownPlaceholder, required: required, error:errors.caseData?.secondaryClass},
    ]

    return (
        <FormGroup className={props.style.formControl}>
            {caseFormFields.map((field, index) => {
                return (
                    <Box sx={{display: 'flex'}} key={index}>
                        <Box width={'100%'}>
                            <InputField required={field.required}
                                        error={field.error}
                                        input={field.input}
                                        label={field.label}
                                        value={field.value}
                                        formValue={field.formValue}
                                        dropdownItems={field.dropDownItems}
                                        {...props}
                            />
                        </Box>
                        <Box>
                            <HelpPopover popoverContent={HelpTextPopover}/>
                        </Box>
                    </Box>
                )}
            )}
        </FormGroup>
    );
}

export default CaseForm;