import React from 'react'
import { ClockIcon, Ethereum, ViewIcon } from '../../assets/svg'
import { Card as StyledCard } from './StyledCard'
import image from '../../assets/img/image-avatar.png'

export default function Card() {
  return (
    <StyledCard>
       <div className='card-img'>
         <div className='card-img-visible'>
           <div className='card-icon-visible'>
              <ViewIcon/>
           </div>
         </div>  
       </div>
       <div className='card-text'>
           <h3>Equilibrium #3429</h3>
           <p>Our Equilibrium collection promotes balance and calm</p>
       </div>
       <div className='Card-info-row'>
         <div className='Card-info-box-left'>
              <Ethereum/>
             <span>0.041 Eth</span>
         </div>
         <div className='Card-info-box-right'>
                <ClockIcon/>
               <span>3 days left</span>
        </div>
       </div>
       
       <div className='Card-footer'>
           <div className='avatar'>
              <img src={image} alt='avata'></img>
           </div>
           <p>
               Creation of <span>Jules Wyvern</span>
           </p>
       </div>

    </StyledCard>
  )
}
