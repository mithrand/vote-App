import React from 'react';
import cssModule from 'react-css-modules';
import styles from './ExampleComponent.css';

class ExampleComponent extends React.Component {
  render = () => (
    <div>
      ExampleComponent
    </div>
  );
}

export default cssModule(ExampleComponent, styles);
