import {Box, Card, Typography, Button, MenuItem, FormControl, Select, InputLabel, SelectChangeEvent, CardContent, Divider} from "@mui/material";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import IntegrationRepository from "../../integration/repository/IntegrationRepository";
import {useHistory} from "react-router-dom";
import {toListValue} from "../../util/ValueBuilderUtil";
import {IIntegrationConfiguration} from "../../integration/types/IntegrationConfiguration";
import {ResourcesContext} from "../../../resourcesContext";
import {IntegrationContext} from "../../../integrationContext";
import {
    dropdownPlaceholder, forms, sourceApplications,
} from "../../integration/defaults/DefaultValues";
import {ISelect} from "../../integration/types/InputField";


const IntegrationConfigurationDetails: React.FunctionComponent<any> = (props) => {
    let history = useHistory();
    const [activeConfiguration, setActiveConfiguration] = useState<IIntegrationConfiguration>(props.initialConfiguration)
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [version, setVersion] = useState(props.initialConfiguration.version)
    const latestVersion = props.initialVersion;
    const {integration, setIntegration} = useContext(IntegrationContext);
    const versions = [];
    for (let i = 1; i<=latestVersion; i++) {
        versions.push({label: i, value: i})
    }
    const { getAllResources, administrativeUnits, archiveSections, statuses, accessCodes,paragraphs, archiveResources,primaryClass,secondaryClass,
        classificationSystems,documentTypes,recordStatuses,documentStatuses,variants } = useContext(ResourcesContext);

    const caseFormFieldValues = [
        {label: "Sakstype", formValue: "caseType", dropDownItems: dropdownPlaceholder},
        {label: "Administrativ enhet",  formValue: "administrativeUnit", dropDownItems: administrativeUnits},
        {label: "Arkivdel", formValue: "archiveUnit", dropDownItems: archiveSections},
        {label: "Journalenhet", formValue: "recordUnit", dropDownItems: administrativeUnits},
        {label: "Status", formValue: "status", dropDownItems: statuses},
        {label: "Tilgangskode", formValue: "accessCode", dropDownItems: accessCodes},
        {label: "Hjemmel", formValue: "paragraph", dropDownItems: paragraphs},
        {label: "Saksansvarlig", formValue: "caseWorker", dropDownItems: archiveResources},
        {label: "Primær ordningsprinsipp", formValue: "primaryClassification"},
        {label: "Primærklasse", formValue: "primaryClass", dropDownItems: primaryClass},
        {label: "Sekundær ordningsprinsipp", formValue: "secondaryClassification",dropDownItems: classificationSystems},
        {label: "Sekundærklasse", formValue: "secondaryClass", dropDownItems: secondaryClass}
    ]
    const recordFormFieldsValues = [
        {label: "Dokumenttype", formValue: "recordData.type", dropDownItems: documentTypes},
        {label: "Administrativ enhet", formValue: "recordData.administrativeUnit", dropDownItems: administrativeUnits},
        {label: "Status", formValue: "recordData.recordStatus", dropDownItems: recordStatuses},
        {label: "Tilgangskode", formValue: "recordData.accessCode", dropDownItems: accessCodes},
        {label: "Hjemmel", formValue: "recordData.paragraph", dropDownItems: paragraphs}
    ]

    const documentFormFields = [
        {label: "Status", formValue: "documentData.documentStatus", dropDownItems: documentStatuses},
        {label: "Tilgangskode", formValue: "documentData.accessCode", dropDownItems: accessCodes},
        {label: "Hjemmel", formValue: "documentData.paragraph", dropDownItems: paragraphs},
        {label: "Variant", formValue: "documentData.variant", dropDownItems: variants}

    ]

    const applicantFormFields = [
        {label: "Tilgangskode", formValue: "applicantData.accessCode", dropDownItems: accessCodes},
        {label: "Hjemmel", formValue: "applicantData.paragraph", dropDownItems: paragraphs},
    ]

    const getListValueLabel = (fieldName: string, valueList?: ISelect[]) => {
        const fieldValue = activeConfiguration.caseConfiguration?.fields.find(element => element.field === fieldName)?.valueBuilder.value;
        if(fieldValue)
            return toListValue(fieldValue, valueList);
        else
            return '';
    }

    useEffect(()=> {
        getAllResources();
    }, [])

    useEffect(()=> {
        getConfiguration(version);
    }, [version, setVersion])

    const getConfiguration = (version: any) => {
        IntegrationRepository.getByIdAndVersion(integration.integrationId, version)
            .then((response) => {
                const configuration = response.data;
                setActiveConfiguration(configuration)
                setIntegration(configuration)
            })
            .catch(e => console.error('Error: ', e))
    }

    const updateConfiguration = (integrationId: string, data: IIntegrationConfiguration) => {
        IntegrationRepository.update(integrationId, data)
            .then(response => {
                console.log('updated configuraton: ', integrationId,  data, response);
                setUpdateSuccess(response.status === 200);
            })
            .catch((e: Error) => {
                console.log('error updating configuration', e);
            });
    }

    const handleChange = (event: SelectChangeEvent) => {
        setVersion(event.target.value);
    };

    const handleEdit = () => {
        history.push({
            pathname: '/integration/configuration/edit',
        })
        setIntegration(activeConfiguration);
    }

    const handleVersionChange = () => {
        if(activeConfiguration.integrationId) {
            updateConfiguration(activeConfiguration.integrationId, activeConfiguration);
        }
    }

    return (
        <>
            {!updateSuccess &&
                <Box width={950}>
                    <Card sx={{mb: 4}}>
                        <FormControl size='small' sx={{float: 'right', width: 300, m: 2}}>
                            <InputLabel id="version-select-input-label">Versjon</InputLabel>
                            <Select
                                labelId="version-select-label"
                                id="version-select"
                                value={version}
                                label="Versjon"
                                onChange={handleChange}
                            >
                                {versions.map((item: any, index: number) => (
                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                            {version !== integration.integrationId && <Button onClick={handleVersionChange}>Bruk denne versjonen</Button>}
                        </FormControl>
                        <CardContent>
                            <Typography><strong>Id: </strong>{activeConfiguration.integrationId}</Typography>
                            <Typography><strong>Navn: </strong>{activeConfiguration.name}</Typography>
                            <Typography><strong>Beskrivelse: </strong>{activeConfiguration.description}</Typography>
                            <Typography><strong>Skjemaleverandør: </strong>{toListValue(activeConfiguration.sourceApplication, sourceApplications)}</Typography>
                            <Typography><strong>Skjema: </strong>{toListValue(activeConfiguration.sourceApplicationIntegrationId, forms)}</Typography>
                            <Typography><strong>Integrasjonslogikk: </strong>{activeConfiguration.caseConfiguration?.caseCreationStrategy}</Typography>
                            <Typography><strong>Publisert: </strong>{activeConfiguration.isPublished? 'Ja' : 'Nei'}</Typography>
                            <Typography><strong>Versjon: </strong>{activeConfiguration.version}</Typography>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Typography variant={"h6"}>Sakspost</Typography>
                            <Typography><strong>Saksnummer: </strong>{activeConfiguration.caseConfiguration?.caseNumber}</Typography>
                            {caseFormFieldValues.map((field) => {
                                const displayValue = getListValueLabel(field.formValue, field.dropDownItems);
                                return (
                                    <Typography key={field.label}><strong>{field.label}: </strong>{displayValue}</Typography>
                                )}
                            )}
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Typography variant={"h6"}>Journalpost</Typography>
                            {recordFormFieldsValues.map((field) => {
                                    const displayValue = getListValueLabel(field.formValue, field.dropDownItems);
                                    return (
                                        <Typography key={field.label}><strong>{field.label}: </strong>{displayValue}</Typography>
                                    )
                                }
                            )}
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Typography variant={"h6"}>Dokument- og objektbeskrivelse</Typography>
                            {documentFormFields.map((field) => {
                                    const displayValue = getListValueLabel(field.formValue, field.dropDownItems);
                                    return (
                                        <Typography key={field.label}><strong>{field.label}: </strong>{displayValue}</Typography>
                                    )
                                }
                            )}
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Typography variant={"h6"}>Avsender</Typography>
                            <Typography><strong>orgnummer:</strong> {activeConfiguration.applicantConfiguration?.organisationNumber}</Typography>
                        <Typography><strong>persnummer:</strong> {activeConfiguration.applicantConfiguration?.nationalIdentityNumber}</Typography>
                            {applicantFormFields.map((field) => {
                                    const displayValue = getListValueLabel(field.formValue, field.dropDownItems);
                                    return (
                                        <Typography key={field.label}><strong>{field.label}: </strong>{displayValue}</Typography>
                                    )
                                }
                            )}
                        </CardContent>
                    </Card>
                    <Button variant="contained" onClick={props.reset}>Tilbake</Button>
                    <Button sx={{float: 'right'}} variant="contained" onClick={handleEdit}>Rediger konfigurasjon</Button>
                </Box>
            }
            {updateSuccess &&
            <Box>
                <Typography>Endret til revisjon {activeConfiguration.version}</Typography>
                <Button variant="contained" onClick={props.reset}>Tilbake</Button>
            </Box>
            }

        </>
    );
}

export default IntegrationConfigurationDetails;