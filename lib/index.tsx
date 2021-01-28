import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
};

ReactDOM.render(<div>
    <Icon name="page" onClick={fn}/>
</div>, document.querySelector('#root'));