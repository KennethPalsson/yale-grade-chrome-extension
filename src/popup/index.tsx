import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Popup from "./Popup";
import { CompanyInfo } from "./CompanyInfo";

function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }

    const root = createRoot(appContainer);
    const companyInfo : CompanyInfo = {
        name : "SAIC Motor",
        action : "remains operational; plans to increase export",
        yaleGrade : "f",
        countryCode : "CN",
        country : "China",
        industry : "Industrials"
    };
    root.render(<Popup companyInfo={companyInfo}/>);
}

init()