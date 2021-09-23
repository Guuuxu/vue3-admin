import Cookies from 'js-cookie'

const state = {
  device: 'desktop',
  sidebar: {
    open: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.open = !state.sidebar.open
    state.sidebar.withoutAnimation = false
    if (state.sidebar.open) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  CLOSE_SIDEBAR(state, withoutAnimation) {
    state.sidebar.open = false
    state.sidebar.withoutAnimation = withoutAnimation
    Cookies.set('sidebarStatus', '')
  }
}

const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
