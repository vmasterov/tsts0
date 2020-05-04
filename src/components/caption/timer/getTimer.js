export const getTimer = state => {
    if (state.min === 0 && state.sec === 0) {
        return false;
    }
    if (state.sec > 0) {
        return ({
            min: state.min,
            sec: state.sec - 1
        });
    }
    else {
        return ({
            min: state.min - 1,
            sec: 59
        });
    }
};