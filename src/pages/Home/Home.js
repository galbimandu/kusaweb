import React from 'react'
import { withRouter } from "react-router-dom";
import { supabase } from '../../supabaseClient'

async function getMajors() {
  const { data, error } = await supabase
  .from('majors')
  .select();
  if (error) {
    throw error;
  }
  return data;
}


const Home = async () => {
  const majors = await getMajors();
  // this works: console.log(JSON.stringify(data));
  // idk why <pre>{JSON.stringify(majors)}</pre> doesn't work
  return (
  <div> 
        <pre>{JSON.stringify(majors)}</pre>
  </div>
  )
}

export default withRouter(Home);