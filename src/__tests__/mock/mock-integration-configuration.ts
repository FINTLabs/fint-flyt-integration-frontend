// noinspection DuplicatedCode

import {IIntegrationConfiguration} from "../../features/integration/types/IntegrationConfiguration";

export const MOCK_INTEGRATION_CONFIG: IIntegrationConfiguration = {
    "applicantConfiguration": {
        "applicantType": "PERSON",
        "fields": [
            {
                "field": "KorrespondansepartNavn",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Anakin Skywalker"
                }
            },
            {
                "field": "Adresse.adresselinje",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "highstreet 22"
                }
            },
            {
                "field": "Adresse.postnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1234"
                }
            },
            {
                "field": "Adresse.poststed",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Moria"
                }
            },
            {
                "field": "kontaktperson",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "donna"
                }
            },
            {
                "field": "Kontaktinformasjon.mobiltelefonnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "12345678"
                }
            },
            {
                "field": "Kontaktinformasjon.epostadresse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "hello@world.no"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p3"
                }
            }
        ]
    },
    "caseConfiguration": {
        "caseCreationStrategy": "NEW",
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Title of case"
                }
            },
            {
                "field": "offentligTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public title"
                }
            },
            {
                "field": "caseType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "casetype"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit4"
                }
            },
            {
                "field": "arkivdel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit3"
                }
            },
            {
                "field": "journalenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit0"
                }
            },
            {
                "field": "status",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": ""
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code42"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "number6"
                }
            },
            {
                "field": "saksansvarlig",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "rand"
                }
            },
            {
                "field": "primarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "prim"
                }
            },
            {
                "field": "sekundarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "rose"
                }
            },
            {
                "field": "tertiarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "everdeen"
                }
            },
            {
                "field": "primarklasse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1class"
                }
            },
            {
                "field": "sekundarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "2class"
                }
            },
            {
                "field": "tertiarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "3class"
                }
            },
            {
                "field": "primartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "primTitle"
                }
            },
            {
                "field": "sekundartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "secTitle"
                }
            },
            {
                "field": "tertiartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "tertTitle"
                }
            }
        ]
    },
    "description": "form to test mapping",
    "documentConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "document title"
                }
            },
            {
                "field": "dokumentStatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "D9"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p07"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentObjekt.variantFormat",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "var"
                }
            }
        ]
    },
    "name": "testform",
    "published": false,
    "recordConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "record title"
                }
            },
            {
                "field": "offentigTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public record title"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "cat8"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit33"
                }
            },
            {
                "field": "journalstatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "N"
                }
            },
            {
                "field": "saksbehandler",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "boba"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code89"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p34"
                }
            }
        ]
    },
    "sourceApplication": "Acos",
    "sourceApplicationIntegrationId": "VIK116"
}

