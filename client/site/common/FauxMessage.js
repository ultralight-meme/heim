import React from 'react'

import MessageText from '../../lib/ui/message-text'
import FauxNick from './FauxNick'


export default React.createClass({
  propTypes: {
    sender: React.PropTypes.string,
    message: React.PropTypes.string,
    embed: React.PropTypes.string,
    children: React.PropTypes.node,
  },

  render() {
    return (
      <div className="faux-message">
        <div className="line">
          <FauxNick nick={this.props.sender} />
          <div className="content">
            <MessageText className="message" content={this.props.message} />
            {this.props.embed && <div className="embed">
              <div className="wrapper">
                <img className="embed" src={this.props.embed} alt="" />
              </div>
            </div>}
          </div>
        </div>
        {this.props.children}
      </div>
    )
  },
})

