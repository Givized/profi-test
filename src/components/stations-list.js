import React from 'react';
import StationsData from '../data';
import StationItem from './station-item';
import '../styles/stations-list.scss';

class StationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType:'list',
      items: StationsData.items
    };
  }

  render() {
    return (
      <div className="stations-list">
        <header className={"stations-list__header " + this.state.viewType}>
          <button onClick={()=>this.setView('list')} className={"stations-list__button" + (this.state.viewType === 'list' ? ' stations-list__button_selected' : '')}>
            <div className="stations-list__button-content">
              Списком
            </div>
          </button>
          <button onClick={()=>this.setView('tile')} className={"stations-list__button" + (this.state.viewType === 'tile' ? ' stations-list__button_selected' : '')}>
            <div className="stations-list__button-content">
              Плиткой
            </div>
          </button>
        </header>
        <section className={"stations-list__content stations-list__content_"+this.state.viewType}>
          {this.state.items.map((item, index)=><StationItem item={item} key={index} itemStyle={this.state.viewType}/>)}
        </section>
      </div>
      
    );
  }

  setView(type) {
    this.setState({
      viewType: type
    });
  }
}

export default StationsList;