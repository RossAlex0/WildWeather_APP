interface EditProps {
  open: {
    isOpen: string;
    setIsOpen: (isOpen: string) => void;
  };
  setTextConfirm: (textConfirm: string) => void;
}

export default EditProps;
