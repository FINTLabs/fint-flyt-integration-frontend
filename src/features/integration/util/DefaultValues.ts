import {ISelect} from "../types/InputField";
import {ITag} from "../types/Tag";
import {CreationStrategy} from "../types/CreationStrategy";
import IFormData from "../types/Form/FormData";

export const defaultValues: IFormData = {
    name: '',
    description: '',
    version: '',
    selectedForm: '',
    caseData: {
        caseCreationStrategy: CreationStrategy.NEW,
        caseNumber: '',
        title: '',
        publicTitle: '',
        caseType: '',
        administrativeUnit:'',
        archiveUnit:'',
        recordUnit: '',
        accessCode: '',
        paragraph: '',
        caseWorker: '',
        primaryClassification: '',
        secondaryClassification: '',
        primaryClass: '',
        secondaryClass: '',
    },
    recordData: {
        title: '',
        publicTitle: '',
        category: '',
        administrativeUnit: '',
        status: '',
        accessCode: '',
        paragraph: '',
    },
    documentData: {
        title: '',
        documentStatus: '',
        accessCode: '',
        paragraph: '',
        variant: '',
        format: '',
    },
    applicantData: {
        type: 'PERSON',
        organisationNumber: '',
        name: '',
        address: '',
        postalCode: '',
        city: '',
        phoneNumber: '',
        email: '',
        accessCode: '',
        paragraph: '',
    }
}

export const dropdownPlaceholder: ISelect[] = [
    {label: 'Alternativ 1', value: 'alt1'},
    {label: 'Alternativ 2', value: 'alt2'},
    {label: 'Alternativ 3', value: 'alt3'},
    {label: 'Alternativ 4', value: 'alt4'},
    {label: 'Alternativ 5', value: 'alt5'},
    {label: 'Alternativ 6', value: 'alt6'},
    {label: 'Alternativ 7', value: 'alt7'},
    {label: 'Alternativ 8', value: 'alt8'},
    {label: 'Alternativ 9', value: 'alt9'},
    {label: 'Alternativ 10', value: 'alt10'}
]

export const creationStrategies: ISelect[] = [
    {label: 'Som ny sak',value: 'NEW',  description: 'Innsendt skjema oppretter en ny sak i Elements'},
    {label: 'På eksisterende sak', value: 'EXISTING',  description: 'Innsendt skjema gjenfinner eksisterende sak i ' +
            'Elements basert på informasjon i skjemaet. Dersom det ikke fins en eksisterende sak opprettes en ny sak' },
    {label: 'På samlesak', value: 'COLLECTION', description: 'Innsendt skjema skal leveres til en forhåndsdefinert samlesak. ' +
            'Her må du opplyse om saksnummer'}
];

export const applicantOptions: ISelect[] = [
    {label: 'Privatperson',value: 'PERSON'},
    {label: 'Organisasjon', value: 'ORGANISATION'}
];

export const forms: ISelect[] = [
    { label: "TT-skjema", value: "TT" },
    { label: "Skjema1", value: "1_form" },
    { label: "Skjema33", value: "form3" },
    { label: "Skjema2", value: "2_form" }
];

export const caseWorkers: ISelect[] = [
    {label: 'Brendan Costanza', value: 'hotdog'},
    {label: 'Diana Seelix', value: 'hardball'},
    {label: 'Dwight Saunders', value: 'flattop'},
    {label: 'Kara Thrace', value: 'starbuck'},
    {label: 'Karl Agathon', value: 'helo'},
    {label: 'Lee Adama', value: 'apollo'},
    {label: 'Louanne Katraine', value: 'kat'},
    {label: 'Marcia Case', value: 'showboat'},
    {label: 'Samuel Anders', value: 'longshot'},
    {label: 'Sharon Valerii', value: 'boomer'},
    {label: 'Sharon Agathon', value: 'athena'},
    {label: 'Paolo McKay', value: 'redwing'},
    {label: 'William Adama', value: 'husker'}
]

export const tagList: ITag[] = [
    {value:"{fodselsnummer}",  name:"Fødselsnummer"},
    {value:"{fornavn}",  name:"Fornavn"},
    {value:"{etternavn}",  name:"Etternavn"},
    {value:"{adresse}",  name:"Adresse"},
    {value:"{postnummer}",  name:"Postnummer"},
    {value:"{poststed}",  name:"Poststed"},
    {value:"{telefonnummer}",  name:"Telefonnummer"},
    {value:"{email}",  name:"Email"},
    {value:"{organisasjonsnummer}",  name:"Organisasjonsnummer"}
]

export const TaglistPopoverContent: string = 'I tekstfeltene til i de ulike postene kan du benytte data fra skjema for å utfylle disse. \n\n' +
    'Naviger til feltet du ønsker å fylle,og dra inn tag fra listen under.';

export const HelpTextPopover: string = 'Beskrivende tekst av tekstfeltet';

export const fieldHelp = {
    name: '',
    description: '',
    version: '',
    selectedForm: '',
    caseData: {
        caseCreationStrategy: CreationStrategy.NEW,
        caseNumber: '2021/12345',
        title: 'Tittel kan være en konkret tekststreng, eller en kombinasjon\n' +
            ' av flere metadatafelt. (Settes opp i henhold til skriveregler for type sak.\n' +
            '  (Se Noark))',
        publicTitle: 'Se Noark (Del av tittel som skal skjermes)',
        caseType: '',
        administrativeUnit:'Avdeling eller enhet som skal behandle saken.',
        archiveUnit:'Eksempel: kompetanse, sakarkiv, personal',
        recordUnit: 'Navnet på journalførende enhet.\n' +
            'Eksempel: Viken fylkesråd',
        accessCode: 'Dersom noe skjermes må man også sette tilgangskode. \n' +
            'Eksempel: Unntatt offentlighet, personal, varslingssak, ugradert. ',
        paragraph: 'Dersom det settes tilgangskode må det også settes hjemmel. \n' +
            'Det må være en lovmessig hjemmel for skjerming eller begrenset tilgang. \n' +
            '\n' +
            'Eksempel:\n' +
            '\n' +
            'Offl. §13 ',
        caseWorker: 'Konkret saksbehandler eller ufordelt.',
        classification: 'Det må kunne settes flere klasseringer på en sak,\n' +
            ' slik at sjemaet kan lete fram riktig sak.\n' +
            'Eksempel: Primærkode=K-koder, \n' +
            'Sekundærkode=organisasjonsnummer eller personnummer',
        class: 'Vi må kunne fylle ut verdi og betegnelse.\n' +
            'Eksempel: K-kode: Verdi 003, Betegnelse: Målbruk.\n' +
            'Person: verdi: fødselsnummer, betegnelse = personnavn.',
    },
    recordData: {
        title: '',
        publicTitle: '',
        category: '',
        administrativeUnit: '',
        status: '',
        accessCode: '',
        paragraph: '',
    },
    documentData: {
        title: '',
        documentStatus: '',
        accessCode: '',
        paragraph: '',
        variant: '',
        format: '',
    },
    applicantData: {
        type: 'PERSON',
        organisationNumber: '',
        name: '',
        address: '',
        postalCode: '',
        city: '',
        phoneNumber: '',
        email: '',
        accessCode: '',
        paragraph: '',
    }
}