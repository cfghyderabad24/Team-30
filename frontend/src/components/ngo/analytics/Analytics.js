// src/Analytics.js
import React, { useEffect } from 'react';
import './Analytics.css'

const Analytics = () => {
  useEffect(() => {
    const containerDiv = document.getElementById('tableauContainer');
    containerDiv.innerHTML = `

      <div class='tableauPlaceholder' id='viz1719079596121' style='position: relative; width: 100%; height: 100%;'>
        <noscript>
          <a href='#'>
            <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/CF/CFG_17190773684660/Dashboard1/1_rss.png' style='border: none; width: 100%; height: 100%; object-fit: contain;' />
          </a>
        </noscript>
        <object class='tableauViz' style='width: 100%; height: 100%;'>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='CFG_17190773684660/Dashboard1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/CF/CFG_17190773684660/Dashboard1/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
          <param name='filter' value='publish=yes' />
        </object>
      </div>
    `;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.onload = () => {
      const divElement = document.getElementById('viz1719079596121');
      const vizElement = divElement.getElementsByTagName('object')[0];
      
      // Adjust size to fit viewport
      vizElement.style.width = '100%';
      vizElement.style.height = '100%';
    };
    document.body.appendChild(scriptElement);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <h1 style={{ textAlign: 'center' }}>Tableau Dashboard</h1> */}
      <div id="tableauContainer" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};
export default Analytics;