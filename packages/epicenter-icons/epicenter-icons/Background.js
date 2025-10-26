import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 20.5L20.5 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.698 15.8021L15.8058 2.69434', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.3058 8.19434L8.198 21.3021', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 21.5L21.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2.5 10.5L10.5 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Background',
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
