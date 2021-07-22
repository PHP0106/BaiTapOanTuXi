import React, { Component } from 'react'

import { connect } from 'react-redux'
import {datCuocAction} from '../../redux/actions/BaiTapOanTuXiAction'

class Player extends Component {

    renderMangDatCuoc = () => {
        return this.props.mangDatCuoc.map((item, index) => {

            let border = {};
            if (item.datCuoc) {
                border = { border: '3px solid blue' };
            }



            return <div className="col-4">
                <button style={ border } className="btnItem" onClick={()=>{
                    this.props.datCuoc(item.ma);
                }}>
                    <img width={35} height={35} src={item.image} alt="..." />
                </button>

            </div>
        })
    }

    render() {
        return (
        <div className="text-center playerGame">
            <div className="theThink">

                <img className="mt-2" style={{ width: 75, height: 75, transform: 'rotate(120deg)' }} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).image} alt="..." />
            </div>
            <div className="speech-bubble"></div>
            <img style={{ width: 150, height: 150 }} src="./img/GameOanTuXi/player.png" alt='...'></img>

            <div className="row">
                {this.renderMangDatCuoc()}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps =dispatch =>{
    return{
        datCuoc: (ma)=>{
            dispatch (datCuocAction(ma))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)
