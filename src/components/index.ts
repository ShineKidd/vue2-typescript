import type { VueConstructor } from 'vue';
import HelloWorld from './HelloWorld.vue';

export default function install(Vue: VueConstructor): void {
  Vue.component('HelloWorld', HelloWorld);
}
