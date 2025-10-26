import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.625 14C9.375 16.9167 7.5 19.8333 5 21H16.875C16.875 21 18.75 21 20 19.8333', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 14H4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 8.5C18 5.46243 15.5376 3 12.5 3C9.46243 3 7 5.46243 7 8.5C7 11.5376 9.46243 14 12.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pound',
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