export const MOCK_INTEGRATION_CONFIG_NOT_PUBLISHED = {
    "applicantConfiguration": {
        "applicantType": "PERSON",
        "fields": [
            {
                "field": "KorrespondansepartNavn",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Anakin Skywalker"
                }
            },
            {
                "field": "Adresse.adresselinje",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "highstreet 22"
                }
            },
            {
                "field": "Adresse.postnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1234"
                }
            },
            {
                "field": "Adresse.poststed",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Moria"
                }
            },
            {
                "field": "kontaktperson",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "donna"
                }
            },
            {
                "field": "Kontaktinformasjon.mobiltelefonnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "12345678"
                }
            },
            {
                "field": "Kontaktinformasjon.epostadresse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "hello@world.no"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p3"
                }
            }
        ]
    },
    "caseConfiguration": {
        "caseCreationStrategy": "NEW",
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Title of case"
                }
            },
            {
                "field": "offentligTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public title"
                }
            },
            {
                "field": "caseType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "casetype"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit4"
                }
            },
            {
                "field": "arkivdel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit3"
                }
            },
            {
                "field": "journalenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit0"
                }
            },
            {
                "field": "status",
                "valueBuildStrategy": 0,
                "valueBuilder": {}
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code42"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "number6"
                }
            },
            {
                "field": "saksansvarlig",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "rand"
                }
            },
            {
                "field": "primarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "prim"
                }
            },
            {
                "field": "sekundarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "rose"
                }
            },
            {
                "field": "tertiarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "everdeen"
                }
            },
            {
                "field": "primarklasse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1class"
                }
            },
            {
                "field": "sekundarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "2class"
                }
            },
            {
                "field": "tertiarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "3class"
                }
            },
            {
                "field": "primartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "primTitle"
                }
            },
            {
                "field": "sekundartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "secTitle"
                }
            },
            {
                "field": "tertiartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "tertTitle"
                }
            }
        ]
    },
    "description": "form to test mapping not published",
    "documentConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "document title"
                }
            },
            {
                "field": "dokumentStatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "D9"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p07"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentObjekt.variantFormat",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "var"
                }
            }
        ]
    },
    "name": "testform",
    "published": false,
    "recordConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "record title"
                }
            },
            {
                "field": "offentigTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public record title"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "cat8"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit33"
                }
            },
            {
                "field": "journalstatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "N"
                }
            },
            {
                "field": "saksbehandler",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "boba"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code89"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p34"
                }
            }
        ]
    }
}

export const MOCK_INTEGRATION_CONFIG_PUBLISHED = {
    "applicantConfiguration": {
        "applicantType": "PERSON",
        "fields": [
            {
                "field": "KorrespondansepartNavn",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Anakin Skywalker"
                }
            },
            {
                "field": "Adresse.adresselinje",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "highstreet 22"
                }
            },
            {
                "field": "Adresse.postnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1234"
                }
            },
            {
                "field": "Adresse.poststed",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Moria"
                }
            },
            {
                "field": "kontaktperson",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "bella"
                }
            },
            {
                "field": "Kontaktinformasjon.mobiltelefonnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "12345678"
                }
            },
            {
                "field": "Kontaktinformasjon.epostadresse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "hello@world.no"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p3"
                }
            }
        ]
    },
    "caseConfiguration": {
        "caseCreationStrategy": "NEW",
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Title of case"
                }
            },
            {
                "field": "offentligTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public title"
                }
            },
            {
                "field": "caseType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "casetype"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit4"
                }
            },
            {
                "field": "arkivdel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit3"
                }
            },
            {
                "field": "journalenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit0"
                }
            },
            {
                "field": "status",
                "valueBuildStrategy": 0,
                "valueBuilder": {}
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code42"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "number6"
                }
            },
            {
                "field": "saksansvarlig",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "rand"
                }
            },
            {
                "field": "primarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "prim"
                }
            },
            {
                "field": "sekundarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "rose"
                }
            },
            {
                "field": "tertiarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "everdeen"
                }
            },
            {
                "field": "primarklasse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1class"
                }
            },
            {
                "field": "sekundarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "2class"
                }
            },
            {
                "field": "tertiarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "3class"
                }
            },
            {
                "field": "primartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "primTitle"
                }
            },
            {
                "field": "sekundartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "secTitle"
                }
            },
            {
                "field": "tertiartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "tertTitle"
                }
            }
        ]
    },
    "description": "form to test mapping published",
    "documentConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "document title"
                }
            },
            {
                "field": "dokumentStatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "D9"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p07"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentObjekt.variantFormat",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "var"
                }
            }
        ]
    },
    "name": "testform",
    "published": true,
    "recordConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "record title"
                }
            },
            {
                "field": "offentigTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "public record title"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "cat8"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit33"
                }
            },
            {
                "field": "journalstatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "N"
                }
            },
            {
                "field": "saksbehandler",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "leia"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code89"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p34"
                }
            }
        ]
    }
}


