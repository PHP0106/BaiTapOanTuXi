import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {

        let keyframe = `@keyframes random${Date.now()} {
            0%   { left:-30px; }
            25%  { left:80px; }
            50%  { left:-30px; }
            75%  { left:80px; }
            100% { left:-30px; }
          }`


        return (
            <div className="text-center playerGame">

                <style>
                    {keyframe}
                </style>

                <div className="theThink">

                    <img className="mt-2" style={{
                        position: 'absolute',
                        animation: `random${Date.now()} 0.5s`,
                        left: '25%',

                        width: 75, height: 75, transform: 'rotate(120deg)'
                    }} src={this.props.computer.image} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src={"./img/GameOanTuXi/playerComputer.png"} alt='...'></img>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer)
