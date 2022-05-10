import { SetupContext } from '@vue/composition-api'

type Props = {
  symbol: string
}

export const HelloKitty= (props: Props, ctx: SetupContext) => {
  return () => <h1>Hello Kitty {props.symbol}</h1>
}

HelloKitty.props = ['symbol']
