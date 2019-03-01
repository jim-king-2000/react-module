import React from 'react';
import Router from 'next/router';
export const B = () => React.createElement("button", {
  onClick: () => Router.push('/')
}, "click");