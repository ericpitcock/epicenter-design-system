import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '5', 'rx': '8', 'ry': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12C4 13.5939 7.31463 14.9032 11.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 11.5V5M4 5V19C4 20.5939 7.31463 21.9032 11.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 15H16M18.5 18H16M18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15H17.5M18.5 18C19.3284 18 20 18.6716 20 19.5C20 20.3284 19.3284 21 18.5 21H17.5M16 18V15M16 18V21M15 21H16M16 15H17.5M16 21H17.5M17.5 15V14M17.5 21V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinDatabase',
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
