import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 16.5V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 9H6.00019C4.89554 9 4.00008 9.89554 4.00018 11.0002L4.00102 20.0002C4.00112 21.1047 4.89652 22 6.00102 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SquareLock02',
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
