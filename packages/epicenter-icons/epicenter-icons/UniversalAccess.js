import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 6.5C12.8284 6.5 13.5 5.82843 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5C10.5 5.82843 11.1716 6.5 12 6.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 7C16.4537 8.23719 14.336 9 12 9C9.66404 9 7.54628 8.23719 6 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 14.5L14.5 20.5M13.5 14.5V9M13.5 14.5H10.5M9.5 20.5L10.5 14.5M10.5 14.5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UniversalAccess',
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
