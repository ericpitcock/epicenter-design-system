import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 6.5L14 4V10.5M7.77778 8L7 8.5H4C2.89543 8.5 2 9.39543 2 10.5V13.5C2 14.6046 2.89543 15.5 4 15.5H7L14 20V14.2222', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 9C17.6254 9.81968 18 10.8634 18 12C18 12.7142 17.8521 13.3917 17.587 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.4583 21.556 14.8249 20.7809 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 22L2 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VolumeOff',
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
            _hoisted4
        ])
    }
})
