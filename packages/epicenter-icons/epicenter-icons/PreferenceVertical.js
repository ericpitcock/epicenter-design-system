import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 8C3.22386 8 3 8.22386 3 8.5L3 10.5C3 10.7761 3.22386 11 3.5 11L6.5 11C6.77614 11 7 10.7761 7 10.5V8.5C7 8.22386 6.77614 8 6.5 8L3.5 8Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 13C10.2239 13 10 13.2239 10 13.5L10 15.5C10 15.7761 10.2239 16 10.5 16L13.5 16C13.7761 16 14 15.7761 14 15.5V13.5C14 13.2239 13.7761 13 13.5 13L10.5 13Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 10C17.2239 10 17 10.2239 17 10.5L17 12.5C17 12.7761 17.2239 13 17.5 13L20.5 13C20.7761 13 21 12.7761 21 12.5V10.5C21 10.2239 20.7761 10 20.5 10L17.5 10Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 3.5V5.5M5 11V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19 3.5V7.5M19 13V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 3.5V13M12 18.5V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PreferenceVertical',
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
