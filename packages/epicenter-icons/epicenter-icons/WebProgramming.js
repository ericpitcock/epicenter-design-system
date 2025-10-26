import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 2.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 6H6.50896M10.491 6H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 9H21', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.4922 13.5H12.5012M12.4922 16.5H12.5012', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.5 13L17.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9 13.5L8.91421 13.4142C8.649 13.149 8.28929 13 7.91421 13C7.13317 13 6.5 13.6332 6.5 14.4142V15.5858C6.5 16.3668 7.13317 17 7.91421 17C8.28929 17 8.649 16.851 8.91421 16.5858L9 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WebProgramming',
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
