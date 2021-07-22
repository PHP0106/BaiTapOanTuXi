import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import Player from './Player'
import KetQuaTroChoi from './KetQuaTroChoi'
import { connect } from 'react-redux'
import { endGameAction, ranDomAction } from '../../redux/actions/BaiTapOanTuXiAction'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-2">
                        <Player />
                    </div>
                    <div className="col-4 mt-2">
                        <KetQuaTroChoi />
                        <button className="btn btn-success p-2 m-5 " onClick={() => {
                            this.props.PlayGame();
                        }}>Play Game</button>
                    </div>
                    <div className="col-4 mt-2">
                        <Computer />
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        PlayGame: () => {

            let count = 0;

            let randomComputer = setInterval(() => {
                dispatch(ranDomAction())
                count ++;
                if (count > 10) {
                    clearInterval(randomComputer);

                    dispatch(endGameAction())
                }
            }, 100)

        }
    }
}



export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)
