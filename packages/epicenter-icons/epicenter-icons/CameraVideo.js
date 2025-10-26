import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 15.5V9.5C17 8.39543 16.1046 7.5 15 7.5H4C2.89543 7.5 2 8.39543 2 9.5V15.5C2 16.6046 2.89543 17.5 4 17.5H15C16.1046 17.5 17 16.6046 17 15.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 10.5L20.5528 8.72367C21.2177 8.39124 22 8.87474 22 9.61811V15.3819C22 16.1253 21.2177 16.6088 20.5528 16.2764L17 14.5001', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '12', 'cy': '5', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '7', 'cy': '4.5', 'r': '3', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CameraVideo',
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
            _hoisted5
        ])
    }
})
