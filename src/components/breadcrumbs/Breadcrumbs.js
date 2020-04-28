import "./breadcrumbs.scss";
import React from "react";
import homeImg from "../../static/home.svg";

export default ({breadcrumbsArray}) => {

    const breadcrumbs = breadcrumbsArray.map((item, index) => {
        return (
            <li key={index}>
                {item.link
                    ?
                    <div><a className="breadcrumb-item" href={item.link}>{item.name}</a>
                        <span className="breadcrumb-separator">/</span>
                    </div>
                    :
                    <div><span className="breadcrumb-item">{item.name}</span></div>}
            </li>
        )
    });

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list">
                <li>
                    <div>
                        <a className="breadcrumb-home breadcrumb-item" href="/">
                            <img src={homeImg} alt="Домой"/>
                        </a>
                        <span className="breadcrumb-separator">/</span>
                    </div>
                </li>
                {breadcrumbs}
            </ul>
        </div>
    )
}