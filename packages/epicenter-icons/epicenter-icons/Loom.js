import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z' })
const _hoisted2 = h('path', { 'd': 'M12 9V4M12 15V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 12L20 12M9 12L4 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5996 10.5L18.9297 8M9.40341 13.5L5.07328 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 14.5976L16 18.9277M10.5 9.40145L8 5.07133', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M13.5 9.40239L16 5.07227M10.5 14.5985L8 18.9287', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M14.5996 13.5L18.9297 16M9.40341 10.5L5.07328 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Loom',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
