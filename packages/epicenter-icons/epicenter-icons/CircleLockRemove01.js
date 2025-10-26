import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 22C6.55227 22 3.5 18.866 3.5 15C3.5 11.134 6.70027 8 10.648 8C13.4128 8 15.811 9.53725 17 11.7866', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 9V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 22L17 18.5M17 18.5L20.5 15M17 18.5L13.5 15M17 18.5L20.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleLockRemove01',
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
