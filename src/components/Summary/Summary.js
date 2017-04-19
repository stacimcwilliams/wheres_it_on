import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Summary.css';

class Summary extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  displayPurchaseData(dataArray) {
    if(dataArray !== 0) {
      return (<div className="source-container">
        <p className="header">Purchase Options</p>
        { dataArray.map((data) => {
          return (
            <div>
              <a href={data[1]} className="purchase-link">{data[0]}</a>
              {data[2].map((format) => {
                return (
                  <div>
                    <p>{format[0]} {format[2].toUpperCase()}: {format[3]} </p>
                  </div>
                )
              })}
            </div>
          )})}
        </div>)
      } else {
        return null
      }
    }

    getPurchaseSiteData(data) {
      return data.purchase_web_sources.map((source) => {
        let formatsArray = source.formats.map((format) => {
          return [format.format, format.pre_order, format.type, format.price]
        })
        return [source.display_name, source.link, formatsArray]
      })
    }

    getSubscriptionData(data) {
      if(data.subscription_web_sources.length !== 0) {
        return <div className="now-streaming">
          <p className="header">Streaming On:</p>
          {data.subscription_web_sources.map((paid) => {
            return <p>{paid.display_name}</p>
          })}
        </div>
      } else {
        return null
      }
    }

    render() {
      console.log();
      const { purchaseSiteData } = this.state
      let { summary } = this.props
      summary = summary[0]

      if (summary ) {
        let purchaseSiteData = this.getPurchaseSiteData(summary)
        let displayPurchaseSources = this.displayPurchaseData(purchaseSiteData)
        let displaySubscriptionData = this.getSubscriptionData(summary)

        return(
          <div className="movie-container">
            <p className="summary-title">{ summary.title }</p>
            <img className="poster-card" src={ summary.poster_120x171 } />
            <p className="summary-rating summary">{ summary.rating}</p>
            <p className="summary-release summary">{ summary.release_date}</p>
            <p className="summary-overview summary">{ summary.overview}</p>
            <div className="paid-subscription-sources">
              {displaySubscriptionData}
              {displayPurchaseSources}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <NavLink className='return-to-main' to='./'>Return to Main Menu</NavLink>
          </div>
        )
      }
    }
  }

  export default Summary
