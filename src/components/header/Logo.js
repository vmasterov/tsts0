import React from "react";

export default (props) => {
    const logoLink = (<a href="/" className="logo justify-content-center align-self-center">tsts</a>);
    const logoNoLink = (<div className="logo justify-content-center align-self-center">tsts</div>);

    return (
        <div className="col">
            {props.page === 'sections' ? logoNoLink : logoLink}
        </div>
    )
}