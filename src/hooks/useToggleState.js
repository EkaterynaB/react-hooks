import { useState } from 'react';

export default (initialState) => {
  const [isEditing, setState] = useState(initialState);
  
  const toggle = () => setState(!isEditing);

  return [isEditing, toggle];
}
