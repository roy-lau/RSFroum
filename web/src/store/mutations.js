import * as types from './mutation-types'

// mutation 是同步函数
const matutaions = {
  [types.SET_SEACH_PAGE_STATE](state, SeachPageState) { state.SeachPageState = SeachPageState },
  [types.SET_LOADING](state, setLoading) { state.setLoading = setLoading },

  // [types.SET_SINGER](state, singer) {
  //   state.singer = singer
  // },
  // [types.SET_PLAYING_STATE](state, flag) {
  //   state.playing = flag
  // },
  // [types.SET_FULL_SCREEN](state, flag) {
  //   state.fullScreen = flag
  // },
  // [types.SET_PLAYLIST](state, list) {
  //   state.playList = list
  // },
  // [types.SET_SEQUENCE_LIST](state, list) {
  //   state.sequenceList = list
  // },
  // [types.SET_PLAY_MODE](state, mode) {
  //   state.mode = mode
  // },
  // [types.SET_CURRENT_INDEX](state, flag) {
  //   state.currentIndex = flag
  // }
}

export default matutaions
