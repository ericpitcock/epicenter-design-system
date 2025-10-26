import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 14C19.3765 14.807 19 15.8548 19 17C19 18.1452 19.3765 19.193 20 20', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 7.5C13.5 9.433 15.067 11 17 11C18.933 11 20.5 9.433 20.5 7.5C20.5 5.567 18.933 4 17 4C15.067 4 13.5 5.567 13.5 7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 7.5C3.5 9.433 5.067 11 7 11C8.933 11 10.5 9.433 10.5 7.5C10.5 5.567 8.933 4 7 4C5.067 4 3.5 5.567 3.5 7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 20H5C3.89543 20 3 19.1046 3 18V16.0011C3 14.8966 3.89535 14.0012 4.99986 14.0011L21 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 7.5C13.5 7.5 12.9279 7 12 7C11.0721 7 10.5 7.5 10.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Knowledge02',
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
