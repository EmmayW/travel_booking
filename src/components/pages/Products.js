import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

export default function Products() {
  return (
    <>
    <div className='cards'>
      <h1>Most popular Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Ottawa Boat Cruise - Pauls Boat Line'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='3-Hour 1000 Islands Cruise from Gananoque with views of Boldt Castle'
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1>Other locations</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Intimate West Coast Whale Watching from Vancouver'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Niagara Falls Day Tour From Toronto with Skip-the-Line Boat Ride'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Full-Day Niagara-On-The-Lake Guided Wine and Charcuterie Tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Half-Day Whale Watching Adventure from Victoria'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Banff, Lake Louise & Moraine Lake Tour from Calgary, Canmore'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Sunset Whale Watching Adventure from Vancouver'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Niagara Falls CANADA Helicopter Tour'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Peggys Cove and Lunenburg Tour (small group)'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}