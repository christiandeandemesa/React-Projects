import React, {Component} from 'react';
import styles from './BlockComponent.module.css';
    
class Header extends Component {
    render() {
        return (
        <div className={styles.greenBox}></div>
        );
    }
}
    
export default Header;