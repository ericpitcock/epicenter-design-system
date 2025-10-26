import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '9', 'r': '2.5' })
const _hoisted2 = h('path', { 'd': 'M9 17L18 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 12L14 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 5L10 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.2565 12.5446C17.5862 13.7271 16.8028 14.8433 15.917 15.878C14.5359 17.5095 12.5986 19.9317 12.0097 22C11.5295 20.3107 9.93051 18.1911 8.84193 16.8195C7.85602 15.5031 6.40188 14.0036 5.64625 12.2964C3.54607 7.65487 6.8014 1.99238 11.9927 2.00003C17.3276 1.98532 20.5359 7.85105 18.2565 12.5446Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoogleMaps',
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
            _hoisted5
        ])
    }
})
