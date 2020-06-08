import React from "react";
import { render, fireEvent, getByTestId, findAllByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import ReactDOM from "react-dom";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows
test( "no crashing", () => 
{
  const x = document.createElement( "div" );
  ReactDOM.render( <App />, x );
  ReactDOM.unmountComponentAtNode( x );
} );

test( "test header", () => 
{
  const { getByText } = render( <CheckoutForm /> );
  expect( getByText( /checkout form/i ) ).toBeInTheDocument();
} );