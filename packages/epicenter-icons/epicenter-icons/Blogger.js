import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7H10C8.34315 7 7 8.34315 7 10V14C7 15.6569 8.34315 17 10 17H14C15.6569 17 17 15.6569 17 14V12C17 11.4477 16.5523 11 16 11H15V10C15 8.34315 13.6569 7 12 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 10H11', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 14H14', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Blogger',
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
            _hoisted4
        ])
    }
})
