import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 18V21C16 21 19 16 19 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '19.5', 'cy': '14.5', 'r': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.4209 18 14.1731 17.2779 15.5 16.0903', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SchoolBell01',
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
