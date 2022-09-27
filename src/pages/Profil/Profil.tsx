import React from "react";

import "./Profil.css";
import User from "../../components/atoms/User/User";
import { FlexContainer } from "../../components/containers/FlexContainer";

const Profil = () => {
    return (
        <FlexContainer flexDirection="column" style={{ width: "100%" }}>
            <User />
        </FlexContainer>
    );
};

export default Profil;
