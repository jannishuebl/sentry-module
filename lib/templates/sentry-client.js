import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function (ctx, inject) {
    let dsn = context.app.$env.SENTRY_PUBLIC_DSN;
  // Inject Raven to the context as $raven
  ctx.$raven = Raven
  inject('raven', Raven)

  Raven
    .config(dsn, <%= serialize(options.config) %>)
    .addPlugin(RavenVue, Vue)
    .install()
}
