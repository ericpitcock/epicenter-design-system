import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 17.5H8M8 20.5H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 17.5H22M22 20.5H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 12H10.5V16H13.5V12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 7L13.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 16H9C8.44772 16 8 16.4477 8 17V21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21V17C16 16.4477 15.5523 16 15 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GasPipe',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
