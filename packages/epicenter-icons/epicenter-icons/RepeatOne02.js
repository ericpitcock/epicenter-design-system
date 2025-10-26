import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 21.5L5.5 19H15C18.5265 19 21.5148 16.3923 22 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.25469 16C2.46381 14.8662 2 13.4872 2 12C2 8.13401 5.13401 5 9 5H17L14 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 9V3L20.5 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RepeatOne02',
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
