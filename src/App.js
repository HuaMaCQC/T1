import React from 'react';
import AppHeader from './components/AppHeader';
import styles from './App.css';
import AppMenu from './components/AppMenu';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="menu">
          <AppMenu />

        </div>
        <div className="main">

          <div className="header">
            <transition name="slide-fade-up">
              <AppHeader />
            </transition>
          </div>
          <div className="view">
            {/* <AppView /> */}
          </div>
        </div>



        <style jsx>{styles}</style>
      </div>
    );
  }
}

