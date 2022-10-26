﻿const React = require('react');const ReactDOM = require('react-dom');class Column extends React.Component {			render(){var imgUrl =  this.props.item != undefined ?  this.props.item.images[0] : "" ; ;const divStyle = {			 backgroundImage: 'url(' + imgUrl + ')',	  backgroundSize: 'cover',    backgroundRepeat: 'no-repeat',	 backgroundPosition: 'center',	}		return <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" onClick={(e) => this.props.displaySingleItem(this.props.item)}>				<div className="demo-card-image mdl-card ">							<div className="mdl-card__title mdl-card--expand"></div>							<div className="mdl-card__actions">							<span className="demo-card-image__filename">Image.jpg</span>							</div>		</div>						</div>	}}class Row extends React.Component {			render(){			var columns = [];	const context = this ; 		console.log(this.props.items.length);		this.props.items.forEach(function(element,index){				columns.push(<Column item={element} key={"Column_"+index} displaySingleItem ={context.props.displaySingleItem} />);						})			return <div className="mdl-grid">								  {columns}				</div>		}	}class Page extends React.Component {			render (){					var rows = [];	const context = this ;	var z = 0;					for(var y = 0 ; y <  4 ;  y++){					var cols = [];				for (var x = z ; x <  z+4 ; x++ ){									context.props.items[x] != undefined ?  cols.push(context.props.items[x]) :  "" ;														}				z += 1;						cols.length > 0 ? rows.push(<Row  items={cols} key={"row_"+y}  displaySingleItem ={this.props.displaySingleItem}/>) : "" ;														}							return  <section>				{rows}				</section>												}			}module.exports = Page;