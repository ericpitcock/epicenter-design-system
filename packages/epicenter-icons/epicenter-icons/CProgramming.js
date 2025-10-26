import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5L18.5 21.5C20.1569 21.5 21.5 20.1569 21.5 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 9.17157C13.8987 7.60948 11.3024 7.60948 9.70101 9.17157C8.09966 10.7337 8.09966 13.2663 9.70101 14.8284C11.3024 16.3905 13.8987 16.3905 15.5 14.8284', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CProgramming',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
