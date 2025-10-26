import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 15L6 22M15 15L18 22M12 15L12 22M7.5 19H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 15C15.866 15 19 11.866 19 8H5C5 11.866 8.13401 15 12 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M19 10H20M5 10H4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BbqGrill',
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
