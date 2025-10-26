import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 18V11.5C7 10.6716 6.32843 10 5.5 10C4.67157 10 4 10.6716 4 11.5V16C4 17.1046 4.89543 18 6 18H7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 16V11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5V18H18C19.1046 18 20 17.1046 20 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 14H7V18H17V14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 22H9.5V18H14.5V22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 22H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18.5 10V4C18.5 2.89543 17.6046 2 16.5 2H7.5C6.39543 2 5.5 2.89543 5.5 4V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SeatSelector',
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
