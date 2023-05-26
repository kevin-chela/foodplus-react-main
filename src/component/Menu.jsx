//React
import React, { useState } from 'react';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,

} from "mdb-react-ui-kit";

//Context

import { useGlobalContext } from '../context/context'


const Menu = ({ items }) => {

  const { 
    remove,
    increase, 
    decrease, 
    toggleAmount, 
    cart, 
    total, 
    amount, 
    addItem } = useGlobalContext()

  //Input
  const [quantity, setQuantity] = useState(1)

  const handleRowClick = (menuItem) => {

    const number = amount + 1;

    const Item = {

      id: number,
      title: menuItem.title,
      price: menuItem.price,
      description: menuItem.desc,
      amount: 1,
      img: menuItem.img

   }

   addItem(Item);

  }


  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: "space-around"}}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          
          <MDBCard className="mb-3 shadow-lg" key={id}  style={{width: '500px', height: '45%', marginLeft: '20px'}}>
          <MDBCardBody>
            <MDBRow>
            <MDBCol lg="5">
            <MDBCardImage
              src={img} alt={title}
              fluid className="rounded-3" 
              style={{height: '150px'}}
             />
            </MDBCol>
            <MDBCol lg="7">
            <div className="d-flex justify-content-between">
            <MDBTypography tag="h5" className="m-0 text-lg font-bold  leading-none ">
              {title}
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-0 text-info">
              $ {price} USD
            </MDBTypography>
            </div>
            
            <div>
            <MDBTypography className="small mt-2">{desc}</MDBTypography>
            </div>

            <div className="d-flex justify-content-around mt-4">
            <MDBInput wrapperClass='mb-4' id='formControlLg' type='number' size="lg"
              onkeydown="handleArrowKeys(event)"
                style={{width: 70}}
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
            />

            <MDBBtn tag="h5" 
            className="mb-0 bg-info sm"
             style={{height: '50px'}}
             onClick={() => { handleRowClick(menuItem) }}
            >
              <p style={{lineHeight: '30px'}}>Add To Cart</p> 
            </MDBBtn>
            </div>

          </MDBCol>
          </MDBRow>
            
        </MDBCardBody>
        </MDBCard>
          
        );
      })}
    </div>
  );
};

export default Menu;
