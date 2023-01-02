import React, {Component, useState} from "react";
import {Client, SubjectDto} from "../client/ApiClient";

interface TabInterface{
    subjects: SubjectDto[] | null;
    click: (subject: SubjectDto) => void;
}

const Tabs : React.FC<TabInterface> = ({subjects= [], click}) => {

    return (
        <ul className="nav flex-column">
            {
                subjects?.map(subject => {
                    return <li className="nav-item d-flex" key={subject.id}>
                        <button type="button" className="nav-link rotate-90 btn btn-sm btn-info"
                                onClick={(e) => click(subject)}>{ subject.name }</button>
                    </li>
                })
            }
        </ul>
    )
};

export default Tabs;