import React from "react";
import Timer from "./timer/Timer";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Search from "./search/Search";
import {history} from "../../store";

export default (props) => {
    const timer = props.loading
        ?
        ''
        :
        <Timer
            time={props.timer}
            result={props.result}
            pageResult={props.pageResult}
            changePage={props.changePage}
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
                    {
                        (history.location.pathname === "/1" || history.location.pathname === "/2")
                        &&
                        timer
                    }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {history.location.pathname === "/" &&
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