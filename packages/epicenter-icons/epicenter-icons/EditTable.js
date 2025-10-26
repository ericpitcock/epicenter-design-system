import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 9L21.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 13L16.5 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 17H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 21.5L12 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21.5 16.5L19.5 14.5L14.5 19.5V21.5H16.5L21.5 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M21.5 12V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EditTable',
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
