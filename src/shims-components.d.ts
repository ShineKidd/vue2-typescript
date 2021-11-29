declare module 'vue' {
  export interface GlobalComponents {
    HelloWorld: typeof import('./components/HelloWorld.vue')['default'];
  }
}

export {};
