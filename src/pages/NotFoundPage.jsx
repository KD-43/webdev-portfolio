import React from 'react';

function NotFoundPage () {
    return (
        <div className="page-wrapper container flex-column fs-1 text-lGrey pt-5">
            <h1 className='page-heading text-display fs-4 mu-0 pb-1'>Error 404</h1>
            <div className="line-group w-75 mu-0">
              <hr className="line-item mu-0" />
              <span className='line-subgroup'>
                <hr className="line-item mu-0" />
                <hr className="line-item mu-0" />
                <hr className="line-item mu-0" />
              </span>
            </div>

            <div className='page-body pt-5'>
              <h1 className="text-heading fs-3 mu-0">Uh oh!</h1>
              <div className="page-body_message pt-2">
                <p className="text-body fs-2">
                  The page you're looking for either doesn't exist or there's been a major mistake [impossible]!
                  <br />
                  <br />
                  Please consider reflecting on the personal actions YOU can take to mitigate such errors.
                  <br />
                  <br />
                  KDUONG INDUSTRIES, INC. thanks you for your time and consideration.
                </p>
              </div>
            </div>
        </div>
    )
}

export default NotFoundPage