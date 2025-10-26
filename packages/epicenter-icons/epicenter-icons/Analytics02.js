import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 18V12M12 18L12 9M17 18V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5 5.5C21.5 7.15685 20.1569 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 3.84315 16.8431 2.5 18.5 2.5C20.1569 2.5 21.5 3.84315 21.5 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.9474 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V11.0526', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Analytics02',
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
