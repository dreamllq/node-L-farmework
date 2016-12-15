/**
 * Created by lvlq on 16/11/21.
 */
import React from 'react'
import {render} from 'react-dom'
import {SearchBar, Button, NavBar, Icon} from 'antd-mobile';
import dva, {connect} from 'dva'
import {Router, Route} from 'dva/router';

const app = dva();

app.model({
    namespace: 'btn',
    state: '1234'
});

const Btn = connect((state)=>({btn: state.btn}))(({btn, dispatch})=>(
    <div>
        <Button data-seed="logId">{btn}</Button>
    </div>
));

app.router(({history})=>(
    <Router history={ history }>
        <Route path="/" component={Btn}/>
    </Router>
));

app.start("#root");
