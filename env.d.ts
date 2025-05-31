/// <reference types="vite/client" />

import type { Composer } from 'vue-i18n'
import type { Router } from 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: Composer<A, B, C, D, E>['t']
    $d: Composer<A, B, C, D, E>['d']
    $tm: Composer<A, B, C, D, E>['tm']
    $rt: Composer<A, B, C, D, E>['rt']
    $router: Router
    $route: RouteLocationNormalized
    $i18n: BaseFormatProps
  }
}
