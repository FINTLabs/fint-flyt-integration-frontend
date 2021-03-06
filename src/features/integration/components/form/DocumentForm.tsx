import {Box, Button, Divider, FormGroup, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {IInputField} from "../../types/InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import InputField from "./InputField";
import {FieldErrors} from "react-hook-form";
import {ResourcesContext} from "../../../../context/resourcesContext";
import HelpPopover from "../popover/HelpPopover";
import { useTranslation } from 'react-i18next';

const DocumentForm: React.FunctionComponent<any> = (props) => {
    const { t } = useTranslation('translations', { keyPrefix: 'pages.integrationForm.accordions.documentForm'});
    const {accessCodes, paragraphs, documentStatuses, variants} = useContext(ResourcesContext);
    let errors: FieldErrors = props.errors;
    let required: boolean = props.validation;
    const documentFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "labels.title", formValue: "documentData.title", required: required, error:errors.documentData?.title, value: props.activeFormData?.documentData?.title, helpText: "documentData.title"},
        {input: INPUT_TYPE.DROPDOWN, label: "labels.documentStatus", value: props.watch("documentData.documentStatus"), formValue: "documentData.documentStatus", dropDownItems: documentStatuses, required: required, error:errors.documentData?.documentStatus, helpText: "documentData.documentStatus"},
        {input: INPUT_TYPE.DROPDOWN, label: "labels.accessCode", value: props.watch("documentData.accessCode"), formValue: "documentData.accessCode", dropDownItems: accessCodes, required: required, error:errors.documentData?.accessCode, helpText: "documentData.accessCode"},
        {input: INPUT_TYPE.AUTOCOMPLETE, label: "labels.paragraph", value: props.watch("documentData.paragraph"), formValue: "documentData.paragraph", dropDownItems: paragraphs, required: required, error:errors.documentData?.paragraph, helpText: "documentData.paragraph"}
    ]
    const objectFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPDOWN, label: "labels.variant", value: props.watch("documentData.variant"), formValue: "documentData.variant", dropDownItems: variants, required: required, error:errors.documentData?.variant, helpText: "documentData.variant"}
    ]
    return (
        <div>
            <FormGroup className={props.style.formControl}>
                <Typography>{t('documentDescription')}</Typography>
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
                                            setter={field.setter}
                                            {...props}
                                />
                            </Box>
                            <Box>
                                <HelpPopover popoverContent={field.helpText}/>
                            </Box>
                        </Box>
                    )}
                )}
                <Typography>{t('objectDescription')}</Typography>
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
                                            setter={field.setter}
                                            {...props}
                                />
                            </Box>
                            <Box>
                                <HelpPopover popoverContent={field.helpText}/>
                            </Box>
                        </Box>
                    )}
                )}
            </FormGroup>
            <Button sx={{mb: 2}} onClick={props.onSave} variant="contained">{t('button.save')}</Button>
        </div>
    );
}

export default DocumentForm;