import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.7487 7.06954C18.3521 5.14883 15.3102 4 12 4C8.6898 4 5.64792 5.14883 3.25132 7.06954C2.49034 7.67942 2.41868 8.77973 2.99097 9.56937L11.1903 20.8828C11.5895 21.4337 12.4105 21.4337 12.8097 20.8828L21.009 9.56937C21.5813 8.77973 21.5097 7.67942 20.7487 7.06954Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiNoSignal',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
