import {CHON_ITEM, END_GAME, RAN_DOM} from '../types/BaiTapOanTuXiType'



export const datCuocAction =(ma)=>{
    return {
        type: CHON_ITEM,
        ma
    }
}

export const ranDomAction =()=>{
    return {
        type: RAN_DOM
    }
}

export const endGameAction =()=>{
    return {
       type: END_GAME
    }
}