import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 9.28466C8.66667 7.2854 10.3333 7.87052 12 9.33333C13.6667 10.7961 15.3333 11.3813 17 9.382M7 14.618C8.66667 12.6187 10.3333 13.2039 12 14.6667C13.6667 16.1295 15.3333 16.7146 17 14.7153', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.50043C21.5 3.39589 20.6046 2.50046 19.5001 2.50043L4.50005 2.50005C3.39546 2.50002 2.5 3.39546 2.5 4.50005V19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ApproximatelyEqualSquare',
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
