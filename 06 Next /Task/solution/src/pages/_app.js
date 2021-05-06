import React from 'react';

export default function _App(props) {
  const { Component, pageProps } = props;

  return (
    <Component {...pageProps} />
  );
}
