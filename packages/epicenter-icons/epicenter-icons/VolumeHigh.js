import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 8.5H4C2.89543 8.5 2 9.39543 2 10.5V13.5C2 14.6046 2.89543 15.5 4 15.5H7L14 20V4L7 8.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VolumeHigh',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
