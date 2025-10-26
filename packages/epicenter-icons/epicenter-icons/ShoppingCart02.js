import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2H4.5L7 16L6 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 20H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6.89348 15.2576C6.48347 15.3164 6.19877 15.6965 6.2576 16.1065C6.31643 16.5165 6.6965 16.8012 7.10652 16.7424L6.89348 15.2576ZM18.5 14.35L18.6065 15.0924C18.9316 15.0458 19.1885 14.7931 19.2405 14.4688L18.5 14.35ZM21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25V5.75ZM7.10652 16.7424L18.6065 15.0924L18.3935 13.6076L6.89348 15.2576L7.10652 16.7424ZM19.2405 14.4688L20.7405 5.1188L19.2595 4.8812L17.7595 14.2312L19.2405 14.4688ZM5 5.75H20V4.25H5V5.75ZM20 5.75H21V4.25H20V5.75Z', 'fill': 'currentColor' })

export default defineComponent({
    name: 'ShoppingCart02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
