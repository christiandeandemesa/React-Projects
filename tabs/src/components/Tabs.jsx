import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = props => {

    const [tabs, setTabs] = useState([]);
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    const clickHandler = (e, index) => {
        e.preventDefault();
        setTabs(index);
        setHasBeenClicked(true);
    };

    return (
        <div className = {styles.flexBox}>
            <div className = {styles.topBox}>
                <div className = {styles.tab} onClick = {e => clickHandler(e, 1)} value={tabs}>Tab 1</div>
                <div className = {styles.tab} onClick = {e => clickHandler(e, 2)} value={tabs}>Tab 2</div>
                <div className = {styles.tab} onClick = {e => clickHandler(e, 3)} value={tabs}>Tab 3</div>
            </div>
            <div className = {styles.botBox}>
                {hasBeenClicked === false && <p>There is not content showing here.</p>}
                {tabs === 1 && <p>Tab 1 content is showing here.</p>}
                {tabs === 2 && <p>Tab 2 content is showing here.</p>}
                {tabs === 3 && <p>Tab 3 content is showing here.</p>}
            </div>
        </div>
    );

};

export default Tabs;