import React from 'react';
import { ButtonList, ButtonItem, Button } from './Feedback.styled';
import PropTypes from 'prop-types';

const Feedback = ({ options, onClick }) => {
     return (
      <ButtonList>
        {options.map((option, index) =>{
          const label = option.charAt(0).toUpperCase() + option.slice(1);


          return (
              <ButtonItem key={index}>
                  <Button onClick={() => onClick(option)} type="button">
                    {label}
                  </Button>
              </ButtonItem>
          );
        } )}
      </ButtonList>
   
    )
  };


export default Feedback;

Feedback.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string)
};