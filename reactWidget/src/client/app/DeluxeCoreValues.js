import React from 'react';
import Slider from 'react-slick';

export default class DeluxeCoreValues extends React.Component {

    render() {
        var settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div className='container'>
                <h1> Deluxe Core Values</h1>
                <Slider {...settings}>
                    <div><img src="/img/Commitments.png" alt=""/></div>
                    <div><img src="/img/Curious.png" alt=""/></div>
                    <div><img src="/img/Diversity.png" alt=""/></div>
                    <div><img src="/img/Excellence.png" alt=""/></div>
                    <div><img src="/img/Open.png" alt=""/></div>
                    <div><img src="/img/Teams.png" alt=""/></div>
                </Slider>
            </div>
        );
    }

};
