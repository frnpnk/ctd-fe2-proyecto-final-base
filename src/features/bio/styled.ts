import { $CombinedState } from '@reduxjs/toolkit';
import React from 'react';
import styled, { css } from 'styled-components';


export interface IProps{
    IsActive?: boolean;
    onClick?: ()=>void;
    children: React.ReactNode;
    }


export const activeButton = styled.div<IProps>`  
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;
    background-color: #fdd835;
    color: whitesmoke;
    text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,-2px 0px 0 #000000, 0px -2px 0 #000000;
  
    ${props => props.IsActive && css`
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;
    `}
    
    `;
