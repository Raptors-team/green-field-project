import './homePage.css';
import React from "react"
import { Link } from 'react-router-dom';
import MenuItems from "../../components/menuItem/menuItem"
import NavAndSearch from "../../components/navBar/navBar"
import Particles from 'react-particles-js';
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initailItems: [{ city: "rome", link: "https://cdn.citywonders.com/media/17764/rome-city.jpg?anchor=center&mode=crop&width=1200&height=600" }, { city: "Barcelona", link: "https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/Zrlvh0hw-1380x690.jpeg" }, { city: "losAngeles", link: "https://i.ytimg.com/vi/tvDH4JM_gME/maxresdefault.jpg" }, { city: 'paris', link: "https://cdn.pubble.io/resources/web/pubble/img/city_paris.png" }, { city: "singapore", link: 'https://i.pinimg.com/originals/51/9b/f5/519bf5f2b0ab2cbe84797f8b309baa16.jpg' }, { city: "kualalumpur", link: 'https://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/pagePropertiesOgImage/kuala-lumpur.jpg.jpg' }],
    }
  }
  render() {
    const { currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick } = this.props
    return (
      <div>
        {/* <Particles className="particles"
          params={{
            particles: {
              line_linked: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              },
            }
          }}
          style={{
            width: '100%',
            backgroundColor: "#000000"
          }}
        /> */}
        <NavAndSearch handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
        {/* <div className='directory-menu' > */}
        <div className="cards-list">
          {
            this.state.initailItems.map((item, id) => (

              <MenuItems item={item} key={id} currentUser={currentUser} handleSeachButtonClick={handleSeachButtonClick} searchValue={searchValue} />


            ))
          }
        </div>
        {/* </div>  */}
      </div>
    );
  }
}
export default HomePage;
