import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M1.99976 7L1.99976 17C1.99976 17.8284 2.67133 18.5 3.49976 18.5L20.4998 18.5C21.3282 18.5 21.9998 17.8284 21.9998 17V7C21.9998 6.17157 21.3282 5.5 20.4998 5.5L3.49976 5.5C2.67133 5.5 1.99976 6.17157 1.99976 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M1.99976 10L1.99976 14L2.99976 13.5L2.99976 10.5L1.99976 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartPhoneLandscape02',
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
