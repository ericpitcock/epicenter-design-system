import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 18.5L4 21M17.5 18.5L20 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 15H9.00896M14.991 15H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 9.00002C16.9991 11.5 13.4991 12 12 12C10.5009 12 7.00089 11.5 5 9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.6109 3H9.38842C7.43305 3 5.76429 4.41367 5.44284 6.34243L4.12328 14.2602C3.77379 16.3572 5.12841 18.3592 7.23549 18.642C8.68531 18.8367 10.3835 19 12 19C13.6164 19 15.3145 18.8367 16.7643 18.6421C18.8715 18.3592 20.2261 16.3571 19.8765 14.26L18.5564 6.3422C18.2349 4.41354 16.5662 3 14.6109 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Metro',
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
