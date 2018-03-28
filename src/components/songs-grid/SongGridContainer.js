import {connect} from 'react-redux';

import SongGridComponent from './SongGridComponent';

const mapStateToProps = (state) => {
  return {
    songList: state.songs.songList,
    isLoading: state.songs.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const SongGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongGridComponent)

export default SongGridContainer;