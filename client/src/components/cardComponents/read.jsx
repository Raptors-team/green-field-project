// import React from 'react';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import { Button } from '@material-ui/core';

// var rate = 7.7
// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             maxWidth: 700,
//             maxHeight: 340,
//         },
//         media: {
//             width: '40%',
//             height: '30%',
//             paddingTop: '20.25%', // 16:9
//         },
//         expand: {
//             transform: 'rotate(0deg)',
//             marginLeft: 'auto',
//             transition: theme.transitions.create('transform', {
//                 duration: theme.transitions.duration.shortest,
//             }),
//         },
//         expandOpen: {
//             transform: 'rotate(180deg)',
//         },
//         avatar: {
//             backgroundColor: red[500],
//         },
//     }),
// );

// export default function RecipeReviewCard() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <Card className={classes.root}>
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
//                         className={classes.media}
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
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './card.css';
import img from "./Singapore.png";
import RateReviewIcon from '@material-ui/icons/RateReview';
import StarRateIcon from '@material-ui/icons/StarRate';
import Rating from '@material-ui/lab/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} id="body">
    <div className="first_img">
    <div  >
      < img src={img} className="img img_abs"/>
      {/* <FavoriteBorderIcon className="fav_rel" /> */}
      </div>
    </div>
    <div className ="center">
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <div>
          <Typography component="h5" variant="h5">
          Seneca Lake (and vicinity)
          </Typography>
          </div>
          <div className="center-second">
          <Typography variant="subtitle1" color="textSecondary">
          <div className="citysize">
          New York, United States of America
          </div>
          </Typography>
          </div>
        </CardContent>
        <div className="dollers">
        <Typography  >
        <div className="facility">
        swimming pool,Airport shuttle,Tea/Coffee maker
        </div>
          </Typography>
           $ 19.99
          
          </div>
        </div>
        </div>
        <div className='third_component'>
        <div className="thirdcom_firstone">
        <Typography component="h6" variant="h6">
          very good
          </Typography>
          </div>
          <div className="third_component_secondline">
          <Rating />
          </div>
          <div className="third_component_thirdline">
          <Typography component="h6" variant="h6">
           total reviews
          </Typography>
          <div style={{padding:"6px"}}>
          <RateReviewIcon className='ratereview'/>
          </div>
          </div>
        </div>
        

       
        {/* <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
      
     
    </Card>
  );
}