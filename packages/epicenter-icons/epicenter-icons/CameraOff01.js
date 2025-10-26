import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.71586 9.71484C8.6787 10.4376 8 11.639 8 12.999C8 15.2081 9.79086 16.999 12 16.999C13.36 16.999 14.5614 16.3203 15.2841 15.2831', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9.5V9.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20.5 20.5H4C2.89543 20.5 2 19.6046 2 18.5V8.5C2 7.39543 2.89543 6.5 4 6.5H6.5M22 18V8.5C22 7.39543 21.1046 6.5 20 6.5H16.5L14.9453 4.16795C14.6671 3.75065 14.1988 3.5 13.6972 3.5H10.3028C9.80125 3.5 9.3329 3.75065 9.0547 4.16795L8.7 4.7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CameraOff01',
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
