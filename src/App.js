import { useState } from "react";
import './App.css';

function App() {
  const [formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotification:""
  })

  function changeHandler(event) {
    const {name , value , checked , type} = event.target;
    setFormData( (prev) => ({...prev , [name]:type ==="checkbox" ? checked : value}));
  }
  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of form data");
    console.log(formData);
  }

  return(
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} className="">
        <label htmlFor="firstName">first name</label>
        <br/>
        <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Shashank"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline w-[500px]"
        />
        <br/>
        <label htmlFor="lastName">last name</label>
        <br/>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Gulati"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        <label htmlFor="email">email address</label>
        <br/>
        <input
        type="text"
        name="email"
        id="email"
        placeholder="shashankgulati2405@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        
        <label htmlFor="country">Country</label>
        <br />

        <select
         name="country"
         id="country"
         value={formData.country}
         onChange={changeHandler}
         className="outline"
        >
         <option value="india">India</option>
         <option value="usa">USA</option>
         <option value="uk">UK</option>
         <option value="uae">UAE</option>
       </select>
       <br/>
        <label htmlFor="streetAddress">street Address</label>
        <br/>
        <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="WZD 59A"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        
        <label htmlFor="city">city</label>
        <br/>
        <input
        type="text"
        name="city"
        id="city"
        placeholder="New Delhi"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        
        <label htmlFor="state">state</label>
        <br/>
        <input
        type="text"
        name="state"
        id="state"
        placeholder="Delhi"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        
        <label htmlFor="postalCode">postal Code</label>
        <br/>
        <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="110018"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        />
        <br/>
        <br/>
        <fieldset>
           <legend>By Email</legend>
           <div className="flex">
             <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>
        </fieldset>
        <br/>
        <br/>

        <fieldset>
           <legend>Push Notification</legend>
           <p>These are delivered as SMS to your mobile phone</p>
            <br/>
           <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
           <label htmlFor="pushEverything">Everything</label>
            <br/>
           <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
           <label htmlFor="pushEmail">Same as Email</label>
            <br/>
           <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler} />
           <label htmlFor="pushNothing">No Push Notification</label>
         </fieldset>
       <br />
       <button
       className="bg-blue-500 text-white font-bold py-2 px-4"
       >Save</button>
      </form>
    </div>
  );
}

export default App;
