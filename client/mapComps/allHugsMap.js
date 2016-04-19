var React = require('react');
var MapLoader = require('./mapLoader');
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var AllHugsMap = React.createClass({
	getInitialState: function(){
		return {
			modalIsOpen: false,
			activeHug: null,
		}
	},

	modalDisplay: function(){


		if(this.state.activeHug){
			console.log(this.state.activeHug);
		return (
			<div>
			<Modal
					isOpen={this.state.modalIsOpen}
          			onAfterOpen={this.afterOpenModal}
          			onRequestClose={this.closeModal}
          			style={customStyles} >
          		<img src={ this.state.activeHug.user.local.profileImage } className="img-thumbnail"  width="304" height="236" />	
          		<h2 ref="subtitle">{this.state.activeHug.title}</h2>
          		<p> From @{ this.state.activeHug.user.local.username }</p>
          		<p> Content: { this.state.activeHug.content }</p>
          		<p> Date of hug: { this.state.activeHug.dayOfHug } </p>
          		<p> { this.state.activeHug.duration } </p>
          		<button onClick={this.closeModal}>close</button>
				</Modal>
			</div>
			)
		} else {
			return null
		}

	},

	openModal: function(hug){
		this.setState({ modalIsOpen: true, activeHug: hug })

	},

	afterOpenModal: function(){
		this.refs.subtitle.style.color = '#f00'
	},

	closeModal: function(){
		this.setState({ modalIsOpen: false, activeHug: null })
	},

	render: function(){

		console.log(this.props.hugArray);
		var self = this;
	var allHugs = this.props.hugArray.map(function(hug){
		return <Marker position={ {lat: hug.lat, lng: hug.lng} } onClick={ self.openModal.bind(null, hug) }/>
	
	})
	

		return(
			<MapLoader>
      			<GoogleMap
        			defaultZoom={14}
        			center={{lat: 46.8787, lng: -114.000}}
      			>
        		{ allHugs }	
        		 { this.modalDisplay() }
      			</GoogleMap>
    		</MapLoader>

			)
	}
});

module.exports = AllHugsMap;