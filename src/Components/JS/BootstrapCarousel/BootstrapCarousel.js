import React from 'react';
import { Carousel } from "react-bootstrap"
import '../../Styles/BootstrapCarousel.css';
import event1 from '../../JS/BootstrapCarousel/images/event1.jpg';
import event2 from '../../JS/BootstrapCarousel/images/event2.jpg';
import event3 from '../../JS/BootstrapCarousel/images/event3.jpg';
import event4 from '../../JS/BootstrapCarousel/images/event4.jpg';


export default function BootstrapCarousel() {
  return (
    <div className='container'>
      <Carousel>
        <Carousel.Item>
          <a href="https://www.facebook.com/photo/?fbid=459332192554800&set=a.235000298321325">
            <img 
              className='carouselImage'
              src={event1}
              alt="No Image"
            />
          </a>

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.facebook.com/photo/?fbid=428503015637718&set=a.235000298321325">
            <img
              className='carouselImage'
              src={event2}
              alt="No Image Found"
            />
          </a>

          <Carousel.Caption >

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.facebook.com/photo/?fbid=428503012304385&set=a.235000298321325">
            <img
              className='carouselImage'
              src={event3}
              alt="No Image Found"

            />
          </a>


          <Carousel.Caption>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <a href="https://www.facebook.com/photo/?fbid=428503008971052&set=a.235000298321325">
            <img
              className='carouselImage'
              src={event4}
              alt="No Image Found"
              to=""
            />
          </a>


          <Carousel.Caption>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    </div>
  )
}


