import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 22H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 13V22M21 13V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 8V22M16.5 8V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 13H7M22 13H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6.5 8H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 22V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M10.5 12V12.5M13.5 12V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M10.5 16V16.5M13.5 16V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M12 8V4.99332M12 4.99332V2.01278C12 2.00628 12.0061 2.00151 12.0124 2.00308L16 2.99169V4.99332H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'University',
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
            _hoisted7,
            _hoisted8,
            _hoisted9
        ])
    }
})
