import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 9.28466C8.66667 7.2854 10.3333 7.87052 12 9.33333C13.6667 10.7961 15.3333 11.3813 17 9.382M7 14.618C8.66667 12.6187 10.3333 13.2039 12 14.6667C13.6667 16.1295 15.3333 16.7146 17 14.7153', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ApproximatelyEqualCircle',
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
