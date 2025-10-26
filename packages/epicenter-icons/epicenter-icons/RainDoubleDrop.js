import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 13.2C15 16.9555 12.0899 20 8.5 20C4.91015 20 2 16.9555 2 13.2C2 8.89233 6.46057 5.40816 7.99147 4.33922C8.30089 4.12317 8.69911 4.12317 9.00853 4.33922C10.5394 5.40816 15 8.89233 15 13.2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 5.0804C14.3889 4.77069 14.7301 4.52181 14.9884 4.34133C15.2978 4.12521 15.6991 4.12317 16.0085 4.33922C17.5394 5.40816 22 8.89233 22 13.2C22 16.9555 19.0899 20 15.5 20C15.3318 20 15.165 19.9933 15 19.9802', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RainDoubleDrop',
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
