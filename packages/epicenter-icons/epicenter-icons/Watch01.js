import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '7' })
const _hoisted2 = h('path', { 'd': 'M12 10V12.005L13 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 6L15.3787 3.51493C15.1561 2.6246 14.3562 2 13.4384 2L10.5616 2C9.64382 2 8.84385 2.6246 8.62127 3.51493L8 6' })
const _hoisted4 = h('path', { 'd': 'M16 18L15.3787 20.4851C15.1561 21.3754 14.3562 22 13.4384 22L10.5616 22C9.64382 22 8.84385 21.3754 8.62127 20.4851L8 18' })

export default defineComponent({
    name: 'Watch01',
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
