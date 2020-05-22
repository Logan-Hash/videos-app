import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
import youtube from './api/youtube'
import VideoList  from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'

class App extends Component {

  state = { videos: [] , selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('avenger')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
          params: {
            q: term
          }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }
  onSelectedVideo = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitHandler={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
