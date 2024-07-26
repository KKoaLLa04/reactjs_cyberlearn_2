
const dataDefault = {
    data: []
};

const ProductReducer = (state = dataDefault, action) => {

    switch (action.type) {
        case "add_cart":
            let index = state.data.findIndex((item) => item.id === action.newSp.id);
            if (index !== -1) {
                state.data[index].quantity += 1;
            } else {
                state.data.push(action.newSp)
            }

            state.data = [...state.data];

            return { ...state }
        case "deleteCart":
            state.data = [...state.data];

            let indexDeleteCart = state.data.findIndex((item) => item.id === action.maSp)

            if (indexDeleteCart !== -1) {
                state.data.splice(indexDeleteCart, 1);
            }

            return { ...state }
            break;
        case "plusMinus":
            state.data = [...state.data];

            let indexPlusMinus = state.data.findIndex((item) => item.id === action.maSp)

            if (indexPlusMinus !== -1) {
                if (action.plusMinus) {
                    state.data[indexPlusMinus].quantity += 1
                } else {
                    if (state.data[indexPlusMinus].quantity > 1) {
                        state.data[indexPlusMinus].quantity -= 1
                    } else {
                        alert("Só lượng phải lớn hơn 1");
                    }
                }
            }

            return { ...state };
            break;
        default:
            return { ...state }
    }
}

export default ProductReducer;