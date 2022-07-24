import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: '#243747',  width: '100%'}}>
      <CDBBox  display="flex" flex="column" className="mx-auto py-3" style={{ width: '20%' }} >
        <CDBBox display="flex" justifyContent="center" className="flex-wrap" >
          <CDBBox display= "flex" flex="column" alignItems='center'>
            <h4 href="/" className="d-flex align-items-center p-0 text-light">
              Movie Search Engine
            </h4>
            <p className="my-3" style={{ width: '250px', color: 'white' }}>
              lorem
              
            </p>
            <CDBBox display="flex" className="mt-2">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-2" style={{ color:'white'}}>&copy; Movie Search Engine, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};