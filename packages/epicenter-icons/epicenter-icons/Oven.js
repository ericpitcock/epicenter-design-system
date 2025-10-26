import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 5H10', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 8L21 8' })
const _hoisted3 = h('path', { 'd': 'M2 22H22', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 22V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V22', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.0001 5.00195H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 11H7C6.44772 11 6 11.4477 6 12V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V12C18 11.4477 17.5523 11 17 11Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Oven',
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
