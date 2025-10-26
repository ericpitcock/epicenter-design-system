import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C18 22 19.5 17.49 19.5 12C19.5 6.50998 18 2 12 2C5.99993 2 4.5 6.50996 4.5 12C4.5 17.49 5.99993 22 12 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9883 6.83887L11.9883 11.7589', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.99609 7.8586C10.9801 6.8386 11.5801 5.9386 12.0361 6.00329C12.4201 6.0001 12.7801 6.5986 14.0041 7.8586', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.0041 11.1406C13.0201 12.1606 12.4201 13.0606 11.9641 12.9959C11.5801 12.9991 11.2201 12.4006 9.99609 11.1406', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MouseScroll02',
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
