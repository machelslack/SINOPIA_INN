﻿const React = require('react');import ServicesRow from './ServicesRow.jsx';class TypeOfService extends React.Component {constructor(props) {super(props);this.state = {}};render() {	var services = [];const context = this;this.props.services.forEach(function (element,index) {					services.push(				<ServicesRow  element={JSON.parse(element).name} icon={JSON.parse(element).icon} services={context.props.services}  key={"serviceCheckbox"+index} filterPlaces={context.props.filterPlaces}/>  		) 	});	return <ul className="demo-list-control mdl-list">																{services}																				</ul>		}}module.exports = TypeOfService;