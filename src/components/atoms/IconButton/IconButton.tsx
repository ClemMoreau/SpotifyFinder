import React from "react";

import styled from "@emotion/styled";

import { FlexContainer } from "../../containers/FlexContainer";
import styleConfig from "../../styleconfig";

export const IconButtonWithoutLabel = styled.button(() => ({
    minWidth: "32px",
    height: "32px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: `${styleConfig.primaryColor}`,
    color: "white",
    textAlign: "center",
    cursor: "pointer",
    margin: "0.25rem 0",
}));

interface IconButtonProps {
    label: string | React.ReactNode;
    id: string;
    labelposition: "left" | "right";
    textAlign?: "left" | "right";
    children: React.ReactNode;
    onClick: () => void;
}

const IconButton = ({
    label,
    labelposition,
    textAlign,
    children,
    onClick,
    id,
}: IconButtonProps) => {
    return (
        <FlexContainer
            alignItems="center"
            flexDirection={labelposition === "right" ? "row" : "row-reverse"}
        >
            <IconButtonWithoutLabel
                onClick={onClick}
                id={id}
                className={"button-hover"}
            >
                {children}
            </IconButtonWithoutLabel>
            <label
                className={textAlign === "right" ? "label-right" : "label-left"}
                htmlFor={id}
            >
                {label}
            </label>
        </FlexContainer>
    );
};

export default IconButton;
