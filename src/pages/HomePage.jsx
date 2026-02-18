import React, { memo, useState } from 'react';
import Grid from '../components/Grid/grid';

const HomePage = memo(function HomePageComponent () {
    return (
        <div className="page-wrapper container flex-column fs-1 text-lGrey pt-5">
            <h1 className='page-heading text-display fs-4 mu-0 pb-1'>Disclaimer</h1>
            <div className="line-group w-75 mu-0">
              <hr className="line-item mu-0" />
              <span className='line-subgroup'>
                <hr className="line-item mu-0" />
                <hr className="line-item mu-0" />
                <hr className="line-item mu-0" />
              </span>
            </div>

            <div className='page-body pt-5'>
              <h1 className="text-heading fs-3 mu-0">Greetings Initiate,</h1>
              <div className="page-body_message pt-2">
                <p className="text-body fs-2">
                  We're elated that you've chosen to partake in the visitation of KDUONG Industries!
                  <br />
                  <br />
                  This platform will be undergoing some changes soon! Pre-production has begun for KDUONG Industries' renovation.
                  <br />
                  <br />
                  We can't wait for you to see what we have in store for you!
                </p>
              </div>
            </div>
        </div>
    )
});

export default HomePage