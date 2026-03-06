import React, { memo, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '../components/Grid/grid';

const HomePage = memo(function HomePageComponent () {
    const nav = useNavigate();
    return (
        <div className="container bg-blue">
            <div onClick={() => nav('/about')} className='text-body text-white' style={{ alignItems: 'baseline', fontSize: '32px', paddingTop: '256px', gridColumn: '1 / 2'}}>
              About
            </div>
            <div onClick={() => nav('work')} className='text-body text-white' style={{ alignItems: 'baseline', fontSize: '32px', paddingTop: '256px', gridColumn: '3 / 4'}}>
              Work
            </div>
            <div onClick={() => nav('/contact')} className='text-body text-white' style={{ alignItems: 'baseline', fontSize: '32px', paddingTop: '256px', gridColumn: '5 / 7'}}>
              Contact
            </div>
            <h1 className='text-display text-white' style={{ fontSize: '176px', gridColumn: '1 / 12', paddingTop: '128px', margin: 0, }}>Kevin Duong</h1>
            <h2 className='text-heading text-white' style={{ fontSize: '32px', gridColumn: '1 / 6', paddingTop: '128px', paddingBottom: '256px' }}>Software Engineer Portfolio</h2>

            <div className='text-body text-white' style={{ gridColumn: '1 / 2', fontSize: '16px' }}>Settings</div>
            <div className='text-body text-white' style={{ gridColumn: '3 / 6', fontSize: '16px' }}>Copyright Kevin Duong 2026</div>
        </div>
    )
});

export default HomePage