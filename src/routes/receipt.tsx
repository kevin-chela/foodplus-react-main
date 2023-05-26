//React
import React, { useEffect, useState } from 'react';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,

  //Modal

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

  } from "mdb-react-ui-kit";

import { Footer } from '../components/footer'
import { Header } from '../components/header'

import { Page, Document} from 'react-pdf';

//Context

import { useGlobalContext } from '../context/context'



export default function Receipt() {
 
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Header />
      <Document>
      <Page>
      
      </Page>
    </Document>
    </div>
  )
  
}

