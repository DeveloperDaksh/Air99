import axios from "axios";
import React, { useState } from "react";
import "../../assets/css/styles.css";
function Payment() {
  // const booking = "https://www.myflighteasy.com/ImageApplications/Images/AirlineLogo/UK.png"
  // const from  = "https://www.myflighteasy.com/ImageApplications/Images/Icon/flight/from-wht.png"
  // const to = "https://www.myflighteasy.com/ImageApplications/Images/Icon/flight/to-wht.png"
  const visa =
    "https://www.myflighteasy.com/ImageApplications/Images/Icon/visa.png";
  // const header = "https://www.myflighteasy.com/ImageApplications/Images/Logo/myflighteasy_logo.png"
  // const phone = "https://www.myflighteasy.com/ImageApplications/Images/Icon/TOD-Phone-icon.png"
  const payment =
    "https://www.myflighteasy.com/ImageApplications/Images/payment/logo1.jpg";
  const secure =
    "https://www.myflighteasy.com/ImageApplications/Images/payment/secure-ssl.png";

  const initialState = {
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    dob_month: "",
    dob_day: "",
    dob_year: "",
    card_holder_name: "",
    card_type: "",
    card_number: "",
    exp_month: "",
    exp_year: "",
    cvv: "",
    address1: "",
    address2: "",
    cityname: "",
    country: "",
    zip: "",
    phone: "",
    alternate_phone: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitDetails = async () => {
    await axios
      .post(`http://localhost:1337/payments`, formData)
      .then((res) => {
        console.log(res);
        setFormData(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="listing-page-body">
      <div className="vacations-index-page">
        {/* <div className="top-header">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><img src={header} alt="MyFlightEasy_logo" className="desktop img-fluid"/></a>
                        </div>
                            <div className="nav-navigation">
                                <ul>
                                    <li><a className="view-booking" href="/"><i className="fa fa-plane" aria-hidden="true"></i> My Bookings</a></li>
                                    <li>
                                        <img src={phone} alt="Call Icon"/>
                                        <a className="view-booking" href="/">1-844-780-0306</a>
                                        <span>Toll Free <strong>24x7</strong></span>
                                    </li>
                                </ul>                
                            </div>
                    </div>
                </div> */}
      </div>
      <form className="setcolor">
        <div className="payment-wrap">
          <div className="container">
            <div className="row">
              <div className="back--Btn">
                <button
                  type="button"
                  className="btn btn-default hvr-icon-wobble-horizontal hvr-glow"
                >
                  <i className="fa fa-angle-left hvr-icon"></i>&nbsp;&nbsp; Go
                  Back
                </button>
              </div>
              {/* <div className="information-notes">
                    <ul>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> Prices not guaranteed until booked</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Free cancellation within 24 hours of booking! </li>
                    </ul>
                </div> */}
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12 padding-left-zero">
                <div className="box-one">
                  <div className="shadow-box">
                    <section className="travler-detail">
                      <div className="headeing-wrap">
                        <h3>Traveler Details</h3>
                        <div className="trors">
                          <span>
                            Traveler name must match Government-issued Photo ID
                            exactly{" "}
                          </span>
                        </div>
                      </div>
                    </section>
                    <div className="detail-row">
                      <div className="error-ui">
                        <span className="error-ui--messege"></span>
                        <span className="error-ui--messege"></span>
                        <span className="error-ui--messege"></span>
                        <span className="error-ui--messege"></span>
                        <span className="error-ui--messege"></span>
                        <span className="error-ui--messege"></span>
                      </div>
                      <h4 className="user-type">Adult</h4>
                      <input
                        data-val="true"
                        data-val-number="The field PaxOrder must be a number."
                        data-val-required="The PaxOrder field is required."
                        name="TravellerDetails[0].PaxOrder"
                        type="hidden"
                        value="0"
                      />
                      <input
                        data-val="true"
                        data-val-required="The PaxType field is required."
                        name="TravellerDetails[0].PaxType"
                        type="hidden"
                        value="ADT"
                      />
                      <div className="col-one one-third">
                        <label>
                          First Name<sup>*</sup>
                        </label>
                        <input
                          AutoComplete="off"
                          AutoCompleteType="None"
                          className="f-ctrl"
                          data-val="true"
                          data-val-length="First Name cannot be longer than 50 characters."
                          data-val-length-max="50"
                          data-val-required="+ Please provide First Name."
                          maxlength="30"
                          name="TravellerDetails[0].FirstName"
                          //   onKeyPress="return LettersWithSpaceOnly(event);"
                          onblur="ValidateTraveller(this,&#39;fname&#39;);"
                          placeholder="First Name"
                          type="text"
                          value={formData.first_name}
                          name="first_name"
                          onChange={handleChange}
                        />
                        <span className="valid-tick active"></span>
                      </div>
                      <div className="col-one one-third">
                        <label>Middle Name</label>
                        <input
                          AutoComplete="off"
                          AutoCompleteType="None"
                          className="f-ctrl"
                          data-val="true"
                          data-val-length="Middle name cannot be longer than 50 characters."
                          data-val-length-max="50"
                          id="MiddleName_0"
                          maxlength="30"
                          name="TravellerDetails[0].MiddleName"
                          //   onKeyPress="return LettersWithSpaceOnly(event);"
                          onblur="GetValidPaxName(this);"
                          placeholder="Middle Name"
                          type="text"
                          value={formData.middle_name}
                          name="middle_name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-one  one-third">
                        <label>
                          Last Name<sup>*</sup>
                        </label>
                        <input
                          AutoComplete="off"
                          AutoCompleteType="None"
                          className="f-ctrl"
                          data-val="true"
                          data-val-length="Last Name cannot be longer than 50 characters."
                          data-val-length-max="50"
                          data-val-required="+ Please provide Last Name."
                          id="LastName_0"
                          maxlength="30"
                          name="TravellerDetails[0].LastName"
                          //   onKeyPress=" return LettersWithSpaceOnly(event);"
                          onblur="ValidateTraveller(this,&#39;lname&#39;);"
                          placeholder="Last Name"
                          type="text"
                          value={formData.last_name}
                          name="last_name"
                          onChange={handleChange}
                        />
                        <span className="valid-tick active"></span>
                      </div>
                      <div className="col-one one-fourth sm-full">
                        <label>
                          Gender<sup>*</sup>
                        </label>
                        <select
                          className="f-ctrl"
                          data-val="true"
                          data-val-required="+ Please provide Gender."
                          id="Gender_0"
                          name="TravellerDetails[0].Gender"
                          onblur="ValidateGender(this);"
                          value={formData.gender}
                          name="gender"
                          onChange={handleChange}
                        >
                          <option selected="selected" value="0">
                            Select
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <span className="valid-tick active"></span>
                      </div>
                      <div className="col-one one-fourth">
                        <label>
                          Date of Birth<sup>*</sup>
                        </label>
                        <select
                          className="f-ctrl"
                          data-val="true"
                          data-val-number="The field Month must be a number."
                          data-val-required="+ Please provide Month of Date of Birth."
                          id="Month_0"
                          name="TravellerDetails[0].Month"
                          onblur="ValidateTraveller(this,&#39;month&#39;);"
                          value={formData.dob_month}
                          name="dob_month"
                          onChange={handleChange}
                        >
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                      </div>
                      <div className="col-one one-fourth">
                        <label>&nbsp;</label>
                        <select
                          className="f-ctrl"
                          data-val="true"
                          data-val-number="The field Day must be a number."
                          data-val-required="+ Please provide Day of Date of Birth."
                          id="Day_0"
                          name="TravellerDetails[0].Day"
                          onblur="ValidateTraveller(this,&#39;day&#39;);"
                          value={formData.dob_day}
                          name="dob_day"
                          onChange={handleChange}
                        >
                          <option selected="selected" value="0">
                            Day
                          </option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                        <span className="valid-tick active"></span>
                      </div>
                      <div className="col-one one-fourth">
                        <label>&nbsp;</label>
                        <input
                          AutoComplete="off"
                          AutoCompleteType="None"
                          className="f-ctrl"
                          id="Year_0"
                          maxlength="4"
                          name="TravellerDetails[0].Year"
                          onblur="ValidateTraveller(this,&#39;year&#39;);"
                          //   onkeypress="return IsNumberKey(event)"
                          placeholder="Year"
                          type="text"
                          value={formData.dob_year}
                          name="dob_year"
                          onChange={handleChange}
                        />
                        <span className="valid-tick active"></span>
                      </div>
                    </div>
                    <input type="hidden" value="ADT" />
                    <input type="hidden" value="Adult" />
                    <input
                      Value="09/02/2021"
                      data-val="true"
                      data-val-date="The field DepartureDate must be a date."
                      data-val-required="The DepartureDate field is required."
                      type="hidden"
                      value="9/2/2021 12:00:00 AM"
                    />
                    <input
                      data-val="true"
                      data-val-number="The field Id must be a number."
                      data-val-required="The Id field is required."
                      type="hidden"
                      value="0"
                    />
                    <input type="hidden" id="passengercount" name="hidden1" />
                    <div className="inner-details">
                      <div className="login-panel">
                        <div className="box-one md-style">
                          <div className="shadow-box">
                            <section className="travler-detail">
                              <div className="headeing-wrap">
                                <h3>Payment Details </h3>
                                <div className="card--info">
                                  <span className="img-from-bg">
                                    We Accept{" "}
                                    <img src={visa} alt="image_of_visa_icon" />
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="/" target="_blank">
                                        Payment Acceptance Policy
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/" target="_blank">
                                        <i
                                          className="fa fa-lock"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Privacy Policy
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">Safe Shopping Guarantee</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="error-ui pad-some">
                                <span
                                  id="CardName"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="PaymentMethod"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="CreditCardNo"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="CreditCardMonth"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="Card_Month"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="CreditCardYear"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="Card_Month"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="CVVNo"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="Address1"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="City"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="postalCode"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="billingPhone"
                                  className="error-ui-messege"
                                ></span>
                                <span
                                  id="emailAddress"
                                  className="error-ui-messege"
                                ></span>
                              </div>
                              <div className="detail-row">
                                <div className="col-one one-third">
                                  <label>
                                    Card Holder's Name<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    maxlength="50"
                                    name="BillingInformation.CardHolderName"
                                    onblur="GetValidPaxName(this); ValidateName(this,false);"
                                    // onkeypress="return LettersWithSpaceOnly(event);"
                                    placeholder="Card Holders Name"
                                    type="text"
                                    value={formData.card_holder_name}
                                    name="card_holder_name"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-one one-third">
                                  <label>
                                    Card Type <sup>*</sup>
                                  </label>
                                  <select
                                    className="f-ctrl"
                                    name="BillingInformation.PaymentMethod"
                                    onfocusout="ValidatePaymentType(this,false);"
                                    value={formData.card_type}
                                    name="card_type"
                                    onChange={handleChange}
                                  >
                                    <option selected="selected" value="Visa">
                                      Visa
                                    </option>
                                    <option value="Master">Master Card</option>
                                    <option value="AmericanExpress">
                                      American Express
                                    </option>
                                    <option value="Discover">Discover</option>
                                  </select>
                                </div>
                                <div className="col-one  one-third md-full">
                                  <label>
                                    Debit/Credit Card Number<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    id="BillingInformation_CardNumber"
                                    maxlength="18"
                                    name="BillingInformation.CardNumber"
                                    onblur="IsNumeric(this); ValidateCreditCard(this,false);"
                                    // onkeypress="return clearError(event)"
                                    placeholder="Debit/Credit Card Number"
                                    type="text"
                                    value={formData.card_number}
                                    name="card_number"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-one one-third">
                                  <label>
                                    Expiration month<sup>*</sup>
                                  </label>
                                  <select
                                    className="f-ctrl"
                                    data-val="true"
                                    data-val-number="The field ExpiryMonth must be a number."
                                    data-val-required="The ExpiryMonth field is required."
                                    name="BillingInformation.ExpiryMonth"
                                    onblur="ValidateMonth(this,false);"
                                    value={formData.exp_month}
                                    name="exp_month"
                                    onChange={handleChange}
                                  >
                                    <option selected="selected" value="0">
                                      Month
                                    </option>
                                    <option value="01 - January">
                                      01 - January
                                    </option>
                                    <option value="02 - February">
                                      02 - February
                                    </option>
                                    <option value="03 - March">
                                      03 - March
                                    </option>
                                    <option value="04 - April">
                                      04 - April
                                    </option>
                                    <option value="05 - May">05 - May</option>
                                    <option value="06 - June">06 - June</option>
                                    <option value="07 - July">07 - July</option>
                                    <option value="08 - August">
                                      08 - August
                                    </option>
                                    <option value="09 - September">
                                      09 - September
                                    </option>
                                    <option value="10 - October">
                                      10 - October
                                    </option>
                                    <option value="11 - November">
                                      11 - November
                                    </option>
                                    <option value="12 - December">
                                      12 - December
                                    </option>
                                  </select>
                                </div>
                                <div className="col-one one-third">
                                  <label>
                                    Expiration Year<sup>*</sup>
                                  </label>
                                  <select
                                    className="f-ctrl"
                                    data-val="true"
                                    data-val-number="The field ExpiryYear must be a number."
                                    data-val-required="The ExpiryYear field is required."
                                    name="BillingInformation.ExpiryYear"
                                    onblur="ValidateYear(this,false);"
                                    value={formData.exp_year}
                                    name="exp_year"
                                    onChange={handleChange}
                                  >
                                    <option selected="selected" value="0">
                                      Year
                                    </option>
                                    {/* <option value="2019">2019</option> */}
                                    {/* <option value="2020">2020</option> */}
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                  </select>
                                </div>
                                <div className="col-one one-third">
                                  <label>
                                    CVV Code<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    maxlength="4"
                                    name="BillingInformation.CVVNumber"
                                    onblur="ValidateCVV(this,false); IsNumeric(this);"
                                    // onkeypress="return clearError(event)"
                                    placeholder="CVV"
                                    type="text"
                                    value={formData.cvv}
                                    name="cvv"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="clearfix"></div>
                                <div className="clearfix"></div>
                                <div className="col-one one-half">
                                  <label>
                                    Billing Address 1<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    maxlength="50"
                                    name="BillingInformation.Address1"
                                    // onkeypress="GetValidAddress(this);"
                                    placeholder="Address1"
                                    type="text"
                                    value={formData.address1}
                                    name="address1"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-one one-half">
                                  <label>Billing Address 2</label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    maxlength="50"
                                    name="BillingInformation.Address2"
                                    // onkeypress="GetValidAddress(this);"
                                    placeholder="Address2"
                                    type="text"
                                    value={formData.address2}
                                    name="address2"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-one one-third">
                                  <label>
                                    City<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    name="BillingInformation.City"
                                    onblur="GetValidCityName(this);"
                                    placeholder="City Name"
                                    type="text"
                                    value={formData.cityname}
                                    name="cityname"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-one one-third">
                                  <label>
                                    Country<sup>*</sup>
                                  </label>
                                  <select
                                    className="f-ctrl"
                                    id="BillingInformation_CountryName"
                                    name="BillingInformation.CountryName"
                                    onchange="GetISDCodeByCountry();"
                                    value={formData.country}
                                    name="country"
                                    onChange={handleChange}
                                  >
                                    <option value="AF">Afghanistan</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BA">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="BW">Botswana</option>
                                    <option value="BR">Brazil</option>
                                    <option value="VG">
                                      British Virgin Islands
                                    </option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">
                                      Central African Republic
                                    </option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="CD">
                                      Democratic Republic Of The Congo
                                    </option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">
                                      Dominican Republic
                                    </option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">
                                      Equatorial Guinea
                                    </option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="CI">Ivory Coast</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macau</option>
                                    <option value="MK">Macedonia</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="AN">
                                      Netherlands Antilles
                                    </option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="KP">North Korea</option>
                                    <option value="MP">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestine</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn Islands</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="KN">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin</option>
                                    <option value="PM">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="VC">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="KR">South Korea</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TT">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">
                                      United Arab Emirates
                                    </option>
                                    <option value="GB">United Kingdom</option>
                                    <option selected="selected" value="US">
                                      United States
                                    </option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="WF">
                                      Wallis and Futuna
                                    </option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                    <option value="UK">LONDON</option>
                                  </select>
                                </div>
                                <div className="col-one one-third">
                                  <label>
                                    ZIP Code<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    id="BillingInformation_PostalCode"
                                    maxlength="13"
                                    name="BillingInformation.PostalCode"
                                    placeholder="Zip Code"
                                    type="text"
                                    value={formData.zip}
                                    name="zip"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-one one-third">
                                  <label>
                                    Billing Phone<sup>*</sup>
                                  </label>
                                  <input
                                    className="f-ctrl width-20 text-center"
                                    data-val="true"
                                    data-val-number="The field BillingPhnCode must be a number."
                                    data-val-required="The BillingPhnCode field is required."
                                    id="BillingInformation_BillingPhnCode"
                                    name="BillingInformation.BillingPhnCode"
                                    readonly="readonly"
                                    type="text"
                                  />
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl width-80"
                                    id="BillingInformation_BillingPhnNumber"
                                    maxlength="11"
                                    minlength="7"
                                    name="BillingInformation.BillingPhnNumber"
                                    onblur="IsNumeric(this); ValidatePhone(this);"
                                    // onkeypress="return clearError(event)"
                                    placeholder="Billing Phone"
                                    type="text"
                                    value={formData.phone}
                                    name="phone"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-one one-third">
                                  <label>Alternate/Mobile Phone </label>
                                  <input
                                    className="f-ctrl width-20 text-center"
                                    data-val="true"
                                    data-val-number="The field MobilePhnCode must be a number."
                                    data-val-required="The MobilePhnCode field is required."
                                    id="BillingInformation_MobilePhnCode"
                                    name="BillingInformation.MobilePhnCode"
                                    readonly="readonly"
                                    type="text"
                                  />
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl width-80 "
                                    id="BillingInformation_MobilePhnNumber"
                                    maxlength="11"
                                    minlength="7"
                                    name="BillingInformation.MobilePhnNumber"
                                    onblur="IsNumeric(this);"
                                    // onkeypress="return clearError(event)"
                                    placeholder="Mobile Phone"
                                    type="text"
                                    value={formData.alternate_phone}
                                    name="alternate_phone"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-one  one-third md-full">
                                  <label>
                                    Email Address<sup>*</sup>
                                  </label>
                                  <input
                                    AutoComplete="off"
                                    AutoCompleteType="None"
                                    className="f-ctrl"
                                    id="BillingInformation_EmailAddress"
                                    maxlength="100"
                                    name="BillingInformation.EmailAddress"
                                    onblur="ValidateEmail(this,false);"
                                    placeholder="Email Address"
                                    type="text"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </section>
                            <div className="box-one">
                              <div className="detail-row border-top-none">
                                <div className="images-icon">
                                  <div className="img-wrap">
                                    <img
                                      src={payment}
                                      alt="SSL site seal - click to verify"
                                    />
                                  </div>
                                </div>
                                <div className="secure-ssl-box">
                                  <span className="top-text">
                                    <small>Secure SSL</small>
                                    <br></br>BOOKING
                                  </span>
                                  <span className="top-img">
                                    <img
                                      src={secure}
                                      alt="image_of_secure_ssl"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="box-one">
                              <div className="detail-row border-top-none">
                                <center>
                                  <button type="button" onClick={submitDetails}>
                                    Submit
                                  </button>
                                </center>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12 padding-right-zero">
                                <aside className="sidebar">
                                    <h4>Payment Review</h4>
                                    <span>All prices are quoted in US dollar</span>
                                    <div className="going-flight">
                                        <h4> <img src={from} alt="outbound_flight_icon" /> Outbound Flight</h4>
                                        <div className="list-address">
                                            <div className="list-address">
                                            <div className="payments--Flights">          
                                            <div className="row no-gutters">
                                            <div className="col-md-2 fligtLogo">
                                            <img src={booking} alt="mobile-airline"/>
                                        </div>
                                            <div className="col-md-10">
                                            <div className="row no-gutters">
                                            <div className="col-md-6">
                                            <div className="flight-timeDate"><span>    09:35 PM  Thu , 02 Sep     </span> <span> 11:00 PM  Thu , 02 Sep </span>   </div>
                                        </div>
                                            <div className="col-md-6">
                                            <div className="flight-timeDate"><span>Hyderabad (HYD) </span> <span> Mumbai (BOM) </span>  </div>
                                        </div>
                                        </div>                               
                                        </div>
                                        </div>
                                            <p>KLCuk  <br /> <span>Flight  876</span> </p>
                                            <p className="pull-right">Total Trip Time :01h:25m</p>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="going-flight coming">
                                        <h4><img src={to} alt="inbound_flight_icon" /> Inbound Flight </h4>
                                    <div className="list-address">
                                    <div className="payments--Flights">                 
                                    <div className="row no-gutters">
                                    <div className="col-md-2 fligtLogo">
                                        <img src={booking} alt="mobile-airline"/>
                                    </div>
                                    <div Name="col-md-10">
                                    <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div className="flight-timeDate">
                                        <span>06:55 AM Sat ,04 Sep</span><span>08:30 AM Sat , 04 Sep</span>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="flight-timeDate">
                                        <span>Mumbai (BOM) </span> 
                                        <span> Hyderabad (HYD)  </span>  
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <p>KLCuk <br /> <span>Flight 873</span> </p>
                                    <p className="pull-right">Total Trip Time : 01h:35m</p>
                                    </div>
                            </div>
                            </div>
                                    <div className="travler-detail-below">
                            <ul>
                                <li>Traveler Type</li>
                                <li>Traveler</li>
                                <li>Ticket Price</li>
                                <li>Taxes & fees</li>
                                <li>Sub Total</li>
                            </ul>
                            <ul>
                                <li>Adult</li>
                                <li>1</li>
                                <li>$119.00</li>
                                <li>$37.70</li>
                                <li>
                                    $  <span> 156.70</span>
                                </li>
                            </ul>
                            <div>
                            <ul>
                                <li className="full-width">Total Trip Cost : <span className="hightlight-dot">  US $  156.70 </span></li>
                            </ul>
                        </div>
                        </div>
                                    <div className="protection select-paln">                           
                            <div className="total-trip-cost">
                                <h6>Review and book your trip</h6>
                                <i className="fa fa-check left-align" aria-hidden="true"></i> 
                                <p>
                                    Free cancellation within 24 hours of booking! <br />
                                            By selecting to complete this booking I acknowledge that I have read and accept the above Rules & Restrictions,   Terms of Use,    <a href="/privacy-policy" target="_blank">  Privacy Policy</a> and   Government Travel Advice  .
                                </p>
                                <div className="clearfix"></div>
                                <div className="terms-conditions">
                                    <h6>Terms & Conditions</h6>
                                    <p>We at MyFlightEasy.com care about your trust & hence use judicious measures to protect your personal information within our organization. Unfortunately, no data transmission or storage system can be 100% guaranteed and secured, so If you have a reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of your account has been compromised), please call us immediately on our 24/7 customer service cum support team at 1-844-780-0306 or mail at info@myflighteasy.com so we can find the root cause & assure a satisfactory resolution to any concern you might have.  <a href="/terms" target="_blank">Read More</a></p>
                                    <p>*By clicking "BOOK" I agree to the total trip cost of US $ 156.70 and the Terms and Conditions and Privacy Policy.</p>
                                </div>
                            </div>
                            <div className="text-center block-width">
                                <button id="btn_bookNow" className="btn-info-cst btn btn-info cst-btn cst-btn-book " onclick='return ValidateBookNow(false);'>BOOK</button>
                            </div>
                        </div>
                                </aside>
                            </div> */}
            </div>
          </div>
        </div>
        {/* <div className="payment-page">
                    <div className="container"></div>
                        <p style={{ "fontSize": "12px !important", "marginBottom": "14px", "color": "#676464"}}>MyFlightEasy.com is an Online Travel Agency operated by parent company MyFlightEasy.com. By making use of this site, you agree to be bound by the terms & conditions outlined. MyFlightEasy guards your privacy & security. Promo offer(s) are applicable on our agency service fees only, unless otherwise specified. Discounts offered may vary based on service fee charged for a particular ticket. You must use the coupon code at checkout to redeem any offer. Offer’s will be time sensitive & may be revised / discontinued without any prior notice. </p>
                        <p className="text-center">© 2019 MyFlightEasy.com All rights reserved. APT 1D 333 E/46TH STREET, NEW YORK NY-10017, USA</p>
            <div class="overLogo text-center">
                <div className="logosHere"><a href="/"><img src="" alt="trust_pilot_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="amex_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="diners_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="discover_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="master_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="maestro_logo" /></a></div>
                <div className="logosHere"><a href="/"><img src="" alt="visa_logo" /></a></div>

            </div>
                </div>  */}
      </form>
    </div>
  );
}

export default Payment;
