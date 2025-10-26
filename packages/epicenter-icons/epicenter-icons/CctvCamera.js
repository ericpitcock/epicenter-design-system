import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 13.5V16.5C15 18.1569 16.3431 19.5 18 19.5H21', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.6914 7.5H13.7004', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 7.5L21.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5537 2.5H2L2.8817 6.02682C2.95636 6.32546 3.16441 6.57307 3.44571 6.69809L7.17216 8.35429C7.3841 8.44849 7.55672 8.61344 7.66044 8.82089L9.72361 12.9472C9.893 13.286 10.2393 13.5 10.618 13.5H16.5537C19.5616 13.5 22 11.0376 22 8C22 4.96243 19.5616 2.5 16.5537 2.5Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 17.5V21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5 7C4.38625 7.54932 4 8.61151 4 9.50001C4 11.1569 5.34315 12.5 7 12.5C7.76835 12.5 8.46924 12.2112 9 11.7361', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CctvCamera',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
