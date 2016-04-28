//  HugApp
//     Notifier
//     HomePage(Logo/Carousel/Quotes)
//     UserApp
//     UserToggle 
//       UserDisplayCard
//         UserFormData
//          UserUpdateForm
//        HugPostData
//        HugPostForm 
//     HugList
//       HugCard
//       CommentList
//       CommentPostData
//        CommentPostForm
//     AllHugsMap
//     NewHugsMap  
//     Footer


var React = require('react');
var MapLoader = require('./mapLoader');
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import Modal from 'react-modal'
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";


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
		return (
			<div>
			<Modal
				isOpen={this.state.modalIsOpen}
          		onAfterOpen={this.afterOpenModal}
          		onRequestClose={this.closeModal}
          		style={customStyles} >
          		<div className="col-lg-5">
          			<img src={ this.state.activeHug.user.local.profileImage } className="img-thumbnail"  width="304" height="236" />	
          		</div>
          		<div className="col-lg-6">	
          			<a><span className="glyph glyphicon glyphicon-remove-circle userIcon" title="Close" onClick={this.closeModal}></span></a>
          			<h2 className='avenir underline'>{this.state.activeHug.title}</h2>
          			<p className='avenir'> From @{ this.state.activeHug.user.local.username }</p>
          			<p className='avenir'> Content: { this.state.activeHug.content }</p>
          			<p className='avenir'> Date of hug: { this.state.activeHug.dayOfHug } </p>
          			<p className='avenir'> { this.state.activeHug.duration } </p>
          			<a className='avenir' href={'https://www.google.com/maps/dir/Current+Location/' + this.state.activeHug.lat + ',' + this.state.activeHug.lng }>Get Directions </a>
          		</div>	
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

		
		var self = this;
		var allHugs = this.props.hugArray.map(function(hug){
			return <Marker position={ {lat: hug.lat, lng: hug.lng} } onClick={ self.openModal.bind(null, hug) } icon={'img/heart.png'} />
	
	})
	

		return(

			<MapLoader>
      			<GoogleMap
        			defaultZoom={14}
        			center={{lat: 46.8787, lng: -114.000}} 
        			>
        			<MarkerClusterer
          				averageCenter
          				enableRetinaIcons
          				gridSize={ 60 }
        			>
        		 	{ allHugs }

        		 </MarkerClusterer >	
        		 { this.modalDisplay() }

      			</GoogleMap>
    		</MapLoader>

			)
	}
});

module.exports = AllHugsMap;