export const MOCK_INTEGRATION_CONFIG_WITH_TAGS: IIntegrationConfiguration = {
    "applicantConfiguration": {
        "applicantType": "ORGANISATION",
        "fields": [
            {
                "field": "KorrespondansepartNavn",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Luke Skywalker"
                }
            },
            {
                "field": "Adresse.adresselinje",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "highstreet 22"
                }
            },
            {
                "field": "Adresse.postnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1234"
                }
            },
            {
                "field": "Adresse.poststed",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "Moria"
                }
            },
            {
                "field": "kontaktperson",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "donna"
                }
            },
            {
                "field": "Kontaktinformasjon.mobiltelefonnummer",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "12345678"
                }
            },
            {
                "field": "Kontaktinformasjon.epostadresse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "hello@world.no"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code2"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p3"
                }
            }
        ],
        "organisationNumber": "123456789"
    },
    "caseConfiguration": {
        "caseCreationStrategy": "NEW",
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [
                        {
                            "key": "tags",
                            "order": 0,
                            "source": "FORM"
                        }
                    ],
                    "value": "Title of case with %s"
                }
            },
            {
                "field": "offentligTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [
                        {
                            "key": "two",
                            "order": 0,
                            "source": "FORM"
                        },
                        {
                            "key": "tags",
                            "order": 1,
                            "source": "FORM"
                        }
                    ],
                    "value": "public title also with %s %s"
                }
            },
            {
                "field": "caseType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "casetype"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit4"
                }
            },
            {
                "field": "arkivdel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit3"
                }
            },
            {
                "field": "journalenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit0"
                }
            },
            {
                "field": "status",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": ""
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code42"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "number6"
                }
            },
            {
                "field": "saksansvarlig",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "rand"
                }
            },
            {
                "field": "primarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "prim"
                }
            },
            {
                "field": "sekundarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "rose"
                }
            },
            {
                "field": "tertiarordningsprinsipp",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "everdeen"
                }
            },
            {
                "field": "primarklasse",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "1class"
                }
            },
            {
                "field": "sekundarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "2class"
                }
            },
            {
                "field": "tertiarklasse",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "properties": [],
                    "value": "3class"
                }
            },
            {
                "field": "primartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "primTitle"
                }
            },
            {
                "field": "sekundartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "secTitle"
                }
            },
            {
                "field": "tertiartittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "tertTitle"
                }
            }
        ]
    },
    "description": "form to test mapping with form tags",
    "documentConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [],
                    "value": "document title"
                }
            },
            {
                "field": "dokumentStatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "D9"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code3"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p02"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentObjekt.variantFormat",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "var6"
                }
            }
        ]
    },
    "name": "testform with tags",
    "published": false,
    "recordConfiguration": {
        "fields": [
            {
                "field": "tittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [
                        {
                            "key": "just",
                            "order": 0,
                            "source": "FORM"
                        },
                        {
                            "key": "tags",
                            "order": 1,
                            "source": "FORM"
                        }
                    ],
                    "value": "%s %s"
                }
            },
            {
                "field": "offentigTittel",
                "valueBuildStrategy": 1,
                "valueBuilder": {
                    "properties": [
                        {
                            "key": "singletag",
                            "order": 0,
                            "source": "FORM"
                        }
                    ],
                    "value": "%s"
                }
            },
            {
                "field": "DokumentBeskrivelse.dokumentType",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "cat8"
                }
            },
            {
                "field": "administrativenhet",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "unit33"
                }
            },
            {
                "field": "journalstatus",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "N"
                }
            },
            {
                "field": "saksbehandler",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "mando"
                }
            },
            {
                "field": "tilgangsrestriksjon",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "code89"
                }
            },
            {
                "field": "skjermingshjemmel",
                "valueBuildStrategy": 0,
                "valueBuilder": {
                    "value": "p34"
                }
            }
        ]
    },
    "sourceApplication": "Acos",
    "sourceApplicationIntegrationId": "VIK116"
}
