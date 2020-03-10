import React from 'react';

const MyContext = React.createContext( "default" );

MyContext.displayName = 'MyDisplayName';


export default MyContext;