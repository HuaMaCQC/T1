import React from 'react';
import styles from './AppHeader.css';

export default class AppHeader extends React.Component {

    render() {
        return (
            <div className="header">
                <h1 >this is header</h1>
                <style jsx>{styles}</style>
            </div>
        );
    }
}