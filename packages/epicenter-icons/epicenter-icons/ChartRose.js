import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 13C21 6.92487 16.0751 2 10 2V13H21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 13C19 17.9706 14.9706 22 10 22V13H19Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 13C3 16.866 6.13401 20 10 20V13H3Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 13C5 10.2386 7.23858 8 10 8V13H5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartRose',
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
