import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 15H17.5C19.1569 15 20.5 13.6569 20.5 12V6C20.5 4.34315 19.1569 3 17.5 3H3.5V15ZM3.5 15V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 7.5L16.5 9L15 10.5M9 7.5L7.5 9L9 10.5M12.5 6.5L11.5 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ProgrammingFlag',
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
