// write your custom hook here to control your checkout form
import React, { useState } from "react";

export default function()
{
  const [ showSuccessMessage, setShowSuccessMessage ] = useState( false );
  const [ values            , setValues             ] = useState( { firstName : "", lastName : "", address : "", city : "", state : "", zip : ""  } );

  const handleChanges = e => setValues( { ...values, [ e.target.name ] : e.target.value } );

  return [ showSuccessMessage, setShowSuccessMessage, values, handleChanges ];
}