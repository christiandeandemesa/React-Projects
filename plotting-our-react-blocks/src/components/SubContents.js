import React, {Component} from 'react';
import styles from './BlockComponent.module.css';
    
class SubContents extends Component {
    render() {
        return (
        <div className={styles.yellowBox}></div>
        );
    }
}
    
export default SubContents;