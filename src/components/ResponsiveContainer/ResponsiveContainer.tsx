import React from 'react';
import "./styles.scss"

interface MyComponentProps {
  items: Array<object>;
}

const ResponsiveContainer = (props: MyComponentProps) => (
  // <div>
  //   {JSON.stringify(props.items)}
  // </div>
<div className="wrapper">
  <div className="left">
    <article className="card">
      <header>
        <h2>Cross Browser Testing</h2>
      </header>

      <div className="image"><img src="https://i.imgur.com/dV3ywkg.png"/></div>

      <div className="content">
        <p>Browser & app testing cloud to perform both exploratory and automated testing across 3000+ different browsers, real devices and operating systems. </p>
      </div>

    </article>
  </div>
  <div className="right">
  <article className="card">
      <header>
        <h2>Cross Browser Testing</h2>
      </header>

      <div className="image"><img src="https://i.imgur.com/dV3ywkg.png"/></div>

      <div className="content">
        <p>Browser & app testing cloud to perform both exploratory and automated testing across 3000+ different browsers, real devices and operating systems. </p>
      </div>

    </article>
  </div>
</div>

);


export default ResponsiveContainer;
