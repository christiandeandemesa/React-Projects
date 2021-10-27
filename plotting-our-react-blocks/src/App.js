import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement'

function App(){
    return(
        <div className="App">
            <div className='topBox'>
                <Header />
            </div>
            <div class='bottomBox'>
                <div class='leftBox'>
                    <Navigation />
                </div>
                <div class='rightBox'>
                    <Main>
                        <div class='topRedBox'>
                            <SubContents />
                            <SubContents />
                            <SubContents />
                        </div>
                        <div class='bottomRedBox'>
                            <Advertisement />
                        </div>
                    </Main>
                </div>
            </div>
        </div>
    );
}

export default App;

