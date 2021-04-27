
import React from 'react';
import YouTube from 'react-youtube';
import { Container, Row} from "reactstrap";



export default function youtube(props)  {

    function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    const opts = {
        // height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return( 
        <Container>
            <Row>
                <YouTube videoId="L4-uBHMcHus" opts={opts} onReady={_onReady} />
            </Row>
        </Container>
        
    
  )

}