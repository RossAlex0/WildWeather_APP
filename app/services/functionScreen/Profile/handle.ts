import storage from "../../storage";

const { saveName } = storage;

const handleConfirmCurrentPassword = (
    valueCurrentPassword: string,
    setConfirmPassword: (confirmPassword: boolean)=> void
): void => {
    if( valueCurrentPassword === "1234"){
        setConfirmPassword(true)
    }
};

const handleConfirmName = (
    setIsOpen: (isOpen: string)=> void,
    setUserName: (userName: string)=> void,
    valueName: string,
    setValueName: (valueName: string)=> void,
    setMsgConfirm: (msgConfirm: string)=> void,
    setIsConfirmed: (isConfirmed: boolean)=> void,
): void => {
    setIsOpen(""); 
    setUserName(valueName);
    saveName(valueName);
    setValueName("");
    setMsgConfirm("name");
    setIsConfirmed(true);
    setTimeout(() => {
        setIsConfirmed(false);
    }, 2500);
}

const handleConfirmMail = (
    setIsOpen: (isOpen: string)=> void,
    setValueMail: (valueMail: string)=> void,
    setMsgConfirm: (msgConfirm: string)=> void,
    setIsConfirmed: (isConfirmed: boolean)=> void,
): void => {
    setIsOpen(""); 
    setValueMail("");
    setMsgConfirm("mail");
    setIsConfirmed(true);
    setTimeout(() => {
        setIsConfirmed(false);
    }, 2500);
}

const handleConfirmPassword = (
    setIsOpen: (isOpen: string)=> void,
    setValuePassword: (valuePassword: string)=> void,
    setValueCurrentPassword: (valueCurrentPassword: string)=> void,
    setMsgConfirm: (msgConfirm: string)=> void,
    setIsConfirmed: (isConfirmed: boolean)=> void,
    setConfirmPassword: (confirmPassword: boolean)=> void,
):void => {
    setIsOpen(""); 
    setValuePassword("");
    setValueCurrentPassword("");
    setMsgConfirm("password");
    setIsConfirmed(true);
    setConfirmPassword(false);
    setTimeout(() => {
        setIsConfirmed(false);
    }, 2500);
}

export { handleConfirmCurrentPassword, handleConfirmMail, handleConfirmName, handleConfirmPassword}