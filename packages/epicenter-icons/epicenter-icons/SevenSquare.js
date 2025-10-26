import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.49707 7H15.0811C15.3108 7 15.4971 7.18625 15.4971 7.41599C15.4971 7.47144 15.486 7.52632 15.4645 7.57742L11.4971 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.99707 21.5L19.9971 21.5C21.1016 21.5 21.9971 20.6046 21.9971 19.5V4.5C21.9971 3.39543 21.1016 2.5 19.9971 2.5H4.99707C3.8925 2.5 2.99707 3.39543 2.99707 4.5V19.5C2.99707 20.6046 3.8925 21.5 4.99707 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SevenSquare',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
