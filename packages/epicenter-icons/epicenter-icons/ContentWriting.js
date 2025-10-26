import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 10V4.5C21 3.39543 20.1046 2.5 19 2.5H4C2.89543 2.5 2 3.39543 2 4.5V17.5C2 18.6046 2.89543 19.5 4 19.5H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 8.5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 19.0265L19.2367 12.7898C19.6231 12.4034 20.2496 12.4034 20.6359 12.7898L21.7102 13.8641C22.0966 14.2504 22.0966 14.8769 21.7102 15.2633L15.4735 21.5H13V19.0265Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 5.5H5.50998M9.49002 5.5H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ContentWriting',
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
