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
                <h3> Deluxe Core Values</h3>
                <Slider {...settings}>
                    <div><img src="/img/ankit.png" alt=""/></div>
                    <div><img src="/img/Vinita.png" alt=""/></div>
                    <div><img src="/img/Reeni.png" alt=""/></div>
                    <div><img src="/img/Priti.png" alt=""/></div>
                    <div><img src="/img/Yang.png" alt=""/></div>
                    <div><img src="/img/Uma.png" alt=""/></div>
                </Slider>
            </div>
        );
    }

};
