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
      return dataArray.map((data) => {
        return (
          <div className="purchase-options summary">
            <p>Purchase Options</p>
            <a href={data[1]} className="display_name">{data[0]}</a>
            {data[2].map((format) => {
              return (
                <div>
                  <p className="purchase-options">{format[0]} {format[2].toUpperCase()}: {format[3]} </p>
                </div>
              )
            })}
          </div>)
        })
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
        return <div>
          <p>Streaming On:</p>
          {data.subscription_web_sources.map((paid) => {
            return <p>{paid.display_name}</p>
          })}
        </div>
      } else {
        return null
      }
    }

    render() {
      const purchaseSiteData = this.state.purchaseSiteData
      let { summary } = this.props
      summary = summary[0]

      if (summary ) {
        let purchaseSiteData = this.getPurchaseSiteData(summary)
        let displayPurchaseSources = this.displayPurchaseData(purchaseSiteData)
        let displaySubscriptionData = this.getSubscriptionData(summary)

        return(
          <div>
            <p className="summary-title summary">{ summary.title }</p>
            <img className="poster" src={ summary.poster_120x171 } />
            {displaySubscriptionData}
            {displayPurchaseSources}
            <p className="summary-rating summary">{ summary.rating}</p>
            <p className="summary-release summary">{ summary.release_date}</p>
            <p className="summary-overview summary">{ summary.overview}</p>
            <div>
              <NavLink className='return-to-main' to='./'>Return to Main Menu</NavLink>
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
  /* <p className="purchase-web-sources summary">Purchase Here:{this.purchase.display_name}</p> */
  /* <p className="purchase-web-sources summary">Purchase Here: {summary.purchase_web_sources.map(src => <p className="purchase-source summary">{src.display_name} </p> )}</p> */

  /* <p className="streaming-on summary">Streaming on: {summary.subscription_web_sources.map(src =>  <p className="streaming-services summary"> {src.display_name} </p>)}</p> */

  /* <p className="purchase-web-sources summary">Purchase Here: {summary.purchase_web_sources.map(src => <p className="purchase-source summary">{src.display_name} </p> )}</p> */

  {/* <article className="streaming-on summary">Streaming on: {summary.subscription_web_sources.map(src =>  <p className="streaming-services summary"> {src.display_name} </p>)}</article> */}


  /* <p> {summary.subscription_web_sources.map(src =>  <p> {src.display_name} </p>)} </p> */
