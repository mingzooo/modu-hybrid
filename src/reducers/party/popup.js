export const initialState = {
    reportPopupStatus: false,
    reportPartyIdx: null,
    reportCategoryList: [],

    terminatePopupStatus: false,
    terminatePartyIdx: null,
    terminatePartyRole: null,

    banishPopupStatus: false,
    banishPartyIdx: null,
    banishUserList: [],

    hostBottomDialogStatus: false,

    memberBottomDialogStatus: false,

    hostConfirmDialogStatus: false,

    memberConfirmDialogStatus: false,
};

const ReportPopupOpen = 'ReportPopupOpen';
const ReportPopupClose = 'ReportPopupClose';

const TerminatePopupOpen = 'TerminatePopupOpen';
const TerminatePopupClose = 'TerminatePopupClose';

const BanishPopupOpen = 'BanishPopupOpen';
const BanishPopupClose = 'BanishPopupClose';

const SetReportCategoryList = 'SetReportCategoryList';

const HostBottomDialogOpen = 'HostBottomDialogOpen';
const HostBottomDialogClose = 'HostBottomDialogClose';

const MemberBottomDialogOpen = 'MemberBottomDialogOpen';
const MemberBottomDialogClose = 'MemberBottomDialogClose';

const HostConfirmDialogOpen = 'HostConfirmDialogOpen';
const HostConfirmDialogClose = 'HostConfirmDialogClose';

const MemberConfirmDialogOpen = 'MemberConfirmDialogOpen';
const MemberConfirmDialogClose = 'MemberConfirmDialogClose';

export const ReportPopupOpenAction = (data) => {
    return {
        type: ReportPopupOpen,
        data: data
    }
};
export const ReportPopupCloseAction = () => {
    return {
        type: ReportPopupClose,
    }
};
export const SetReportCategoryListAction = (data) => {
    return {
        type: SetReportCategoryList,
        data: data
    }
};

export const TerminatePopupOpenAction = (data) => {
    return {
        type: TerminatePopupOpen,
        data: data
    }
};
export const TerminatePopupCloseAction = () => {
    return {
        type: TerminatePopupClose,
    }
};

export const BanishPopupOpenAction = (data) => {
    return {
        type: BanishPopupOpen,
        data: data
    }
};
export const BanishPopupCloseAction = () => {
    return {
        type: BanishPopupClose,
    }
};
export const HostBottomDialogOpenAction = {
    type: HostBottomDialogOpen,
};
export const HostBottomDialogCloseAction = {
    type: HostBottomDialogClose,
};
export const MemberBottomDialogOpenAction = {
    type: MemberBottomDialogOpen,
};
export const MemberBottomDialogCloseAction = {
    type: MemberBottomDialogClose,
};
export const HostConfirmDialogOpenAction = {
    type: HostConfirmDialogOpen,
};
export const HostConfirmDialogCloseAction = {
    type: HostConfirmDialogClose,
};
export const MemberConfirmDialogOpenAction = {
    type: MemberConfirmDialogOpen,
};
export const MemberConfirmDialogCloseAction = {
    type: MemberConfirmDialogClose,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ReportPopupOpen': {
            return {
                ...state,
                reportPopupStatus: true,
                reportPartyIdx: action.data.reportPartyIdx,
            }
        }
        case 'ReportPopupClose': {
            return {
                ...state,
                reportPopupStatus: false,
                reportPartyIdx: null,
            }
        }
        case 'SetReportCategoryList': {
            return {
                ...state,
                reportCategoryList: action.data.reportCategoryList
            }
        }
        case 'TerminatePopupOpen': {
            return {
                ...state,
                terminatePopupStatus: true,
                terminatePartyIdx: action.data.terminatePartyIdx,
                terminatePartyRole: action.data.terminatePartyRole,
            }
        }
        case 'TerminatePopupClose': {
            return {
                ...state,
                terminatePopupStatus: false,
                terminatePartyIdx: null,
                terminatePartyRole: null,
            }
        }
        case 'BanishPopupOpen': {
            return {
                ...state,
                banishPopupStatus: true,
                banishPartyIdx: action.data.banishPartyIdx,
                banishUserList: action.data.banishUserList,
            }
        }
        case 'BanishPopupClose': {
            return {
                ...state,
                banishPopupStatus: false,
                banishPartyIdx: null,
                banishUserList: [],
            }
        }
        case 'HostBottomDialogOpen': {
            return {
                ...state, 
                hostBottomDialogStatus: true,
            }
        }
        case 'HostBottomDialogClose': {
            return {
                ...state, 
                hostBottomDialogStatus: false,
            }
        }
        case 'MemberBottomDialogOpen': {
            return {
                ...state, 
                memberBottomDialogStatus: true,
            }
        }
        case 'MemberBottomDialogClose': {
            return {
                ...state, 
                memberBottomDialogStatus: false,
            }
        }
        case 'HostConfirmDialogOpen': {
            return {
                ...state, 
                hostConfirmDialogStatus: true,
            }
        }
        case 'HostConfirmDialogClose': {
            return {
                ...state, 
                hostConfirmDialogStatus: false,
            }
        }
        case 'MemberConfirmDialogOpen': {
            return {
                ...state, 
                memberConfirmDialogStatus: true,
            }
        }
        case 'MemberConfirmDialogClose': {
            return {
                ...state, 
                memberConfirmDialogStatus: false,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;