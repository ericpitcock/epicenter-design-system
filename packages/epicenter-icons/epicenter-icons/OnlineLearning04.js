import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 6H5C3.89543 6 3 6.89543 3 8V20C3 21.1046 3.89543 22 5 22H12C13.1046 22 14 21.1046 14 20V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 19H8.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 3.47059C15 3.47059 12.9 1.30222 9 2.23152V10.7609C12.9 9.83164 15 12 15 12M15 3.47059C15 3.47059 17.1 1.30222 21 2.23152V10.7609C17.1 9.83164 15 12 15 12M15 3.47059V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'OnlineLearning04',
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
