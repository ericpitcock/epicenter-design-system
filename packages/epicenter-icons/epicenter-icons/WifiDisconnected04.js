import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21L2.99097 8.56937C2.41868 7.77973 2.49034 6.67942 3.25132 6.06954C5.64792 4.14883 8.6898 3 12 3C15.3102 3 18.3521 4.14883 20.7487 6.06954C21.5097 6.67942 21.5813 7.77973 21.009 8.56938L18.5227 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.0002 15L15.0002 21M21.0002 21L15.0002 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiDisconnected04',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
