import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 9V6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5V9M19 14.5V11C19 9.89543 18.1046 9 17 9H5.00019C3.89554 9 3.00008 9.89554 3.00018 11.0002L3.00102 20.0002C3.00112 21.1047 3.89652 22 5.00102 22H11', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 18.5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SquareLockMinus01',
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
