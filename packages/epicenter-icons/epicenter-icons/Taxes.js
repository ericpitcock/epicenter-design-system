import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 15L14 21.9959', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.75 16.4982C15.1642 16.4982 15.5 16.1628 15.5 15.7491C15.5 15.3354 15.1642 15 14.75 15C14.3358 15 14 15.3354 14 15.7491C14 16.1628 14.3358 16.4982 14.75 16.4982Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.25 21.9948C20.6642 21.9948 21 21.6594 21 21.2457C21 20.832 20.6642 20.4966 20.25 20.4966C19.8358 20.4966 19.5 20.832 19.5 21.2457C19.5 21.6594 19.8358 21.9948 20.25 21.9948Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.9961 7H12.0051', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M5 9.99512V18.9998M9 9.99512V18.9998', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M11 19H3L3.0003 21.9999H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M3 7L12 2L21 7V9.99502H3V7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Taxes',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
