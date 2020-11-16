import logo from './logo.svg';
import './App.css';
import React from "react"
import HotelViewCard from './components/cards/read'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hotels: [], //x is country code
      country: '',
      destId: '', //city-country-destid shared between all hotels
      initailItems: [{ city: 'New York' }],
      facilities: []
    }
  }

  setCountry(header) {
    var cont = header.split(',');
    cont = cont[0];
    this.setState({
      cointry: cont
    })
  }

  // generateDesc(items) {

  //   items.forEach((item, i) => {
  //     this.state.facilities.push[item]
  //   }).then(() => {

  //   })

  //   var random5 = Math.random
  // }

  //header:   //jordan:   "header":"South Jordan, Utah, United States of America"
  // Egypt: only Egypt, so split on comma and take only [0] 
  //Lebanon: Lebanon Station, Lebanon, Tennessee, United States of America
  //facilities, randomly  6, 
  componentDidMount() {

    // this.state.initailItems.map(item => {
    //   fetch(`https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${item.city}`, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-key": "bb0ddce03amsh59662679f4f2b5bp17dea1jsn6c36a95e7593",
    //       "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //     }
    //   })
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then((data) => {
    //       fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${data.suggestions[0].entities[0].destinationId}&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE`, {
    //         "method": "GET",
    //         "headers": {
    //           "x-rapidapi-key": "bb0ddce03amsh59662679f4f2b5bp17dea1jsn6c36a95e7593",
    //           "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //         }
    //       })
    //         .then(response => {
    //           return response.json()
    //         })
    //         .then(data => {
    //           console.log(data.data.body.searchResults.results[0].address.countryCode)
    //           console.log(data)
    //           this.setState({
    //             destId: data.data.body.query.destination.id
    //           })
    //         const facilities = data.data.body.filters.facilitis.items;
    //            this.generateDesc(facilities)
    //           // this.setCountry(data.data.body.headed) //inside this do the state city and country
    //           this.setState({ hotels: data.data.body.searchResults.results })
    //           //search
    //           //    let x = data.data.body.searchResults.results[0].address.countryCode   /x

    //           //   this.setState({ [x]: data.data.body.searchResults.results })          /x      
    //           console.log(data.data.body.searchResults.results)
    //         })
    //         .then(data => console.log(this.state))
    //         .catch(err => {
    //           console.error(err);
    //         });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // })

  }
  render() {
    return (
      <div className="App">
        {/* {this.state.hotels.map((hotel, index) => (
          <HotelViewCard key={index} hotel={hotel} destId={this.state.destId} country={this.state.country} />
        ))} */}
        <SignInAndSignUpPage />
      </div>
    );
  }
}

export default App;
