import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 16.5H8.5M9 10.5H12M12 10.5H15M12 10.5V7.5M12 10.5V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.50043C21.5 3.39589 20.6046 2.50046 19.5001 2.50043L4.50005 2.50005C3.39546 2.50002 2.5 3.39546 2.5 4.50005V19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PlusMinusSquare01',
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
