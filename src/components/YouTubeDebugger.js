import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        } 

    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    handleBitClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate : 12
            }
        })
    }

    render() {
        return(
            <div>
                <button className="resolution" onClick={this.handleResClick}>Resolution</button>
                <button className="bitrate" onClick={this.handleBitClick}>Bitrate</button>
            </div>
        )
    }

}
