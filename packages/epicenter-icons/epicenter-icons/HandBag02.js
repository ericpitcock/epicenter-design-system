import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 8L21.5105 18.5758C21.7686 20.3831 20.3662 22 18.5406 22H5.45901C3.63336 22 2.23098 20.383 2.48916 18.5757L3.99998 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 15H11C10.4477 15 9.99998 15.4477 9.99998 16V17C9.99998 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17V16C14 15.4477 13.5523 15 13 15Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 15C16.5 15 20 14 20 8H3.99998C3.99998 14 7.49998 15 7.49998 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 15V8', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M6.49998 8.5C7.06989 4.49202 9.31598 2 12 2C14.684 2 16.9301 4.49202 17.5 8.5' })

export default defineComponent({
    name: 'HandBag02',
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
