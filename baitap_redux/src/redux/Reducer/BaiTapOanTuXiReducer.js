import { CHON_ITEM, END_GAME, RAN_DOM } from "../types/BaiTapOanTuXiType";



const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', image: './img/GameOanTuXi/keo.png', datCuoc: true },
        { ma: 'bua', image: './img/GameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', image: './img/GameOanTuXi/bao.png', datCuoc: false },

    ],

    ketQua: "Bạn thắng !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', image: './img/GameOanTuXi/keo.png' },
}


const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case CHON_ITEM: {
            let mangCuocUpdate = [...state.mangDatCuoc];

            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.ma) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false };
            });

            state.mangDatCuoc = mangCuocUpdate;
            return { ...state };

        }

        case RAN_DOM: {
            let soRandom = Math.floor(Math.random() * 3);
            let quanCuoc = state.mangDatCuoc[soRandom];

            state.computer = quanCuoc;

            return { ...state };
        }

        case END_GAME: {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let com = state.computer;

            switch (player.ma) {
                case 'keo': {
                    if (com.ma === 'keo') {
                        state.ketQua = 'Bạn hòa !!!';
                    } else if (com.ma === 'bua') {
                        state.ketQua = 'Bạn thua !!!';
                    } else {
                        state.ketQua = 'Bạn thắng !!!';
                        state.soBanThang += 1;
                    }
                    break;
                }

                case 'bua': {
                    if (com.ma === 'bua') {
                        state.ketQua = 'Bạn hòa !!!';
                    } else if (com.ma === 'bao') {
                        state.ketQua = 'Bạn thua !!!';
                    } else {
                        state.ketQua = 'Bạn thắng !!!';
                        state.soBanThang += 1;
                    }
                    break;
                }

                case 'bao': {
                    if (com.ma === 'bao') {
                        state.ketQua = 'Bạn hòa !!!';
                    } else if (com.ma === 'keo') {
                        state.ketQua = 'Bạn thua !!!';
                    } else {
                        state.ketQua = 'Bạn thắng !!!';
                        state.soBanThang += 1;
                    }
                    break;
                }

                default:
                    state.ketQua = 'Bạn thắng !!!';

            }

            state.soBanChoi += 1;

            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default BaiTapOanTuXiReducer;