import React from "react";

export type TModalProp = {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    children: React.ReactNode;
};
