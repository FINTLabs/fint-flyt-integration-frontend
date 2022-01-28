import {Box, Divider, FormGroup, Typography} from '@mui/material';
import React from 'react';
import {dropdownPlaceholder, HelpTextPopover} from "../../util/DefaultValues";
import {IInputField} from "../../types/InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import InputField from "./InputField";
import {FieldErrors} from "react-hook-form";
import HelpPopover from "../popover/HelpPopover";

const DocumentForm: React.FunctionComponent<any> = (props) => {
    let errors: FieldErrors = props.errors;
    let required: boolean = props.validation;
    const documentFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Tittel", formValue: "documentData.title", required: required, error:errors.documentData?.title, value: props.activeFormData?.documentData?.title},
        {input: INPUT_TYPE.DROPDOWN, label: "Status", value: props.watch("documentData.documentStatus"), formValue: "documentData.documentStatus", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.documentStatus},
        {input: INPUT_TYPE.DROPDOWN, label: "Kategori ##", value: props.watch("documentData.format"), formValue: "documentData.format", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.format},
        {input: INPUT_TYPE.DROPDOWN, label: "Tilgangskode", value: props.watch("documentData.accessCode"), formValue: "documentData.accessCode", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.accessCode},
        {input: INPUT_TYPE.DROPDOWN, label: "Hjemmel", value: props.watch("documentData.paragraph"), formValue: "documentData.paragraph", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.paragraph},
        {input: INPUT_TYPE.DROPDOWN, label: "Format", value: props.watch("documentData.format"), formValue: "documentData.format", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.format},
        {input: INPUT_TYPE.DROPDOWN, label: "Kassasjonskode", value: props.watch("documentData.paragraph"), formValue: "documentData.paragraph", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.paragraph},
        {input: INPUT_TYPE.DROPDOWN, label: "Bevaringstid", value: props.watch("documentData.variant"), formValue: "documentData.variant", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.variant}
    ]
    const objectFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPDOWN, label: "Variant", value: props.watch("documentData.variant"), formValue: "documentData.variant", dropDownItems: dropdownPlaceholder, required: required, error:errors.documentData?.variant},
     ]
    return (
        <FormGroup className={props.style.formControl}>
            <Typography>Dokumentbeskrivelse</Typography>
            <Divider sx={{mb: 3}}/>
            {documentFormFields.map((field, index) => {
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
            <Typography>Objektbeskrivelse</Typography>
            <Divider sx={{mb: 3}}/>
            {objectFormFields.map((field, index) => {
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

export default DocumentForm;