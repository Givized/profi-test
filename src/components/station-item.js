import React from 'react';
import '../styles/station-item.scss';

class StationItem extends React.Component{
    render(){
        return <article className={'station-item station-item_' + this.props.itemStyle } >
            <div className="station-item__image" style={{'backgroundImage': 'url(' + this.props.item.image + ')'}}>
            </div>
            <div className="station-item__text">
                <h3 className="station-item__title">
                    <span className="station-item__name">{this.props.item.name}</span>
                    <span className={'station-item__line station-item__line_' + this.props.item.line}>
                        {this.props.item.line} line
                    </span>
                </h3>
                <div className="station-item__description">
                    {this.props.item.description}
                </div>
            </div>
        </article>
    }
}

export default StationItem;