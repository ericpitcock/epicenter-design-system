import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 11V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V11M8 8H16', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 13H9.5V18H14.5V13Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.0302 6.5C21.8897 7.89188 20.9043 11 18.5243 11C15.7119 11 16.015 7.9346 16.015 6C16.015 3.79086 14.2174 2 12 2C9.7826 2 7.98504 3.79086 7.98504 6C7.98504 7.9346 8.28808 11 5.47569 11C3.09553 11 2.11029 7.89156 3.97008 6.49982', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Apron',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
