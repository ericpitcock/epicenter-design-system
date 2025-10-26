import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 11.5H5.5M10.5 11.5H9.5M6.5 7.5H5.5M10.5 7.5H9.5M5.5 15.5H6.5M9.5 15.5H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 15.5H17M18 11.5H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 8.49997V4.5C13.5 3.39543 12.6046 2.5 11.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V21.5L13.5 21.5M13.5 8.49997H19.5C20.6046 8.49997 21.5 9.3954 21.5 10.5V21.5L13.5 21.5M13.5 8.49997V21.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Office',
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
