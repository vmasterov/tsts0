import React from "react";
import Timer from "./timer/Timer";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Search from "./search/Search";
/*
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
*/
export default (props) => {
    const timer = props.loading
        ?
        ''
        :
        <Timer
            time={props.timer}
            result={props.result}
            pageResult={props.pageResult}
        />;

    let caption;
    switch (props.page) {
        case 'sections':
            caption = 'Категории';
            break;
        case 'test':
            caption = 'Основы JavaScript';
            break;
        case 'result':
            caption = 'Основы JavaScript: результаты';
            break;
        default:
            caption = 'Категории';
    }

    return (
        <div className="main-head">
            <div className="row">
                <div className="col-10">
                    <h1 className="header1 m-0">
                        {caption}
                    </h1>
                </div>
                <div className="col-2">
                    {props.page === "test" && timer}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {props.page === "sections" &&
                        <Search
                            getSearch={props.getSearch}
                        />
                    }
                    {/*{props.page !== "sections" && <Breadcrumbs breadcrumbsArray={breadcrumbsArray}/>}*/}
                </div>
            </div>
        </div>
    )
}