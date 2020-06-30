import React from 'react';
import tradePic from '../assets/tradepic.jpg';
import emailP from '../assets/emailthumbnail.png';
import ninja from '../assets/ninja.jpg';

const tileData = [
       {
        img: tradePic,
        title: 'Algorithmic Trading',
        details: 'Live Trading in NYSE',
           reference:'/algotrade'
       },
       {
        img: emailP,
        title: 'Email App',
        details: 'Java application that generates an email and password for a company employee based on credentials, department and company name.',
           reference:'/emailapp'
       },
        {
         img: ninja,
         title:'The Ninja Report',
         details:'sssshhhhhh',
            reference: '/ninjareport'
        }
];

export default tileData;