import "./main.scss"
import React from "react";
// import Search from "../search/Search";
import {sections} from "./sections";
import Card from "../card/Card";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Timer from "../timer/Timer";

const breadcrumbsArray = [
    {
        name: 'JavaScript',
        link: '/'
    },
    {
        name: 'Основы JavaScript',
        link: ''
    }
];

const timerObject = {
    min: 10,
    sec: 0
};


export default () => {
    // todo add "Show more" button (6 items)
    const cards = sections.map((section, index) => {
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                <Card section={section} />
            </div>
        )
    });

    return (
        <main className="main-content">
            <div className="container">
                <div className="main-head">
                    <div className="row">
                        <div className="col-10">
                            <h1 className="header1 m-0">Категории</h1>
                        </div>
                        <div className="col-2">
                            <Timer time={timerObject} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/*<Search />*/}
                            <Breadcrumbs breadcrumbsArray={breadcrumbsArray}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {cards}
                </div>
            </div>
        </main>
    )
}