import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 4V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 22C19 18.134 15.866 15 12 15C8.13401 15 5 18.134 5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 7.5H9.50998M14.49 7.5H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 6C5.5 4.89543 6.39543 4 7.5 4H16.5C17.6046 4 18.5 4.89543 18.5 6V8C18.5 10.2091 16.7091 12 14.5 12H9.5C7.29086 12 5.5 10.2091 5.5 8V6Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Robot01',
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
