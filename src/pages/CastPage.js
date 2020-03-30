import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSession } from '../services/User';


const CastPage = () => {
  const { user } = useSession();
  const { history } = useHistory();
  
  if (!user.isAlive) {
    history.push("/wait");
    
  }

  return (<div>
    <ul>
    {
    }
    </ul>
    </div>);
}

export default CastPage;
