import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 15.5C10.5 14.6716 11.1476 14 11.9464 14H12.0536C12.8524 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8524 17 12.0536 17H11.9464C11.1476 17 10.5 16.3284 10.5 15.5Z' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '15.5', 'r': '6.5' })
const _hoisted3 = h('path', { 'd': 'M9 9.5L5.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 9.5L18.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 2L14 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12.5 9L9.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Medal06',
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
