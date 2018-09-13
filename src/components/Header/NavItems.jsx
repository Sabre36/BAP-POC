import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/site-styles/components/headerLinksStyle.jsx";

const listStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333333"
};
const listItemsStyle = {
  float: "left"
};
const buttonStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    fontSize: "22px",
    textDecoration: "none"
};




class NavItems extends React.Component {

    //function NavItems({ ...props }) {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {index: 0, name: 'Sign in', url: '/login-page', active: true},
                {index: 1, name: 'Facilities', url: '/facilities', active: false}
            ],
        };
    }

    render() {
        //const { classes } = props;
        return (
            // <ul>
            //   {this.state.data.map(d => <li key={d.name}>{d.name}</li>)}
            // </ul>
            <List style={listStyle}>
                {this.state.data.map(d =>
                <ListItem style={listItemsStyle}>
                    <a
                        href={d.url}
                        color="info"
                        style={buttonStyle}
                        key={d.name}>
                        {d.name}
                    </a>
                </ListItem>)}
            </List>
        );
    }
}

export default withStyles(headerLinksStyle)(NavItems);



// function HeaderLinks3({ ...props }) {
//   const { classes } = props;
//   return (
//     <List className={classes.list}>
//
//       <ListItem className={classes.listItem}>
//         <Tooltip
//           id="search-site"
//           title="Search this site"
//           placement={window.innerWidth > 459 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             href="#"
//             color="transparent"
//             className={classes.navLink}
//           >
//           <SearchIcon/>
//           </Button>
//         </Tooltip>
//       </ListItem>
//
//       <ListItem className={classes.listItem} >
//           <Button
//               href="/"
//               color="transparent"
//               className={classes.navLink}
//               > Who we are
//           </Button>
//       </ListItem>
//
//       <ListItem className={classes.listItem}>
//         <CustomDropdown
//           noLiPadding
//           buttonText="Marketplace"
//           buttonProps={{
//             className: classes.navLink,
//             color: "transparent"
//           }}
//           dropdownList={[
//             <Link to="/" className={classes.dropdownLink}>Marketplace</Link>,
//             <a href="#" className={classes.dropdownLink}>Consumers</a>
//           ]}
//         />
//       </ListItem>
//
//       <ListItem className={classes.listItem}>
//         <CustomDropdown
//             noLiPadding
//             buttonText="Certification"
//             buttonProps={{
//                 className: classes.navLinkActive,
//                 color: "transparent"
//             }}
//             dropdownList={[
//                 <Link to="/" className={classes.dropdownLink}>Certification</Link>,
//                 <a href="./facilities" className={classes.dropdownLink}>Facilities</a>
//             ]}
//         />
//     </ListItem>
//
//
//
//         <ListItem className={classes.listItem}>
//             <Button
//                 href="./ProgramIntegrity"
//                 color="transparent"
//                 className={classes.navLink}
//             > Program Integrity
//             </Button>
//         </ListItem>
//
//
//       {/* <ListItem className={classes.listItem}>
//         <Button
//           href="#"
//           color="transparent"
//           className={classes.navLink}
//         > Blog
//         </Button>
//       </ListItem> */}
//
//
//       <ListItem className={classes.listItem}>
//         <Button
//           href="./login-page"
//           color="transparent"
//           className={classes.navLink}
//         >
//           <Person className={classes.icons}/> Sign In
//         </Button>
//       </ListItem>
//
//       <ListItem className={classes.listItem}>
//         <CustomDropdown
//           noLiPadding
//           buttonText="EN"
//           buttonProps={{
//             className: classes.navLink,
//             color: "transparent"
//           }}
//           buttonIcon={SpeechIcon}
//
//           dropdownList={[
//             <Link to="/" className={classes.dropdownLink}>EN English</Link>,
//             <a href="#" className={classes.dropdownLink}>ES Español</a>,
//             <a href="#" className={classes.dropdownLink}>FR Francais</a>
//           ]}
//         />
//       </ListItem>
//
//     </List>
//   );
// }
//
// export default withStyles(headerLinksStyle)(HeaderLinks3);
