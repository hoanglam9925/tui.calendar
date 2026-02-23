import 'preact';

declare module 'preact' {
  namespace JSX {
    interface Element extends VNode<any> {}
  }
}
