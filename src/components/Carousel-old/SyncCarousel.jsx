

import React, { Component } from "react";
import Slider from "react-slick";



export default class SyncCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }



    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {

        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        const menu = {
            position: "fixed",
            top: "20px",
            right: "0",
            float: "right",
            width: "33%",
        }

        return (
            <div >
                <h2>.</h2>

                <div style={menu}>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={1}
                        arrows={false}
                        dots={false}
                        infinite={false}
                        swipeToSlide={false}
                        //focusOnSelect={true}
                        //pauseOnFocus={true}
                        pauseOnHover={true}
                        pauseOnDotsHover={true}
                        useCSS={false}
                        >
                            <div >
                                <label style={{color: "green"}}>Menu 1</label>
                                <label>Menu 2     </label>
                                <label>Menu 3     </label>
                                <label>Menu 4     </label>
                                <label>Menu 5     </label>
                                <label>Menu 6     </label>
                            </div>
                            <div >
                                <label >Menu 1</label>
                                <label style={{color: "green"}}>Menu 2     </label>
                                <label>Menu 3     </label>
                                <label>Menu 4     </label>
                                <label>Menu 5     </label>
                                <label>Menu 6     </label>
                            </div>
                            <div >
                                <label >Menu 1</label>
                                <label >Menu 2     </label>
                                <label style={{color: "green"}}>Menu 3     </label>
                                <label>Menu 4     </label>
                                <label>Menu 5     </label>
                                <label>Menu 6     </label>
                            </div>
                            <div>
                                <label >Menu 1</label>
                                <label >Menu 2     </label>
                                <label>Menu 3     </label>
                                <label style={{color: "green"}}>Menu 4     </label>
                                <label>Menu 5     </label>
                                <label>Menu 6     </label>
                            </div>
                            <div>
                                <label >Menu 1</label>
                                <label >Menu 2     </label>
                                <label >Menu 3     </label>
                                <label>Menu 4     </label>
                                <label style={{color: "green"}}>Menu 5     </label>
                                <label>Menu 6     </label>
                            </div>
                            <div>
                                <label >Menu 1</label>
                                <label >Menu 2     </label>
                                <label >Menu 3     </label>
                                <label>Menu 4     </label>
                                <label>Menu 5     </label>
                                <label style={{color: "green"}}>Menu 6     </label>
                            </div>
                        </Slider>
                    </div>

                        <h2>.</h2>
                        <Slider
                            asNavFor={this.state.nav2}
                            infinite={true}
                            dots={true}
                            autoplay={true}
                            focusOnSelect={true}
                            pauseOnFocus={true}
                            pauseOnHover={true}
                            pauseOnDotsHover={true}
                            ref={slider => (this.slider1 = slider)}
                            >
                                <div >
                                    <h3>Slide 1</h3>
                                </div>
                                <div>
                                    <h3>Slide 2</h3>
                                </div>
                                <div>
                                    <h3>Slide 3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>

                    </div>
                );
            }
        }
