import React from 'react';


type SliderProps = {
  Text: string;
};



export const SliderOne : React.FC<SliderProps> = ({Text}) => {
    
    return (
        <>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
        </>
    );
  };