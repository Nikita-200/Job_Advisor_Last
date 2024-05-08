//import React from 'react'
//import './RecommendedJobs.css'
//const RecommendedJobs = () => {
//  return (
//    <div className="jobs-container">
//  <h2 className="section__title">Recommended jobs, just for you!</h2>
//  <div className="catalog__list">
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/oregon/oregon.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//            <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/texas/texas.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/new-york/new-york.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/maryland/maryland.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//            <h3 className="card__title truncate">Kochi,Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">clerk</h5>
//
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.500000 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="card">
//      <div className="card__preview">
//        <img
//          src="https://d308dt1i66cme4.cloudfront.net/content/images/facility/default/default.jpg"
//          className="card__preview__image"
//          alt="Orlando, Florida"
//          title="Orlando, Florida"
//        />
//        {/* <div className="card__tag">Exclusive</div> */}
//        <div className="card__actions">
//          <div className="card__whishlist">
//            <div className="card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                />
//              </svg>
//            </div>
//          </div>
//          <div className="card__mail">
//            <div className="card__mail_icon card__action__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                />
//              </svg>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="card__body">
//        <div className="card__line">
//          <div className="card__line__icon">
//            <svg
//              height="28px"
//              width="28px"
//              xmlns="http://www.w3.org/2000/svg"
//              fill="none"
//              viewBox="0 0 24 24"
//              stroke-width="1.5"
//              stroke="currentColor"
//            >
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//              />
//              <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//              />
//            </svg>
//          </div>
//          <div>
//          <h3 className="card__title truncate">Kochi, Kerala</h3>
//            <h5 className="card__title truncate">Indian Railway</h5>
//          </div>
//        </div>
//        <h5 className="card__subtitle">Clerk</h5>
//        <div className="card__options">
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 36 Hrs/Wk </span>
//          </div>
//          <div className="card__option">
//            <div className="card__option__icon">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke-width="1.5"
//                stroke="currentColor"
//                height="20px"
//                width="20px"
//              >
//                <path
//                  stroke-linecap="round"
//                  stroke-linejoin="round"
//                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
//                />
//              </svg>
//            </div>
//            <span className="card__option__icon_label"> 12hr days </span>
//          </div>
//        </div>
//        <div className="card__footer">
//          <div className="card__flex">
//            <div className="card__cost">
//              Rs.5 LPA
//
//            </div>
//            <a className="card__button" href="#"> Apply </a>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
//</div>
//  )
//}
//
//export default RecommendedJobs



import './RecommendedJobs.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RecommendedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchRecommendedJobs();
    }, []);

    const fetchRecommendedJobs = async () => {
        const user_id = sessionStorage.getItem("user_id");
        try {
            const response = await fetch(`http://127.0.0.1:5000/companyjobs/${user_id}`, { headers: { id: user_id } });
            const data = await response.json();

            setJobs(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const navigate = useNavigate();

    const handleApply = async (jobId) => {
        const user_id = sessionStorage.getItem("user_id");
        console.log(user_id)
        console.log(jobId)
            try {


        navigate(`/applyjob/${jobId}`);
        } catch (error) {
            console.error('Error applying for job:', error);
        }
    };


    return (
        <div>
            <div className="job-card-container">
                {jobs.map(job => (
                    <div className="job-card" key={job.jobid}>
                        <h3>{job.job}</h3>
                        <p>Description: {job.description}</p>
                        <p>Qualification: {job.qualification}</p>
                        <p>Location: {job.location}</p>
                        <p>Salary: {job.salary}</p>
                        <p>JobID: {job.jobid}</p>
                        <button className='login-button' onClick={() => handleApply(job.jobid)}>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedJobs;

