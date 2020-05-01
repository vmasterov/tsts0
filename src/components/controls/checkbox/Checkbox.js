// import "../controls.scss";
// import "./checkbox.scss";
// import React from "react";
// import {connect} from "react-redux";
// import {check, uncheck} from "../../../services/test/action";
//
// const Checkbox = (props) => {
//     const change = event => {
//         event.target.checked ?  props.check(props.id, props.value) : props.uncheck(props.id, props.value)
//     };
//
//     return (
//         <label className="input-block">{props.text}
//             <input
//                 className="input-orig"
//                 type="checkbox"
//                 name = {props.name}
//                 value={props.value}
//                 checked={props.checked}
//                 onChange={change}
//             />
//             <span className="input-checkbox-fake input-fake"/>
//         </label>
//     )
// };
//
// const matDispatchToProps = dispatch => {
//     return {
//         check: (id, value) => dispatch(check(id, value)),
//         uncheck: (id, value) => dispatch(uncheck(id, value)),
//     }
// };
//
// export default connect(null, matDispatchToProps)(Checkbox);