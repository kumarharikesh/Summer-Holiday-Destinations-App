import React from "react";
import reportWebVitals from './reportWebVitals';
import "./styles.css";

const summerMonth = {
  March: [
    { name: "1. Greenland – More Of A White Land", rating: "4.7/5⭐", link: "https://traveltriangle.com/blog/places-to-visit-in-greenland/" },
    { name: "2. Cappadocia – The Land Of Hot-Air Balloons", rating: "4/5⭐", link: "https://traveltriangle.com/blog/cappadocia-nightlife/" },
    { name: "3. Maafushi Island – Can’t Get Enough Of It", rating: "3.5/5⭐", link: "https://traveltriangle.com/blog/things-to-do-on-maafushi-island/" },
  ],

  April: [
    { name: "1. Marrakech – Admire Bucolic Nature", rating: "4.3/5⭐", link: "https://traveltriangle.com/blog/places-to-visit-in-marrakech/" },
    { name: "2. Tahiti – A Sweeter Place", rating: "4/5⭐", link: "https://traveltriangle.com/blog/maldives-or-bora-bora-for-honeymoon/" },
    { name: "3. Pokhara – Get The Views Of Stunning Mountains", rating: "3.5/5⭐", link: "https://traveltriangle.com/blog/places-to-visit-in-pokhara/" },
    { name: "3. Colorado – A Summer Paradise", rating: "3.5/5⭐", link: "https://traveltriangle.com/blog/places-to-visit-in-pokhara/" },
  ],

  May: [
    { name: "1. Prague – Hub Of Baroque Buildings", rating: "4.8/5⭐", link: "https://traveltriangle.com/blog/things-to-do-in-prague/" },
    { name: "2. Cape Town – Get Bird-Eye View From Cable Car", rating: "3.5/5⭐", link: "https://traveltriangle.com/blog/day-trips-from-cape-town/" },
    { name: "3. New Zealand – Scenic Landscapes For Nature Lovers", rating: "3.2/5⭐", link: "https://traveltriangle.com/blog/new-zealand-water-sports/" },
  ],

  June: [
    { name: "1. Bali – Honeymooner’s Paradise", rating: "4.5/5⭐", link: "https://traveltriangle.com/blog/islands-around-bali/" },
    { name: "2. Andaman Islands – Witness Paradise On Earth", rating: "4.3/5⭐", link: "https://traveltriangle.com/blog/places-to-visit-in-andaman/" },
    { name: "3. Kerala – Ride In The Houseboat On Backwaters", rating: "4.1/5⭐", link: "" },
    { name: "4. Teton County – Soothe Your Eyes With Greenery", rating: "4/5⭐", link: "https://traveltriangle.com/blog/most-romantic-mountain-getaways/" },
  ],

  July: [
    { name: "1. Barcelona – All About Games & Nightlife", rating: "4.4/5⭐", link: "https://traveltriangle.com/blog/spanish-travel-words-and-phrases/" },
    { name: "2. Hamburg – Watch Lakes Dotted With Boats", rating: "4.3/5⭐", link: "https://traveltriangle.com/blog/best-places-to-visit-in-july-in-the-world/" },
    { name: "Whistler – Traverse The Hiking Trails", rating: "3.5/5⭐", link: "https://traveltriangle.com/blog/most-romantic-mountain-getaways/" },
  ]
}

const months = ["March", "April", "May", "June", "July"]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color:"#E5E7EB"}
    this.clickHandler = this.clickHandler.bind(this)
  }

  month1 = "March";

  clickHandler = (month) => {

    this.month1 = month;
    this.setState({color : "rgb(201, 255, 237)"});

    for(let mon of months){
      if(mon===month){
        document.getElementById(mon).style.backgroundColor = "rgb(201, 255, 237)";
      }else{
        document.getElementById(mon).style.backgroundColor = "#E5E7EB";
      }
    }

  };
  render() {
    return (
      <div className="App">
        <h1 className="title">Best Summer Holiday Destinations In The World 🦕</h1>
        <p className="description">
          Have a look on my list of awesome places to enjoy quality time.
        </p>
  
        <div>
          {Object.keys(summerMonth).map((month) => (
            <button
              onClick={() => this.clickHandler(month)}
              className="month"
              id = {month}
            >
              {month}
            </button>
          ))}
        </div>
  
        <hr style={{width:"70%"}}/>
  
        <ul className="flexbox"> 
          {summerMonth[this.month1].map((month) => (
            <div style={{margin:"20px"}}>
              <li
                key={month.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  width: "100%",
                  margin: "0rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "rgb(237, 255, 255)"
                }}
              >
                <a rel="noreferrer" href={month.link} target="_blank" style={{ fontSize: "larger" }}> {month.name} </a>
                <div style={{ fontSize: "smaller" }}> {month.rating} </div>
              </li>
            </div>
          ))}
        </ul >
  
      </div>
    );
  }
}
