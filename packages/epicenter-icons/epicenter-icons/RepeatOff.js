import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 12H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.7453 8C21.5362 9.13383 22 10.5128 22 12C22 15.866 18.866 19 15 19H5.5L8.5 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.25469 16C2.46381 14.8662 2 13.4872 2 12C2 8.13401 5.13401 5 9 5H18.5L15.5 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RepeatOff',
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
