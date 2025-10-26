import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 14V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V11M13 21H6C4.34315 21 3 19.6569 3 18V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 3H14L15 4.5H9L10 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '13', 'r': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '19', 'cy': '19', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoogleLens',
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
