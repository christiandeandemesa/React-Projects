import React, {Component} from 'react';
import styles from './BlockComponent.module.css';
    
class Main extends Component {
    render() {
        return (
        <div className={styles.redBox}>{this.props.children}</div>
        );
    }
}
    
export default Main;