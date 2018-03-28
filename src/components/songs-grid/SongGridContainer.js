import {connect} from 'react-redux';

import SongGridComponent from './SongGridComponent';

const mapStateToProps = (state) => {
  return {
    songsList: state.songs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const SongGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongGridComponent)

export default SongGridContainer;