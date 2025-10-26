import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 15V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 5L12 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 14L17.5 22', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 14L6.5 22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'BerlinTower',
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
