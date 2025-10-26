import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 13C6 9.68629 8.68629 7 12 7C15.3137 7 18 9.68629 18 13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 8V5.52063C15.5 3.57624 13.933 2 12 2C10.067 2 8.5 3.57624 8.5 5.52063V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.9998 13H12.0088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 19V22M12 22H20M12 22H4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SecuredNetwork',
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
