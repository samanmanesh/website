import React from 'react'
import styled from 'styled-components';

const AlertBoxWrapper = styled.div`
  border-radius: 0.4rem;
  background: ${props => props.error ? 'red' : 'green'};
  width: 20ch;
  height: 3rem;
  position: fixed;
  top: 5rem;
  left: 2rem;
`;
export default function AlertBox({alert}) {

    if (!alert) return  <></>;

    return (
        <AlertBoxWrapper error={alert.error}>
            {alert.message}
        </AlertBoxWrapper>
    )
}
