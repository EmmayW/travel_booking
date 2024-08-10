import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

export default function Services() {
  return (
    <>
    <div className='cards'>
      <h1>About us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/user.png'
              text='Anoop Krishnan Ramachandran'
              label='Developer'
              path='/services'
            />
            <CardItem
              src='images/user.png'
              text='XXXXX'
              label='Developer'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/user.png'
              text='XXXX'
              label='Developer'
              path='/services'
            />
            <CardItem
              src='images/user.png'
              text='XXXX'
              label='Developer'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}