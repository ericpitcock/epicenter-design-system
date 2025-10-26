import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.18548 9.21764C9.10606 6.26079 14.8938 6.26079 19.8144 9.21764M8.82448 15.6185C10.8774 14.7938 13.1225 14.7938 15.1754 15.6185L21.009 7.56937C21.5813 6.77973 21.5097 5.67942 20.7487 5.06954C18.3521 3.14883 15.3102 2 12 2C8.6898 2 5.64792 3.14883 3.25132 5.06954C2.49034 5.67942 2.41868 6.77973 2.99097 7.56937L12 20M6.38421 12.2514C9.95294 10.5829 14.0469 10.5829 17.6157 12.2514', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 18.5L17 21L22 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiConnected01',
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
