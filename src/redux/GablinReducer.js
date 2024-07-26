
const dataDefault = {
    playgame: false,
    down: false,
    up: false,
    img1: './assets/random/1.png',
    img2: './assets/random/2.png',
    img3: './assets/random/3.png',
    win: 0,
    playCount: 0
};

const GablinReducer = (state = dataDefault, action) => {
    if (action.type === 'down') {
        state.down = true;
        state.up = false;
    }

    if (action.type === 'up') {
        state.up = true;
        state.down = false;
    }

    if (action.type === 'playGame') {
        if (state.up || state.down) {
            let total = 0;
            for (let i = 0; i < 3; i++) {
                let newValue = Math.ceil(Math.random() * 5)
                if (i === 0) {
                    state.img1 = './assets/random/' + newValue + '.png'
                } else if (i === 1) {
                    state.img2 = './assets/random/' + newValue + '.png'
                } else if (i === 2) {
                    state.img3 = './assets/random/' + newValue + '.png'
                }
                // state.imgi = Math.ceil(Math.random() * 5)
                total += newValue
            }
            console.log(total);
            if (total <= 11 && state.down) {
                state.win++;
            } else if (total > 11 && state.up) {
                state.win++;
            }
            state.playCount++
            let newState = {
                playgame: false,
                down: state.down,
                up: state.up,
                img1: state.img1,
                img2: state.img2,
                img3: state.img3,
                win: state.win,
                playCount: state.playCount
            }

            console.log(newState);
            newState = { ...newState }
            return { ...newState }
        } else {
            alert("1 là m chọn tài. 2 Là m chọn xỉu. 3 là m cook");
        }
    }


    return { ...state };
}

export default GablinReducer;