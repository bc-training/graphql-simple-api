export interface RequestType {
    identifier: RequestIdentifierType;
    title: string;
    serviceLevel: CodeValueType;
    contactReason?: ContactReasonType[];
    requestorLanguage: string;
    estimatedResolutionDate?: Date;
    numberOfTimesReopened: number;
    roles?: RoleType[];
    statusList: StatusType[];
    creationDate: Date;
}

export enum StatusType {
    INWAIT = 'INWAIT',
    CLOSE = 'CLOSED'
}

export interface RoleType {
    name: string;
    creationDate: Date;
    role: string[]; // ChoiceRoleInRequestType;
}

export interface RequestIdentifierType {
    id: string;
    idScope: CodeValueType;
    idContext: CodeValueType;
}

export interface CodeValueType {
    codeSystem?: string;
    codeSystemVersion?: string;
    codeDescription?: string;
    value: string;
    valueDescription?: string;
    context?: string;
}

export interface ContactReasonType {
    domain?: string;
    productType?: string;
    contactReasonCode: string;
}
