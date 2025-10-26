import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 16V10.5C16 9.39543 15.1046 8.5 14 8.5H10C8.89543 8.5 8 9.39543 8 10.5V16H10V22H14V16H16Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Man',
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
