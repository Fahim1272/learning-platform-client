import React from 'react';
import { CDBFooter, CDBBtn,CDBBox, CDBIcon,} from 'cdbreact';

const Footer = () => {
    return (
        <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://img.icons8.com/ios/344/experiment-trial.png"
              width="30px"
            />
            
          </a>
          <span className="ml-4 h5 mb-0 font-weight-bold">Easy Learn</span>
          <small className="ml-2">&copy; Easy Learn, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex" className="ms-2">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    );
};

export default Footer;