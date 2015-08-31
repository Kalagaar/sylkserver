
var VideoBox = React.createClass({
    componentDidMount: function() {
        var localStream = this.props.call.getLocalStreams()[0];
        var localVideoElement = React.findDOMNode(this.refs.localVideo);
        var remoteStream = this.props.call.getRemoteStreams()[0];
        var remoteVideoElement = React.findDOMNode(this.refs.callVideo);
        sylkrtc.attachMediaStream(localVideoElement, localStream);
        sylkrtc.attachMediaStream(remoteVideoElement, remoteStream);
    },

    hangupClicked: function(event) {
        event.preventDefault();
        this.props.call.terminate();
    },

    render: function() {
        return (
            <div className="video-box" style={{overflow: 'hidden'}}>
                <div style={{position: 'relative'}}>
                    <video id="call-video" ref="callVideo" autoPlay width="100%"/>
                    <video id="local-video" ref="localVideo" autoPlay width="200px" style={{position: 'absolute', left: '8px', top: '8px'}}/>
                </div>
                <br/>
                <div>
                    <button type="button" className="btn btn-danger btn-block" onClick={this.hangupClicked}>
                        Hangup
                    </button>
                </div>
            </div>
        );
    },
});