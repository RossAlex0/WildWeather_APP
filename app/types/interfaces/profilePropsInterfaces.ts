interface EditPasswordProps {
    confirmPassword: boolean;
    open: {
        isOpen: string;
        setIsOpen: (isOpen: string) => void;
    };
    password: {
        valuePassword: string;
        setValuePassword: (valuePassword: string) => void;
    };
    currentPassword: {
        valueCurrentPassword: string;
        setValueCurrentPassword: (valueCurrentPassword: string) => void;
    };
    functions: {
        handleConfirmPassword: () => void;
        handleConfirmCurrentPassword: () => void;
    };
}

interface EditMailProps {
    open: {
        isOpen: string;
        setIsOpen: (isOpen: string) => void;
    };
    mail: {
        valueMail: string;
        setValueMail: (valueMail: string) => void;
    };
    handleConfirmMail: () => void;
}

interface EditNameProps {
    open: {
        isOpen: string;
        setIsOpen: (isOpen: string) => void;
    };
    name: {
        valueName: string;
        setValueName: (valueName: string) => void;
    };
    handleConfirmName: () => void;
}

export { EditPasswordProps, EditMailProps, EditNameProps }