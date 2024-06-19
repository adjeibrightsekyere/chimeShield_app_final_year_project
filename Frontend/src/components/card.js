import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Card() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/getData')
        .then(response => {
            console.log('API Response:',response.data);
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data', error);
        });
    }, []);


    return (
        <div>
            {Array.isArray(data) ? data.map((item) => (
                 <div key={item.id}>
                 <div  className=' flex justify-center gap-x-5 md:gap-x-96 pt-14  border-b-2  '>
                     <div>
                         <h2 className=' text-1xl font-extralight'>{item.date}</h2>
                         <h2 className=' text-1xl font-extralight'>{item.time}</h2>
                         <h1 className=' text-1xl font-light'>{item.item}</h1>
                         <h2 className=' text-1xl font-extralight'> {item.duration}</h2>
                     </div>
                     <div className=' '>
                        {item.imageUrl && <img src={`/${item.imageUrl}`} alt='' className=' h-24 w-44 md:h-32 md:w-60 pb-4'/>}
                     </div>
 
                 </div>
               
                 
             </div>
            )) : (
                <p>No data is available</p>
            )
            
            }
           

        </div>
    )
}
export default Card;