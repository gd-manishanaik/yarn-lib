import React from 'react'
import styled, { withTheme } from 'styled-components';
import { parseDate } from 'lib/src/fe/common';

// importing date from common
console.log(parseDate(new Date().toISOString()));
// parseDate

const StyledTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.openSans};
  font-size: ${(props) => props.theme.fonts.size.headline5};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.miaPrimary};
  text-align: center;
`;

const StyledP = styled.p`
  font-family: ${(props) => props.theme.fonts.openSans};
  font-size: ${(props) => props.theme.fonts.size.subtitle1};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  text-align: center;
  width: 25%;
`;

const Login = (props) => {
    return (
        <div>sdfsa</div>
    )
}
  
  export default Login;
