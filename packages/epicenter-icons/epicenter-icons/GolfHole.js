import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 17C5.6211 17.4391 4 18.4394 4 19.4268C4 20.8479 7.35786 22 11.5 22C15.6421 22 19 20.8479 19 19.4268C19 18.4394 17.3789 17.4314 15 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 12L18.4617 7.44005C19.1317 7.03065 19.0901 6.04426 18.3881 5.69266L12.4609 2.72391C11.7966 2.39117 11.0143 2.87346 11.0131 3.61647L11 12ZM11 12V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GolfHole',
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
