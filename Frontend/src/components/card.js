import React from 'react';
import data from '../userdata';


function Card() {
    return (
        <div>
            {data.map((item) => (
                 <div>
                 <card key={item.id} className='flex justify-start gap-x-96 pt-14 pl-48 border-b-2  '>
                     <div>
                         <h2 className=' text-2xl font-extralight'>{item.time}</h2>
                         <h1 className=' text-2xl font-light'>{item.item}</h1>
                         <h2 className=' text-2xl font-extralight'> {item.duration}</h2>
                     </div>
                     <div className=' '>
                        {item.imageUrl && <img src={item.imageUrl} alt='' className=' h-[130px] w-[250px] pb-4'/>}
                     </div>
 
                 </card>
               
                 
             </div>
            ))}
           

        </div>
    )
}
export default Card;