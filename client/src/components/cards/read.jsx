import React, { Component } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 700,
            maxHeight: 340,
        },
        media: {
            width: '40%',
            height: '100%',
            paddingTop: '20.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);



class HotelViewCard extends Component {
    constructor(props) {
        super()
        this.state = {
            rating: props.hotel.guestReviews.rating,
            name: props.hotel.name,
            price: props.hotel.ratePlan.price.exactCurrent,
            thumbnailUrl: props.hotel.thumbnailUrl,
            // landmarks: {
            //     label: props.hotel.landmarks[0].label,
            //     distance: props.hotel.landmarks[0].distance
            // },
            // badge: props.hotel.guestReviews.rating.badge,
            // id: props.hotel.id,
            // destId: props.destId,
            // countryN: props.country,
        }
    }


    render() {
        return (
            <Card style={{
                maxWidth: '700px',
                maxHeight: '340px',
            }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.state.name}  //hotel name
                    subheader={this.state.countryN}//hotel city-country
                />
                <div style={{ width: '100%' }}>
                    <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">

                        <CardMedia
                            style={{
                                width: '40%',
                                height: '100%',
                                paddingTop: '20.25%',
                            }}
                            image={this.state.thumbnailUrl}
                            title={this.state.name}
                        />
                        <CardContent><IconButton aria-label="add to favorites">
                            <label>45</label>  <AttachMoneyIcon />
                        </IconButton>
                            <Button variant="contained" color="secondary" style={{ height: '30px', width: '150px' }}>
                                Book Now
                    </Button>
                            <Button variant="contained" style={{ height: '30px', width: '150px', backgroundColor: '#03a9f4', color: 'white' }}>
                                Show on map
                    </Button>
                        </CardContent>
                    </Box>
                </div>
                <CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                        <Rating name="half-rating-read" defaultValue={this.state.rating / 2} precision={0.5} readOnly />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Here we will put all the facilites, Gym, pool, events
        </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default HotelViewCard























// export default function RecipeReviewCard() {





//     return (
//         <Card style={{
//             maxWidth: '700px',
//             maxHeight: '340px',
//         }}>
//             <CardHeader

//                 action={
//                     <IconButton aria-label="settings">
//                         <MoreVertIcon />
//                     </IconButton>
//                 }
//                 title="Best Days Hotel"  //hotel name
//                 subheader="Dortmond, Germany"//hotel city-country
//             />

//             <div style={{ width: '100%' }}>
//                 <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">

//                     <CardMedia

//                         style={{
//                             width: '40%',
//                             height: '100%',
//                             paddingTop: '20.25%',
//                         }}
//                         image="https://i.pinimg.com/originals/d1/1a/49/d11a493133d0d9087ab0b588491ee4f6.jpg"
//                         title="Paella dish"
//                     />
//                     <CardContent><IconButton aria-label="add to favorites">
//                         <label>45</label>  <AttachMoneyIcon />
//                     </IconButton>
//                         <Button variant="contained" color="secondary" style={{ height: '30px', width: '150px' }}>
//                             Book Now
//                     </Button>
//                         <Button variant="contained" style={{ height: '30px', width: '150px', backgroundColor: '#03a9f4', color: 'white' }}>
//                             Show on map
//                     </Button>
//                     </CardContent>
//                 </Box>

//             </div>
//             <CardContent>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteBorderIcon />
//                 </IconButton>
//                 <IconButton>
//                     <Rating name="half-rating-read" defaultValue={rate / 2} precision={0.5} readOnly />
//                 </IconButton>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Here we will put all the facilites, Gym, pool, events
//         </Typography>
//             </CardContent>


//         </Card>
//     );
// }


