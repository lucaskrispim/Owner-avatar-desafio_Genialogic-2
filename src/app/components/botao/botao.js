'use client';
import React from 'react';
import './botao.css'

const BotaoVermelho = (props) => {
  return (
    <button
      className="botao"

      style={{
        backgroundColor: props?.backgroundColor? props?.backgroundColor:'red',
        margin:'2px',
      }}
      onClick={props?.onClick}
    >
     { props?.actionTitle}
    </button>
  );
};

export default BotaoVermelho;