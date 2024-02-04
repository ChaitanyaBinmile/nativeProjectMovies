import React from 'react';
import {useSelector} from 'react-redux';
import { PrivateNavigation, PublicNavigation } from './navigation';


export default function RouteHandler() {
      const data = useSelector((user) => user.user.user);
  return (
    data ? <PrivateNavigation /> : <PublicNavigation />
  )
}