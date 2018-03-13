// actions方便做异步操作
import * as types from './mutation-types'



/*==============================*/
// import { playMode } from 'common/js/config'
// import { shuffle } from 'common/js/util'

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

// // 选择播放（点击音乐列表）
// export const selectPlay = function({ commit, state }, { list, index }) {
//   commit(types.SET_SEQUENCE_LIST, list) // 提交顺序播放列表
//   if (state.mode === playMode.random) { // 如果播放模式为随机播放
//     let randomList = shuffle(list)
//     commit(types.SET_PLAYLIST, randomList) // 提交随机播放列表
//     index = findIndex(randomList, list[index])
//   } else { // 顺序播放
//     commit(types.SET_PLAYLIST, list)
//   }
//   commit(types.SET_CURRENT_INDEX, index) // 当前播放音乐的索引
//   commit(types.SET_FULL_SCREEN, true) // 是否显示播放器
//   commit(types.SET_PLAYING_STATE, true) // 播放状态
// }
// // 随机播放
// export const randomPlay = function({ commit }, { list }) {
//   commit(types.SET_PLAY_MODE, playMode.random) // 设置随机播放模式
//   commit(types.SET_SEQUENCE_LIST, list) // 提交顺序播放列表
//   let randomList = shuffle(list)
//   commit(types.SET_PLAYLIST, randomList) // 设置随机播放列表
//   commit(types.SET_CURRENT_INDEX, 0) // 从零开始播放
//   commit(types.SET_FULL_SCREEN, true) // 是否显示播放器
//   commit(types.SET_PLAYING_STATE, true) // 播放状态
// }
