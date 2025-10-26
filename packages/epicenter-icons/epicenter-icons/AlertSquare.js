import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.50006 19.5C2.50006 20.6046 3.39549 21.5 4.50006 21.5H19.5001C20.6046 21.5 21.5001 20.6046 21.5001 19.5V4.49998C21.5001 3.39542 20.6046 2.49998 19.5001 2.49998H4.50006C3.39549 2.49998 2.50006 3.39542 2.50006 4.49998V19.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7.99999V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15.9883V15.9983', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlertSquare',
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
