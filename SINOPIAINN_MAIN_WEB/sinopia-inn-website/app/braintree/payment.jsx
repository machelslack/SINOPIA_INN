﻿const React = require('react');const ReactDOM = require('react-dom');class RoomRowName extends React.Component {	constructor(props) {super(props);}; render (){			return <tr>															<th className="mdl-data-table__cell--non-numeric" colSpan="3"> {this.props.element.name} </th>												</tr>	}}class RoomRow extends React.Component {	constructor(props) {super(props);}; render (){			return <table>			<tr>			<th className="mdl-data-table__cell--non-numeric" colSpan="3"> {this.props.element.name} </th>			</tr>			<tr>															<th className="mdl-data-table__cell--non-numeric"> {this.props.element.description} </th>										<th className="mdl-data-table__cell--non-numeric"> USD </th>										<th> { this.props.element.price * this.props.reservation.numofdays  }  </th>			</tr>			</table>																}}class AmenityRow extends React.Component {	constructor(props) {super(props);}; render (){			return 							<tr>											<th className="mdl-data-table__cell--non-numeric">  {this.props.element.name}  </th>											<th className="mdl-data-table__cell--non-numeric">   USD </th>											<th> 											 { this.props.element.frequency == 'person'  ?  this.props.element.price * this.props.element.guests  :   this.props.element.frequency == 'room'   ?    this.props.element.price * this.props.reservation.rooms.length  :    this.props.element.price * this.props.element.numofdays      }  											</th>											</tr>			}}class OfferRow extends React.Component {	constructor(props) {super(props);}; render (){			return <tr>										<th className="mdl-data-table__cell--non-numeric"> {this.props.element.name} </th>										<th className="mdl-data-table__cell--non-numeric"> USD </th>										<th> $ { this.props.element.price * this.props.reservation.subtotal } </th>						</tr>																							}}class ReservationConfirmation extends React.Component {		constructor(props) {super(props);}	render(){		console.log(this.props.reservation);				   const context = this ; var roomsName = [] var rooms = [] var offers = []; var amenities = []; 		if(this.props.reservation != null) { 								this.props.reservation.rooms.forEach(function(element,index){				roomsName.push(< RoomRowName   element={element}   key={"RoomsNames"+index}/>);		rooms.push( < RoomRow reservation={context.props.reservation}  element={element}  key={"Rooms"+index} /> );		}) ,this.props.reservation.offers.forEach(function(element,index){			offers.push(<OfferRow reservation={context.props.reservation}  element={element}  key={"Offers"+index} /> );		}) ,this.props.reservation.amenities.forEach(function(element,index){			amenities.push( < AmenityRow reservation={context.props.reservation}  element={element}  key={"Amenities"+index} />   );		}) ;			return <div className="paymentPanel">   		   <p  id="date"></p> <article>            <table className="">  <thead>    	 <tr><td colSpan="3"> <h6 className="mdl-data-table__cell--non-numeric" >  {"From : " +this.props.fromdate}  {" - To : "+this.props.todate} </h6> </td></tr>    <tr>        <th colSpan="3" className="mdl-data-table__cell--non-numeric" > {rooms} </th>    </tr>	    <tr>        <th colSpan="3" className="mdl-data-table__cell--non-numeric" > <h6 >  Amenities </h6> </th>    </tr>	{amenities}    <tr>        <th colSpan="3" className="mdl-data-table__cell--non-numeric" > <h6 >  Offers </h6> </th>    </tr>	{offers}    <tr>        <th colSpan="3" className="mdl-data-table__cell--non-numeric" > <h6 >  Personal Details </h6> </th>    </tr>    <tr>        <th className="mdl-data-table__cell--non-numeric" >   First Name :  </th>        <th className="mdl-data-table__cell--non-numeric" colSpan="2">  {this.props.reservation.fname}  </th>     </tr>    <tr>        <th className="mdl-data-table__cell--non-numeric" >   Last Name :  </th>        <th className="mdl-data-table__cell--non-numeric" colSpan="2"> {this.props.reservation.lname}   </th>    </tr>      <tr>        <th className="mdl-data-table__cell--non-numeric" > Phone :  </th>        <th className="mdl-data-table__cell--non-numeric" colSpan="2" >   {this.props.reservation.phone}  </th>          </tr>      <tr>        <th className="mdl-data-table__cell--non-numeric" >  Email :  </th>        <th className="mdl-data-table__cell--non-numeric" colSpan="2">  {this.props.reservation.email} </th>          </tr>    <tr>        <th className="mdl-data-table__cell--non-numeric" >   Guests : </th>        <th className="mdl-data-table__cell--non-numeric" colSpan="2"> {this.props.reservation.guests}  </th>         </tr>      <tr>        <th className="mdl-data-table__cell--non-numeric" >SUBTOTAL :  </th>        <th className="mdl-data-table__cell--non-numeric" >USD  </th>        <th >   {this.props.reservation.subtotal}</th>    </tr>      <tr>        <th className="mdl-data-table__cell--non-numeric" >   TAX:  </th>        <th className="mdl-data-table__cell--non-numeric" >   USD  </th>        <th  >  </th>    </tr>        <tr>        <th className="mdl-data-table__cell--non-numeric" >  DEPOSIT PAID : </th>        <th className="mdl-data-table__cell--non-numeric" >    USD  </th>        <th > {this.props.reservation.deposit} </th>    </tr>      <tr>        <th className="mdl-data-table__cell--non-numeric" >   BALANCE DUE:  </th>        <th className="mdl-data-table__cell--non-numeric" >  USD  </th>        <th > {this.props.reservation.total - this.props.reservation.deposit}  </th>    </tr>  </thead></table>   </article></div>}else{			return <article>		</article>			}			}	}class CollectionOptions extends React.Component {constructor(props) {super(props);}render(){				return <article></article>				}}class DeliveryOptions extends React.Component {constructor(props) {super(props);this.state = { houseNumber:null, line1 : null , line2:null, line3:null , town:null , country:null}this.handlehouseNumberChange = this.handlehouseNumberChange.bind(this);this.handleline1Change = this.handleline1Change.bind(this);this.handleline2Change = this.handleline2Change.bind(this);this.handleline3Change = this.handleline3Change.bind(this);this.handletownChange = this.handletownChange.bind(this);this.handlecountryChange = this.handlecountryChange.bind(this);} handlehouseNumberChange(event) {		this.setState({houseNumber: event.target.value});	} handleline1Change(event) {	  	      this.setState({line1: event.target.value});} handleline2Change(event) { 		this.setState({line2: event.target.value});   } handleline3Change(event) { 		this.setState({line3: event.target.value});   } handletownChange(event) { 		this.setState({town: event.target.value});   } handlecountryChange(event) { 		this.setState({country: event.target.value});   }render(){			return <article> 									  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-focused">										<input className="mdl-textfield__input firstname" type="text" id="firstname" type="text" pattern="[A-Z,a-z]*" onChange={this.handlehouseNumberChange}/>										<label className="mdl-textfield__label" htmlFor="firstname">House Number</label>										<span className="mdl-textfield__error">Only alphabet and no spaces, please!</span>									   </div>																		<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">										<input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="lastname"  onChange={this.handleline1Change}/>										<label className="mdl-textfield__label" htmlFor="lastname">Line1 </label>										<span className="mdl-textfield__error">Only alphabet and no spaces, please!</span>										</div>														<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">										<input className="mdl-textfield__input" type="text"  onChange={this.handleline2Change} pattern="[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})" id="Email" />										<label className="mdl-textfield__label" htmlFor="email">Line 2</label>										<span className="mdl-textfield__error">Please check your email!</span>										</div>																				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">										<input className="mdl-textfield__input" type="text"  onChange={this.handleline3Change} pattern="[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})" id="Email" />										<label className="mdl-textfield__label" htmlFor="email">Line 3</label>										<span className="mdl-textfield__error">Please check your email!</span>										</div>																				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">										<input className="mdl-textfield__input" type="text"  onChange={this.handletownChange} pattern="[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})" id="Email" />										<label className="mdl-textfield__label" htmlFor="email">Town</label>										<span className="mdl-textfield__error">Please check your email!</span>										</div>																				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">										<input className="mdl-textfield__input" type="text"  onChange={this.handlecountryChange} pattern="[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})" id="Email" />										<label className="mdl-textfield__label" htmlFor="email">Country</label>										<span className="mdl-textfield__error">Please check your email!</span>										</div>					</article>			}}class CreatePassword extends React.Component {constructor(props) {super(props);}render(){				return <article></article>				}}class PersonalDetails extends React.Component {constructor(props) {super(props);}render(){			return 			 		<article> 									  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-focused">												<input className="mdl-textfield__input firstname" type="text" id="firstname" type="text" pattern="[A-Z,a-z]*" onChange={this.props.handleFirstnameChange}/>												<label className="mdl-textfield__label" htmlFor="firstname">FIRST NAME</label>												 <span className="mdl-textfield__error">Only alphabet and no spaces, please!</span>									   </div>																		  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">                <input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="lastname"  onChange={this.props.handleLastnameChange}/>                <label className="mdl-textfield__label" htmlFor="lastname">LAST NAME</label>                <span className="mdl-textfield__error">Only alphabet and no spaces, please!</span>                </div>														<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">                <input className="mdl-textfield__input" type="email"  onChange={this.props.handleEmailChange} pattern="[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})" id="Email" />                <label className="mdl-textfield__label" htmlFor="email">Email</label>                <span className="mdl-textfield__error">Please check your email!</span>                </div>					</article>			}}class App extends React.Component {constructor(props) {super(props);this.state = {deliveryDate:"",deliveryAddress:"",sinopiainnReservation:{},sinopiainnreservationID:null,fname:"",lname:"",email:"",promotions:"yes",confirmation:null}this.delivery = this.delivery.bind(this);this.payment = this.payment.bind(this);this.confirm = this.confirm.bind(this);this.nextStep = this.nextStep.bind(this);this.showPanel = this.showPanel.bind(this);this.updateBooking = this.updateBooking.bind(this);this.handleFirstnameChange = this.handleFirstnameChange.bind(this);this.handleLastnameChange = this.handleLastnameChange.bind(this);this.handleEmailChange = this.handleEmailChange.bind(this);this.generatePaypal = this.generatePaypal.bind(this);this.promotions = this.promotions.bind(this);this.checkout = this.checkout.bind(this);this.updateReservation = this.updateReservation.bind(this);this.closeError  = this.closeError.bind(this);   };	closeError(e){					document.querySelector('.modalReservation').style.display="none" ;						 	}updateReservation(result){//result.transaction.id	const context = this ;var fileSelect = document.getElementById('file-select');var files = fileSelect.files;var formData = new FormData();for (var i = 0; i < files.length; i++) {var file = files[i];if (!file.type.match('image.*')) {	      continue;}   formData.append('photos', file, file.name);}formData.append('fname',this.state.fname);formData.append('lname',this.state.lname);formData.append('email',this.state.email);formData.append('transactionID',result.transaction.id);formData.append('promotions',this.state.stay);formData.append('resID',this.state.sinopiainnreservationID);formData.append('status',"booked");this.xhttp = new XMLHttpRequest();	this.xhttp.onreadystatechange = function() {		if (this.readyState == 4 && this.status == 200) {						context.setState({confirmation:JSON.parse(this.responseText).Reservation},function(){																						document.getElementById('myModal').style.display = none; 												 document.getElementById('submit-button').removeAttribute("disabled");						 															});									}						}	this.xhttp.open("PUT", "/api/reservation", true);this.xhttp.send(formData) ;	}checkout(nonce){		const context = this ;var formData = new FormData();formData.append("nonce",nonce);formData.append("amount",Number(this.state.sinopiainnReservation.deposit).toFixed(2));formData.append("resID",this.state.sinopiainnreservationID);this.xhttp = new XMLHttpRequest();	this.xhttp.onreadystatechange = function() {		if (this.readyState == 4 && this.status == 200) {			console.log(JSON.parse(this.responseText).transaction);						JSON.parse(this.responseText).transaction != undefined ?  context.updateReservation(JSON.parse(this.responseText)) : ( document.getElementById("spinnerText").style.opacity = 0 ,  document.getElementById("spinnerIcon").style.opacity = 0, document.getElementById("spinnerText").innerHTML = " Something went wrong, please try again. You have no tbeen charged.", document.getElementById("spinnerIcon").innerHTML = "mood_bad" , document.getElementById("spinnerText").style.opacity = 1 ,  document.getElementById("spinnerIcon").style.opacity = 1) ;												}				}this.xhttp.open("POST", "/api/checkout", true);this.xhttp.send(formData) ;}promotions(e){			e.target.checked ? this.setState({promotions:"yes"})  : this.setState({promotions:"no"})    ;	}generatePaypal(){const context = this;this.xhttp = new XMLHttpRequest();	this.xhttp.onreadystatechange = function() {		if (this.readyState == 4 && this.status == 200) {						 var button = document.querySelector('#submit-button');		braintree.dropin.create({				  authorization: this.responseText,				  container: '#dropin-container',				  paypal: {							flow: 'checkout',							amount:context.state.sinopiainnReservation.deposit,							currency: 'USD'							}								}, function (createErr, instance) {										createErr ? ( document.getElementById("spinnerText").style.opacity = 0 ,  document.getElementById("spinnerIcon").style.opacity = 0 , document.getElementById("spinnerText").innerHTML = " Something went wrong. Please try again.", document.getElementById("spinnerIcon").innerHTML = "mood_bad" , document.getElementById("spinnerText").style.opacity = 1 ,  document.getElementById("spinnerIcon").style.opacity = 1) :					button.addEventListener('click', function (e) {					instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {						document.getElementById('myModal').style.display = "table"; 						context.checkout(payload.nonce);										})				  }) ;			  				});	}};this.xhttp.open("GET", "/api/checkout/client_token", true);this.xhttp.send();	} handleFirstnameChange(event) {		this.setState({fname: event.target.value});	} handleLastnameChange(event) {	  	      this.setState({lname: event.target.value});} handleEmailChange(event) { 		this.setState({email: event.target.value});   }confirm(e){		this.nextStep(e);			}payment(e){		this.nextStep(e);	}delivery(e){this.state.fname == null || this.state.lname == null  ||  this.state.email == null ? alert("All feilds are required") :  this.state.email.match(/[a-z,A-Z,0-9,\.]{1,64}@[a-z,A-Z,0-9]{1,64}\.([a-z,A-Z]{3,64}|[a-z,A-Z]{2,64}\.[a-z,A-Z]{2,64})/g)   ?  document.getElementById("ckhterms").checked ?this.state.sinopiainnreservationID != null ? ( document.getElementById('file-select').value === "" ? alert("Please upload a photo of yourself") :  this.nextStep(e) )  :  (this.nextStep(e)) : alert("You must agree to our terms to complete your booking"): alert(this.state.email) }nextStep(e){		 if (e.target.parentElement.style.height){	       e.target.parentElement.style.height = null;	  	  e.target.parentElement.previousSibling.style.backgroundColor = " #f7f7f7";				  e.target.parentElement.previousSibling.style.color = " #444";	  	  e.target.parentElement.nextElementSibling.nextElementSibling.style.backgroundColor = " #aa9d2e";				  e.target.parentElement.nextElementSibling.nextElementSibling.style.color = " #ffffff";				  e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.height  =  e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.scrollHeight + "px";		    } }updateBooking(event,fname,lname,email){const context = this;var fileSelect = document.getElementById('file-select');var files = fileSelect.files;var formData = new FormData();for (var i = 0; i < files.length; i++) {var file = files[i];if (!file.type.match('image.*')) {	      continue;}   formData.append('photos', file, file.name);}formData.append('fname', fname),formData.append('lname',lname),formData.append('email',email),formData.append('reservationID',this.state.sinopiainnreservationID)this.xhttp = new XMLHttpRequest();this.xhttp.onreadystatechange = function() {		if (this.readyState == 4 && this.status == 200) {							}};this.xhttp.open("PUT", "/api/reservation", true);this.xhttp.send(formData) ;	}componentDidMount(){const context = this; this.generatePaypal();	window.sessionStorage.sinopiainnreservationID ? this.setState({ sinopiainnreservationID : window.sessionStorage.sinopiainnreservationID , sinopiainnReservation:JSON.parse(window.sessionStorage.sinopiainnReservation)},function(){				 context.showPanel();			 						}) : this.showPanel();						}showPanel(){				 			document.getElementsByClassName("accordion")[0].style.backgroundColor = " #aa9d2e";						document.getElementsByClassName("accordion")[0].style.color = " #ffffff";						document.getElementsByClassName("accordion")[0].nextElementSibling.style.height  = document.getElementsByClassName("accordion")[0].nextElementSibling.scrollHeight + "px";								}render() {if(this.state.sinopiainnreservationID != null ){		return <article >	  				<div className="mdl-grid innerGrid">							<div  className="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">					 					 						<button className="accordion">1. Your Details</button>													<div className="paymentPanel">									 									<br />																		 <large> Personal Details</large>									 									 <article>												<PersonalDetails  handleFirstnameChange={this.handleFirstnameChange} handleLastnameChange={this.handleLastnameChange}   handleEmailChange={this.handleEmailChange} />									 									</article>																											<large> please upload a photo so we know who to expect</large>																		<article>																		<input type="file" id="file-select" name="photo" multiple/>																		</article>																											<article>																				<label><input type="checkbox" id="ckhterms" name="terms"  className="mdl-checkbox__input"/> Please agree to the terms of our villa <a href="house-rules.pdf" className="house-rules">  here </a> before continuing </label> 											</article>									<article>																		<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect smallLabel" >													<input type="checkbox"  className="mdl-checkbox__input"  onClick={(e) => this.promotions(e)}/> By submitting this form, you agree to receive our emails packed full of travel advice, exclusive offers and events. Tick the box to opt out.									</label>																																	</article>																		<button className="mdl-button mdl-js-button mdl-button--accent wishlistBtn accordinContinue" onClick={(e) => this.delivery(e)}>																		Continue to delivery									</button>																											</div>					<br/>						<button className="accordion">2. Payment</button>							<div className="paymentPanel ">									 									 <br />									 									  <large> Choose a payment type</large>																	 <section>									 <article className="payment" >																										 									     <div id="dropin-container"></div>  									 									 									 </article>									 </section>									 									  									  									<button className="mdl-button mdl-js-button mdl-button--accent wishlistBtn accordinContinue"  id="dropin-container"  disabled onClick={(e) => this.confirm(e)}>																		Continue to order confirmation									</button>									  							</div>					 					 <br/>					 					 														 	<button className="accordion">3. Order Confirmation</button>																																							<ReservationConfirmation  reservation={this.state.confirmation} />									  									 									  											 					 					 					 					 </div>					 					 <div  className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--4-col-phone orderSummary">					 					 <button className="accordion">Order Summary</button>					 <div className="paymentPanel ">																				<article className="summaryFirstchild">					 <label > <medium>  Total </medium> <medium> $ {this.state.sinopiainnReservation.total} </medium> </label>					 </article>					  <article  className="summarySecondchild">					  <label><small> Deposit </small>  <small>{this.state.sinopiainnReservation.deposit}  </small></label>										 </article>					 <article  className="summaryThirdchild">					  <label><small> {this.state.sinopiainnReservation.rooms.length} rooms for {this.state.numofdays} nights </small></label>										 </article>					 <article>					 <label>DEPOSIT POLICY:</label><br/>		<small > $ {this.state.sinopiainnReservation.deposit} USD deposit is required upon making a reservation. Final payment is due in full 14 days prior to arrival date, 30 days for Easter and 60 days for Christmas/New Year. This payment is non-refundable.</small> <br/> 		<label>CANCELLATION, NO-SHOW AND REFUND POLICIES:</label><br/>		<small>A full refund is due when cancelled 45 days prior to arrival, 60 days for Easter and 90 days during Christmas and New Year. The full amount of the stay is non-refundable when inside 45 days, 60 days for Easter and 90 days during Christmas and New Year.		No refund and full amount of stay is forfeited when there is a no-show</small>  		</article>					 </div>					 					 					 					 					 </div>					 					 				</div>		<div id="myModal" className="modalReservation">			<span className="closeReservation cursor" onClick={(e) => this.closeError(e)}>&times;</span>			<h1 id="spinnerText" className="spinnerText">Processing, please wait.</h1>			<i className="material-icons" id="spinnerIcon">mood</i>			<p className="mdl-spinner mdl-js-spinner mdl-spinner--single-color  progressIcons" id="spinner"></p>		</div></article>		}else{      return <article >	  				<div className="mdl-grid innerGrid">							<div  className="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">					 					 						<button className="accordion">1. Your Details</button>													<div className="paymentPanel">									 									<br />																		 <large> Personal Details</large>									 									 <article>												<PersonalDetails   />									 									</article>																											<large> create a password now to checkout quicker next time</large>																		<article>																		<div className="mdl-grid innerGrid">														<div  className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">																								 <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >													<input type="radio"  className="mdl-checkbox__input"  name="registerOption" /> Yes   												</label>									 																								</div>																																				<div  className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">																								<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >													<input type="radio"  className="mdl-checkbox__input"  name="registerOption" /> No   												</label>																								</div>									 </div>																		</article>																		<article>																		<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect smallLabel" >													<input type="checkbox"  className="mdl-checkbox__input"  /> By submitting this form, you agree to receive our emails packed full of travel advice, exclusive offers and events. Tick the box to opt out.									</label>																																	</article>																		<button className="mdl-button mdl-js-button mdl-button--accent wishlistBtn accordinContinue" onClick={(e) => this.delivery(e)}>																		Continue to delivery									</button>																		<button className="" onClick={(e) => this.payment(e)}>										Continue to Payment									  </button>																											</div><br/>						<button className="accordion">2. Delivery</button>													 <div className="paymentPanel">							 							 <br />							 									  <large> Choose a delivery type</large>									  									 <article>									 									 	<div className="mdl-grid innerGrid">														<div  className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">																								 <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >													<input type="radio"  className="mdl-checkbox__input"  name="deliveryOption" /> Delivery   												</label>									 																								</div>																																				<div  className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">																								<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >													<input type="radio"  className="mdl-checkbox__input"  name="deliveryOption"  /> Click & Collect   												</label>																								</div>																							</div>																					</article>																											  <article>												<DeliveryOptions   />																								<CollectionOptions   />									 									 </article>																		 																		  <button className="mdl-button mdl-js-button mdl-button--accent wishlistBtn accordinContinue" onClick={(e) => this.payment(e)}>										Continue to Payment									  </button>																																					</div><br/>						<button className="accordion">3. Payment</button>							<div className="paymentPanel ">									 									 <br />									 									  <large> Choose a payment type</large>									  									  									  									<article className="paymentArticle">																																		<button className="accordion payment">Pay with an eVocher</button>												<div className="paymentPanel">																																																			<div className="mdl-textfield mdl-js-textfield">																														<input className="mdl-textfield__input" type="phone" pattern="[0-9]*" id="eVocher"  onChange={this.handleVocherChange}/>																													<span className="mdl-textfield__error">Only numbers and no spaces, please!</span>																														</div>																																				</div>												<button className="accordion payment">Apply a  promo code</button>												<div className="paymentPanel">																																							<div className="mdl-textfield mdl-js-textfield">																														<input className="mdl-textfield__input" type="phone" pattern="[0-9]*" id="promoCode"  onChange={this.handleVocherChange}/>																													<span className="mdl-textfield__error">Only numbers and no spaces, please!</span>																														</div>																																																</div>									 								</article>																	 <section>									 <article className="payment" >									 										<article>									  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >									  <input type="radio"  className="mdl-checkbox__input"   /> Pay usings debit or credit card   																											 </label>									 									 <img  src="../images/credit_card_&_payment_logos/small/amex-1-s.png"  />									 <img src="../images/credit_card_&_payment_logos/small/visa-1-s.png" />									 <img  src="../images/credit_card_&_payment_logos/small/mastercard-1-s.png" />									 <img  src="../images/credit_card_&_payment_logos/small/maestro-1-s.png" />									 <img  src="../images/credit_card_&_payment_logos/small/jcb-1-s.png" />									 <img  src="../images/credit_card_&_payment_logos/small/paypal-1-s.png" /> </article>									 </article>									 </section>									 									 <section>									 <article className="payment" >									 									 <label className="mdl-js-ripple-effect" >																		Pay with Paypal																															</label>																		<div id="paypal-button"></div>																		 																	 </article>									 </section>									  									  									  									  <button className="mdl-button mdl-js-button mdl-button--accent wishlistBtn accordinContinue" onClick={(e) => this.confirm(e)}>										Continue to order confirmation									  </button>									  							</div>					 					 <br/>					 	<button className="accordion">4. Order Confirmation</button>							<div className="paymentPanel">																		 									  							</div>					 					 					 					 					 </div>					 					 <div  className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--4-col-phone">					 					 <button className="accordion">Order Summary</button>					 <label>Total</label><br />					 <label>Subtotal</label><br />					 <article>					 {this.state.deliveryDate}					 {this.state.deliverAddress}					 </article>					 					 					 					 </div>					 					 				</div>								<div id="myModal" className="modalReservation">			<span className="closeReservation cursor" onClick={(e) => context.closeError(e)}>&times;</span>			<div  className="innermodalReservation">			<h1 id="spinnerText" className="spinnerText">Processing, please wait.</h1>			<i className="material-icons" id="spinnerIcon">mood</i>			<p className="mdl-spinner mdl-js-spinner mdl-spinner--single-color  progressIcons" id="spinner"></p>			</div>	</div>				</article>	  }     }}module.exports = App;