import "./footer.scss"
import React from "react";

export default () => {
    return (
        <footer className="mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-flex justify-content-sm-start flex-column justify-content-center">
                        <div className="copyright">
                            TSTS.ru © <span className="year">{new Date().getFullYear()}</span>
                        </div>
                        <div className="about">
                            <a href="/">Информация о сайте</a>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-sm-end justify-content-center">
                        <div className="design">Разработка<br /><a href="http://vmasterov.ru">vmasterov.ru</a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}