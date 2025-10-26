import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 4L5.5 2L2 4V8L5.5 10L9 8V4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 4L18.5 2L15 4V8L18.5 10L22 8V4Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 16L12 14L8.5 16V20L12 22L15.5 20V16Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.5 6H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 12V17C2 18.1046 2.89543 19 4 19H5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M22 12V17C22 18.1046 21.1046 19 20 19H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M9 4L5.5 6M5.5 6L2 4M5.5 6V10', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M22 4L18.5 6M18.5 6L15 4M18.5 6V10', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M15.5 16L12 18M12 18L8.5 16M12 18V22', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blockchain06',
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
