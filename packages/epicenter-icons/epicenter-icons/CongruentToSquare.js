import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 12.5H17M7 16H17M7 9.50001C8 7.63648 10.3333 7.54353 12 8.99999M17 8.49503C16 10.3586 13.6667 10.4515 12 8.99505', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.50043C21.5 3.39589 20.6046 2.50046 19.5001 2.50043L4.50005 2.50005C3.39546 2.50002 2.5 3.39546 2.5 4.50005V19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CongruentToSquare',
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
