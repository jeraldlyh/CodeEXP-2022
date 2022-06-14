import { createContext, useState, useContext } from "react";
import Modal from "../common/components/modal";

type TModalProviderProps = {
    children?: React.ReactNode;
};

type TModalBody = {
    body?: React.ReactNode | JSX.Element;
    callback?: () => {};
};

type Context = {
    setModal: (payload: TModalBody) => void;
    setIsOpen: (isOpen: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
    setIsDisabled: (isDisabled: boolean) => void;
    handleSubmit: () => Promise<void>;
    closeModal: () => void;
};

const initialContext: Context = {
    setModal: () => {},
    setIsOpen: () => {},
    setIsLoading: () => {},
    setIsDisabled: () => {},
    handleSubmit: async () => {},
    closeModal: () => {},
};

const ModalContext = createContext<Context>(initialContext);

export const ModalProvider: React.FC<TModalProviderProps> = ({ children }) => {
    const [body, setBody] = useState<string | React.ReactNode>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [callback, setCallback] = useState<() => {}>(); // TODO - add appropriate type

    const setModal = (payload: TModalBody) => {
        payload.body && setBody(payload.body);
        payload.callback && setCallback(payload.callback);
    };

    const closeModal = () => {
        setIsOpen(false);
        setIsLoading(false);
        setBody(null);
    };

    const handleSubmit = async () => {
        try {
            if (callback) {
                setIsLoading(true);
                await callback();
                setIsOpen(false);
                setIsLoading(false);
            }
        } catch (error) {
            closeModal();
        }
    };

    return (
        <ModalContext.Provider
            value={{
                setModal,
                setIsOpen,
                setIsLoading,
                setIsDisabled,
                handleSubmit,
                closeModal,
            }}
        >
            {isOpen && (
                <Modal handleDismiss={() => setIsOpen(false)} body={body} />
            )}
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
