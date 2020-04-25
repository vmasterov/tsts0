import React from "react";

export default () => {
    const logoLink = (<a href="/" className="logo justify-content-center align-self-center">tsts</a>);
    const logoNoLink = (<div className="logo justify-content-center align-self-center">tsts</div>);

    return (
        <div className="col-sm">
            {false ? logoLink : logoNoLink}
        </div>
    )
}