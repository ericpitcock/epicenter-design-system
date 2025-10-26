import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5L5 5C3.89543 5 3 5.89543 3 7L3 17C3 18.1046 3.89543 19 5 19H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 12L21 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CapProjecting',
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
