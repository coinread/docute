import Vue from 'vue'
import InjectedComponents from './components/InjectedComponents'
import hooks from './hooks'

export default class PluginAPI {
  constructor({plugins, store, router, event}) {
    this.plugins = plugins
    this.store = store
    this.router = router
    this.components = {}
    this.hooks = hooks
    this.event = event

    Vue.component(InjectedComponents.name, InjectedComponents)
  }

  hasPlugin(name) {
    return this.plugins.filter(plugin => plugin.name === name).length > 0
  }

  registerComponent(position, component) {
    this.components[position] = this.components[position] || []
    this.components[position].push(component)
    return this
  }

  getComponents(position) {
    return this.components[position] || []
  }
}
