import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 6H5C3.34315 6 2 7.34315 2 9V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 14L12 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 3L12 6L16 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TvIssue',
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
